const WHATSAPP_NUMBER = "201280170555";
// Set this to the old site's origin (for example, https://example.com/) when its uploads are hosted elsewhere.
const OLD_MEDIA_BASE = "";
const words = {
  ar: {
    navMenu: "المنيو", navStory: "عن تيفولي", navContact: "تواصل معنا", cart: "السلة",
    eyebrow: "من بورسعيد… بكل حب", heroTitle: "كل طبق<br>يحكي <em>حكاية.</em>",
    heroDesc: "أطباق نحبها، قهوة على مهل، ولحظات تستحق أن تُعاش.", browseMenu: "اكتشف المنيو", reserve: "احجز أو اطلب",
    heroNote: "Food · Coffee · Moments", heroCaption: "لحظات بطعم مختلف", scroll: "اكتشف",
    menuOverline: "نكهات لكل لحظة", menuTitle: "منيو <em>تيفولي</em>",
    menuIntro: "اختاروا ما تحبون من أطباقنا ومشروباتنا، وأرسلوا طلبكم بسهولة عبر واتساب.",
    categories: "الفئات", categoryRailHint: "اسحب لاستكشاف المنيو", chooseCategory: "اختار فئة لعرض منتجاتها",
    sideNote: "كل اختيار له لحظته…<br>اختر ما يناسبك اليوم.", empty: "لا توجد نتائج. جرب البحث بكلمة أخرى.",
    visitOverline: "نلتقي في بورسعيد", visitTitle: "مكانكم<br><em>في تيفولي.</em>",
    visitDesc: "نستقبلكم لأطباق تحبونها، قهوة دافئة، ووقت جميل مع من تحبون.", directions: "احصل على الاتجاهات",
    ourAddress: "عنواننا", address: "78C4+5MQ، الشهيد عاطف السادات، قسم الشرق، محافظة بورسعيد 8574015",
    callUs: "للحجز والاستفسار", closing: "Tivoli Restaurant & Café — Where every dish tells a story ✨",
    footerTagline: "طعام · قهوة · لحظات", copyright: "جميع حقوق النشر محفوظة لصالح شركة BTA System Solutions · ممر طوارئ جنة النورس · للتواصل: 01205062357",
    yourSelection: "اختياراتك", cartTitle: "سلة الطلب", cartEmpty: "سلتك بانتظار اختياراتك.", backToMenu: "تصفح المنيو",
    total: "الإجمالي", detailsCaption: "أضف تفاصيلك لإرسال الطلب عبر واتساب", nameLabel: "الاسم", namePlaceholder: "اسمك",
    phoneLabel: "رقم الهاتف", orderType: "نوع الطلب", dateLabel: "التاريخ", timeLabel: "الوقت", notesLabel: "تفاصيل إضافية",
    notesPlaceholder: "أي ملاحظات أو طلبات خاصة", sendWhatsApp: "إرسال الطلب عبر واتساب", whatsappHint: "سيتم فتح واتساب لمراجعة وإرسال طلبك.",
    added: "تمت الإضافة إلى السلة", copied: "تم تحديث الكمية", orderIntro: "طلب جديد من منيو تيفولي",
    orderName: "الاسم", orderPhone: "رقم التواصل", orderTypeLabel: "نوع الطلب", orderDate: "التاريخ", orderTime: "الوقت", orderNotes: "ملاحظات", orderTotal: "الإجمالي",
    fallbackSearch: "تعذر تحميل المنيو. حاول تحديث الصفحة.", egp: "ج.م"
  },
  en: {
    navMenu: "Menu", navStory: "Our story", navContact: "Contact", cart: "Cart",
    eyebrow: "Made with love in Port Said", heroTitle: "Every dish<br>tells a <em>story.</em>",
    heroDesc: "Food to love, coffee to linger over, and moments worth sharing.", browseMenu: "Explore the menu", reserve: "Book or order",
    heroNote: "Food · Coffee · Moments", heroCaption: "A moment with a different taste", scroll: "Explore",
    menuOverline: "Flavours for every moment", menuTitle: "The <em>Tivoli</em> menu",
    menuIntro: "Choose from our dishes and drinks, then send your order easily through WhatsApp.",
    categories: "Categories", categoryRailHint: "Swipe to explore the menu", chooseCategory: "Choose a category to see its products",
    visitOverline: "Meet us in Port Said", visitTitle: "Your place<br><em>at Tivoli.</em>",
    visitDesc: "Come by for the dishes you love, a warm coffee, and good time with the people you love.", directions: "Get directions",
    ourAddress: "Our address", address: "78C4+5MQ, Al Shaheed Atef El-Sadat, Ash Sharq, Port Said Governorate 8574015",
    callUs: "Bookings & enquiries", closing: "Tivoli Restaurant & Café — Where every dish tells a story ✨",
    footerTagline: "Food · Coffee · Moments", copyright: "All rights reserved to BTA System Solutions · Jannat El Nawras emergency passage · Contact: 01205062357",
    yourSelection: "Your selection", cartTitle: "Your order", cartEmpty: "Your cart is waiting for something good.", backToMenu: "Browse the menu",
    total: "Total", detailsCaption: "Add your details to send your order on WhatsApp", nameLabel: "Name", namePlaceholder: "Your name",
    phoneLabel: "Phone number", orderType: "Order type", dateLabel: "Date", timeLabel: "Time", notesLabel: "Additional details",
    notesPlaceholder: "Any notes or special requests", sendWhatsApp: "Send order on WhatsApp", whatsappHint: "WhatsApp will open so you can review and send your order.",
    added: "Added to your cart", copied: "Quantity updated", orderIntro: "New order from Tivoli menu",
    orderName: "Name", orderPhone: "Contact number", orderTypeLabel: "Order type", orderDate: "Date", orderTime: "Time", orderNotes: "Notes", orderTotal: "Total",
    fallbackSearch: "The menu could not be loaded. Please refresh the page.", egp: "EGP"
  }
};

