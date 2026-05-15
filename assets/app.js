const SURAHS = [
  { id: 1, title: "Al Fatiha (The Opening)" },
  { id: 2, title: "Al Baqarah (The Cow)" },
  { id: 3, title: "Al i Imran (The Family of Imran)" },
  { id: 4, title: "An Nisa (The Women)" },
  { id: 5, title: "Al Maidah (The Table Spread)" },
  { id: 6, title: "Al Anaam (The Cattle)" },
  { id: 7, title: "Al Aaraf (The Heights)" },
  { id: 8, title: "Al Anfal (The Spoils of War)" },
  { id: 9, title: "At Taubah (The Repentance)" },
  { id: 10, title: "Yunus (Jonah)" },
  { id: 11, title: "Hud" },
  { id: 12, title: "Yusuf (Joseph)" },
  { id: 13, title: "Ar Ra'ad (The Thunder)" },
  { id: 14, title: "Ibrahim (Abraham)" },
  { id: 15, title: "Al Hijr (The Rocky Tract)" },
  { id: 16, title: "An Nahl (The Honey Bee)" },
  { id: 17, title: "Al Isra (The Night Journey), also known as Bani Israil (The Children of Israel)" },
  { id: 18, title: "Al Kahf (The Cave)" },
  { id: 19, title: "Maryam (Mary)" },
  { id: 20, title: "Ta Ha" },
  { id: 21, title: "Al Anbiyaa (The Prophets)" },
  { id: 22, title: "Al Hajj (The Hajj)" },
  { id: 23, title: "Al Muminoon (The Believers)" },
  { id: 24, title: "An Noor (The Light)" },
  { id: 25, title: "Al Furqan (The Criterion)" },
  { id: 26, title: "Ash Shuaraa (The Poets)" },
  { id: 27, title: "An Naml (The Ant)" },
  { id: 28, title: "Al Qasas (The Story)" },
  { id: 29, title: "Al Ankabut (The Spider)" },
  { id: 30, title: "Ar Rum (The Romans)" },
  { id: 31, title: "Luqman" },
  { id: 32, title: "As Sajdah (The Prostration)" },
  { id: 33, title: "Al Ahzab (The Clans)" },
  { id: 34, title: "Saba (The Sabaeans)" },
  { id: 35, title: "Fatir (The Originator), also known as Al Malaika (The Angels)" },
  { id: 36, title: "Ya Sin" },
  { id: 37, title: "As Saaffat (Those who set the ranks)" },
  { id: 38, title: "Saad" },
  { id: 39, title: "Az Zumar (The Troops)" },
  { id: 40, title: "Al Mu'min (The Believer), also known as Al Ghafir (The Forgiver)" },
  { id: 41, title: "Ha Mim As Sajdah, also known as Fussilat (Explained in Detail)" },
  { id: 42, title: "Ash Shura (The Consultation)" },
  { id: 43, title: "Az Zukhruf (The Ornaments of Gold)" },
  { id: 44, title: "Ad Dukhan (The Smoke)" },
  { id: 45, title: "At Jathiya (The Kneeling)" },
  { id: 46, title: "Al Ahqaf (The Wind Curved Sand Dunes)" },
  { id: 47, title: "Muhammad (The Praised One)" },
  { id: 48, title: "Al Fath (The Victory)" },
  { id: 49, title: "Al Hujaraat (The Private Apartments)" },
  { id: 50, title: "Qaf" },
  { id: 51, title: "Adh Dhariyat (The Winds)" },
  { id: 52, title: "At Tur (The Mount)" },
  { id: 53, title: "An Najm (The Star)" },
  { id: 54, title: "Al Qamar (The Moon)" },
  { id: 55, title: "Ar Rahman (The Most Merciful)" },
  { id: 56, title: "Al Waqia (The Inevitable Event)" },
  { id: 57, title: "Al Hadid (The Iron)" },
  { id: 58, title: "Al Mujadilah (The Pleading Woman)" },
  { id: 59, title: "Al Hashr (The Banishment)" },
  { id: 60, title: "Al Mumtahina (The Woman Under Questioning)" },
  { id: 61, title: "As Saff (The Ranks)" },
  { id: 62, title: "Al Jumuah (The Friday Congregation)" },
  { id: 63, title: "Al Munafiqoon (The Hypocrites)" },
  { id: 64, title: "At Taghabun (Mutual Loss and Gain)" },
  { id: 65, title: "At Talaq (Divorce)" },
  { id: 66, title: "At Tahrim (The Prohibition)" },
  { id: 67, title: "Al Mulk (The Kingdom)" },
  { id: 68, title: "Al Qalam (The Pen)" },
  { id: 69, title: "Al Haaqqa (The Inevitable)" },
  { id: 70, title: "Al Maarij (The Ascending Steps)" },
  { id: 71, title: "Nuh (Noah)" },
  { id: 72, title: "Al Jinn (The Jinn)" },
  { id: 73, title: "Al Muzzammil (The One Who is Covered Up)" },
  { id: 74, title: "Al Muddaththir (The Cloaked One)" },
  { id: 75, title: "Al Qiyama (The Resurrection)" },
  { id: 76, title: "Al Insan (Man), also known as Ad Dahr (Time)" },
  { id: 77, title: "Al Mursalat (The Winds Which Are Sent)" },
  { id: 78, title: "An Naba (The News)" },
  { id: 79, title: "Naziat (Those Who Tear Out)" },
  { id: 80, title: "Abasa (He Frowned)" },
  { id: 81, title: "At Takwir (The Folding Up)" },
  { id: 82, title: "Al Infitar (The Cleaving)" },
  { id: 83, title: "Al Mutaffifin (Those Who Deal in Fraud)" },
  { id: 84, title: "Inshiqaq (The Splitting)" },
  { id: 85, title: "Al Burooj (The Constellations)" },
  { id: 86, title: "Al Tariq (The Morning Star)" },
  { id: 87, title: "Al Ala (The Most High)" },
  { id: 88, title: "Al Ghashiya (The Overwhelming Event)" },
  { id: 89, title: "Al Fajr (The Dawn)" },
  { id: 90, title: "Al Balad (The City)" },
  { id: 91, title: "As Shams (The Sun)" },
  { id: 92, title: "Al Lail (The Night)" },
  { id: 93, title: "Ad Dhuha (The Morning Light)" },
  { id: 94, title: "Al Inshirah (The Opening Up)" },
  { id: 95, title: "At Tin (The Fig)" },
  { id: 96, title: "Al Alaq (The Clot)" },
  { id: 97, title: "Al Qadr (Power)" },
  { id: 98, title: "Al Bayyina (The Clear Evidence)" },
  { id: 99, title: "Az Zalzala (The Earthquake)" },
  { id: 100, title: "Al Adiyat (Those That Run)" },
  { id: 101, title: "Al Qaria (The Disaster)" },
  { id: 102, title: "At Takathur (The Mutual Rivalry)" },
  { id: 103, title: "Al Asr (The Declining Day, The Time)" },
  { id: 104, title: "Al Humaza (The One Who Slanders)" },
  { id: 105, title: "Al Fil (The Elephant)" },
  { id: 106, title: "Quraish" },
  { id: 107, title: "Al Ma'un (The Small Kindnesses)" },
  { id: 108, title: "Al Kauthar (The Abundance)" },
  { id: 109, title: "Al Kafirun (The Disbelievers)" },
  { id: 110, title: "An Nasr (The Help)" },
  { id: 111, title: "Al Lahab (The Flame)" },
  { id: 112, title: "Al Ikhlas (The Purity)" },
  { id: 113, title: "Al Falaq (The Daybreak)" },
  { id: 114, title: "An Nas (Mankind)" },
];

