(() => {
  const root = document.documentElement;
  root.classList.add("has-js");

  const translations = {
    de: {
      title: "Alexander Kaufmann — Apps, Web & Digitale Werkzeuge",
      description: "Portfolio von Alexander Kaufmann: Native Apple-Apps (Gymmix, CycleContext, CardDisplay, DataDisplay), Webdesign-Projekte und digitale Lern- und KI-Werkzeuge.",
      skip: "Zum Inhalt springen",
      "nav.label": "Hauptnavigation",
      "nav.open": "Navigation",
      "nav.overview": "Überblick",
      "nav.projects": "Projekte",
      "nav.approach": "Arbeitsweise",
      "nav.contact": "Kontakt",
      "nav.cta": "Zu den Projekten",
      "nav.workflow": "Zu den Bereichen springen",
      "language.label": "Sprache",
      "theme.label": "Farbschema",
      "theme.system": "System",
      "theme.light": "Hell",
      "theme.dark": "Dunkel",

      "hero.platform": "Portfolio · iOS, Mac & Web",
      "hero.title.one": "Ich mache Ideen",
      "hero.title.two": "digital erlebbar.",
      "hero.lead": "Ich entwickle durchdachte Apps für iPhone, iPad, Apple Watch und Mac sowie moderne Websites und Werkzeuge – reduziert auf das Wesentliche, zuverlässig im Alltag.",
      "hero.cta.projects": "Projekte entdecken",
      "hero.cta.github": "GitHub-Profil",
      "hero.meta1": "12 ausgewählte Projekte",
      "hero.meta2": "iOS, Watch, Mac & iPad",
      "hero.meta3": "Webdesign & Tools",
      "hero.replay": "Abspielen",
      "hero.replayAria": "Animation erneut abspielen",
      "hero.caption": "Ausgewählte App- und Webprojekte — von der Idee bis zum Release",

      "workflow.apps": "Apple Apps ansehen",
      "workflow.web": "Web & Plattformen",
      "workflow.tools": "Bildung & KI-Tools",
      "workflow.highlights": "Ausgewählte Einblicke",

      "overview.title": "Von der Idee zur klaren Anwendung.",
      "overview.copy": "Jedes Projekt startet mit einer konkreten Alltagsfrage — vom strukturierten Krafttraining im Studio über verständliche Datenvisualisierung bis hin zu datenschutzfreundlichen Lern- und Webwerkzeugen.",
      "overview.note": "Alle Projekte sind ohne unnötigen Ballast entwickelt — mit Fokus auf klare Benutzeroberflächen, hohe Geschwindigkeit und lokale Datenspeicherung.",
      "stats.appsTitle": "App Store",
      "stats.appsVal": "3 iOS & Watch Apps",
      "stats.webTitle": "Web & Mac",
      "stats.webVal": "5 Plattformen",
      "stats.toolsTitle": "Bildung & KI",
      "stats.toolsVal": "4 Browser-Tools",

      "highlights.aria": "Ausgewählte Einblicke",
      "scene.cycle.cat": "iOS-App · Gesundheit",
      "scene.cycle.title": "CycleContext. Klar und privat.",
      "scene.cycle.copy": "Übersetzt einen geschätzten Zyklusstand in verständlichen Alltagskontext. Profile und Einträge bleiben komplett ohne Account lokal auf deinem iPhone.",
      "scene.cycle.badge": "100 % Lokal",
      "scene.cycle.caption": "Heute-Ansicht · iPhone & iPad",

      "scene.gymmix.cat": "iOS & Apple Watch · Fitness",
      "scene.gymmix.title": "Gymmix im Studio.",
      "scene.gymmix.copy": "Plane dein Krafttraining, protokolliere Gewichte und Wiederholungen direkt auf iPhone oder Apple Watch und verfolge deine langfristige Entwicklung – in 37 Sprachen.",
      "scene.gymmix.m1": "Übungen",
      "scene.gymmix.m2": "Geräte",
      "scene.gymmix.m3": "Sprachen",
      "scene.gymmix.caption": "Trainingsplanung & Online-Handbuch",

      "projects.eyebrow": "Alle Arbeiten",
      "projects.title": "Projekte im Überblick",
      "projects.subtitle": "Zwölf Projekte aus Apps, Web und digitalen Werkzeugen — mit echten Einblicken und direkten Links.",
      "filter.label": "Projekte nach Bereich filtern",
      "filter.all": "Alle",
      "filter.apps": "iOS & Mac",
      "filter.web": "Web",
      "filter.tools": "Bildung & KI",

      "badge.appstore": "App Store",
      "badge.new": "Neu",
      "badge.preview": "Vorschau",
      "store.open": "Im App Store",
      "store.kicker": "Laden im",
      "store.name": "App Store",
      "link.moreApp": "Mehr zur App",
      "link.morePreview": "Mehr zur Vorschau",
      "link.projectSite": "Projektseite öffnen",
      "gymmix.handbook": "Handbuch",

      "gymmixApp.category": "Fitness & Training",
      "gymmixApp.platforms": "iPhone & Apple Watch · 37 Sprachen",
      "gymmixApp.description": "Strukturieren Sie Ihr Krafttraining im Studio oder zu Hause. Erstellen Sie individuelle Trainingspläne, erfassen Sie Sätze, Gewichte sowie Ausführungsqualität und behalten Sie Volumen, Maximallasten und Körpermaße im Blick.",
      "gymmixApp.f1.t": "Trainingspläne",
      "gymmixApp.f1.d": "Geräte, freie Gewichte & eigene Übungen flexibel kombinieren.",
      "gymmixApp.f2.t": "Apple Watch",
      "gymmixApp.f2.d": "Sätze, Gewichte und Pausenzeiten direkt am Handgelenk steuern.",
      "gymmixApp.f3.t": "Fortschritt",
      "gymmixApp.f3.d": "Volumen, Maximalkraft und Entwicklung langfristig auswerten.",

      "cycle.category": "Gesundheit & Orientierung",
      "cycle.description": "Verstehen Sie den Menstruationszyklus im Alltag besser: Dokumentieren Sie Ihren eigenen Zyklus oder begleiten Sie eine nahestehende Person respektvoll – komplett ohne Account, lokal auf Ihrem Gerät.",
      "cycle.f1": "Getrennte Profile & kalendarische Einordnung",
      "cycle.f2": "100 % lokale Datenspeicherung · iPhone & iPad",

      "carddisplay.category": "Wirtschaft & Produktivität",
      "carddisplay.description": "Digitale Visitenkarten auf dem iPhone: Bestehende Karten per Kamera erfassen, Vorder- und Rückseite im flexiblen Karteneditor mit QR-Codes gestalten und im Vollbild teilen.",
      "carddisplay.f1": "QR-Codes für vCards, Websites & Kontakt",
      "carddisplay.f2": "Lokale Speicherung · PNG-Export & Share",

      "datadisplay.category": "Mac & iPad · Datenvisualisierung",
      "datadisplay.description": "Von der Tabelle zur Präsentation: CSV-, Excel- oder Numbers-Dateien importieren, Verläufe im Dashboard vergleichen und ausgewählte Diagramme direkt auf eine Folie übernehmen.",
      "datadisplay.boxTitle": "Für Mac und iPad entwickelt",
      "datadisplay.f1": "Direkter Import von Tabellen und Arbeitsmappen",
      "datadisplay.f2": "Vom Dashboard nahtlos in die Folien-Präsentation",

      "bento.category": "Eigenes Webprojekt · Produktdesign",
      "bento.description": "Mein Bento-Software-Webprojekt mit 3D-Animationen, Plattform-Filterung, interaktiver Produktvorschau und einer klaren Präsentation der eigenen Apps.",
      "bento.f1": "3D-Box-Video & strukturierte Bento-Architektur",
      "bento.f2": "Live-Filterung nach Plattform & direkte Store-Links",

      "gallery.category": "Webplattform · Kunst",
      "gallery.description": "Eine Galerie-Website für Kunst aus Nunavut, Kanada. Neue Arbeiten erscheinen automatisch aus dem Instagram-Auftritt der Galerie.",

      "grow.category": "Web · Designbeispiel",
      "grow.description": "Ein atmosphärisches Website-Beispiel mit Pflanzenmotiven, vertikalen Übergängen und mehrschichtigen Parallax-Effekten.",

      "heat.category": "Konzept · Web-Rechner",
      "heat.title": "Wärmekostenrechner",
      "heat.description": "Ein interaktiver Entwurf, der die Kosten von Gasheizung und Wärmepumpe anhand eigener Annahmen und Verbrauchswerte vergleicht.",

      "kluug.category": "Web-App · Bildung",
      "kluug.status": "Prototyp",
      "kluug.description": "Eine Lern-App für Klasse 5 bis 8 mit Lernpfaden, Pizza-Bäckerei, Quiz-Quests und Fiete als Tutor.",
      "kluug.f2": "Quiz-Quests mit XP, Abzeichen & Tutor Fiete",

      "credo.category": "Web · Wissen",
      "credo.description": "Texte zum orthodoxen Glaubensbekenntnis und zur Katechese strukturiert, lesefreundlich und digital zugänglich gemacht.",

      "luv.category": "Web-App · Bildung",
      "luv.description": "Eine Browser-App zum strukturierten Erstellen, Verwalten und Drucken von Leistungs- und Verhaltensbeurteilungen.",

      "transcript.category": "Tool · Sprache & KI",
      "transcript.title": "Transkript",
      "transcript.description": "Ein Werkzeug zum Transkribieren, Strukturieren und Übersetzen von YouTube-Videos in Wissensdokumente mit KI-Unterstützung.",

      "preview.gymmixApp": "Gymmix Trainings-App im Fitnessstudio",
      "preview.cycle": "CycleContext Heute-Ansicht",
      "preview.carddisplay": "CardDisplay Visitenkarten-Editor",
      "preview.datadisplay": "DataDisplay Datenvisualisierung",
      "preview.bento": "Bento Software Webprojekt",
      "preview.gallery": "Kunstgalerie Nunavut Website",
      "preview.grow": "Grow Pflanzen-Designbeispiel",
      "preview.heating": "Wärmekostenrechner Konzept",
      "preview.ready": "Bereit für heute?",
      "preview.path": "Mathe · Klasse 5–8 · Brüche visuell verstehen",
      "preview.credoHeading": "Nizäno-Konstantinopolitanisches Glaubensbekenntnis",
      "preview.terms": "Erklärungen zu Begriffen und Themen",
      "preview.luvHeading": "Leistungs- und Verhaltensbeurteilung",
      "preview.luvAction": "Lokal im Browser speichern · Laden · Drucken",
      "preview.transcriptHeading": "YouTube-Wissensdateien im Handumdrehen erzeugen",
      "preview.transcriptStep": "Setup · Transkription · KI-Übersetzung",

      "about.eyebrow": "Arbeitsweise",
      "about.title": "Gute Software macht Dinge einfacher.",
      "about.subtitle": "Ich bin Alexander Kaufmann. Zwischen nativer Apple-Entwicklung und modernem Webdesign entstehen Werkzeuge, die im Alltag sofort verständlich sind.",
      "service1.title": "Mobile & Desktop Apps",
      "service1.desc": "Von der ersten Konzeption über die Benutzeroberfläche bis zur Veröffentlichung im App Store: Durchdachte Apps für iPhone, Apple Watch, iPad und Mac.",
      "service1.cta": "Apps ansehen",
      "service2.title": "Webauftritt & Produktdesign",
      "service2.desc": "Übersichtliche, moderne Websites mit ruhiger Typografie, feiner Tiefenstaffelung und flüssiger Darstellung auf allen Geräten.",
      "service2.cta": "Webprojekte zeigen",
      "service3.title": "Bildung & Alltagstools",
      "service3.desc": "Interaktive Lern-Apps, Vergleichsrechner und KI-gestützte Sprachwerkzeuge, die komplexe Abläufe auf das Wesentliche reduzieren.",
      "service3.cta": "Tools entdecken",

      "closing.title": "Alexander Kaufmann.",
      "closing.copy": "Entwickler für iOS, macOS und das Web. Alle veröffentlichten Projekte und Quellcodes findest du gesammelt auf GitHub.",
      "closing.github": "GitHub-Profil öffnen ↗",
      "contact.title": "Kontakt & Austausch",
      "contact.copy": "Du hast eine Projektidee im Kopf oder möchtest Feedback zu einer der Apps geben? Schreib mir gerne direkt.",
      "contact.email": "E-Mail schreiben",
      "contact.copied": "E-Mail kopiert ✓",

      "footer.links": "Links",
      "footer.email": "E-Mail",
      "footer.backToTop": "Zurück nach oben"
    },
    en: {
      title: "Alexander Kaufmann — Apps, Web & Digital Tools",
      description: "Portfolio of Alexander Kaufmann: native Apple apps (Gymmix, CycleContext, CardDisplay, DataDisplay), web design work, and educational/AI browser tools.",
      skip: "Skip to content",
      "nav.label": "Primary navigation",
      "nav.open": "Navigation",
      "nav.overview": "Overview",
      "nav.projects": "Projects",
      "nav.approach": "Approach",
      "nav.contact": "Contact",
      "nav.cta": "View projects",
      "nav.workflow": "Jump to category",
      "language.label": "Language",
      "theme.label": "Appearance",
      "theme.system": "System",
      "theme.light": "Light",
      "theme.dark": "Dark",

      "hero.platform": "Portfolio · iOS, Mac & Web",
      "hero.title.one": "Turning ideas into",
      "hero.title.two": "clear digital products.",
      "hero.lead": "I design and build focused apps for iPhone, iPad, Apple Watch, and Mac alongside modern websites and browser tools — pared down to what matters and dependable every day.",
      "hero.cta.projects": "Explore projects",
      "hero.cta.github": "GitHub profile",
      "hero.meta1": "12 selected projects",
      "hero.meta2": "iOS, Watch, Mac & iPad",
      "hero.meta3": "Web design & tools",
      "hero.replay": "Replay",
      "hero.replayAria": "Replay animation",
      "hero.caption": "Selected app and web projects — from first concept to release",

      "workflow.apps": "View Apple apps",
      "workflow.web": "Web & Platforms",
      "workflow.tools": "Education & AI Tools",
      "workflow.highlights": "Selected Highlights",

      "overview.title": "From a real question to a focused app.",
      "overview.copy": "Every project starts with a concrete everyday challenge — from structured strength training in the gym to clear data visualization and privacy-first learning or browser utilities.",
      "overview.note": "Every build avoids unnecessary clutter — prioritizing clean interfaces, high speed, and local-first storage.",
      "stats.appsTitle": "App Store",
      "stats.appsVal": "3 iOS & Watch apps",
      "stats.webTitle": "Web & Mac",
      "stats.webVal": "5 platforms",
      "stats.toolsTitle": "Education & AI",
      "stats.toolsVal": "4 browser tools",

      "highlights.aria": "Selected highlights",
      "scene.cycle.cat": "iOS App · Health",
      "scene.cycle.title": "CycleContext. Clear and private.",
      "scene.cycle.copy": "Translates an estimated cycle phase into clear everyday context. Profiles and entries remain completely local on your iPhone with zero account required.",
      "scene.cycle.badge": "100% Local",
      "scene.cycle.caption": "Today View · iPhone & iPad",

      "scene.gymmix.cat": "iOS & Apple Watch · Fitness",
      "scene.gymmix.title": "Gymmix in the gym.",
      "scene.gymmix.copy": "Plan strength workouts, log weights and reps directly on iPhone or Apple Watch, and track long-term progress — localized into 37 languages.",
      "scene.gymmix.m1": "Exercises",
      "scene.gymmix.m2": "Devices",
      "scene.gymmix.m3": "Languages",
      "scene.gymmix.caption": "Workout planning & online manual",

      "projects.eyebrow": "All Work",
      "projects.title": "Projects at a Glance",
      "projects.subtitle": "Twelve projects across native apps, web builds, and digital tools — with visual previews and direct links.",
      "filter.label": "Filter projects by area",
      "filter.all": "All",
      "filter.apps": "iOS & Mac",
      "filter.web": "Web",
      "filter.tools": "Education & AI",

      "badge.appstore": "App Store",
      "badge.new": "New",
      "badge.preview": "Preview",
      "store.open": "App Store",
      "store.kicker": "Download on the",
      "store.name": "App Store",
      "link.moreApp": "About this app",
      "link.morePreview": "About this preview",
      "link.projectSite": "Open project site",
      "gymmix.handbook": "Handbook",

      "gymmixApp.category": "Fitness & Training",
      "gymmixApp.platforms": "iPhone & Apple Watch · 37 Languages",
      "gymmixApp.description": "Structure your strength training at the gym or home. Build custom workout splits, record sets, weights, and execution quality, and monitor volume, one-rep maxes, and body metrics.",
      "gymmixApp.f1.t": "Workout Plans",
      "gymmixApp.f1.d": "Combine machines, free weights, and custom exercises flexibly.",
      "gymmixApp.f2.t": "Apple Watch",
      "gymmixApp.f2.d": "Track sets, weights, and rest timers right from your wrist.",
      "gymmixApp.f3.t": "Progression",
      "gymmixApp.f3.d": "Analyze volume, peak strength, and long-term progress cleanly.",

      "cycle.category": "Health & Clarity",
      "cycle.description": "Understand the menstrual cycle in daily life: track your own cycle or thoughtfully support a partner or loved one — completely account-free and stored locally on device.",
      "cycle.f1": "Separate profiles & calendar clarity",
      "cycle.f2": "100% on-device storage · iPhone & iPad",

      "carddisplay.category": "Business & Productivity",
      "carddisplay.description": "Digital business cards on iPhone: capture physical cards by camera, design front and back layouts with QR codes in the editor, and share full-screen on the spot.",
      "carddisplay.f1": "QR codes for vCards, websites & contact info",
      "carddisplay.f2": "Local storage · PNG export & share",

      "datadisplay.category": "Mac & iPad · Data Visualization",
      "datadisplay.description": "From spreadsheet to slide deck: import CSV, Excel, or Numbers files, compare trends in the interactive dashboard, and place selected charts straight onto presentation slides.",
      "datadisplay.boxTitle": "Built for Mac and iPad",
      "datadisplay.f1": "Direct import of tables and multi-sheet workbooks",
      "datadisplay.f2": "Move effortlessly from dashboard to slide layout",

      "bento.category": "Web Project · Product Design",
      "bento.description": "My Bento Software web platform combining 3D motion previews, platform filtering, interactive product cards, and direct routing to all native apps.",
      "bento.f1": "3D box video & structured Bento grid layout",
      "bento.f2": "Live platform filters & direct App Store routing",

      "gallery.category": "Web Platform · Fine Art",
      "gallery.description": "A gallery website dedicated to art from Nunavut, Canada. Newly published artworks appear automatically synced from the gallery's Instagram feed.",

      "grow.category": "Web · Visual Showcase",
      "grow.description": "An atmospheric botanical web showcase built around plant imagery, vertical transitions, and multi-layered scroll parallax.",

      "heat.category": "Concept · Web Calculator",
      "heat.title": "Heating Cost Calculator",
      "heat.description": "An interactive concept comparing gas heating and heat-pump operating costs based on custom usage and efficiency assumptions.",

      "kluug.category": "Web App · Education",
      "kluug.status": "Prototype",
      "kluug.description": "A learning app for grades 5–8 featuring structured paths, a fraction pizza bakery, quiz quests, and Fiete as an interactive tutor.",
      "kluug.f2": "Quiz quests with XP, badges & tutor Fiete",

      "credo.category": "Web · Knowledge",
      "credo.description": "Texts on the Orthodox Creed and catechesis structured into a calm, readable, and accessible digital reference.",

      "luv.category": "Web App · Education",
      "luv.description": "A browser application for drafting, organizing, and printing structured performance and conduct evaluations locally.",

      "transcript.category": "Tool · Language & AI",
      "transcript.title": "Transcript",
      "transcript.description": "A focused utility for transcribing, structuring, and translating YouTube videos into clean AI-assisted knowledge documents.",

      "preview.gymmixApp": "Gymmix workout app inside a gym setting",
      "preview.cycle": "CycleContext Today view",
      "preview.carddisplay": "CardDisplay business card editor",
      "preview.datadisplay": "DataDisplay data visualization",
      "preview.bento": "Bento Software web project",
      "preview.gallery": "Nunavut Art Gallery website",
      "preview.grow": "Grow botanical design example",
      "preview.heating": "Heating cost calculator concept",
      "preview.ready": "Ready for today?",
      "preview.path": "Math · Grades 5–8 · Understand fractions visually",
      "preview.credoHeading": "Nicene-Constantinopolitan Creed",
      "preview.terms": "Explanations of core terms and topics",
      "preview.luvHeading": "Performance & Conduct Evaluation",
      "preview.luvAction": "Save locally in browser · Load · Print",
      "preview.transcriptHeading": "Turn YouTube talks into structured knowledge files",
      "preview.transcriptStep": "Setup · Transcription · AI Translation",

      "about.eyebrow": "Approach",
      "about.title": "Good software makes things simpler.",
      "about.subtitle": "I'm Alexander Kaufmann. Bridging native Apple engineering and calm web craft to build tools that feel clear from the very first tap.",
      "service1.title": "Mobile & Desktop Apps",
      "service1.desc": "From initial concept and interface rhythm to App Store launch: thoughtful native software for iPhone, Apple Watch, iPad, and Mac.",
      "service1.cta": "View apps",
      "service2.title": "Websites & Product Design",
      "service2.desc": "Clear, modern web experiences with measured typography, subtle depth layers, and responsive fluidity across every viewport.",
      "service2.cta": "Show web projects",
      "service3.title": "Education & Everyday Tools",
      "service3.desc": "Interactive learning apps, comparison calculators, and AI-assisted language helpers that strip complex tasks down to the essentials.",
      "service3.cta": "Explore tools",

      "closing.title": "Alexander Kaufmann.",
      "closing.copy": "Developer for iOS, macOS, and the web. Explore published releases, web builds, and repositories together on GitHub.",
      "closing.github": "Open GitHub profile ↗",
      "contact.title": "Contact & Feedback",
      "contact.copy": "Have a project idea in mind or feedback on any of the apps? Feel free to write directly.",
      "contact.email": "Send email",
      "contact.copied": "Email copied ✓",

      "footer.links": "Links",
      "footer.email": "Email",
      "footer.backToTop": "Back to top"
    }
  };

  let currentLang = "de";
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const colorSchemeMedia = window.matchMedia("(prefers-color-scheme: dark)");

  // Dynamic footer copyright year
  document.querySelectorAll("[data-year]").forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });

  // Appearance (System / Light / Dark)
  const appearanceSelect = document.getElementById("appearance-mode");
  const themeMeta = document.getElementById("theme-color-meta");

  function applyAppearance(mode) {
    const valid = mode === "light" || mode === "dark" || mode === "system" ? mode : "system";
    root.dataset.appearance = valid;
    const resolved = valid === "system" ? (colorSchemeMedia.matches ? "dark" : "light") : valid;
    root.dataset.theme = resolved;
    if (appearanceSelect && appearanceSelect.value !== valid) {
      appearanceSelect.value = valid;
    }
    if (themeMeta) {
      themeMeta.setAttribute("content", resolved === "dark" ? "#15191e" : "#ffffff");
    }
  }

  let savedAppearance = "system";
  try {
    savedAppearance = localStorage.getItem("portfolio-appearance") || "system";
  } catch (_) {}
  applyAppearance(savedAppearance);

  if (appearanceSelect) {
    appearanceSelect.addEventListener("change", (event) => {
      const next = event.target.value;
      try {
        localStorage.setItem("portfolio-appearance", next);
      } catch (_) {}
      applyAppearance(next);
    });
  }

  if (typeof colorSchemeMedia.addEventListener === "function") {
    colorSchemeMedia.addEventListener("change", () => {
      if (root.dataset.appearance === "system") {
        applyAppearance("system");
      }
    });
  }

  // Language Switching (DE / EN)
  function updateLocalizedLinks(lang) {
    const storeCountry = lang === "en" ? "us" : "de";
    document.querySelectorAll("[data-store-id]").forEach((anchor) => {
      const id = anchor.getAttribute("data-store-id");
      if (id) {
        anchor.setAttribute("href", `https://apps.apple.com/${storeCountry}/app/${id}`);
      }
    });

    document.querySelectorAll("[data-cycle-site]").forEach((anchor) => {
      anchor.setAttribute("href", lang === "en" ? "./en/" : "./de/");
    });
  }

  function setLanguage(lang) {
    currentLang = lang === "en" ? "en" : "de";
    const dict = translations[currentLang];
    root.lang = currentLang;
    document.title = dict.title;

    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) {
      descMeta.setAttribute("content", dict.description);
    }

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (key && dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      const key = el.getAttribute("data-i18n-alt");
      if (key && dict[key] !== undefined) {
        el.setAttribute("alt", dict[key]);
      }
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      if (key && dict[key] !== undefined) {
        el.setAttribute("aria-label", dict[key]);
      }
    });

    document.querySelectorAll("[data-language]").forEach((btn) => {
      const active = btn.getAttribute("data-language") === currentLang;
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    updateLocalizedLinks(currentLang);

    try {
      localStorage.setItem("portfolio-lang", currentLang);
    } catch (_) {}
  }

  let initialLang = root.lang === "en" ? "en" : "de";
  try {
    const storedLang = localStorage.getItem("portfolio-lang");
    if (storedLang === "de" || storedLang === "en") {
      initialLang = storedLang;
    } else if (navigator.language && navigator.language.toLowerCase().startsWith("en")) {
      initialLang = "en";
    }
  } catch (_) {}

  document.querySelectorAll("[data-language]").forEach((btn) => {
    btn.addEventListener("click", () => {
      setLanguage(btn.getAttribute("data-language"));
    });
  });

  setLanguage(initialLang);

  // Project Bento Filtering
  const productGrid = document.getElementById("product-grid");
  const filterPills = Array.from(document.querySelectorAll(".filter-pill[data-filter]"));
  const bentoCards = Array.from(document.querySelectorAll(".bento-card[data-category]"));

  function applyFilter(filterName) {
    const nextFilter = filterName || "all";
    if (productGrid) {
      productGrid.setAttribute("data-filter", nextFilter);
    }

    filterPills.forEach((pill) => {
      const isMatch = pill.getAttribute("data-filter") === nextFilter;
      pill.setAttribute("aria-pressed", isMatch ? "true" : "false");
      pill.classList.toggle("is-active", isMatch);
    });

    bentoCards.forEach((card) => {
      const cat = card.getAttribute("data-category");
      const visible = nextFilter === "all" || cat === nextFilter;
      card.classList.toggle("is-hidden", !visible);
      card.hidden = !visible;
      if (visible) {
        card.classList.add("is-visible");
      }
    });
  }

  filterPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      applyFilter(pill.getAttribute("data-filter"));
    });
  });

  document.querySelectorAll("[data-filter-jump]").forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      const targetFilter = trigger.getAttribute("data-filter-jump");
      if (!targetFilter) return;
      event.preventDefault();
      applyFilter(targetFilter);
      const section = document.getElementById("projekte");
      if (section) {
        section.scrollIntoView({
          behavior: reducedMotion.matches ? "auto" : "smooth",
          block: "start"
        });
      }
    });
  });

  applyFilter("all");

  // Close mobile menu when a link inside is tapped
  document.querySelectorAll(".mobile-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      const details = link.closest("details");
      if (details) {
        details.open = false;
      }
    });
  });

  // Hero Bento Video Card (Playback + Replay + Gentle Hover Tilt)
  const videoCard = document.getElementById("bento-video-card");
  const heroVideo = document.getElementById("hero-video");
  const replayBtn = document.getElementById("video-replay");

  if (heroVideo && videoCard) {
    heroVideo.muted = true;
    heroVideo.playsInline = true;

    const markVideoReady = () => {
      videoCard.classList.add("video-ready");
      heroVideo.classList.add("video-ready");
    };

    if ("requestVideoFrameCallback" in heroVideo) {
      heroVideo.requestVideoFrameCallback(markVideoReady);
    }
    heroVideo.addEventListener("playing", markVideoReady, { once: true });
    heroVideo.addEventListener("loadeddata", markVideoReady, { once: true });

    const safePlay = () => {
      if (reducedMotion.matches) return;
      const promise = heroVideo.play();
      if (promise && typeof promise.catch === "function") {
        promise.catch(() => {});
      }
    };

    if ("IntersectionObserver" in window && !reducedMotion.matches) {
      const videoObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              safePlay();
            } else {
              heroVideo.pause();
            }
          });
        },
        { threshold: 0.25 }
      );
      videoObserver.observe(heroVideo);
    } else if (!reducedMotion.matches) {
      safePlay();
    }

    if (replayBtn) {
      replayBtn.addEventListener("click", () => {
        heroVideo.currentTime = 0;
        markVideoReady();
        const promise = heroVideo.play();
        if (promise && typeof promise.catch === "function") {
          promise.catch(() => {});
        }
      });
    }

    if (window.matchMedia("(pointer: fine)").matches && !reducedMotion.matches) {
      videoCard.addEventListener("mousemove", (event) => {
        const rect = videoCard.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        videoCard.style.transform = `rotateY(${(x * 4.5).toFixed(2)}deg) rotateX(${(-y * 4.5).toFixed(2)}deg)`;
      });
      videoCard.addEventListener("mouseleave", () => {
        videoCard.style.transform = "";
      });
    }
  }

  // DataDisplay Scroll Depth Parallax (decoupled from hover transform via CSS translate)
  const parallaxLayers = Array.from(document.querySelectorAll(".parallax-layer[data-depth]"));
  const scenes = Array.from(document.querySelectorAll("[data-scene]"));

  if (!reducedMotion.matches && (parallaxLayers.length || scenes.length)) {
    let rafId = 0;

    const updateParallax = () => {
      rafId = 0;
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight || 800;

      parallaxLayers.forEach((layer) => {
        const depth = Number(layer.getAttribute("data-depth") || 0);
        const offset = Math.max(-260, Math.min(260, scrollY * depth));
        layer.style.translate = `0 ${offset.toFixed(1)}px`;
      });

      scenes.forEach((scene) => {
        const rect = scene.getBoundingClientRect();
        if (rect.bottom < -120 || rect.top > viewportHeight + 120) return;
        const centerOffset = rect.top + rect.height / 2 - viewportHeight / 2;
        scene.querySelectorAll("[data-scene-layer]").forEach((layer) => {
          const depth = Number(layer.getAttribute("data-scene-layer") || 0);
          const shift = Math.max(-350, Math.min(350, centerOffset * depth));
          layer.style.translate = `0 ${shift.toFixed(1)}px`;
        });
      });
    };

    const requestTick = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(updateParallax);
      }
    };

    window.addEventListener("scroll", requestTick, { passive: true });
    window.addEventListener("resize", requestTick, { passive: true });
    updateParallax();
  }

  // Copy Email Button
  document.querySelectorAll("[data-copy-email]").forEach((btn) => {
    let resetTimer = null;
    btn.addEventListener("click", () => {
      const email = btn.getAttribute("data-copy-email");
      if (!email) return;

      const labelEl = btn.querySelector("[data-copy-label]") || btn;
      const originalText = labelEl.getAttribute("data-original-label") || labelEl.textContent || email;
      labelEl.setAttribute("data-original-label", originalText);

      const showCopied = () => {
        btn.classList.add("is-copied");
        labelEl.textContent = translations[currentLang]["contact.copied"];
        window.clearTimeout(resetTimer);
        resetTimer = window.setTimeout(() => {
          btn.classList.remove("is-copied");
          labelEl.textContent = originalText;
        }, 2200);
      };

      if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
        navigator.clipboard.writeText(email).then(showCopied).catch(() => {});
      } else {
        const area = document.createElement("textarea");
        area.value = email;
        area.setAttribute("readonly", "");
        area.style.position = "fixed";
        area.style.opacity = "0";
        document.body.appendChild(area);
        area.select();
        try {
          document.execCommand("copy");
          showCopied();
        } catch (_) {}
        area.remove();
      }
    });
  });

  // Reveal Observer
  const revealNodes = Array.from(document.querySelectorAll(".reveal"));
  if (revealNodes.length) {
    if ("IntersectionObserver" in window && !reducedMotion.matches) {
      const revealObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
      );
      revealNodes.forEach((el) => revealObserver.observe(el));
    } else {
      revealNodes.forEach((el) => el.classList.add("is-visible"));
    }
  }
})();
