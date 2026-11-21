/* CycleContext – Website-Interaktionen
   Ohne Abhängigkeiten, ohne Tracking. Respektiert "Bewegung reduzieren". */

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

/* Zyklus-Modell (Beispiel: 28 Tage) */
const CYCLE_LENGTH = 28;
const PHASES = [
  { start: 1, end: 5, color: "#ff3b30" },
  { start: 6, end: 12, color: "#34c759" },
  { start: 13, end: 15, color: "#0a84ff" },
  { start: 16, end: 23, color: "#ff9500" },
  { start: 24, end: 28, color: "#ff2d55" },
];
const phaseIndexForDay = (day) => PHASES.findIndex((phase) => day >= phase.start && day <= phase.end);
const wrapDay = (day) => ((((day - 1) % CYCLE_LENGTH) + CYCLE_LENGTH) % CYCLE_LENGTH) + 1;

/* ---------- Header, Menü, Sprache, Jahr ---------- */
const header = $("[data-header]");
const menuButton = $(".menu-button");
const navigation = $(".nav-links");
const progressBar = $(".scroll-progress");

let scrollFrame = 0;
const onScroll = () => {
  scrollFrame = 0;
  const y = window.scrollY;
  header?.classList.toggle("scrolled", y > 12);
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progressBar?.style.setProperty("--progress", max > 0 ? (y / max).toFixed(4) : "0");
};
onScroll();
window.addEventListener("scroll", () => {
  if (!scrollFrame) scrollFrame = requestAnimationFrame(onScroll);
}, { passive: true });

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
document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeMenu(); });

$$("[data-language]").forEach((link) => {
  link.addEventListener("click", () => {
    try { localStorage.setItem("cyclecontext-language", link.dataset.language); } catch (error) { /* privat */ }
  });
});
$$("[data-year]").forEach((item) => { item.textContent = new Date().getFullYear(); });

/* ---------- Reveal beim Scrollen ---------- */
const reveals = $$(".reveal");
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
  }, { threshold: 0.14, rootMargin: "0px 0px -6%" });
  reveals.forEach((item) => observer.observe(item));
}

/* ---------- Parallax ---------- */
const parallaxElements = $$("[data-parallax]");
const compactMotion = window.matchMedia("(max-width: 760px), (pointer: coarse)");
if (!reducedMotion && parallaxElements.length) {
  let frame = 0;
  const update = () => {
    frame = 0;
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const scale = compactMotion.matches ? 0.5 : 1;
    const updates = [];
    parallaxElements.forEach((element) => {
      const bounds = element.getBoundingClientRect();
      if (bounds.bottom < -200 || bounds.top > viewportHeight + 200) return;
      const current = Number.parseFloat(element.style.getPropertyValue("--parallax-y")) || 0;
      const naturalTop = bounds.top - current;
      const progress = Math.max(0, Math.min(1, (viewportHeight - naturalTop) / (viewportHeight + bounds.height)));
      updates.push([element, (progress - 0.5) * (Number.parseFloat(element.dataset.parallax) || 0) * scale]);
    });
    updates.forEach(([element, offset]) => element.style.setProperty("--parallax-y", `${offset.toFixed(2)}px`));
  };
  const request = () => { if (!frame) frame = requestAnimationFrame(update); };
  request();
  window.addEventListener("scroll", request, { passive: true });
  window.addEventListener("resize", request, { passive: true });
  window.addEventListener("load", request, { once: true });
}

