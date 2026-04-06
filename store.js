/* ═══════════════════════════════════════════════════════════════
   CONFIGURATION — only edit this section
═══════════════════════════════════════════════════════════════ */

// ── ENV — lido de config.js (window.ENV) ─────────────────────────────────────
const _ENV = window.ENV || {};
const _port = _ENV.CHAT_PORT ? ':' + _ENV.CHAT_PORT : '';
const CHAT_BASE_URL = (_ENV.BASE_URL || '') + _port + '/chat';

// Resolve seller da URL (?seller=kodan | ?seller=phenix) com fallback ao default
const _sellerParam = new URLSearchParams(window.location.search).get('seller') || _ENV.DEFAULT_SELLER || '';
const _seller = (_ENV.SELLERS && _ENV.SELLERS[_sellerParam]) || {};
const TENANT_ID    = _seller.tenantId  || '';
const TELEGRAM_URL = _seller.telegram  || 'https://t.me/kingof_pleasure'; // fallback

// Produtos extraídos do HTML fornecido
const PRODUCTS = [
  // US$ 35
  {
    id: 'AGsjGAjskalsksl',
    title: '🔥OMEGLE E SKYPE 📂 🔥',
    description: '♦️ THE BEST CONTENT YOU’VE EVER SEEN \n ♦️ EXCLUSIVE, HIGH-QUALITY COLLECTION \n 💎 Don’t miss out on the most sought-after folder of all time',
    price: 35,
    thumb: 'thumbs/omegle.jpg',
    video: 'videos/omegle/omegle.mp4',
    featured: true,
    topSeller: true,
  },
  {
    id: 'HdKfYnCgWbSxQrMp',
    title: '‼️⚠️"L!ZZY FOLDER"⚠️‼️',
    description: 'She and her l!ttle brother was sucking eachother 😍😈 \n ✅BL4CKM4!L VIDEOS \n ✅TRAINING VIDEOS \n ✅INC£ST \n ✅20GB \n ✅ONLY THE BEST',
    price: 35,
    thumb: 'thumbs/lizz.jpg',
    video: 'videos/Lizzy/lizzy.mp4',
    featured: false,
    topSeller: false,
  },

  // US$ 40
  {
    id: 'VjZtNsLmRkXqPwGh',
    title: '😍 HIGH SCHOOL FOLDER 📂🔥',
    description: '✅ Young, wild, and irresistibly seductive ✅ Exclusive content you won’t find anywhere else ✅ Pure temptation wrapped in beauty and charm 💎 Step inside and experience the thrill—unfiltered, uncensored, and unforgettable',
    price: 40,
    thumb: 'thumbs/high_shool.jpeg',
    video: 'videos/high_school/school_prev_v2.mp4',
    featured: false,
    topSeller: true,
  },
  {
    id: 'EfGhIjKlMnOpQrSt',
    title: '🔥🔞MOM AND SON-3🔞🔥',
    description: '✅ Exclusive blackmail-themed videos✅ Taboo stories that push boundaries💎 Unfiltered, premium content curated for true fans. Don’t miss the ultimate collection',
    price: 40,
    thumb: 'thumbs/momson.jpg',
    video: 'videos/mom_and_son/momandson.mp4',
    featured: false,
    topSeller: true,
  },

  // US$ 45
  {
    id: 'BcFrYpDsKwNqMxTv',
    title: '✅CP 1 FOLDER 🗂️',
    description: '✅MORE THAN 200 VIDEOS ✅CP 10 yers  ✅LIFETIME ACCESS ✅MY COMPLETE FOLDER',
    price: 45,
    thumb: 'thumbs/cp1.jpg',
    video: 'videos/cp1/cp1.mp4',
    featured: false,
    topSeller: true,
  },
  {
    id: 'QmJsXtLzWcRgNkPb',
    title: '✅CP 2 FOLDER 🗂️',
    description: '‼️The most 2025 Searched folder ✅MORE THAN 500 VIDEOS ✅CP 10 yers  ✅LIFETIME ACCESS ✅MY COMPLETE FOLDER👄THE BEST FOLDER✅',
    price: 45,
    thumb: 'thumbs/cpp2.jpeg',
    video: 'videos/cp2/cp2.mp4',
    featured: false,
    topSeller: false,
  },
  {
    id: 'TzPmXwRqLsNvBcJy',
    title: '🔥Teens 1',
    description: 'AMERICANS AND ENGLISH ✅Leaked from onlyfans✅10.98GB ✅Complete folder✅544 VIDEOS',
    price: 45,
    thumb: 'thumbs/teen.jpeg',
    video: 'videos/teen/teen.mp4',
    featured: true,
    topSeller: true,
  },
  {
    id: 'MnBvCxZwQrStYpLk',
    title: 'ENGLISH TEENS 😍🔥',
    description: 'NGLISH TEENS 😍🔥✅Leaked from onlyfans✅21.7GB  ✅Complete folder✅761 VIDEOS',
    price: 45,
    thumb: 'thumbs/english.jpeg',
    video: 'videos/english/english.mp4',
    featured: true,
    topSeller: false,
  },
  {
    id: 'LpQrStUvWxYzAbCd',
    title: 'MONKEY APP 😍🔥',
    description: '✅️ Our biggest collection ever – Over 1200 videos!✅️Featuring exclusive content from Monkey App! ✅️Don’t miss out – Grab yours now!✅hot teens on monkey app wins.✅200 Gb folder',
    price: 45,
    thumb: 'thumbs/monkeyapp.jpg',
    video: 'videos/monkeyapp/monkeyapp.mp4',
    featured: true,
    topSeller: false,
  },
  {
    id: 'AbCdEfGhIjKlMnOp',
    title: 'INCEST 🔥',
    description: 'REAL INCEST 🔥🔥🔥🔥',
    price: 45,
    thumb: 'thumbs/INCEST.jpg',
    video: 'videos/incest/preview.mp4',
    featured: false,
    topSeller: false,
  },

  // US$ 50
  {
    id: 'JkRmPwBtXsNcLqYz',
    title: '✅CP 3 FOLDER 🗂️',
    description: '✅MORE THAN 220 VIDEOS✅REAL CP vids ✅BLACK AND WHITE VIDS ✅MY COMPLETE FOLDER',
    price: 50,
    thumb: 'thumbs/cp3.jpg',
    video: 'videos/cp3/cp3.mp4',
    featured: false,
    topSeller: false,
  },
  {
    id: 'GSsksksueieoesj',
    title: '✅CP 4 FOLDER 🗂️',
    description: '✅AMERICAN AND ASIAN ✅MORE THAN 400 VIDEOS✅REAL CP AND INCEST ✅BLACK AND WHITE VIDS ✅MY COMPLETE FOLDER🔥 BEST ONE',
    price: 50,
    thumb: 'thumbs/cpp4.jpeg',
    video: 'videos/cp4/cp4.mp4',
    featured: false,
    topSeller: true,
  },
  {
    id: 'WrPkTnBsXmCqLzFj',
    title: 'R@pe FOLDER 🔥🇬🇧🇺🇸',
    description: 'NEW FOLDER✅🔥 R@pe FOLDER 🔥🇬🇧🇺🇸',
    price: 50,
    thumb: 'thumbs/R.jpeg',
    video: 'videos/R/preview.mp4',
    featured: false,
    topSeller: true,
  },
  {
    id: 'KjHTSGSksskagg',
    title: '😍 HIGH SCHOOL CHANNEL 📂🔥',
    description: '✅ CHANNEL WITH MORE THAN 4k vids ✅Young, wild, and irresistibly seductive ✅ Exclusive content you won’t find anywhere else',
    price: 50,
    thumb: 'thumbs/high_shool.jpeg',
    video: 'videos/high_school/school_prev_v2.mp4',
    featured: true,
    topSeller: true,
  },
  {
    id: 'UvWxYzAbCdEfGhIj',
    title: '🔥SNAPGOD FOLDER🔥',
    description: '🚀 500GB of PURE EXCLUSIVE CONTENT!🔥 The largest, most complete collection ever!💎 High-quality, non-stop excitement in one place!❌ No repeats. ❌ No disappointments. ✔️ Just premium content!',
    price: 50,
    thumb: 'thumbs/snapgod.jpg',
    video: 'videos/snapgod/snapgod.mp4',
    featured: true,
    topSeller: false,
  },

  // US$ 70
  {
    id: 'DhSnVfYqGwBmKtCx',
    title: 'PYT COLLECTION😍🔥',
    description: '😈🔞BIG PROMO ALL 9 PYT CHANNELS  ✅THE BEST CONTENT ✅TEENAGERS ✅ALL GIRLS WITH HOT PUSSY✅MORE THAN 15000 VIDEOS 😈🔞BIG PROMO ALL 9 PYT CHANNELS',
    price: 70,
    thumb: 'thumbs/pyt1.jpg',
    video: 'videos/PYT 1/IMG_6935.mp4',
    featured: true,
    topSeller: false,
  },

  // US$ 100
  {
    id: 'KlMnOpQrStUvWxYz',
    title: 'New VIP group ✅',
    description: '📁ALL CP FOLDERS 📁Two lesbian girls 📁Lizzy Folder 📁Desire Garcia📁CP folder📁African CP📁70-6 CP 📁71-4 CP 📁Inc3st folder📁BLACKMAIL📁Snapchat📁Snap 18+ teens📁Skype (call usa,south africa.girs)📁Snapping📁Kazumi squirt 📁All Cp folder 📁Objective dark',
    price: 100,
    thumb: 'thumbs/vip_v2.jpeg',
    video: 'videos/vip/vip.mp4',
    featured: false,
    topSeller: true,
  },

  // US$ 120
  {
    id: 'QrStUvWxYzAbCdEf',
    title: '🔥 6.7TB PACK 🔥',
    description: 'All packs in one file 6.7TB',
    price: 120,
    thumb: 'thumbs/6_TB.jpeg',
    video: 'videos/vip/2026-01-06_23.09.16.mp4',
    featured: true,
    topSeller: true,
  },
];