const BISMILLAH_TEXT = "بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ";
const ARABIC_DIGITS = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
const CHECKPOINT_KEY = "tafhim-reader-checkpoint-v1";

const els = {
  homeView: document.querySelector("#homeView"),
  readerView: document.querySelector("#readerView"),
  continuePanel: document.querySelector("#continuePanel"),
  continueMeta: document.querySelector("#continueMeta"),
  search: document.querySelector("#surahSearch"),
  surahList: document.querySelector("#surahList"),
  surahCount: document.querySelector("#surahCount"),
  surahKicker: document.querySelector("#surahKicker"),
  surahTitle: document.querySelector("#surahTitle"),
  surahSummary: document.querySelector("#surahSummary"),
  historyPanel: document.querySelector("#historyPanel"),
  readPanel: document.querySelector("#readPanel"),
  historyTab: document.querySelector("#historyTab"),
  readTab: document.querySelector("#readTab"),
  prevSurah: document.querySelector("#prevSurah"),
  nextSurah: document.querySelector("#nextSurah"),
  noteDialog: document.querySelector("#noteDialog"),
  closeNote: document.querySelector("#closeNote"),
  noteKicker: document.querySelector("#noteKicker"),
  noteTitle: document.querySelector("#noteTitle"),
  noteBody: document.querySelector("#noteBody"),
  statusToast: document.querySelector("#statusToast"),
};