/* ---------- Hero: Knopf kreist um das iPhone ---------- */
const orbit = $("[data-orbit]");
if (orbit) {
  const stage = $(".orbit-stage", orbit);
  const ring = $(".orbit-front", orbit);
  const knob = $(".orbit-knob", orbit);
  const dayLabel = $("[data-orbit-day]", orbit);
  const phaseLabel = $("[data-orbit-phase]", orbit);
  const nextLabel = $("[data-orbit-next]", orbit);
  const dot = $("[data-orbit-dot]", orbit);
  const phaseNames = (orbit.dataset.phases || "").split("|");
  const SECONDS_PER_DAY = 1.6;
  const START_DAY = 4;
  const RADIUS = 84 / 100; /* Kreisradius relativ zur halben Ringbreite */

  let shownDay = 0;
  const setDay = (day) => {
    if (day === shownDay) return;
    shownDay = day;
    const index = phaseIndexForDay(day);
    const daysLeft = PHASES[index].end - day + 1;
    dayLabel.textContent = orbit.dataset.dayTemplate.replace("{d}", day);
    phaseLabel.textContent = phaseNames[index] || "";
    nextLabel.textContent = daysLeft === 1
      ? orbit.dataset.nextOne
      : orbit.dataset.nextMany.replace("{n}", daysLeft);
    dot.style.background = PHASES[index].color;
  };

  const place = (dayFloat) => {
    const angle = ((dayFloat - 1) / CYCLE_LENGTH) * Math.PI * 2;
    /* Ring ist per CSS zentriert (negative Margins) – left/top = Mittelpunkt */
    const style = getComputedStyle(ring);
    const cx = parseFloat(style.left);
    const cy = parseFloat(style.top);
    const rx = (parseFloat(style.width) / 2) * RADIUS;
    const ry = (parseFloat(style.height) / 2) * RADIUS;
    const depth = -Math.cos(angle); /* 1 = vorne, -1 = hinten */
    knob.style.setProperty("--kx", `${(cx + rx * Math.sin(angle)).toFixed(1)}px`);
    knob.style.setProperty("--ky", `${(cy - ry * Math.cos(angle)).toFixed(1)}px`);
    knob.style.setProperty("--ks", (0.86 + 0.14 * depth).toFixed(3));
    knob.style.zIndex = depth > 0 ? 4 : 1;
    setDay(wrapDay(Math.floor(dayFloat)));
  };

  let running = false;
  let startTime = 0;
  let rafId = 0;
  const loop = (now) => {
    if (!startTime) startTime = now;
    const elapsed = (now - startTime) / 1000;
    place(START_DAY + 0.5 + elapsed / SECONDS_PER_DAY);
    rafId = requestAnimationFrame(loop);
  };
  const stop = () => { running = false; cancelAnimationFrame(rafId); startTime = 0; };

  place(START_DAY + 0.5);
  window.addEventListener("resize", () => place(shownDay + 0.5), { passive: true });

  if (!reducedMotion) {
    let elapsedBeforePause = 0;
    let visible = true;
    const resume = () => {
      if (running || !visible || document.hidden) return;
      running = true;
      startTime = 0;
      const offset = elapsedBeforePause;
      rafId = requestAnimationFrame(function first(now) {
        startTime = now - offset * 1000;
        loop(now);
      });
    };
    const pause = () => {
      if (!running) return;
      elapsedBeforePause = (performance.now() - startTime) / 1000;
      stop();
    };
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        visible ? resume() : pause();
      }).observe(orbit);
    }
    document.addEventListener("visibilitychange", () => (document.hidden ? pause() : resume()));
    resume();
  }

  /* Sanftes Neigen mit der Maus */
  if (finePointer && !reducedMotion) {
    const hero = $(".hero");
    hero?.addEventListener("pointermove", (event) => {
      const bounds = orbit.getBoundingClientRect();
      const x = (event.clientX - (bounds.left + bounds.width / 2)) / bounds.width;
      const y = (event.clientY - (bounds.top + bounds.height / 2)) / bounds.height;
      stage.style.setProperty("--tilt-y", `${(x * 8).toFixed(2)}deg`);
      stage.style.setProperty("--tilt-x", `${(-y * 6).toFixed(2)}deg`);
    });
    hero?.addEventListener("pointerleave", () => {
      stage.style.setProperty("--tilt-y", "0deg");
      stage.style.setProperty("--tilt-x", "0deg");
    });
  }
}

