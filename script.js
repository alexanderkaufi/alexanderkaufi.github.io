const header = document.querySelector("[data-header]");
const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".nav-links");

const updateHeader = () => header?.classList.toggle("scrolled", window.scrollY > 12);
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const closeMenu = () => {
  menuButton?.setAttribute("aria-expanded", "false");
  navigation?.classList.remove("open");
  document.body.classList.remove("menu-open");
};

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  navigation?.classList.toggle("open", !isOpen);
  document.body.classList.toggle("menu-open", !isOpen);
});

navigation?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

document.querySelectorAll("[data-language]").forEach((link) => {
  link.addEventListener("click", () => localStorage.setItem("cyclecontext-language", link.dataset.language));
});

document.querySelectorAll("[data-year]").forEach((item) => {
  item.textContent = new Date().getFullYear();
});

const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
const reducedMotion = motionPreference.matches;
const reveals = document.querySelectorAll(".reveal");

const parallaxElements = [...document.querySelectorAll("[data-parallax]")];
const compactMotion = window.matchMedia("(max-width: 760px), (pointer: coarse)");
if (!reducedMotion && parallaxElements.length && "requestAnimationFrame" in window) {
  let parallaxFrame = 0;

  const updateParallax = () => {
    parallaxFrame = 0;
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const motionScale = compactMotion.matches ? 0.5 : 1;
    const updates = [];

    parallaxElements.forEach((element) => {
      const bounds = element.getBoundingClientRect();
      if (bounds.bottom < -120 || bounds.top > viewportHeight + 120) return;

      const currentOffset = Number.parseFloat(element.style.getPropertyValue("--parallax-y")) || 0;
      const naturalTop = bounds.top - currentOffset;
      const visibleProgress = Math.max(0, Math.min(1, (viewportHeight - naturalTop) / (viewportHeight + bounds.height)));
      const strength = Number.parseFloat(element.dataset.parallax) || 0;
      updates.push([element, (visibleProgress - 0.5) * strength * motionScale]);
    });

    updates.forEach(([element, offset]) => {
      element.style.setProperty("--parallax-y", `${offset.toFixed(2)}px`);
    });
  };

  const requestParallaxUpdate = () => {
    if (!parallaxFrame) parallaxFrame = window.requestAnimationFrame(updateParallax);
  };

  requestParallaxUpdate();
  window.addEventListener("scroll", requestParallaxUpdate, { passive: true });
  window.addEventListener("resize", requestParallaxUpdate, { passive: true });
  window.addEventListener("load", requestParallaxUpdate, { once: true });
}

if (reducedMotion || !("IntersectionObserver" in window)) {
  reveals.forEach((item) => item.classList.add("visible"));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -6%" });
  reveals.forEach((item) => observer.observe(item));
}