const state = {
  cache: new Map(),
  currentSurah: null,
  currentTab: "read",
  quranText: null,
  quranTextPromise: null,
  loadToken: 0,
  toastTimer: null,
  checkpoint: null,
  checkpointSaveTimer: null,
  restoreCheckpointOnNextRender: false,
  hasRouted: false,
};

function splitTitle(title) {
  const parenCount = (title.match(/\(/g) || []).length;
  if (parenCount !== 1 || !title.endsWith(")")) {
    return { name: title, meaning: "" };
  }

  const match = title.match(/^(.+?) \((.+)\)$/);
  return {
    name: match ? match[1] : title,
    meaning: match ? match[2] : "",
  };
}

function cleanText(value) {
  return (value || "").replace(/\s+/g, " ").trim();
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function isLocalImage(src) {
  return Boolean(src) && !/^(https?:)?\/\//i.test(src) && /\.(jpe?g|png|gif|webp)$/i.test(src);
}

function resolveAssetPath(src, surahId) {
  if (!isLocalImage(src)) {
    return "";
  }

  const parts = `Quran/${surahId}/${src}`.split("/");
  const normalized = [];

  for (const part of parts) {
    if (!part || part === ".") {
      continue;
    }
    if (part === "..") {
      normalized.pop();
    } else {
      normalized.push(part);
    }
  }

  return normalized.join("/");
}

function parseHash() {
  const hash = window.location.hash.replace(/^#\/?/, "");
  if (!hash) {
    return { view: "home" };
  }

  const [path, query = ""] = hash.split("?");
  const parts = path.split("/").filter(Boolean);
  const params = new URLSearchParams(query);

  if (parts[0] === "surah") {
    const id = Number(parts[1]);
    if (Number.isInteger(id) && id >= 1 && id <= 114) {
      return { view: "surah", id, tab: params.get("tab") === "history" ? "history" : "read" };
    }
  }

  return { view: "home" };
}

function normalizeCheckpoint(value) {
  const surahId = Number(value?.surahId);
  if (!Number.isInteger(surahId) || surahId < 1 || surahId > 114) {
    return null;
  }

  const rawAyahStart = Number(value?.ayahStart);
  const hasAyahStart = Number.isInteger(rawAyahStart) && rawAyahStart > 0;
  const rawAyahEnd = Number(value?.ayahEnd);
  const hasAyahEnd = Number.isInteger(rawAyahEnd) && rawAyahEnd >= rawAyahStart;
  const scrollY = Number(value?.scrollY);
  const updatedAt = Number(value?.updatedAt);

  return {
    surahId,
    ayahStart: hasAyahStart ? rawAyahStart : null,
    ayahEnd: hasAyahStart ? (hasAyahEnd ? rawAyahEnd : rawAyahStart) : null,
    scrollY: Number.isFinite(scrollY) && scrollY >= 0 ? Math.round(scrollY) : 0,
    updatedAt: Number.isFinite(updatedAt) ? updatedAt : Date.now(),
  };
}

function readStoredCheckpoint() {
  try {
    return normalizeCheckpoint(JSON.parse(window.localStorage.getItem(CHECKPOINT_KEY) || "null"));
  } catch (error) {
    return null;
  }
}

function writeStoredCheckpoint(value) {
  const checkpoint = normalizeCheckpoint(value);
  if (!checkpoint) {
    return null;
  }

  try {
    window.localStorage.setItem(CHECKPOINT_KEY, JSON.stringify(checkpoint));
  } catch (error) {
    return null;
  }

  state.checkpoint = checkpoint;
  renderContinueCheckpoint();
  return checkpoint;
}

function formatCheckpointLocation(checkpoint) {
  if (!checkpoint?.ayahStart) {
    return "Reading";
  }

  if (checkpoint.ayahStart === checkpoint.ayahEnd) {
    return `Ayah ${checkpoint.ayahStart}`;
  }

  return `Ayahs ${checkpoint.ayahStart}-${checkpoint.ayahEnd}`;
}

function renderContinueCheckpoint() {
  if (!els.continuePanel || !els.continueMeta) {
    return;
  }

  const checkpoint = state.checkpoint || readStoredCheckpoint();
  state.checkpoint = checkpoint;

  if (!checkpoint) {
    els.continuePanel.hidden = true;
    return;
  }

  const title = SURAHS[checkpoint.surahId - 1]?.title || `Surah ${checkpoint.surahId}`;
  els.continueMeta.textContent = `${title} - ${formatCheckpointLocation(checkpoint)}`;
  els.continuePanel.hidden = false;
}

function getReadingAnchorOffset() {
  const topbarHeight = document.querySelector(".topbar")?.offsetHeight || 0;
  const tabsHeight = document.querySelector(".segment-tabs")?.offsetHeight || 0;
  return topbarHeight + tabsHeight + 18;
}

function getActiveReadingCard() {
  const cards = Array.from(els.readPanel.querySelectorAll("[data-checkpoint-item]"));
  if (!cards.length) {
    return null;
  }

  const anchorY = getReadingAnchorOffset();
  let active = cards[0];

  for (const card of cards) {
    const rect = card.getBoundingClientRect();
    if (rect.top <= anchorY) {
      active = card;
    }
    if (rect.bottom >= anchorY) {
      break;
    }
  }

  return active;
}

function saveReadingCheckpointFromViewport() {
  if (!state.currentSurah || state.currentTab !== "read" || els.readerView.hidden || els.readPanel.hidden) {
    return null;
  }

  const card = getActiveReadingCard();
  const ayahStart = Number(card?.dataset.ayahStart);
  const ayahEnd = Number(card?.dataset.ayahEnd || ayahStart);

  return writeStoredCheckpoint({
    surahId: state.currentSurah.id,
    ayahStart: Number.isInteger(ayahStart) && ayahStart > 0 ? ayahStart : null,
    ayahEnd: Number.isInteger(ayahEnd) && ayahEnd >= ayahStart ? ayahEnd : null,
    scrollY: window.scrollY,
    updatedAt: Date.now(),
  });
}

function scheduleCheckpointSave() {
  if (state.checkpointSaveTimer) {
    return;
  }

  state.checkpointSaveTimer = window.setTimeout(() => {
    state.checkpointSaveTimer = null;
    saveReadingCheckpointFromViewport();
  }, 350);
}

function getCheckpointTarget(checkpoint) {
  if (!checkpoint?.ayahStart) {
    return null;
  }

  return els.readPanel.querySelector(`[data-checkpoint-item][data-ayah-start="${checkpoint.ayahStart}"]`);
}

function restoreCheckpointPosition(checkpoint) {
  window.requestAnimationFrame(() => {
    const target = getCheckpointTarget(checkpoint);

    if (target) {
      const top = Math.max(0, window.scrollY + target.getBoundingClientRect().top - getReadingAnchorOffset());
      window.scrollTo({ top, behavior: "auto" });
    } else if (Number.isFinite(checkpoint?.scrollY)) {
      window.scrollTo({ top: checkpoint.scrollY, behavior: "auto" });
    }

    window.setTimeout(saveReadingCheckpointFromViewport, 0);
  });
}

function continueReading() {
  const checkpoint = readStoredCheckpoint();
  if (!checkpoint) {
    renderContinueCheckpoint();
    showToast("No reading checkpoint has been saved yet.");
    return;
  }

  state.checkpoint = checkpoint;
  state.restoreCheckpointOnNextRender = true;
  const routeState = parseHash();

  if (routeState.view === "surah" && routeState.id === checkpoint.surahId && routeState.tab === "read") {
    state.restoreCheckpointOnNextRender = false;
    restoreCheckpointPosition(checkpoint);
    return;
  }

  goToSurah(checkpoint.surahId, "read");
}

function goHome() {
  window.location.hash = "#/";
}

function goToSurah(id, tab = "read") {
  window.location.hash = `#/surah/${id}?tab=${tab}`;
}

function renderSurahList() {
  const query = cleanText(els.search.value).toLowerCase();
  const filtered = SURAHS.filter((surah) => {
    const haystack = `${surah.id} ${surah.title}`.toLowerCase();
    return haystack.includes(query);
  });

  els.surahCount.textContent = `${filtered.length} of 114 surahs`;
  els.surahList.innerHTML = filtered.map((surah) => {
    const { name, meaning } = splitTitle(surah.title);
    return `
      <article class="surah-card">
        <div class="surah-number">${surah.id}</div>
        <div>
          <h2>${escapeHtml(name)}</h2>
          ${meaning ? `<p>${escapeHtml(meaning)}</p>` : ""}
        </div>
        <div class="surah-actions">
          <button type="button" data-open-surah="${surah.id}" data-open-tab="read">Read</button>
          <button type="button" data-open-surah="${surah.id}" data-open-tab="history">History</button>
        </div>
      </article>
    `;
  }).join("");

  if (!filtered.length) {
    els.surahList.innerHTML = `<p class="reader-message">No surahs match that search.</p>`;
  }
}

function renderMessage(container, message) {
  container.innerHTML = `<p class="reader-message">${escapeHtml(message)}</p>`;
}

async function route() {
  saveReadingCheckpointFromViewport();
  const routeState = parseHash();
  const isInitialRoute = !state.hasRouted;
  state.hasRouted = true;

  if (routeState.view === "home") {
    state.currentSurah = null;
    els.homeView.hidden = false;
    els.readerView.hidden = true;
    document.title = "Tafhim Reader";
    renderContinueCheckpoint();
    return;
  }

  await showSurah(routeState.id, routeState.tab, { restoreCheckpoint: isInitialRoute });
}

async function showSurah(id, tab, options = {}) {
  const token = ++state.loadToken;
  state.currentTab = tab;
  if (options.restoreCheckpoint) {
    state.restoreCheckpointOnNextRender = true;
  }
  els.homeView.hidden = true;
  els.readerView.hidden = false;
  setTabs(tab);

  const meta = SURAHS[id - 1];
  els.surahKicker.textContent = `Surah ${id}`;
  els.surahTitle.textContent = meta.title;
  els.surahSummary.textContent = "Loading the legacy text and footnotes.";
  renderMessage(els.historyPanel, "Loading history.");
  renderMessage(els.readPanel, "Loading reading.");
  document.title = `${meta.title} | Tafhim Reader`;
  updateNavButtons(id);

  try {
    const data = await loadSurah(id);
    if (token !== state.loadToken) {
      return;
    }
    state.currentSurah = data;
    renderSurah(data, tab);
  } catch (error) {
    if (token !== state.loadToken) {
      return;
    }
    els.surahSummary.textContent = "This surah could not be loaded.";
    renderMessage(els.historyPanel, "Unable to load the history section.");
    renderMessage(els.readPanel, error.message || "Unable to load the reading section.");
    showToast("The surah page could not be loaded.");
  }
}

async function loadSurah(id) {
  if (state.cache.has(id)) {
    return state.cache.get(id);
  }

  const [response, quranText] = await Promise.all([
    fetch(`Quran/${id}/index.html`),
    loadQuranText(),
  ]);

  if (!response.ok) {
    throw new Error(`Could not load Quran/${id}/index.html.`);
  }

  const html = await response.text();
  const parsed = parseLegacyPage(html, id, quranText);
  state.cache.set(id, parsed);
  return parsed;
}

async function loadQuranText() {
  if (state.quranText) {
    return state.quranText;
  }

  if (!state.quranTextPromise) {
    state.quranTextPromise = fetch("assets/data/quran-uthmani.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Could not load bundled Quran text.");
        }
        return response.json();
      })
      .then((payload) => {
        if (!payload?.chapters || payload.verse_count !== 6236) {
          throw new Error("Bundled Quran text is incomplete.");
        }
        state.quranText = payload;
        return payload;
      });
  }

  return state.quranTextPromise;
}