/* ---------- Zyklus-Explorer: ziehbarer Ring ---------- */
const explorer = $("[data-explorer]");
if (explorer) {
  const dialWrap = $(".explorer-dial", explorer);
  const dial = $("[data-dial]", explorer);
  const knob = $("[data-knob]", explorer);
  const dayOut = $("[data-dial-day]", explorer);
  const segments = $$(".seg", dial);
  const tabs = $$("[data-tab]", explorer);
  const panels = $$("[data-panel]", explorer);
  const ticks = $(".dial-ticks", dial);
  const SVG_NS = "http://www.w3.org/2000/svg";

  /* 28 Tagesmarken */
  const tickNodes = [];
  for (let day = 1; day <= CYCLE_LENGTH; day += 1) {
    const angle = ((day - 0.5) / CYCLE_LENGTH) * Math.PI * 2;
    const tick = document.createElementNS(SVG_NS, "circle");
    tick.setAttribute("cx", (100 + 62 * Math.sin(angle)).toFixed(2));
    tick.setAttribute("cy", (100 - 62 * Math.cos(angle)).toFixed(2));
    tick.setAttribute("r", "1.3");
    ticks.appendChild(tick);
    tickNodes.push(tick);
  }

  let currentDay = 4;
  let currentPhase = -1;

  const positionKnob = (dayFloat) => {
    const angle = ((dayFloat - 1) / CYCLE_LENGTH) * Math.PI * 2;
    knob.style.left = `${50 + 42 * Math.sin(angle)}%`;
    knob.style.top = `${50 - 42 * Math.cos(angle)}%`;
  };

  const setDay = (day, { moveKnob = true } = {}) => {
    day = wrapDay(day);
    currentDay = day;
    if (moveKnob) positionKnob(day + 0.5);
    dayOut.textContent = day;
    tickNodes.forEach((tick, index) => tick.classList.toggle("is-today", index + 1 === day));

    const phase = phaseIndexForDay(day);
    const name = panels[phase]?.dataset.name || "";
    knob.setAttribute("aria-valuenow", String(day));
    knob.setAttribute("aria-valuetext", (knob.dataset.valuetext || "{d}").replace("{d}", day).replace("{p}", name));

    if (phase !== currentPhase) {
      currentPhase = phase;
      explorer.dataset.active = String(phase + 1);
      segments.forEach((segment, index) => segment.classList.toggle("is-active", index === phase));
      tabs.forEach((tab, index) => tab.setAttribute("aria-pressed", String(index === phase)));
      panels.forEach((panel, index) => panel.classList.toggle("is-active", index === phase));
    }
  };

  const dayFromPointer = (event) => {
    const bounds = dial.getBoundingClientRect();
    const dx = event.clientX - (bounds.left + bounds.width / 2);
    const dy = event.clientY - (bounds.top + bounds.height / 2);
    let angle = Math.atan2(dx, -dy);
    if (angle < 0) angle += Math.PI * 2;
    return 1 + (angle / (Math.PI * 2)) * CYCLE_LENGTH; /* stetiger Wert 1 … 29 */
  };

  let dragging = false;
  let introRunning = false;
  const markTouched = () => { dialWrap.classList.add("touched"); introRunning = false; };

  const onDown = (event) => {
    if (event.button !== undefined && event.button !== 0) return;
    markTouched();
    dragging = true;
    dialWrap.classList.add("dragging");
    dialWrap.setPointerCapture?.(event.pointerId);
    const value = dayFromPointer(event);
    positionKnob(value);
    setDay(Math.floor(value), { moveKnob: false });
    event.preventDefault();
  };
  const onMove = (event) => {
    if (!dragging) return;
    const value = dayFromPointer(event);
    positionKnob(value);
    setDay(Math.floor(value), { moveKnob: false });
  };
  const onUp = () => {
    if (!dragging) return;
    dragging = false;
    dialWrap.classList.remove("dragging");
    positionKnob(currentDay + 0.5);
    knob.focus({ preventScroll: true });
  };
  dialWrap.addEventListener("pointerdown", onDown);
  dialWrap.addEventListener("pointermove", onMove);
  dialWrap.addEventListener("pointerup", onUp);
  dialWrap.addEventListener("pointercancel", onUp);

  knob.addEventListener("keydown", (event) => {
    const keys = { ArrowRight: 1, ArrowUp: 1, ArrowLeft: -1, ArrowDown: -1, PageUp: 7, PageDown: -7 };
    let next = null;
    if (event.key in keys) next = currentDay + keys[event.key];
    if (event.key === "Home") next = 1;
    if (event.key === "End") next = CYCLE_LENGTH;
    if (next === null) return;
    event.preventDefault();
    markTouched();
    setDay(next);
    positionKnob(currentDay + 0.5);
  });

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      markTouched();
      animateTo(Number(tab.dataset.day));
    });
  });

  /* Weiche Animation zu einem Zieltag (kürzester Weg vorwärts) */
  let animFrame = 0;
  function animateTo(targetDay, duration = 650) {
    cancelAnimationFrame(animFrame);
    if (reducedMotion) { setDay(targetDay); positionKnob(currentDay + 0.5); return; }
    const from = currentDay + 0.5;
    let to = targetDay + 0.5;
    let delta = to - from;
    if (delta > CYCLE_LENGTH / 2) delta -= CYCLE_LENGTH;
    if (delta < -CYCLE_LENGTH / 2) delta += CYCLE_LENGTH;
    const begin = performance.now();
    const ease = (t) => 1 - Math.pow(1 - t, 3);
    const step = (now) => {
      const t = Math.min(1, (now - begin) / duration);
      let value = from + delta * ease(t);
      value = ((value - 1) % CYCLE_LENGTH + CYCLE_LENGTH) % CYCLE_LENGTH + 1;
      positionKnob(value);
      setDay(Math.floor(value), { moveKnob: false });
      if (t < 1) animFrame = requestAnimationFrame(step);
      else positionKnob(currentDay + 0.5);
    };
    animFrame = requestAnimationFrame(step);
  }

  setDay(currentDay);
  positionKnob(currentDay + 0.5);

  /* Einmalige Einladung: der Punkt läuft einmal durch den Zyklus */
  if (!reducedMotion && "IntersectionObserver" in window) {
    const introObserver = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      introObserver.disconnect();
      introRunning = true;
      const begin = performance.now();
      const duration = 3200;
      const startValue = 1;
      const total = CYCLE_LENGTH + 3; /* einmal rum und bis Tag 4 */
      const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
      const step = (now) => {
        if (!introRunning) return;
        const t = Math.min(1, (now - begin) / duration);
        let value = startValue + total * ease(t) + 0.5;
        value = ((value - 1) % CYCLE_LENGTH + CYCLE_LENGTH) % CYCLE_LENGTH + 1;
        positionKnob(value);
        setDay(Math.floor(value), { moveKnob: false });
        if (t < 1) requestAnimationFrame(step);
        else { introRunning = false; positionKnob(currentDay + 0.5); }
      };
      requestAnimationFrame(step);
    }, { threshold: 0.5 });
    introObserver.observe(dialWrap);
  }
}