const fallbackPhotos = [
  ["BREAKFAST", "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=760&q=78"],
  ["TOAST", "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=760&q=78"],
  ["SOUP", "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=760&q=78"],
  ["SALAD", "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=760&q=78"],
  ["APPETIZERS", "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&w=760&q=78"],
  ["CHICKEN", "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=760&q=78"],
  ["BEEF", "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=760&q=78"],
  ["SEA", "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?auto=format&fit=crop&w=760&q=78"],
  ["PASTA", "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=760&q=78"],
  ["PIZZA", "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=760&q=78"],
  ["SANDWICH", "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=760&q=78"],
  ["DESSERT", "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=760&q=78"],
  ["WAFFLE", "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=760&q=78"],
  ["CREPE", "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=760&q=78"],
  ["COFFEE", "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=760&q=78"],
  ["DRINK", "https://images.unsplash.com/photo-1513558161293-cdaf765edfd7?auto=format&fit=crop&w=760&q=78"]
];
const genericPhoto = "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=760&q=78";

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const elements = {
  categoryList: $("#categoryList"), categorySections: $("#categorySections"),
  cartCount: $("#cartCount"), cartItems: $("#cartItems"), cartTotal: $("#cartTotal"), cartEmpty: $("#cartEmpty"),
  checkout: $("#checkoutForm"), drawer: $("#cartDrawer"), overlay: $("#cartOverlay"), toast: $("#toast")
};
let menuData;
let activeCategory = null;
let lang = localStorage.getItem("tivoli-language") === "en" ? "en" : "ar";
let cart = loadCart();
let toastTimer;