function parseLegacyPage(html, id, quranText) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  doc.querySelectorAll("script, style").forEach((node) => node.remove());

  const meta = SURAHS[id - 1];
  const pageTitle = cleanText(doc.querySelector("title")?.textContent.split(" - Sayyid")[0]) || meta.title;
  const bodyChildren = Array.from(doc.body?.children || []);
  const footnotes = extractFootnotes(doc);
  const stopIndex = findFootnoteStart(bodyChildren);
  const introStart = findIntroStart(bodyChildren, stopIndex);
  const contentStart = findContentStart(bodyChildren, introStart, stopIndex);
  const introSlice = bodyChildren.slice(introStart, contentStart);
  const readingSlice = bodyChildren.slice(contentStart, stopIndex);
  const introHtml = introSlice.map((node) => convertIntroNode(node, id)).filter(Boolean);
  const chapterVerses = quranText.chapters[String(id)] || [];
  const readingItems = readingSlice.flatMap((node) => convertReadingNode(node, id, chapterVerses));

  return {
    id,
    title: pageTitle.replace(/^\d+\.\s*Surah\s*/i, ""),
    sourceTitle: meta.title,
    footnotes,
    introHtml,
    readingItems,
  };
}

function extractFootnotes(doc) {
  const notes = {};

  doc.querySelectorAll('div[id^="sdfootnote"]').forEach((div) => {
    const backlink = div.querySelector('a[href*="anc"]');
    const numberLink = backlink || div.querySelector("a.sdfootnotesym");
    const number = cleanText(numberLink?.textContent) || div.id.replace(/\D+/g, "");
    const paragraphs = Array.from(div.querySelectorAll("p")).map((paragraph, index) => {
      const clone = paragraph.cloneNode(true);
      clone.querySelectorAll("script, style").forEach((node) => node.remove());

      if (index === 0) {
        clone.querySelectorAll('a[name*="sym"], a.sdfootnotesym, a[href*="anc"]').forEach((link) => {
          const label = cleanText(link.textContent);
          if (!label || label === number || /anc/i.test(link.getAttribute("href") || "")) {
            link.remove();
          }
        });
      }

      const text = cleanText(clone.textContent);
      return cleanText(text.replace(new RegExp(`^${escapeRegExp(number)}\\s*`), ""));
    }).filter(Boolean);

    if (paragraphs.length) {
      notes[div.id] = { id: div.id, number, paragraphs };
    }
  });

  return notes;
}

