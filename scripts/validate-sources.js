#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.join(__dirname, "..");
const QURAN_DATA_FILE = path.join(ROOT, "assets", "data", "quran-uthmani.json");
const LEGACY_QURAN_DIR = path.join(ROOT, "Quran");
const ORIGINAL_QURAN_DIR = path.join(ROOT, "original", "Quran");
const EXPECTED_VERSE_COUNT = 6236;
const AYAH_COUNTS = [
  7, 286, 200, 176, 120, 165, 206, 75, 129, 109, 123, 111, 43, 52, 99, 128, 111, 110, 98, 135,
  112, 78, 118, 64, 77, 227, 93, 88, 69, 60, 34, 30, 73, 54, 45, 83, 182, 88, 75, 85, 54, 53,
  89, 59, 37, 35, 38, 29, 18, 45, 60, 49, 62, 55, 78, 96, 29, 22, 24, 13, 14, 11, 11, 18,
  12, 12, 30, 52, 52, 44, 28, 28, 20, 56, 40, 31, 50, 40, 46, 42, 29, 19, 36, 25, 22, 17,
  19, 26, 30, 20, 15, 21, 11, 8, 8, 19, 5, 8, 8, 11, 11, 8, 3, 9, 5, 4, 7, 3, 6, 3, 5, 4,
  5, 6,
];
const CANARY_TEXT = "فَطَلِّقُوهُنَّ";

const failures = [];

function fail(message) {
  failures.push(message);
}

function readText(file) {
  return fs.readFileSync(file, "utf8");
}

function isLocalImage(src) {
  return Boolean(src) && !/^(https?:)?\/\//i.test(src) && /\.(jpe?g|png|gif|webp)$/i.test(src);
}

function resolveOriginalImage(src, surahId) {
  return path.normalize(path.join(ORIGINAL_QURAN_DIR, String(surahId), src));
}

function validateQuranText() {
  const payload = JSON.parse(readText(QURAN_DATA_FILE));
  if (payload.verse_count !== EXPECTED_VERSE_COUNT) {
    fail(`Quran text has ${payload.verse_count} verses; expected ${EXPECTED_VERSE_COUNT}.`);
  }

  for (let surahId = 1; surahId <= 114; surahId += 1) {
    const verses = payload.chapters?.[String(surahId)] || [];
    const expectedCount = AYAH_COUNTS[surahId - 1];
    if (verses.length !== expectedCount) {
      fail(`Surah ${surahId} has ${verses.length} Quran text entries; expected ${expectedCount}.`);
      continue;
    }

    verses.forEach((verse, index) => {
      const expectedKey = `${surahId}:${index + 1}`;
      if (verse.key !== expectedKey) {
        fail(`Quran text key mismatch: found ${verse.key}; expected ${expectedKey}.`);
      }
      if (!verse.text) {
        fail(`Quran text is empty for ${expectedKey}.`);
      }
    });
  }

  const talaqOne = payload.chapters?.["65"]?.[0]?.text || "";
  if (!talaqOne.includes(CANARY_TEXT)) {
    fail(`Surah 65:1 canary text is missing: ${CANARY_TEXT}`);
  }
}

function validateLegacySources() {
  for (let surahId = 1; surahId <= 114; surahId += 1) {
    const legacyPage = path.join(LEGACY_QURAN_DIR, String(surahId), "index.html");
    const originalPage = path.join(ORIGINAL_QURAN_DIR, String(surahId), "index.html");

    if (!fs.existsSync(legacyPage)) {
      fail(`Missing cleaned legacy page: Quran/${surahId}/index.html`);
      continue;
    }
    if (!fs.existsSync(originalPage)) {
      fail(`Missing original source page: original/Quran/${surahId}/index.html`);
      continue;
    }

    const legacyHtml = readText(legacyPage);
    const originalHtml = readText(originalPage);
    if (legacyHtml !== originalHtml) {
      fail(`Source HTML differs between Quran/${surahId}/index.html and original/Quran/${surahId}/index.html.`);
    }

    validateVerseRanges(surahId, legacyHtml);
    validateFootnotes(surahId, legacyHtml);
    validateOriginalImages(surahId, originalHtml);
  }
}

function validateVerseRanges(surahId, html) {
  const ayahCount = AYAH_COUNTS[surahId - 1];
  for (const match of html.matchAll(/\[(\d+)(?:\s*[-–]\s*(\d+))?\]/g)) {
    const start = Number(match[1]);
    const end = Number(match[2] || match[1]);
    if (start < 1 || end < start || end > ayahCount) {
      fail(`Invalid verse range ${match[0]} in Surah ${surahId}; ayah count is ${ayahCount}.`);
    }
  }
}

function validateFootnotes(surahId, html) {
  const definitions = new Set([...html.matchAll(/<div\s+id=["']?(sdfootnote\d+)/gi)].map((match) => match[1].toLowerCase()));
  const references = new Set([...html.matchAll(/href=["']?#(sdfootnote\d+)sym/gi)].map((match) => match[1].toLowerCase()));

  references.forEach((reference) => {
    if (!definitions.has(reference)) {
      fail(`Missing footnote body for ${reference} in Surah ${surahId}.`);
    }
  });
}

function validateOriginalImages(surahId, html) {
  for (const match of html.matchAll(/<img\b[^>]*\bsrc\s*=\s*["']?([^"'\s>]+)/gi)) {
    const src = match[1];
    if (!isLocalImage(src)) {
      continue;
    }

    const imagePath = resolveOriginalImage(src, surahId);
    const relativePath = path.relative(ORIGINAL_QURAN_DIR, imagePath);
    if (relativePath.startsWith("..") || path.isAbsolute(relativePath)) {
      fail(`Original image path escapes the source archive in Surah ${surahId}: ${src}`);
      continue;
    }
    if (!fs.existsSync(imagePath)) {
      fail(`Missing original image for Surah ${surahId}: ${src}`);
    }
  }
}

validateQuranText();
validateLegacySources();

if (failures.length) {
  console.error(`Source validation failed with ${failures.length} issue(s):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log("Source validation passed.");
