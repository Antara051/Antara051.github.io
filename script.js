// ===== Theme (Auto + remember) =====
const root = document.documentElement;
const themeBtn = document.getElementById("themeBtn");

function setTheme(mode) {
  if (mode === "light") root.setAttribute("data-theme", "light");
  else root.removeAttribute("data-theme");
  localStorage.setItem("theme", mode);
}

function initTheme() {
  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") {
    setTheme(saved);
    return;
  }
  // Auto: follow system preference
  const prefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
  setTheme(prefersLight ? "light" : "dark");
}

themeBtn?.addEventListener("click", () => {
  const current = root.getAttribute("data-theme") === "light" ? "light" : "dark";
  setTheme(current === "light" ? "dark" : "light");
});

initTheme();

// ===== Footer year =====
document.getElementById("year").textContent = new Date().getFullYear();

// ===== Mobile drawer =====
const drawer = document.getElementById("drawer");
const menuBtn = document.getElementById("menuBtn");
const closeDrawerBtn = document.getElementById("closeDrawerBtn");

function openDrawer() {
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
}
function closeDrawer() {
  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");
}

menuBtn?.addEventListener("click", openDrawer);
closeDrawerBtn?.addEventListener("click", closeDrawer);

drawer?.addEventListener("click", (e) => {
  if (e.target === drawer) closeDrawer();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeDrawer();
});

// Close drawer when clicking a link
drawer?.querySelectorAll("a").forEach(a => a.addEventListener("click", closeDrawer));

// ===== Project filter + search =====
const grid = document.getElementById("projectGrid");
const filterBtns = document.querySelectorAll(".pill-btn");
const searchInput = document.getElementById("searchInput");

let activeFilter = "all";

function applyFilters() {
  const q = (searchInput?.value || "").trim().toLowerCase();
  const cards = grid?.querySelectorAll(".project") || [];

  cards.forEach(card => {
    const tags = (card.getAttribute("data-tags") || "").toLowerCase();
    const text = (card.innerText || "").toLowerCase();

    const matchFilter = activeFilter === "all" ? true : tags.includes(activeFilter);
    const matchSearch = q.length === 0 ? true : (text.includes(q) || tags.includes(q));

    card.style.display = (matchFilter && matchSearch) ? "" : "none";
  });
}

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activeFilter = btn.getAttribute("data-filter") || "all";
    applyFilters();
  });
});

searchInput?.addEventListener("input", applyFilters);

// ===== Gallery lightbox =====
const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lbImg");
const lbClose = document.getElementById("lbClose");

function openLightbox(src) {
  lbImg.src = src;
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
}

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  lbImg.src = "";
}

document.querySelectorAll(".gitem").forEach(btn => {
  btn.addEventListener("click", () => openLightbox(btn.getAttribute("data-src")));
});

lbClose?.addEventListener("click", closeLightbox);
lightbox?.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});