function findFootnoteStart(children) {
  const index = children.findIndex((node) => node.id && /^sdfootnote/i.test(node.id));
  return index === -1 ? children.length : index;
}

function findIntroStart(children, stopIndex) {
  const headings = /^(name|period|theme|subject|background|intro|introduction|historical)/i;
  const index = children.findIndex((node, nodeIndex) => {
    if (nodeIndex >= stopIndex || !/^H[1-6]$/i.test(node.tagName)) {
      return false;
    }
    return headings.test(cleanText(node.textContent));
  });

  return index === -1 ? findContentStart(children, 0, stopIndex) : index;
}

function findContentStart(children, startIndex, stopIndex) {
  const index = children.findIndex((node, nodeIndex) => {
    if (nodeIndex < startIndex || nodeIndex >= stopIndex) {
      return false;
    }
    return Array.from(node.querySelectorAll?.("img") || []).some((img) => isLocalImage(img.getAttribute("src")));
  });

  return index === -1 ? stopIndex : index;
}

function convertIntroNode(node, surahId) {
  const tag = node.tagName?.toUpperCase();
  if (!tag || tag === "SCRIPT" || tag === "STYLE" || tag === "HR") {
    return "";
  }

  const clone = cleanLegacyClone(node, surahId);
  const text = cleanText(clone.textContent);
  if (!text) {
    return "";
  }

  if (/^H[1-6]$/.test(tag)) {
    return `<h2>${escapeHtml(text)}</h2>`;
  }

  if (tag === "P") {
    return `<p>${clone.innerHTML.trim()}</p>`;
  }

  return "";
}