function loadCart() {
  try { return JSON.parse(localStorage.getItem("tivoli-cart") || "{}"); }
  catch { return {}; }
}
function saveCart() {
  try { localStorage.setItem("tivoli-cart", JSON.stringify(cart)); } catch { /* storage may be disabled */ }
}
function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}
function categoryName(category) {
  return lang === "en" ? category.nameEn : category.nameAr;
}
function productName(product) {
  const primary = lang === "en" ? product.nameEn : product.nameAr;
  const secondary = lang === "en" ? product.nameAr : product.nameEn;
  return { primary: primary || secondary || "Tivoli", secondary: primary && secondary && primary !== secondary ? secondary : "" };
}
function formatMoney(amount) {
  const locale = lang === "ar" ? "ar-EG" : "en-US";
  return `${new Intl.NumberFormat(locale, { maximumFractionDigits: 0 }).format(amount)} ${words[lang].egp}`;
}
function photoFor(categoryId) {
  const categoryPhoto = menuData?.categories.find(category => category.id === categoryId)?.image;
  if (categoryPhoto) return categoryPhoto;
  const source = categoryId.toUpperCase();
  const match = fallbackPhotos.find(([key]) => source.includes(key));
  if (match) return match[1];
  if (/COFFEE|ESPRESSO|CHOCOLATE HOT|DRINKS HOT/.test(source)) return fallbackPhotos.find(([key]) => key === "COFFEE")[1];
  if (/JUICE|COCKTAIL|SMOOTHIE|SODA|MILKSHAKE|ICE/.test(source)) return fallbackPhotos.find(([key]) => key === "DRINK")[1];
  if (/GRILLED/.test(source)) return fallbackPhotos.find(([key]) => key === "BEEF")[1];
  if (/SIDE|EASTERN/.test(source)) return fallbackPhotos.find(([key]) => key === "CHICKEN")[1];
  return genericPhoto;
}
function imageUrl(product) {
  const source = product.image;
  if (source && /^https?:\/\//i.test(source)) return source;
  if (source && !/^uploads\//i.test(source)) return source;
  if (source && OLD_MEDIA_BASE) return `${OLD_MEDIA_BASE.replace(/\/$/, "")}/${source.replace(/^\//, "")}`;
  return photoFor(product.category);
}

function renderMenu() {
  const categoryCounts = new Map(menuData.categories.map(category => [category.id, 0]));
  menuData.products.forEach(product => categoryCounts.set(product.category, (categoryCounts.get(product.category) || 0) + 1));
  elements.categoryList.innerHTML = menuData.categories.map((category, index) => {
    const count = categoryCounts.get(category.id) || 0;
    const image = photoFor(category.id);
    const primary = categoryName(category);
    const secondary = lang === "ar" ? category.nameEn : category.nameAr;
    const isActive = activeCategory === category.id;
    return `<button class="category-tile${isActive ? " active" : ""}" type="button" data-category="${escapeHtml(category.id)}" aria-pressed="${isActive}" style="--category-photo:url('${escapeHtml(image)}')">
      <span class="category-tile-index">${String(index + 1).padStart(2, "0")}</span>
      <span class="category-tile-copy"><strong>${escapeHtml(primary)}</strong><small>${escapeHtml(secondary)}</small></span>
      <span class="category-tile-count">${new Intl.NumberFormat(lang === "ar" ? "ar-EG" : "en-US").format(count)} ${lang === "ar" ? "صنف" : count === 1 ? "item" : "items"}</span>
      <span class="category-tile-arrow" aria-hidden="true">↙</span>
    </button>`;
  }).join("");

  const categoryIndex = menuData.categories.findIndex(category => category.id === activeCategory);
  const category = menuData.categories[categoryIndex];
  if (!category) {
    elements.categorySections.innerHTML = `<div class="choose-category"><span>✦</span><p>${escapeHtml(words[lang].chooseCategory)}</p></div>`;
  } else {
    const products = menuData.products.filter(product => product.category === category.id);
    const primary = categoryName(category);
    const cards = products.map((product, index) => {
    const names = productName(product);
    const image = imageUrl(product);
      return `<article class="product-card" style="animation-delay:${Math.min(index, 8) * 30}ms">
      <div class="product-image">
        <img src="${escapeHtml(image)}" alt="${escapeHtml(names.primary)}" loading="lazy" data-fallback="${escapeHtml(photoFor(product.category))}">
        <span class="image-shade"></span>
      </div>
      <div class="product-info">
        <h4>${escapeHtml(names.primary)}</h4>
        <span class="product-name-en" lang="${lang === "ar" ? "en" : "ar"}">${escapeHtml(names.secondary)}</span>
        <p class="product-desc">${escapeHtml(product.description)}</p>
        <div class="product-foot"><span class="product-price">${formatMoney(product.price)}</span>
          <button class="add-to-cart" type="button" data-add="${product.id}" aria-label="${lang === "ar" ? "أضف " : "Add "}${escapeHtml(names.primary)}">+</button>
        </div>
      </div>
    </article>`;
    }).join("");
    elements.categorySections.innerHTML = `<section class="category-section selected-category-section" id="menu-results" aria-labelledby="category-title-${categoryIndex}">
      <div class="category-section-head"><div><span class="active-category-en">${escapeHtml(lang === "ar" ? category.nameEn : category.nameAr)}</span><h3 id="category-title-${categoryIndex}">${escapeHtml(primary)}</h3></div>
      <span class="category-section-count">${String(categoryIndex + 1).padStart(2, "0")} <i>/</i> ${String(menuData.categories.length).padStart(2, "0")} <b>·</b> ${products.length} ${lang === "ar" ? "منتجات" : "items"}</span></div>
      <div class="category-products" aria-label="${escapeHtml(primary)}">${cards}</div>
    </section>`;
  }

  $$(".product-image img", elements.categorySections).forEach(img => img.addEventListener("error", () => {
    if (img.dataset.failed) { img.style.visibility = "hidden"; return; }
    img.dataset.failed = "1";
    img.src = img.dataset.fallback;
  }, { once: true }));
}

function renderCart() {
  const entries = Object.entries(cart).map(([id, quantity]) => ({ product: menuData.products.find(item => item.id === Number(id)), quantity })).filter(item => item.product && item.quantity > 0);
  const itemCount = entries.reduce((sum, item) => sum + item.quantity, 0);
  const total = entries.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  elements.cartCount.textContent = itemCount > 99 ? "99+" : String(itemCount);
  elements.cartTotal.textContent = formatMoney(total);
  elements.cartEmpty.classList.toggle("show", entries.length === 0);
  elements.checkout.hidden = entries.length === 0;
  elements.cartItems.innerHTML = entries.map(({ product, quantity }) => {
    const names = productName(product);
    return `<div class="cart-item"><div><p class="cart-item-title">${escapeHtml(names.primary)}</p><p class="cart-item-price">${formatMoney(product.price * quantity)}</p></div>
      <div class="quantity-control"><button type="button" data-quantity="${product.id}" data-delta="-1" aria-label="${lang === "ar" ? "تقليل العدد" : "Decrease quantity"}">−</button><span>${quantity}</span><button type="button" data-quantity="${product.id}" data-delta="1" aria-label="${lang === "ar" ? "زيادة العدد" : "Increase quantity"}">+</button></div></div>`;
  }).join("");
}

function applyLanguage() {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  $("#languageToggle").textContent = lang === "ar" ? "EN" : "عربي";
  $$("[data-i18n]").forEach(element => {
    const value = words[lang][element.dataset.i18n];
    if (value !== undefined) element.innerHTML = value;
  });
  $$("[data-i18n-placeholder]").forEach(element => {
    const value = words[lang][element.dataset.i18nPlaceholder];
    if (value !== undefined) element.placeholder = value;
  });
  $$(".checkout-form option").forEach(option => { option.textContent = option.dataset[lang] || option.textContent; });
  renderMenu();
  renderCart();
}

function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  saveCart(); renderCart(); showToast(words[lang].added);
}
function updateQuantity(id, delta) {
  cart[id] = (cart[id] || 0) + delta;
  if (cart[id] <= 0) delete cart[id];
  saveCart(); renderCart();
}
function openDrawer() {
  elements.overlay.hidden = false;
  requestAnimationFrame(() => elements.overlay.classList.add("visible"));
  elements.drawer.classList.add("open");
  elements.drawer.setAttribute("aria-hidden", "false");
  elements.drawer.inert = false;
  document.body.style.overflow = "hidden";
  $("#closeCart").focus();
}
function closeDrawer() {
  elements.overlay.classList.remove("visible");
  elements.drawer.classList.remove("open");
  elements.drawer.setAttribute("aria-hidden", "true");
  elements.drawer.inert = true;
  document.body.style.overflow = "";
  setTimeout(() => { if (!elements.drawer.classList.contains("open")) elements.overlay.hidden = true; }, 260);
  $("#openCart").focus();
}
function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => elements.toast.classList.remove("visible"), 1900);
}