/* ---------- Perspektiven-Umschalter ---------- */
$$("[data-switch]").forEach((section) => {
  const buttons = $$("[data-view]", section);
  const select = (button) => {
    const view = button.dataset.view;
    section.dataset.view = view;
    buttons.forEach((item) => {
      const active = item === button;
      item.setAttribute("aria-selected", String(active));
      item.tabIndex = active ? 0 : -1;
      const panel = document.getElementById(item.getAttribute("aria-controls"));
      if (panel) {
        panel.hidden = !active;
        panel.classList.toggle("is-active", active);
      }
    });
  };
  buttons.forEach((button, index) => {
    button.addEventListener("click", () => select(button));
    button.addEventListener("keydown", (event) => {
      const move = { ArrowRight: 1, ArrowLeft: -1 }[event.key];
      if (!move) return;
      event.preventDefault();
      const target = buttons[(index + move + buttons.length) % buttons.length];
      target.focus();
      select(target);
    });
  });
  section.dataset.view = "self";
  buttons.forEach((item, index) => { item.tabIndex = index === 0 ? 0 : -1; });
});

/* ---------- Spotlight auf Karten ---------- */
if (finePointer) {
  $$("[data-spotlight]").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const bounds = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${event.clientX - bounds.left}px`);
      card.style.setProperty("--my", `${event.clientY - bounds.top}px`);
    });
  });
}