function convertReadingNode(node, surahId, chapterVerses) {
  const tag = node.tagName?.toUpperCase();
  if (!tag || tag === "SCRIPT" || tag === "STYLE") {
    return [];
  }

  const items = [];
  const clone = cleanLegacyClone(node, surahId, true);
  clone.querySelectorAll("img").forEach((img) => img.remove());

  const text = cleanText(clone.textContent);
  if (text) {
    const range = getTranslationVerseRange(text);
    const arabicHtml = range
      ? renderArabicRange(chapterVerses, range.start, range.end)
      : renderStandaloneBismillah(text, surahId);

    if (arabicHtml) {
      items.push({
        type: "arabic",
        html: arabicHtml,
      });
    }

    const checkpointAttrs = range
      ? ` id="surah-${surahId}-ayah-${range.start}" data-checkpoint-item data-ayah-start="${range.start}" data-ayah-end="${range.end}"`
      : "";

    items.push({
      type: "translation",
      html: `<article class="translation-card"${checkpointAttrs}><p class="translation-text">${clone.innerHTML.trim()}</p></article>`,
    });
  }

  return items;
}

function getTranslationVerseRange(text) {
  const match = text.match(/^\[(\d+)(?:\s*[-–]\s*(\d+))?\]/);
  if (!match) {
    return null;
  }

  const start = Number(match[1]);
  const end = Number(match[2] || match[1]);
  if (!Number.isInteger(start) || !Number.isInteger(end) || start < 1 || end < start) {
    return null;
  }

  return { start, end };
}

function renderStandaloneBismillah(text, surahId) {
  if (surahId === 1 || surahId === 9 || !/^In the name of Allah, the Compassionate, the Merciful\.?$/i.test(text)) {
    return "";
  }

  return `
    <section class="arabic-card bismillah-card" dir="rtl" lang="ar" aria-label="Bismillah">
      <p class="arabic-line">${escapeHtml(BISMILLAH_TEXT)}</p>
    </section>
  `;
}