function sendWhatsApp(event) {
  event.preventDefault();
  const form = new FormData(elements.checkout);
  const entries = Object.entries(cart).map(([id, quantity]) => ({ product: menuData.products.find(item => item.id === Number(id)), quantity })).filter(item => item.product && item.quantity > 0);
  if (!entries.length) return;
  const total = entries.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const lines = [
    `*${words[lang].orderIntro}*`,
    "",
    ...entries.map(({ product, quantity }) => `• ${product.nameAr || product.nameEn} — ${quantity} × ${formatMoney(product.price)} = ${formatMoney(product.price * quantity)}`),
    "",
    `*${words[lang].orderTotal}: ${formatMoney(total)}*`,
    "",
    `*${words[lang].orderName}:* ${form.get("customerName")}`,
    `*${words[lang].orderPhone}:* ${form.get("customerPhone")}`,
    `*${words[lang].orderTypeLabel}:* ${$("[name=orderType]").selectedOptions[0].textContent}`
  ];
  if (form.get("date")) lines.push(`*${words[lang].orderDate}:* ${form.get("date")}`);
  if (form.get("time")) lines.push(`*${words[lang].orderTime}:* ${form.get("time")}`);
  if (form.get("notes")) lines.push(`*${words[lang].orderNotes}:* ${form.get("notes")}`);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

async function init() {
  try {
    const response = await fetch("./menu-data.json");
    if (!response.ok) throw new Error("Menu data could not be loaded");
    menuData = await response.json();
    applyLanguage();
    $("#year").textContent = new Date().getFullYear();
    const dateInput = $("[name=date]");
    const now = new Date();
    dateInput.min = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
  } catch (error) {
    console.error(error);
    elements.categorySections.innerHTML = `<div class="empty-state"><span>✦</span><p>${escapeHtml(words[lang].fallbackSearch)}</p></div>`;
  }
}

elements.categoryList.addEventListener("click", event => {
  const categoryButton = event.target.closest("[data-category]");
  if (!categoryButton || !menuData) return;
  activeCategory = categoryButton.dataset.category;
  renderMenu();
});
elements.categorySections.addEventListener("click", event => {
  const button = event.target.closest("[data-add]");
  if (button) addToCart(button.dataset.add);
});
elements.cartItems.addEventListener("click", event => {
  const button = event.target.closest("[data-quantity]");
  if (button) updateQuantity(button.dataset.quantity, Number(button.dataset.delta));
});
$("#openCart").addEventListener("click", openDrawer);
$("#closeCart").addEventListener("click", closeDrawer);
$("#backToMenu").addEventListener("click", () => { closeDrawer(); $("#menu").scrollIntoView({ behavior: "smooth" }); });
elements.overlay.addEventListener("click", closeDrawer);
document.addEventListener("keydown", event => { if (event.key === "Escape" && elements.drawer.classList.contains("open")) closeDrawer(); });
$("#languageToggle").addEventListener("click", () => {
  lang = lang === "ar" ? "en" : "ar";
  localStorage.setItem("tivoli-language", lang);
  applyLanguage();
});
elements.checkout.addEventListener("submit", sendWhatsApp);

init();