/* ═══════════════════════════════════════════════════════════════
   DERIVED DATA — computed once, never recomputed
═══════════════════════════════════════════════════════════════ */
const FEATURED_ITEMS = PRODUCTS.filter(p => p.featured);
const TOP_SELLERS = PRODUCTS.filter(p => p.topSeller);
const UNIQUE_PRICES = [...new Set(PRODUCTS.map(p => p.price))].sort((a, b) => a - b);
const UNIQUE_TITLES = [...new Set(PRODUCTS.map(p => p.title))].sort();

const PRODUCTS_MAP = new Map(PRODUCTS.map(p => [p.id, p]));
const PRICE_LABELS = new Map();
for (const price of UNIQUE_PRICES) PRICE_LABELS.set(price, formatPrice(price));

/* ═══════════════════════════════════════════════════════════════
   STATE
═══════════════════════════════════════════════════════════════ */
const state = {
  search: '',
  activePrice: null,
  activeTitle: null,
};

const _renderCache = {
  priceChips: null,
  titleChips: null,
  topSellers: null,
  lotSections: null,
  filterBadge: -1,
};

/* ═══════════════════════════════════════════════════════════════
   UTILITIES
═══════════════════════════════════════════════════════════════ */
const ESC_MAP = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' };
function esc(str) {
  return String(str).replace(/[&<>"]/g, m => ESC_MAP[m]);
}

function formatPrice(value) {
  return 'US$ ' + Number(value).toFixed(2).replace('.', ',');
}

function buyUrl(productId) {
  return `${CHAT_BASE_URL}?t=${TENANT_ID}&productId=${esc(productId)}`;
}

function isFiltering() {
  return state.search.trim() !== '' || state.activePrice !== null || state.activeTitle !== null;
}

function filteredProducts() {
  const q = state.search.toLowerCase().trim();
  return PRODUCTS.filter(p => {
    if (state.activePrice !== null && p.price !== state.activePrice) return false;
    if (state.activeTitle !== null && p.title !== state.activeTitle) return false;
    if (q && !p.title.toLowerCase().includes(q) && !p.description.toLowerCase().includes(q)) return false;
    return true;
  });
}

function groupByPrice(products) {
  const map = new Map();
  for (const p of products) {
    if (!map.has(p.price)) map.set(p.price, []);
    map.get(p.price).push(p);
  }
  return new Map([...map.entries()].sort((a, b) => a[0] - b[0]));
}

function countActiveFilters() {
  return (state.activePrice !== null ? 1 : 0) + (state.activeTitle !== null ? 1 : 0);
}

/* ═══════════════════════════════════════════════════════════════
   SKELETON HELPERS
═══════════════════════════════════════════════════════════════ */
function skeletonCard() {
  return `
    <div class="card" aria-hidden="true" style="pointer-events:none">
      <div class="card__thumb-wrap skeleton" style="aspect-ratio:16/9"></div>
      <div class="card__body" style="gap:8px">
        <div class="skeleton section-skeleton__line section-skeleton__line--title" style="height:13px;border-radius:4px;margin-bottom:0"></div>
        <div class="skeleton section-skeleton__line section-skeleton__line--desc1" style="height:11px;border-radius:4px;margin-bottom:0"></div>
        <div class="skeleton section-skeleton__line section-skeleton__line--desc2" style="height:11px;border-radius:4px;margin-bottom:0"></div>
      </div>
      <div class="card__footer">
        <div class="skeleton" style="flex:1;height:36px;border-radius:6px"></div>
        <div class="skeleton" style="flex:1;height:36px;border-radius:6px"></div>
      </div>
    </div>
  `;
}

function skeletonSection(cardCount = 4) {
  const cards = Array.from({ length: cardCount }, skeletonCard).join('');
  return `
    <section class="h-section" aria-hidden="true">
      <div class="h-section__header">
        <div class="skeleton" style="width:120px;height:18px;border-radius:4px"></div>
      </div>
      <div class="h-section__track">${cards}</div>
    </section>
  `;
}

function injectSkeletons() {
  const track = document.getElementById('topSellersTrack');
  if (!track.dataset.loaded) {
    track.innerHTML = Array.from({ length: 4 }, skeletonCard).join('');
  }
  const lot = document.getElementById('lotSections');
  if (!lot.dataset.loaded) {
    lot.innerHTML = skeletonSection(4) + skeletonSection(3);
  }
}

/* ═══════════════════════════════════════════════════════════════
   RENDER — CARD
═══════════════════════════════════════════════════════════════ */
function renderCard(product) {
  const priceLabel = PRICE_LABELS.get(product.price) ?? formatPrice(product.price);
  return `
    <article class="card" data-id="${esc(product.id)}">
      <div class="card__thumb-wrap">
        <img
          class="card__thumb"
          src="${esc(product.thumb)}"
          alt="${esc(product.title)}"
          loading="lazy"
          decoding="async"
          onerror="this.style.background='#1a1a1a';this.removeAttribute('src')"
        />
        <button
          class="card__preview-btn"
          aria-label="See preview of ${esc(product.title)}"
          data-action="preview"
          data-id="${esc(product.id)}"
        ><span class="card__play-icon">▶</span></button>
        <span class="card__price-badge">${priceLabel}</span>
      </div>
      <div class="card__body">
        <h2 class="card__title">${esc(product.title)}</h2>
        <p  class="card__desc">${esc(product.description)}</p>
      </div>
      <div class="card__footer">
        <button
          class="btn btn--secondary"
          aria-label="See preview of ${esc(product.title)}"
          data-action="preview"
          data-id="${esc(product.id)}"
        >See Preview</button>
        <button
          class="btn btn--primary"
          data-action="confirm-buy"
          data-id="${esc(product.id)}"
        >Buy Now</button>
      </div>
    </article>
  `;
}

/* ═══════════════════════════════════════════════════════════════
   RENDER — CAROUSEL
═══════════════════════════════════════════════════════════════ */
const carouselEl = document.getElementById('carousel');
const carouselDots = document.getElementById('carouselDots');
const carouselSection = document.getElementById('carouselSection');

let carouselTimer = null;
let currentSlide = 0;

function renderCarousel() {
  if (FEATURED_ITEMS.length === 0) {
    carouselSection.classList.add('is-hidden');
    return;
  }

  const slidesHTML = FEATURED_ITEMS.map((p, i) => {
    const priceLabel = PRICE_LABELS.get(p.price) ?? formatPrice(p.price);
    return `
      <div class="carousel__slide" data-index="${i}">
        <img
          class="carousel__slide-img"
          src="${esc(p.thumb)}"
          alt="${esc(p.title)}"
          loading="${i === 0 ? 'eager' : 'lazy'}"
          decoding="${i === 0 ? 'sync' : 'async'}"
        />
        <div class="carousel__slide-content">
          <span class="carousel__slide-badge">Featured</span>
          <h2 class="carousel__slide-title">${esc(p.title)}</h2>
          <p  class="carousel__slide-desc">${esc(p.description)}</p>
          <span class="carousel__slide-price">${priceLabel}</span>
          <div class="carousel__slide-actions">
            <button class="carousel__slide-btn carousel__slide-btn--ghost" data-action="preview" data-id="${esc(p.id)}">See Preview</button>
            <button class="carousel__slide-btn carousel__slide-btn--primary" data-action="confirm-buy" data-id="${esc(p.id)}">Buy Now</button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  const dotsHTML = FEATURED_ITEMS.map((_, i) =>
    `<button class="carousel__dot${i === 0 ? ' is-active' : ''}" aria-label="Slide ${i + 1}" data-slide="${i}"></button>`
  ).join('');

  carouselEl.innerHTML = slidesHTML;
  carouselDots.innerHTML = dotsHTML;

  startAutoPlay();
  carouselEl.addEventListener('scroll', onCarouselScroll, { passive: true });
}

function goToSlide(index) {
  const total = FEATURED_ITEMS.length;
  currentSlide = ((index % total) + total) % total;
  carouselEl.scrollTo({ left: carouselEl.offsetWidth * currentSlide, behavior: 'smooth' });
  updateDots(currentSlide);
}

function updateDots(index) {
  const dots = carouselDots.children;
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.toggle('is-active', i === index);
  }
}

let scrollSyncTimer;
function onCarouselScroll() {
  clearTimeout(scrollSyncTimer);
  scrollSyncTimer = setTimeout(() => {
    const slideW = carouselEl.offsetWidth;
    if (!slideW) return;
    const idx = Math.round(carouselEl.scrollLeft / slideW);
    if (idx !== currentSlide) { currentSlide = idx; updateDots(idx); }
  }, 80);
}

function startAutoPlay() {
  stopAutoPlay();
  if (FEATURED_ITEMS.length <= 1) return;
  carouselTimer = setInterval(() => goToSlide(currentSlide + 1), 4000);
}
function stopAutoPlay() {
  if (carouselTimer) { clearInterval(carouselTimer); carouselTimer = null; }
}

carouselEl.addEventListener('pointerenter', stopAutoPlay);
carouselEl.addEventListener('pointerleave', startAutoPlay);
carouselEl.addEventListener('touchstart', stopAutoPlay, { passive: true });
carouselEl.addEventListener('touchend', () => setTimeout(startAutoPlay, 1500), { passive: true });
carouselDots.addEventListener('click', e => {
  const dot = e.target.closest('.carousel__dot');
  if (!dot) return;
  stopAutoPlay();
  goToSlide(Number(dot.dataset.slide));
  setTimeout(startAutoPlay, 3000);
});

/* ═══════════════════════════════════════════════════════════════
   RENDER — TOP SELLERS
═══════════════════════════════════════════════════════════════ */
function renderTopSellers() {
  const section = document.getElementById('topSellersSection');
  if (TOP_SELLERS.length === 0) { section.hidden = true; return; }
  section.hidden = false;

  const html = TOP_SELLERS.map(renderCard).join('');
  if (html === _renderCache.topSellers) return;
  _renderCache.topSellers = html;

  const track = document.getElementById('topSellersTrack');
  track.innerHTML = html;
  track.dataset.loaded = '1';
  applyFadeIn(track);
}

/* ═══════════════════════════════════════════════════════════════
   RENDER — LOT SECTIONS
═══════════════════════════════════════════════════════════════ */
function renderLotSections(products) {
  const container = document.getElementById('lotSections');
  const emptyState = document.getElementById('emptyState');
  const topSection = document.getElementById('topSellersSection');

  if (products.length === 0) {
    container.innerHTML = '';
    emptyState.hidden = false;
    topSection.hidden = true;
    _renderCache.lotSections = null;
    return;
  }

  emptyState.hidden = true;

  let html;

  if (isFiltering()) {
    topSection.hidden = true;
    carouselSection.classList.add('is-hidden');
    html = `
      <section class="h-section">
        <div class="h-section__header">
          <h2 class="h-section__title">
            Results
            <span style="font-size:13px;font-weight:400;color:var(--text-muted);margin-left:4px">(${products.length})</span>
          </h2>
        </div>
        <div class="h-section__track">
          ${products.map(renderCard).join('')}
        </div>
      </section>
    `;
  } else {
    carouselSection.classList.remove('is-hidden');
    topSection.hidden = false;
    const groups = groupByPrice(products);
    const parts = [];
    for (const [price, items] of groups) {
      const label = PRICE_LABELS.get(price) ?? formatPrice(price);
      parts.push(`
        <section class="h-section" aria-label="Products at ${label}">
          <div class="h-section__header">
            <h2 class="h-section__title">${esc(label)}</h2>
            <span class="h-section__subtitle">${items.length} product${items.length !== 1 ? 's' : ''}</span>
          </div>
          <div class="h-section__track">${items.map(renderCard).join('')}</div>
        </section>
      `);
    }
    html = parts.join('');
  }

  if (html === _renderCache.lotSections) return;
  _renderCache.lotSections = html;

  container.innerHTML = html;
  container.dataset.loaded = '1';
  applyFadeIn(container);
}

/* ═══════════════════════════════════════════════════════════════
   RENDER — CHIPS
═══════════════════════════════════════════════════════════════ */
function renderPriceChips() {
  const html = UNIQUE_PRICES.map(p => {
    const active = state.activePrice === p;
    return `<button class="chip${active ? ' is-active' : ''}" data-filter="price" data-value="${p}" aria-pressed="${active}">${PRICE_LABELS.get(p)}</button>`;
  }).join('');

  if (html === _renderCache.priceChips) return;
  _renderCache.priceChips = html;
  document.getElementById('priceChips').innerHTML = html;
}

function renderTitleChips() {
  const html = UNIQUE_TITLES.map(t => {
    const active = state.activeTitle === t;
    return `<button class="chip${active ? ' is-active' : ''}" data-filter="title" data-value="${esc(t)}" aria-pressed="${active}">${esc(t)}</button>`;
  }).join('');

  if (html === _renderCache.titleChips) return;
  _renderCache.titleChips = html;
  document.getElementById('titleChips').innerHTML = html;
}

function updateFilterBadge() {
  const count = countActiveFilters();
  if (count === _renderCache.filterBadge) return;
  _renderCache.filterBadge = count;
  const badge = document.getElementById('filterBadge');
  badge.hidden = count === 0;
  badge.textContent = count;
}

/* ═══════════════════════════════════════════════════════════════
   FADE-IN HELPER
═══════════════════════════════════════════════════════════════ */
function applyFadeIn(el) {
  el.classList.remove('fade-in');
  void el.offsetWidth;
  el.classList.add('fade-in');
}

/* ═══════════════════════════════════════════════════════════════
   FULL RENDER
═══════════════════════════════════════════════════════════════ */
let renderScheduled = false;

function scheduleRender() {
  if (renderScheduled) return;
  renderScheduled = true;
  requestAnimationFrame(() => {
    renderScheduled = false;
    const filtered = filteredProducts();
    renderPriceChips();
    renderTitleChips();
    updateFilterBadge();
    renderTopSellers();
    renderLotSections(filtered);
  });
}

/* ═══════════════════════════════════════════════════════════════
   VIDEO MODAL
═══════════════════════════════════════════════════════════════ */
const modal = document.getElementById('modalOverlay');
const modalVideo = document.getElementById('modalVideo');
const modalSrc = document.getElementById('modalVideoSrc');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');

function openModal(productId) {
  const product = PRODUCTS_MAP.get(productId);
  if (!product) return;

  if (modalSrc.src !== product.video) {
    modalSrc.src = product.video;
    modalVideo.load();
  }
  modalTitle.textContent = product.title;
  modalDesc.textContent = product.description;
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  modalVideo.play().catch(() => { });
}

function closeModal() {
  modalVideo.pause();
  modal.hidden = true;
  document.body.style.overflow = '';
  requestAnimationFrame(() => {
    modalVideo.currentTime = 0;
    modalSrc.src = '';
  });
}

document.getElementById('modalClose').addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !modal.hidden) closeModal(); });

/* ═══════════════════════════════════════════════════════════════
   CONFIRM MODAL
═══════════════════════════════════════════════════════════════ */
const confirmOverlay = document.getElementById('confirmOverlay');
const confirmMsg = document.getElementById('confirmMsg');
let _confirmUrl = '';

function openConfirm(productId) {
  const p = PRODUCTS_MAP.get(productId);
  if (!p) return;
  _confirmUrl = TELEGRAM_URL; // ← perfil do Telegram
  const priceLabel = PRICE_LABELS.get(p.price) ?? formatPrice(p.price);
  confirmMsg.innerHTML = `<strong>${esc(p.title)}</strong> — ${esc(priceLabel)}<br><br>This button is for buying only.<br>If you're not ready to purchase, please close this.`;
  confirmOverlay.hidden = false;
  document.body.style.overflow = 'hidden';
}

function closeConfirm() {
  confirmOverlay.hidden = true;
  document.body.style.overflow = '';
  _confirmUrl = '';
}

document.getElementById('confirmCancel').addEventListener('click', closeConfirm);
document.getElementById('confirmOk').addEventListener('click', () => {
  window.open(_confirmUrl, '_blank', 'noopener,noreferrer');
  closeConfirm();
});
confirmOverlay.addEventListener('click', e => { if (e.target === confirmOverlay) closeConfirm(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !confirmOverlay.hidden) closeConfirm(); });

/* ═══════════════════════════════════════════════════════════════
   EVENT DELEGATION — preview + confirm-buy buttons
═══════════════════════════════════════════════════════════════ */
document.body.addEventListener('click', e => {
  const previewBtn = e.target.closest('[data-action="preview"]');
  if (previewBtn) { openModal(previewBtn.dataset.id); return; }

  const buyBtn = e.target.closest('[data-action="confirm-buy"]');
  if (buyBtn) { openConfirm(buyBtn.dataset.id); return; }
});

/* ═══════════════════════════════════════════════════════════════
   FILTER — PANEL TOGGLE
═══════════════════════════════════════════════════════════════ */
const filterToggle = document.getElementById('filterToggle');
const filterPanel = document.getElementById('filterPanel');

filterToggle.addEventListener('click', e => {
  e.stopPropagation();
  const isOpen = filterPanel.classList.toggle('is-open');
  filterToggle.setAttribute('aria-expanded', isOpen);
  filterPanel.setAttribute('aria-hidden', !isOpen);
});

/* ═══════════════════════════════════════════════════════════════
   FILTER — CHIPS
═══════════════════════════════════════════════════════════════ */
filterPanel.addEventListener('click', e => {
  const chip = e.target.closest('.chip');
  if (!chip) return;
  const { filter: type, value } = chip.dataset;
  if (type === 'price') {
    const price = Number(value);
    state.activePrice = state.activePrice === price ? null : price;
  } else if (type === 'title') {
    state.activeTitle = state.activeTitle === value ? null : value;
  }
  scheduleRender();
});

/* ═══════════════════════════════════════════════════════════════
   FILTER — CLEAR ALL
═══════════════════════════════════════════════════════════════ */
document.getElementById('filterClear').addEventListener('click', () => {
  state.activePrice = null;
  state.activeTitle = null;
  scheduleRender();
});

/* ═══════════════════════════════════════════════════════════════
   SEARCH — debounced 240ms
═══════════════════════════════════════════════════════════════ */
let searchTimer;
document.getElementById('searchInput').addEventListener('input', e => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => {
    state.search = e.target.value;
    scheduleRender();
  }, 240);
});

/* ═══════════════════════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════════════════════ */
(function init() {
  injectSkeletons();
  renderCarousel();
  requestAnimationFrame(() => { scheduleRender(); });
})();