function renderArabicRange(chapterVerses, start, end) {
  const verses = [];

  for (let verseNumber = start; verseNumber <= end; verseNumber += 1) {
    const verse = chapterVerses[verseNumber - 1];
    if (!verse?.text) {
      continue;
    }

    verses.push({
      number: verseNumber,
      text: verse.text,
    });
  }

  if (!verses.length) {
    return "";
  }

  const rangeLabel = start === end ? `Ayah ${start}` : `Ayahs ${start} to ${end}`;
  const lines = verses.map((verse) => `
    <span class="arabic-ayah">
      <span class="arabic-text">${escapeHtml(verse.text)}</span>
      <span class="ayah-marker" aria-label="Ayah ${verse.number}">${toArabicIndic(verse.number)}</span>
    </span>
  `).join("");

  return `
    <section class="arabic-card" dir="rtl" lang="ar" aria-label="${rangeLabel}">
      <p class="arabic-line">${lines}</p>
    </section>
  `;
}

function toArabicIndic(number) {
  return String(number).replace(/\d/g, (digit) => ARABIC_DIGITS[Number(digit)]);
}

function cleanLegacyClone(node, surahId, withNotes = false) {
  const clone = node.cloneNode(true);
  clone.querySelectorAll("script, style").forEach((child) => child.remove());

  clone.querySelectorAll("img").forEach((img) => {
    const source = img.getAttribute("src");
    const resolved = resolveAssetPath(source, surahId);
    if (!resolved) {
      img.remove();
      return;
    }
    img.setAttribute("src", resolved);
    img.setAttribute("alt", "Legacy page image");
    img.setAttribute("loading", "lazy");
    img.setAttribute("decoding", "async");
  });

  if (withNotes) {
    clone.querySelectorAll("a").forEach((anchor) => transformFootnoteAnchor(anchor));
  }

  clone.querySelectorAll("font, span").forEach((child) => unwrapElement(child));
  clone.querySelectorAll("a").forEach((anchor) => {
    const href = anchor.getAttribute("href") || "";
    if (!cleanText(anchor.textContent) && !href) {
      anchor.remove();
      return;
    }
    if (/^https?:\/\//i.test(href)) {
      anchor.setAttribute("target", "_blank");
      anchor.setAttribute("rel", "noreferrer");
    }
  });

  stripPresentation(clone);
  return clone;
}

