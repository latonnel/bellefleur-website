/* ==========================================================
   EDIT YOUR BUSINESS DETAILS HERE. Everything below fills
   into the page automatically. Leave "" to hide an item.
   ========================================================== */
const SITE = {
  booksyUrl: "",   // e.g. "https://booksy.com/en-us/XXXX_bellefleur-unisex-salon"
  phone: "",       // e.g. "(555) 555-5555"
  email: "",       // e.g. "hello@example.com"
  address: "",     // e.g. "123 Main St, City, ST 00000"
  hours: [         // e.g. ["Mon–Fri: 9am–7pm", "Sat: 9am–5pm", "Sun: Closed"]
  ],
  social: { instagram: "", facebook: "", tiktok: "" }  // full profile URLs
};

/* ---------- Do not need to edit below this line ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

// Booking links
$$(".book-link").forEach(a => {
  if (SITE.booksyUrl) a.href = SITE.booksyUrl;
  else { a.href = "#contact"; a.removeAttribute("target"); }
});

// Contact details
const setText = (key, val, href) => $$(`[data-bind="${key}"]`).forEach(el => {
  if (!val) return;
  el.textContent = val;
  if (href && el.tagName === "A") el.href = href;
});
setText("address", SITE.address);
setText("phone", SITE.phone, "tel:" + SITE.phone.replace(/[^\d+]/g, ""));
setText("email", SITE.email, "mailto:" + SITE.email);
if (SITE.hours.length) $("#hours").innerHTML = SITE.hours.map(h => `<li>${h.replace(/</g, "&lt;")}</li>`).join("");

// Social links (header-less: contact + footer)
const names = { instagram: "Instagram", facebook: "Facebook", tiktok: "TikTok" };
$$("[data-social-list]").forEach(ul => {
  ul.innerHTML = Object.keys(names).map(k => SITE.social[k]
    ? `<li><a href="${SITE.social[k]}" target="_blank" rel="noopener">${names[k]}</a></li>`
    : `<li><span class="pending">${names[k]} (add link)</span></li>`).join("");
});

// Map
$("#map").src = SITE.address
  ? "https://www.google.com/maps?q=" + encodeURIComponent("Bellefleur Unisex Salon " + SITE.address) + "&output=embed"
  : "https://www.google.com/maps?q=" + encodeURIComponent("United States") + "&output=embed";

$("#year").textContent = new Date().getFullYear();

// Mobile navigation
const toggle = $(".nav-toggle"), nav = $("#nav");
const closeNav = () => { nav.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); };
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});
nav.addEventListener("click", e => { if (e.target.tagName === "A") closeNav(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeNav(); });

// Header style after scrolling
const header = $(".site-header");
const onScroll = () => header.classList.toggle("scrolled", scrollY > 40);
addEventListener("scroll", onScroll, { passive: true }); onScroll();