function transformFootnoteAnchor(anchor) {
  const href = anchor.getAttribute("href") || "";
  const match = href.match(/^#(sdfootnote\d+)sym/i);
  if (!match) {
    if (!cleanText(anchor.textContent)) {
      anchor.remove();
    }
    return;
  }

  const label = cleanText(anchor.textContent) || cleanText(anchor.querySelector("sup")?.textContent) || "?";
  const button = document.createElement("button");
  button.type = "button";
  button.className = "note-ref";
  button.dataset.noteId = match[1];
  button.setAttribute("aria-label", `Open footnote ${label}`);
  button.textContent = label;
  anchor.replaceWith(button);
}

function unwrapElement(element) {
  const fragment = document.createDocumentFragment();
  while (element.firstChild) {
    fragment.appendChild(element.firstChild);
  }
  element.replaceWith(fragment);
}

function stripPresentation(root) {
  const nodes = root.querySelectorAll ? [root, ...root.querySelectorAll("*")] : [root];
  nodes.forEach((node) => {
    if (!node.removeAttribute) {
      return;
    }

    ["align", "border", "color", "face", "lang", "name", "size", "style", "valign"].forEach((attr) => {
      node.removeAttribute(attr);
    });

    if (node.tagName !== "BUTTON") {
      node.removeAttribute("class");
    }
  });
}

function renderSurah(data, tab) {
  state.currentTab = tab;
  setTabs(tab);
  els.surahKicker.textContent = `Surah ${data.id}`;
  els.surahTitle.textContent = data.title;
  const meaning = splitTitle(data.sourceTitle).meaning;
  const verseCount = state.quranText?.chapters?.[String(data.id)]?.length;
  const metaItems = [
    meaning,
    verseCount ? `${verseCount} ayahs` : "",
    `${Object.keys(data.footnotes).length} notes`,
  ].filter(Boolean);
  els.surahSummary.innerHTML = metaItems.map((item) => `<span>${escapeHtml(item)}</span>`).join("");
  els.historyPanel.innerHTML = data.introHtml.length
    ? data.introHtml.join("")
    : `<p class="reader-message">No separate history section was found in this legacy page.</p>`;
  els.readPanel.innerHTML = data.readingItems.length
    ? data.readingItems.map((item) => item.html).join("")
    : `<p class="reader-message">No reading content was found in this legacy page.</p>`;
  updateVisiblePanel(tab);
  updateNavButtons(data.id);

  const checkpoint = state.checkpoint || readStoredCheckpoint();
  const shouldRestoreCheckpoint = state.restoreCheckpointOnNextRender
    && tab === "read"
    && checkpoint?.surahId === data.id;
  state.restoreCheckpointOnNextRender = false;

  if (shouldRestoreCheckpoint) {
    restoreCheckpointPosition(checkpoint);
  } else {
    window.scrollTo({ top: 0, behavior: "auto" });
    if (tab === "read") {
      window.requestAnimationFrame(saveReadingCheckpointFromViewport);
    }
  }

  renderContinueCheckpoint();
}

function setTabs(tab) {
  const isHistory = tab === "history";
  els.historyTab.setAttribute("aria-selected", String(isHistory));
  els.readTab.setAttribute("aria-selected", String(!isHistory));
  updateVisiblePanel(tab);
}

function updateVisiblePanel(tab) {
  els.historyPanel.hidden = tab !== "history";
  els.readPanel.hidden = tab !== "read";
}

function updateNavButtons(id) {
  els.prevSurah.disabled = id <= 1;
  els.nextSurah.disabled = id >= 114;
  els.prevSurah.textContent = id <= 1 ? "Previous" : `Previous ${id - 1}`;
  els.nextSurah.textContent = id >= 114 ? "Next" : `Next ${id + 1}`;
}

function openFootnote(noteId) {
  const data = state.currentSurah;
  const note = data?.footnotes?.[noteId];

  if (!note) {
    showToast("Footnote not found in this surah.");
    return;
  }

  els.noteKicker.textContent = `Surah ${data.id}`;
  els.noteTitle.textContent = `Footnote ${note.number}`;
  els.noteBody.innerHTML = note.paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("");

  if (typeof els.noteDialog.showModal === "function") {
    els.noteDialog.showModal();
  } else {
    els.noteDialog.setAttribute("open", "");
  }
  els.closeNote.focus({ preventScroll: true });
}

function closeFootnote() {
  if (els.noteDialog.open && typeof els.noteDialog.close === "function") {
    els.noteDialog.close();
  } else {
    els.noteDialog.removeAttribute("open");
  }
}

function showToast(message) {
  els.statusToast.textContent = message;
  els.statusToast.classList.add("is-visible");
  clearTimeout(state.toastTimer);
  state.toastTimer = window.setTimeout(() => {
    els.statusToast.classList.remove("is-visible");
  }, 3200);
}

function bindEvents() {
  document.addEventListener("click", (event) => {
    const homeButton = event.target.closest("[data-home]");
    if (homeButton) {
      goHome();
      return;
    }

    const continueButton = event.target.closest("[data-continue-reading]");
    if (continueButton) {
      continueReading();
      return;
    }

    const openButton = event.target.closest("[data-open-surah]");
    if (openButton) {
      goToSurah(Number(openButton.dataset.openSurah), openButton.dataset.openTab || "read");
      return;
    }

    const tabButton = event.target.closest("[data-tab]");
    if (tabButton && state.currentSurah) {
      goToSurah(state.currentSurah.id, tabButton.dataset.tab);
      return;
    }

    const noteButton = event.target.closest("[data-note-id]");
    if (noteButton) {
      openFootnote(noteButton.dataset.noteId);
    }
  });

  els.search.addEventListener("input", renderSurahList);
  els.prevSurah.addEventListener("click", () => {
    if (state.currentSurah?.id > 1) {
      goToSurah(state.currentSurah.id - 1, state.currentTab);
    }
  });
  els.nextSurah.addEventListener("click", () => {
    if (state.currentSurah?.id < 114) {
      goToSurah(state.currentSurah.id + 1, state.currentTab);
    }
  });
  els.closeNote.addEventListener("click", closeFootnote);
  els.noteDialog.addEventListener("click", (event) => {
    if (event.target === els.noteDialog) {
      closeFootnote();
    }
  });
  window.addEventListener("scroll", scheduleCheckpointSave, { passive: true });
  window.addEventListener("beforeunload", saveReadingCheckpointFromViewport);
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
      saveReadingCheckpointFromViewport();
    }
  });
  window.addEventListener("hashchange", route);
}

function init() {
  state.checkpoint = readStoredCheckpoint();
  bindEvents();
  renderContinueCheckpoint();
  renderSurahList();

  if (window.location.protocol === "file:") {
    showToast("Serve this folder locally so surah pages can load.");
  }

  route();
}

init();
