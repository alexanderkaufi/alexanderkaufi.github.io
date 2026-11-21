(() => {
  const root = document.documentElement;
  root.classList.add("has-js");

  const translations = {
    de: {
      title: "Alexander Kaufmann — Apps, Web & Digitale Werkzeuge",
      description: "Alexander Kaufmann — Native Apps für iPhone, Apple Watch, iPad und Mac sowie moderne Webprojekte und digitale Werkzeuge.",
      skip: "Zum Inhalt springen",
      "brand.aria": "Startseite — Projekte",
      "brand.wordmark": "Projekte",
      "nav.label": "Hauptnavigation",
      "nav.overview": "Übersicht",
      "nav.projects": "Projekte",
      "nav.focus": "Schwerpunkte",
      "nav.open": "Menü öffnen",
      "nav.contact": "Kontakt",
      "language.label": "Sprache",
      "theme.label": "Farbschema",
      "theme.system": "System",
      "theme.light": "Hell",
      "theme.dark": "Dunkel",

      "hero.eyebrow": "Portfolio · iOS, Mac & Web",
      "hero.title.one": "Software, die im",
      "hero.title.two": "Alltag überzeugt.",
      "hero.lead": "Ich entwickle durchdachte Apps für iPhone, Apple Watch, iPad und Mac sowie moderne Websites und digitale Werkzeuge – reduziert auf das Wesentliche, zuverlässig im Alltag.",
      "hero.cta.projects": "Projekte entdecken",
      "hero.cta.github": "GitHub-Profil",
      "hero.meta1": "12 eigene Projekte",
      "hero.meta2": "iOS, Watch, iPad & Mac",
      "hero.meta3": "Webdesign & KI-Tools",

      "slideshow.aria": "App-Vorschau Diashow",
      "slideshow.dotsAria": "App-Folie wählen",
      "slideshow.pauseAria": "Diashow pausieren",
      "slideshow.playAria": "Diashow abspielen",
      "slideshow.s0.sub": "iPhone & Watch · Krafttraining",
      "slideshow.s1.sub": "iOS & iPad · Zykluskontext",
      "slideshow.s2.sub": "iPhone · Digitale Visitenkarten",
      "slideshow.s3.sub": "Gymmix · Fortschritt & Statistik",
      "slideshow.s4.sub": "Mac & iPad · Dashboard & Folien",

      "projects.eyebrow": "Eigene Projekte",
      "projects.title": "Apps, Web & Werkzeuge",
      "projects.subtitle": "Zwölf eigene Arbeiten mit echten Einblicken, klaren Details und direkten Links.",
      "filter.label": "Projekte nach Bereich filtern",
      "filter.all": "Alle",
      "filter.apps": "Apple Apps",
      "filter.web": "Web & Design",
      "filter.tools": "Bildung & KI",

      "badge.appstore": "App Store",
      "badge.new": "Neu",
      "badge.preview": "Vorschau",
      "store.kicker": "Laden im",
      "store.name": "App Store",
      "link.moreApp": "Mehr zur App",
      "link.morePreview": "Vorschau öffnen",
      "link.projectSite": "Projektseite öffnen",
      "link.open": "Öffnen",
      "gymmix.handbook": "Handbuch",

      "cycle.category": "iOS & iPad · Gesundheit",
      "cycle.description": "Übersetzt den Zyklusstand in klaren Alltagskontext – für dich selbst oder um eine nahestehende Person respektvoll zu begleiten. 100 % lokal und ohne Account.",
      "orbit.dayTemplate": "Zyklustag {d} von 28",
      "orbit.phases": ["Menstruation", "Follikelphase", "Eisprung", "Lutealphase", "Prämenstruell"],

      "bento.category": "Webprojekt",
      "bento.description": "Zentrale Produktplattform für meine Apps mit 3D-Box-Animation, Plattform-Filterung und direktem App-Store-Routing.",

      "gymmixApp.category": "iPhone & Watch · Fitness",
      "gymmixApp.description": "Krafttraining ohne Ballast: Individuelle Trainingspläne, schnelles Satz-Logging am Handgelenk und langfristige Auswertung von Volumen und Maximalkraft.",
      "gymmixApp.f1.t": "iPhone & Watch",
      "gymmixApp.f1.d": "Direkt am Handgelenk loggen",
      "gymmixApp.f2.t": "37 Sprachen",
      "gymmixApp.f2.d": "Weltweit lokalisiert",
      "gymmixApp.f3.t": "Offline-First",
      "gymmixApp.f3.d": "Ohne Account im Studio",

      "datadisplay.category": "Mac & iPad · Daten",
      "datadisplay.description": "CSV-, Excel- oder Numbers-Dateien direkt im Dashboard vergleichen und fertige Diagramme nahtlos auf Präsentationsfolien übernehmen.",
      "dd.switchAria": "DataDisplay Ansicht umschalten",
      "dd.step2": "Dashboard",
      "dd.step3": "Folie",
      "dd.slideTitle": "Jahresverlauf nach Standort",

      "carddisplay.category": "iPhone · Produktivität",
      "carddisplay.flip": "Nächste Karte ↻",
      "carddisplay.description": "Digitale Visitenkarten per Kamera erfassen, mit QR-Codes gestalten und im Vollbild teilen – komplett lokal auf dem iPhone.",
      "carddisplay.heroAlt": "CardDisplay auf dem iPhone im Alltag",
      "carddisplay.addonTitle": "Zusatz · Visitenkarten aus der App",
      "carddisplay.card1Alt": "CardDisplay digitale Visitenkarte",
      "carddisplay.card2Alt": "CycleContext digitale Visitenkarte aus CardDisplay",
      "carddisplay.card3Alt": "Gymmix digitale Visitenkarte aus CardDisplay",

      "gallery.category": "Webplattform · Kunst",
      "gallery.badge": "Live-Sync",
      "gallery.title": "Kunstgalerie Nunavut",
      "gallery.description": "Galerie-Website für Inuit-Kunst aus Nunavut, Kanada. Neue Werke erscheinen automatisch aus dem Instagram-Auftritt der Galerie.",
      "gallery.f1.t": "Instagram → Web",
      "gallery.f1.d": "Neue Werke erscheinen direkt im Katalog",
      "gallery.f2.t": "Inuit-Grafik",
      "gallery.f2.d": "Lithografien, Steinschnitte & Künstlerprofile",
      "gallery.plaqueTitle": "Zeitgenössische Inuit-Kunst",
      "gallery.plaqueSub": "Nunavut · Kuratierte Ausstellung",

      "grow.category": "Web · Designbeispiel",
      "grow.description": "Atmosphärisches Website-Beispiel mit tiefen Pflanzenmotiven, ruhigen vertikalen Übergängen und mehrschichtiger Parallax-Tiefe.",

      "heat.category": "Konzept · Web-Rechner",
      "heat.title": "Wärmekostenrechner",
      "heat.description": "Interaktiver Vergleichsrechner für Gasheizung und Wärmepumpe anhand eigener Verbrauchs- und Energieannahmen.",
      "heat.gas": "Gasheizung",
      "heat.pump": "Wärmepumpe",

      "kluug.category": "Bildung",
      "kluug.status": "Prototyp",
      "kluug.description": "Lern-App für Klasse 5 bis 8 mit Lernpfaden, Pizza-Bäckerei, Quiz-Quests und Tutor Fiete.",

      "credo.category": "Wissen",
      "credo.description": "Texte zum orthodoxen Glaubensbekenntnis und zur Katechese strukturiert und lesefreundlich aufbereitet.",

      "luv.category": "Bildung",
      "luv.description": "Browser-App zum Erstellen, Verwalten und Drucken von Leistungs- und Verhaltensbeurteilungen.",

      "transcript.category": "Sprache & KI",
      "transcript.title": "Transkript",
      "transcript.description": "Werkzeug zum Transkribieren, Strukturieren und Übersetzen von YouTube-Videos in Wissensdateien.",

      "preview.gymmixApp": "Gymmix Trainings-App im Fitnessstudio",
      "preview.gymmixStats": "Gymmix Trainingsstatistik und Auswertung",
      "preview.cycle": "CycleContext Heute-Ansicht",
      "preview.datadisplay": "DataDisplay Dashboard und Präsentationsfolie",
      "preview.bento": "Freigestellte metallene Bento-Software-Box mit vier leuchtenden Modulen",
      "preview.gallery": "Kunstgalerie Nunavut Werk",
      "preview.grow": "Grow Pflanzen-Designbeispiel",
      "preview.heating": "Wärmekostenrechner Konzept",
      "preview.credoHeading": "Glaubensbekenntnis",
      "preview.luvTag": "Lokal · Print",

      "services.eyebrow": "Schwerpunkte",
      "services.title": "Woran ich arbeite",
      "services.subtitle": "Zwischen nativer Apple-Entwicklung, ruhigem Webdesign und kompakten Werkzeugen für den Alltag.",
      "service1.title": "Apple Apps (iOS, Watch & Mac)",
      "service1.desc": "Von der Konzeption über ruhige Benutzeroberflächen bis zum App Store – lokal gespeichert, schnell und für den täglichen Einsatz entwickelt.",
      "service1.cta": "Apple Apps ansehen",
      "service2.title": "Webauftritt & Produktdesign",
      "service2.desc": "Übersichtliche, moderne Websites mit sauberer Typografie, stimmigen Animationen und schneller Darstellung auf allen Geräten.",
      "service2.cta": "Webprojekte ansehen",
      "service3.title": "Bildung & KI-Werkzeuge",
      "service3.desc": "Fokussierte Browser-Tools für Lernen, Wissensaufbereitung und strukturierte Workflows – ohne Installation direkt startklar.",
      "service3.cta": "Tools entdecken",

      "cta.eyebrow": "Kaufmann-Dynamics · iOS, Mac & Web",
      "cta.title.one": "Fragen oder",
      "cta.title.two": "Feedback?",
      "contact.copy": "Du nutzt eine meiner Apps, hast einen Hinweis oder möchtest einfach kurz schreiben? Melde dich gerne direkt.",
      "contact.email": "Kontakt aufnehmen",
      "contact.copied": "E-Mail kopiert ✓",
      "dir.manualTitle": "Gymmix Handbuch",
      "footer.tagline": "Software, die im Alltag überzeugt.",
      "footer.links": "Footer-Navigation",
      "footer.legalLabel": "Rechtliches",
      "footer.imprint": "Impressum",
      "footer.privacy": "Datenschutz",
      "footer.backToTop": "Nach oben",

      "country.germany": "Deutschland",
      "legal.back": "Zurück zur Übersicht",
      "legal.eyebrow": "Rechtliche Hinweise",

      "imprint.pageTitle": "Impressum — Projekte · Kaufmann-Dynamics",
      "imprint.pageDesc": "Impressum und Anbieterkennzeichnung für das Projektportfolio unter Kaufmann-Dynamics.",
      "imprint.heading": "Impressum",
      "imprint.intro": "Angaben gemäß § 5 DDG sowie § 18 Abs. 2 MStV für diese eigenständige Portfolio-Website.",
      "imprint.providerTitle": "Anbieter & inhaltlich verantwortlich",
      "imprint.independentNote": "Verantwortlicher Betreiber dieser Portfolio-Website („Projekte / Kaufmann-Dynamics“) ist Alexander Kaufmann als Einzelperson. Die Postanschrift der Bento Software UG (haftungsbeschränkt) dient ausschließlich als c/o-Kontaktadresse; rechtlich gehört dieses Angebot nicht zur Bento Software UG.",
      "imprint.contactTitle": "Kontakt",
      "imprint.emailLabel": "E-Mail",
      "imprint.contactNote": "Es wird aktuell keine öffentliche Telefonnummer veröffentlicht. Anfragen erreichen mich direkt per E-Mail über die oben genannte Adresse.",
      "imprint.scopeTitle": "Art des Angebots",
      "imprint.scopeText": "Diese Website dient als persönliches Informations- und Projektportfolio für entwickelte Apps, Webseiten und Lernwerkzeuge. Es werden darüber keine kostenpflichtigen Verträge abgeschlossen oder Online-Shops betrieben.",
      "imprint.thirdPartyTitle": "Abgrenzung zu verlinkten Produktseiten & Apps",
      "imprint.thirdPartyText": "Einzelne hier vorgestellte Apps und Produktseiten (z. B. unter Bento Software sowie DataDisplay, CycleContext, Gymmix und CardDisplay inklusive der zugehörigen App-Store-Einträge) werden eigenständig von ihrem jeweiligen Anbieter bzw. Publisher (insbesondere der Bento Software UG) betrieben und vertrieben. Auf diesen externen Angeboten gelten ausschließlich deren eigene Impressums- und Datenschutzangaben.",
      "imprint.liabilityTitle": "Haftung für Inhalte & externe Links",
      "imprint.liabilityText": "Die Inhalte dieser Website werden mit großer Sorgfalt erstellt, dennoch kann keine Gewähr für Vollständigkeit, Richtigkeit und Aktualität übernommen werden. Bei Verlinkungen auf externe Websites Dritter liegt die Verantwortung für deren Inhalte und deren Rechtskonformität stets beim jeweiligen Betreiber.",
      "imprint.copyrightTitle": "Urheberrecht",
      "imprint.copyrightText": "Die auf dieser Website erstellten Texte, Grafiken und Darstellungen unterliegen, soweit nicht anders gekennzeichnet, dem Urheberrecht. Jede Verwertung außerhalb der gesetzlichen Schranken bedarf der vorherigen Zustimmung des jeweiligen Rechteinhabers.",

      "privacy.pageTitle": "Datenschutz — Projekte · Kaufmann-Dynamics",
      "privacy.pageDesc": "Datenschutzerklärung für das Projektportfolio unter Kaufmann-Dynamics — Hosting über STRATO und GitHub Pages, ohne Cookies oder Tracking.",
      "privacy.heading": "Datenschutzerklärung",
      "privacy.intro": "Hier erfährst du transparent, welche technischen Daten beim Besuch dieser Portfolio-Website verarbeitet werden und warum keine Cookies oder Tracker eingesetzt werden.",
      "privacy.controllerTitle": "1. Verantwortlicher",
      "privacy.reachPre": "Kontakt per E-Mail:",
      "privacy.hostingTitle": "2. Bereitstellung der Website & Server-Logfiles (STRATO & GitHub Pages)",
      "privacy.hostingStrato": "Beim Aufruf über die Domain kaufmann-dynamics.de erfolgt die Bereitstellung über Server der STRATO AG (Otto-Ostrowski-Straße 7, 10249 Berlin, Deutschland). STRATO speichert zu Verbindungsaufbau, Auslieferung und Sicherheit kurzzeitig technische Server-Logfiles (z. B. IP-Adresse, Zeitpunkt des Abrufs, aufgerufene Datei und Browserinformationen). Die Verarbeitung erfolgt auf Grundlage des berechtigten Interesses an einem sicheren, stabilen Betrieb der Website (Art. 6 Abs. 1 lit. f DSGVO). Weitere Hinweise finden sich in der",
      "privacy.stratoLink": "Datenschutzerklärung von STRATO",
      "privacy.hostingGithub": "Soweit oder solange diese Portfolio-Website parallel bzw. direkt über github.io ausgeliefert wird, erfolgt das Hosting technisch über GitHub Pages (GitHub, Inc. / GitHub B.V.). Dabei protokolliert GitHub Verbindungs- und Sicherheitsdaten einschließlich der IP-Adresse des Besuchers, wobei eine Verarbeitung auch außerhalb des Europäischen Wirtschaftsraums stattfinden kann. Weitere Details stehen in der",
      "privacy.githubPolicy": "Datenschutzerklärung von GitHub",
      "privacy.and": "sowie in den",
      "privacy.githubPages": "Hinweisen zu GitHub Pages",
      "privacy.prefsTitle": "3. Sprache, Farbschema & lokale Speicherung (keine Cookies)",
      "privacy.prefsText": "Diese Website setzt keine Cookies und verwendet keine Analyse-, Reichweiten- oder Werbedienste. Um deine gewählte Sprache (DE/EN) sowie das gewählte Farbschema (System, Hell oder Dunkel) beim erneuten Öffnen beizubehalten, speichert die Website ausschließlich die Schlüssel „portfolio-lang“ und „portfolio-appearance“ lokal im Speicher deines Browsers (localStorage). Diese Einstellungen werden nicht an Server übertragen und lassen sich jederzeit in den Browser-Einstellungen löschen.",
      "privacy.emailTitle": "4. Kontaktaufnahme per E-Mail",
      "privacy.emailText": "Wenn du eine Nachricht an kontakt@kaufmann-dynamics.de sendest, wird deine E-Mail über das Postfach bei STRATO empfangen. Absenderadresse, Betreff und Nachrichteninhalt werden ausschließlich zur Beantwortung und Bearbeitung deines Anliegens verarbeitet (Art. 6 Abs. 1 lit. f DSGVO bzw. Art. 6 Abs. 1 lit. b DSGVO bei vorvertraglicher Kommunikation) und gelöscht, sobald sie für diesen Zweck nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.",
      "privacy.linksTitle": "5. Externe Links zu Apps & Projektseiten",
      "privacy.linksText": "Auf dieser Seite sind externe Angebote verlinkt, darunter GitHub-Repositories, der Apple App Store sowie Produktseiten und Apps, die eigenständig durch Bento Software betrieben werden. Erst beim aktiven Anklicken eines Links verlassen deine Browser-Anfragen diese Seite; ab dort gelten die Datenschutzhinweise des jeweiligen Anbieters.",
      "privacy.rightsTitle": "6. Deine Rechte",
      "privacy.rightsText": "Du hast nach Maßgabe der DSGVO das Recht auf Auskunft über gespeicherte personenbezogene Daten, auf Berichtigung, Löschung oder Einschränkung der Verarbeitung, auf Widerspruch gegen Verarbeitungen auf Grundlage berechtigter Interessen sowie gegebenenfalls auf Datenübertragbarkeit. Hierzu genügt eine formlose E-Mail an kontakt@kaufmann-dynamics.de. Zudem besteht ein Beschwerderecht bei einer zuständigen Datenschutzaufsichtsbehörde (Art. 77 DSGVO)."
    },
    en: {
      title: "Alexander Kaufmann — Apps, Web & Digital Tools",
      description: "Alexander Kaufmann — Native apps for iPhone, Apple Watch, iPad, and Mac alongside modern web projects and digital tools.",
      skip: "Skip to content",
      "brand.aria": "Home — Projects",
      "brand.wordmark": "Projects",
      "nav.label": "Primary navigation",
      "nav.overview": "Overview",
      "nav.projects": "Projects",
      "nav.focus": "Focus",
      "nav.open": "Open menu",
      "nav.contact": "Contact",
      "language.label": "Language",
      "theme.label": "Appearance",
      "theme.system": "System",
      "theme.light": "Light",
      "theme.dark": "Dark",

      "hero.eyebrow": "Portfolio · iOS, Mac & Web",
      "hero.title.one": "Software built for",
      "hero.title.two": "everyday clarity.",
      "hero.lead": "I design and build thoughtful apps for iPhone, Apple Watch, iPad, and Mac alongside modern websites and digital tools — pared down to what matters, dependable every day.",
      "hero.cta.projects": "Explore projects",
      "hero.cta.github": "GitHub profile",
      "hero.meta1": "12 independent projects",
      "hero.meta2": "iOS, Watch, iPad & Mac",
      "hero.meta3": "Web design & AI tools",

      "slideshow.aria": "App preview slideshow",
      "slideshow.dotsAria": "Select app slide",
      "slideshow.pauseAria": "Pause slideshow",
      "slideshow.playAria": "Play slideshow",
      "slideshow.s0.sub": "iPhone & Watch · Strength Training",
      "slideshow.s1.sub": "iOS & iPad · Cycle Context",
      "slideshow.s2.sub": "iPhone · Digital Business Cards",
      "slideshow.s3.sub": "Gymmix · Progress & Statistics",
      "slideshow.s4.sub": "Mac & iPad · Dashboard & Slides",

      "projects.eyebrow": "Selected Work",
      "projects.title": "Apps, Web & Tools",
      "projects.subtitle": "Twelve independent projects with live previews, thoughtful details, and direct links.",
      "filter.label": "Filter projects by category",
      "filter.all": "All",
      "filter.apps": "Apple Apps",
      "filter.web": "Web & Design",
      "filter.tools": "Education & AI",

      "badge.appstore": "App Store",
      "badge.new": "New",
      "badge.preview": "Preview",
      "store.kicker": "Download on the",
      "store.name": "App Store",
      "link.moreApp": "About this app",
      "link.morePreview": "Open preview",
      "link.projectSite": "Open project site",
      "link.open": "Open",
      "gymmix.handbook": "Handbook",

      "cycle.category": "iOS & iPad · Health",
      "cycle.description": "Translates an estimated cycle phase into clear everyday context — for yourself or to thoughtfully support a partner. 100% local and account-free.",
      "orbit.dayTemplate": "Cycle day {d} of 28",
      "orbit.phases": ["Menstruation", "Follicular", "Ovulation", "Luteal", "Premenstrual"],

      "bento.category": "Web Project",
      "bento.description": "Central product platform for my apps featuring a 3D box animation, live platform filtering, and direct App Store routing.",

      "gymmixApp.category": "iPhone & Watch · Fitness",
      "gymmixApp.description": "Strength training without clutter: custom workout plans, rapid set logging on your wrist, and long-term volume and max-load analytics.",
      "gymmixApp.f1.t": "iPhone & Watch",
      "gymmixApp.f1.d": "Log sets right on your wrist",
      "gymmixApp.f2.t": "37 Languages",
      "gymmixApp.f2.d": "Localized worldwide",
      "gymmixApp.f3.t": "Offline-First",
      "gymmixApp.f3.d": "No account needed at the gym",

      "datadisplay.category": "Mac & iPad · Data",
      "datadisplay.description": "Compare CSV, Excel, or Numbers files directly inside the dashboard and place finished charts straight onto presentation slides.",
      "dd.switchAria": "Switch DataDisplay view",
      "dd.step2": "Dashboard",
      "dd.step3": "Slide",
      "dd.slideTitle": "Annual Trend by Location",

      "carddisplay.category": "iPhone · Productivity",
      "carddisplay.flip": "Next card ↻",
      "carddisplay.description": "Capture business cards by camera, customize layouts with QR codes, and share full-screen — stored entirely locally on iPhone.",
      "carddisplay.heroAlt": "CardDisplay on iPhone in everyday use",
      "carddisplay.addonTitle": "Extra · In-app business cards",
      "carddisplay.card1Alt": "CardDisplay digital business card",
      "carddisplay.card2Alt": "CycleContext digital business card built in CardDisplay",
      "carddisplay.card3Alt": "Gymmix digital business card built in CardDisplay",

      "gallery.category": "Web Platform · Fine Art",
      "gallery.badge": "Live Sync",
      "gallery.title": "Nunavut Art Gallery",
      "gallery.description": "Gallery website for Inuit art from Nunavut, Canada. Newly published artworks appear automatically synced from Instagram.",
      "gallery.f1.t": "Instagram → Web",
      "gallery.f1.d": "New artworks appear directly in the catalog",
      "gallery.f2.t": "Inuit Fine Art",
      "gallery.f2.d": "Lithographs, stonecuts & artist profiles",
      "gallery.plaqueTitle": "Contemporary Inuit Art",
      "gallery.plaqueSub": "Nunavut · Curated Exhibition",

      "grow.category": "Web · Design Showcase",
      "grow.description": "Atmospheric botanical website concept featuring lush forest imagery, calm vertical transitions, and multi-layered parallax depth.",

      "heat.category": "Concept · Web Calculator",
      "heat.title": "Heating Cost Calculator",
      "heat.description": "Interactive calculator comparing gas heating and heat-pump costs based on custom usage and energy assumptions.",
      "heat.gas": "Gas Heating",
      "heat.pump": "Heat Pump",

      "kluug.category": "Education",
      "kluug.status": "Prototype",
      "kluug.description": "Learning app for grades 5–8 with learning paths, a fraction pizza bakery, quiz quests, and tutor Fiete.",

      "credo.category": "Knowledge",
      "credo.description": "Texts on the Orthodox Creed and catechesis structured into a calm, readable digital reference.",

      "luv.category": "Education",
      "luv.description": "Browser app for creating, organizing, and printing structured performance and conduct evaluations.",

      "transcript.category": "Language & AI",
      "transcript.title": "Transcript",
      "transcript.description": "Utility for transcribing, structuring, and translating YouTube videos into clean knowledge files.",

      "preview.gymmixApp": "Gymmix workout app in the gym",
      "preview.gymmixStats": "Gymmix training statistics and analytics",
      "preview.cycle": "CycleContext Today view",
      "preview.datadisplay": "DataDisplay dashboard and presentation slide",
      "preview.bento": "Isolated metallic Bento Software box with four glowing modules",
      "preview.gallery": "Nunavut Art Gallery artwork",
      "preview.grow": "Grow botanical design example",
      "preview.heating": "Heating cost calculator concept",
      "preview.credoHeading": "Creed & Catechesis",
      "preview.luvTag": "Local · Print",

      "services.eyebrow": "Focus Areas",
      "services.title": "What I build",
      "services.subtitle": "Bridging native Apple engineering, calm web design, and compact everyday tools.",
      "service1.title": "Apple Apps (iOS, Watch & Mac)",
      "service1.desc": "From initial concept and calm interfaces to App Store launch — stored locally, responsive, and built for everyday use.",
      "service1.cta": "View Apple apps",
      "service2.title": "Websites & Product Design",
      "service2.desc": "Clear, modern websites featuring measured typography, refined motion, and fast rendering across every device.",
      "service2.cta": "View web projects",
      "service3.title": "Education & AI Utilities",
      "service3.desc": "Focused browser tools for learning, knowledge formatting, and structured workflows — ready immediately with zero setup.",
      "service3.cta": "Explore tools",

      "cta.eyebrow": "Kaufmann-Dynamics · iOS, Mac & Web",
      "cta.title.one": "Questions or",
      "cta.title.two": "feedback?",
      "contact.copy": "Using one of my apps, spotted feedback, or just want to say hello? Feel free to get in touch.",
      "contact.email": "Get in touch",
      "contact.copied": "Email copied ✓",
      "dir.manualTitle": "Gymmix Handbook",
      "footer.tagline": "Software built for everyday clarity.",
      "footer.links": "Footer navigation",
      "footer.legalLabel": "Legal",
      "footer.imprint": "Imprint",
      "footer.privacy": "Privacy Policy",
      "footer.backToTop": "Back to top",

      "country.germany": "Germany",
      "legal.back": "Back to overview",
      "legal.eyebrow": "Legal Information",

      "imprint.pageTitle": "Imprint — Projects · Kaufmann-Dynamics",
      "imprint.pageDesc": "Legal notice and provider details under German law for the Kaufmann-Dynamics project portfolio.",
      "imprint.heading": "Imprint (Legal Notice)",
      "imprint.intro": "Information pursuant to Section 5 DDG (German Digital Services Act) and Section 18 (2) MStV for this independent portfolio website.",
      "imprint.providerTitle": "Provider & Person Responsible for Content",
      "imprint.independentNote": "This portfolio website (“Projects / Kaufmann-Dynamics”) is operated independently by Alexander Kaufmann as an individual. The postal address of Bento Software UG (haftungsbeschränkt) is used solely as a c/o mailing address; legally, this website does not belong to Bento Software UG.",
      "imprint.contactTitle": "Contact",
      "imprint.emailLabel": "Email",
      "imprint.contactNote": "No public telephone number is listed at this time. Please reach out directly via the email address above.",
      "imprint.scopeTitle": "Nature of This Website",
      "imprint.scopeText": "This website serves as a personal showcase and project overview for independent apps, websites, and learning tools. No paid contracts are concluded and no online shop is operated through this site.",
      "imprint.thirdPartyTitle": "Distinction from Linked Product Pages & Apps",
      "imprint.thirdPartyText": "Certain apps and product websites showcased here (such as Bento Software, DataDisplay, CycleContext, Gymmix, and CardDisplay along with their App Store listings) are operated and published independently by their respective operator/publisher (in particular Bento Software UG). Their own legal notices and privacy policies apply exclusively on those external offerings.",
      "imprint.liabilityTitle": "Liability for Content & External Links",
      "imprint.liabilityText": "While the content on this website is prepared with care, no guarantee is assumed for completeness, accuracy, or timeliness. Responsibility for the content and legal compliance of linked third-party websites always rests solely with their respective operators.",
      "imprint.copyrightTitle": "Copyright",
      "imprint.copyrightText": "Unless stated otherwise, texts, graphics, and visual presentations created for this website are subject to copyright. Any use beyond statutory exceptions requires prior permission from the respective rights holder.",

      "privacy.pageTitle": "Privacy Policy — Projects · Kaufmann-Dynamics",
      "privacy.pageDesc": "Privacy notice for the Kaufmann-Dynamics project portfolio — hosted via STRATO and GitHub Pages with no cookies or tracking.",
      "privacy.heading": "Privacy Policy",
      "privacy.intro": "This notice explains transparently which technical data is processed when visiting this portfolio website and confirms that no cookies or analytics trackers are used.",
      "privacy.controllerTitle": "1. Controller",
      "privacy.reachPre": "Contact by email:",
      "privacy.hostingTitle": "2. Website Hosting & Server Log Files (STRATO & GitHub Pages)",
      "privacy.hostingStrato": "When accessed via kaufmann-dynamics.de, this website is served by STRATO AG (Otto-Ostrowski-Straße 7, 10249 Berlin, Germany). To establish connections, deliver pages, and ensure security, STRATO temporarily stores technical server log files (e.g., IP address, timestamp, requested file, and browser details) based on legitimate interest in reliable website operation (Art. 6(1)(f) GDPR). Further details are available in",
      "privacy.stratoLink": "STRATO’s Privacy Policy",
      "privacy.hostingGithub": "Where or as long as this portfolio website is delivered in parallel or directly via github.io, hosting is provided by GitHub Pages (GitHub, Inc. / GitHub B.V.). GitHub logs technical connection and security data including visitors’ IP addresses, which may also be processed outside the European Economic Area. More details can be found in the",
      "privacy.githubPolicy": "GitHub General Privacy Statement",
      "privacy.and": "and the",
      "privacy.githubPages": "GitHub Pages documentation",
      "privacy.prefsTitle": "3. Language, Appearance & Local Storage (No Cookies)",
      "privacy.prefsText": "This website sets no cookies and does not use any analytics, audience measurement, or advertising trackers. Solely to remember your chosen language (DE/EN) and color appearance (System, Light, or Dark) across visits, the site stores the keys “portfolio-lang” and “portfolio-appearance” locally in your browser’s localStorage. These preferences are never sent to a server and can be cleared anytime via your browser settings.",
      "privacy.emailTitle": "4. Contacting Us by Email",
      "privacy.emailText": "Messages sent to kontakt@kaufmann-dynamics.de are received through our STRATO mailbox. Your sender address, subject, and message content are processed solely to handle and reply to your inquiry (Art. 6(1)(f) GDPR, or Art. 6(1)(b) GDPR for pre-contractual communication) and deleted once no longer needed, subject to statutory retention duties.",
      "privacy.linksTitle": "5. External Links to Apps & Project Websites",
      "privacy.linksText": "This site links to external websites including GitHub repositories, the Apple App Store, and product sites or apps operated independently by Bento Software. Only when you actively follow a link does your browser leave this site, at which point the respective provider’s privacy notice applies.",
      "privacy.rightsTitle": "6. Your Rights Under the GDPR",
      "privacy.rightsText": "Under the GDPR, you have the right to access personal data stored about you, request rectification, erasure, or restriction of processing, object to processing based on legitimate interests, and, where applicable, exercise data portability by emailing kontakt@kaufmann-dynamics.de. You also have the right to lodge a complaint with a supervisory data protection authority (Art. 77 GDPR)."
    }
  };

  let currentLang = "de";
  let orbitShownDay = 4;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const colorSchemeMedia = window.matchMedia("(prefers-color-scheme: dark)");

  // Dynamic footer year
  document.querySelectorAll("[data-year]").forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });

  // Appearance (System / Hell / Dunkel)
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
      themeMeta.setAttribute("content", resolved === "dark" ? "#15191e" : "#f7f4ef");
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

  // CycleContext Rotating 3D Orbit
  const CYCLE_LENGTH = 28;
  const PHASES = [
    { start: 1, end: 5, color: "#ff3b30" },
    { start: 6, end: 12, color: "#34c759" },
    { start: 13, end: 15, color: "#0a84ff" },
    { start: 16, end: 23, color: "#ff9500" },
    { start: 24, end: 28, color: "#ff2d55" }
  ];

  function phaseIndexForDay(day) {
    const idx = PHASES.findIndex((p) => day >= p.start && day <= p.end);
    return idx >= 0 ? idx : 0;
  }

  function wrapDay(day) {
    return ((((day - 1) % CYCLE_LENGTH) + CYCLE_LENGTH) % CYCLE_LENGTH) + 1;
  }

  const orbitCard = document.querySelector("[data-orbit]");
  const orbitRing = orbitCard ? orbitCard.querySelector(".orbit-front") : null;
  const orbitKnob = orbitCard ? orbitCard.querySelector(".orbit-knob") : null;
  const orbitDayLabel = orbitCard ? orbitCard.querySelector("[data-orbit-day]") : null;
  const orbitPhaseLabel = orbitCard ? orbitCard.querySelector("[data-orbit-phase]") : null;

  function updateOrbitLabels(day) {
    const dict = translations[currentLang];
    const index = phaseIndexForDay(day);
    const phaseColor = PHASES[index].color;
    if (orbitCard) {
      orbitCard.style.setProperty("--orbit-color", phaseColor);
    }
    if (orbitDayLabel) {
      orbitDayLabel.textContent = dict["orbit.dayTemplate"].replace("{d}", String(day));
    }
    if (orbitPhaseLabel && Array.isArray(dict["orbit.phases"])) {
      orbitPhaseLabel.textContent = dict["orbit.phases"][index] || "";
    }
  }

  function placeOrbit(dayFloat) {
    if (!orbitRing || !orbitKnob) return;
    const angle = ((dayFloat - 1) / CYCLE_LENGTH) * Math.PI * 2;
    const style = getComputedStyle(orbitRing);
    const cx = parseFloat(style.left) || 134;
    const cy = parseFloat(style.top) || 144;
    const rx = ((parseFloat(style.width) || 252) / 2) * 0.84;
    const ry = ((parseFloat(style.height) || 100) / 2) * 0.84;
    const depth = -Math.cos(angle);
    orbitKnob.style.setProperty("--kx", `${(cx + rx * Math.sin(angle)).toFixed(1)}px`);
    orbitKnob.style.setProperty("--ky", `${(cy - ry * Math.cos(angle)).toFixed(1)}px`);
    orbitKnob.style.setProperty("--ks", (0.86 + 0.14 * depth).toFixed(3));
    orbitKnob.style.zIndex = depth > 0 ? "4" : "1";

    const nextDay = wrapDay(Math.floor(dayFloat));
    if (nextDay !== orbitShownDay) {
      orbitShownDay = nextDay;
      updateOrbitLabels(orbitShownDay);
    }
  }

  // Hero Multi-App Slideshow State & Helpers (declared before setLanguage)
  const heroSlideshow = document.getElementById("hero-slideshow");
  const slideItems = heroSlideshow ? Array.from(heroSlideshow.querySelectorAll(".slide-item")) : [];
  const slideDots = heroSlideshow ? Array.from(heroSlideshow.querySelectorAll(".slide-dot")) : [];
  const slideTitleEl = document.getElementById("slide-caption-title");
  const slideSubEl = document.getElementById("slide-caption-sub");
  const slideshowToggle = document.getElementById("slideshow-toggle");
  const slideshowPauseIcon = slideshowToggle ? slideshowToggle.querySelector(".icon-pause") : null;
  const slideshowPlayIcon = slideshowToggle ? slideshowToggle.querySelector(".icon-play") : null;
  const SLIDE_TITLES = ["Gymmix", "CycleContext", "CardDisplay", "Gymmix", "DataDisplay"];
  let activeSlideIndex = 0;
  let slideshowUserPaused = reducedMotion.matches;

  function updateSlideshowCaption() {
    const dict = translations[currentLang] || translations.de;
    if (slideTitleEl) {
      slideTitleEl.textContent = SLIDE_TITLES[activeSlideIndex] || SLIDE_TITLES[0];
    }
    const subKey = `slideshow.s${activeSlideIndex}.sub`;
    if (slideSubEl && typeof dict[subKey] === "string") {
      slideSubEl.textContent = dict[subKey];
    }
    if (slideshowToggle) {
      const ariaKey = slideshowUserPaused ? "slideshow.playAria" : "slideshow.pauseAria";
      if (typeof dict[ariaKey] === "string") {
        slideshowToggle.setAttribute("aria-label", dict[ariaKey]);
      }
      slideshowToggle.setAttribute("aria-pressed", slideshowUserPaused ? "true" : "false");
    }
    if (slideshowPauseIcon) {
      slideshowPauseIcon.hidden = slideshowUserPaused;
    }
    if (slideshowPlayIcon) {
      slideshowPlayIcon.hidden = !slideshowUserPaused;
    }
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
    const pageType = document.body ? document.body.getAttribute("data-page") : "home";
    root.lang = currentLang;

    if (pageType === "imprint" && dict["imprint.pageTitle"]) {
      document.title = dict["imprint.pageTitle"];
    } else if (pageType === "privacy" && dict["privacy.pageTitle"]) {
      document.title = dict["privacy.pageTitle"];
    } else {
      document.title = dict.title;
    }

    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) {
      if (pageType === "imprint" && dict["imprint.pageDesc"]) {
        descMeta.setAttribute("content", dict["imprint.pageDesc"]);
      } else if (pageType === "privacy" && dict["privacy.pageDesc"]) {
        descMeta.setAttribute("content", dict["privacy.pageDesc"]);
      } else {
        descMeta.setAttribute("content", dict.description);
      }
    }

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (key && typeof dict[key] === "string") {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      const key = el.getAttribute("data-i18n-alt");
      if (key && typeof dict[key] === "string") {
        el.setAttribute("alt", dict[key]);
      }
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      if (key && typeof dict[key] === "string") {
        el.setAttribute("aria-label", dict[key]);
      }
    });

    document.querySelectorAll("[data-language]").forEach((btn) => {
      const active = btn.getAttribute("data-language") === currentLang;
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    updateLocalizedLinks(currentLang);
    updateOrbitLabels(orbitShownDay);
    updateSlideshowCaption();

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

  // Start CycleContext Orbit Loop
  if (orbitCard && orbitRing && orbitKnob) {
    const START_DAY = 4;
    const SECONDS_PER_DAY = 1.45;
    placeOrbit(START_DAY + 0.5);
    updateOrbitLabels(START_DAY);

    window.addEventListener("resize", () => placeOrbit(orbitShownDay + 0.5), { passive: true });

    if (!reducedMotion.matches) {
      let running = false;
      let visible = true;
      let startTime = 0;
      let elapsedBeforePause = 0;
      let rafId = 0;

      const loop = (now) => {
        if (!startTime) startTime = now;
        const elapsed = (now - startTime) / 1000;
        elapsedBeforePause = elapsed;
        placeOrbit(START_DAY + 0.5 + elapsed / SECONDS_PER_DAY);
        rafId = window.requestAnimationFrame(loop);
      };

      const start = () => {
        if (running || !visible || document.hidden) return;
        running = true;
        const offset = elapsedBeforePause;
        rafId = window.requestAnimationFrame((now) => {
          startTime = now - offset * 1000;
          loop(now);
        });
      };

      const stop = () => {
        if (!running) return;
        running = false;
        window.cancelAnimationFrame(rafId);
      };

      if ("IntersectionObserver" in window) {
        const orbitObserver = new IntersectionObserver(
          (entries) => {
            visible = Boolean(entries[0] && entries[0].isIntersecting);
            if (visible) start();
            else stop();
          },
          { threshold: 0.1 }
        );
        orbitObserver.observe(orbitCard);
      } else {
        start();
      }

      document.addEventListener("visibilitychange", () => {
        if (document.hidden) stop();
        else start();
      });
    }
  }

  // Interactive DataDisplay Dashboard / Slide Toggle
  const ddStage = document.querySelector("[data-dd-mode]");
  if (ddStage) {
    const ddButtons = Array.from(ddStage.querySelectorAll("[data-dd-target]"));
    const dashView = ddStage.querySelector(".dd-view--dashboard");
    const slideView = ddStage.querySelector(".dd-view--slide");

    const setDdMode = (mode) => {
      const next = mode === "slide" ? "slide" : "dashboard";
      ddStage.setAttribute("data-dd-mode", next);
      ddButtons.forEach((btn) => {
        const active = btn.getAttribute("data-dd-target") === next;
        btn.classList.toggle("is-active", active);
        btn.setAttribute("aria-selected", active ? "true" : "false");
      });
      if (dashView) dashView.hidden = next !== "dashboard";
      if (slideView) slideView.hidden = next !== "slide";
    };

    ddButtons.forEach((btn) => {
      btn.addEventListener("click", () => setDdMode(btn.getAttribute("data-dd-target")));
    });
  }

  // Hero Multi-App Slideshow Controls & Autoplay
  if (heroSlideshow && slideItems.length) {
    const SLIDESHOW_INTERVAL_MS = 4200;
    let slideshowHoverPaused = false;
    let slideshowTimer = null;

    const setSlide = (index) => {
      const count = slideItems.length;
      activeSlideIndex = ((index % count) + count) % count;

      slideItems.forEach((slide, idx) => {
        const active = idx === activeSlideIndex;
        slide.classList.toggle("is-active", active);
        if (active) {
          slide.removeAttribute("aria-hidden");
        } else {
          slide.setAttribute("aria-hidden", "true");
        }
      });

      slideDots.forEach((dot, idx) => {
        const active = idx === activeSlideIndex;
        dot.classList.toggle("is-active", active);
        dot.setAttribute("aria-selected", active ? "true" : "false");
      });

      updateSlideshowCaption();
    };

    const stopSlideshowTimer = () => {
      if (slideshowTimer !== null) {
        window.clearInterval(slideshowTimer);
        slideshowTimer = null;
      }
    };

    const startSlideshowTimer = () => {
      stopSlideshowTimer();
      if (slideshowUserPaused || slideshowHoverPaused || slideItems.length < 2 || document.hidden) {
        return;
      }
      slideshowTimer = window.setInterval(() => {
        setSlide(activeSlideIndex + 1);
      }, SLIDESHOW_INTERVAL_MS);
    };

    slideDots.forEach((dot, idx) => {
      dot.addEventListener("click", () => {
        const raw = dot.getAttribute("data-slide-dot");
        const target = raw !== null ? Number(raw) : idx;
        setSlide(Number.isFinite(target) ? target : idx);
        startSlideshowTimer();
      });

      dot.addEventListener("keydown", (event) => {
        if (event.key === "ArrowRight") {
          event.preventDefault();
          const next = (idx + 1) % slideItems.length;
          setSlide(next);
          if (slideDots[next]) slideDots[next].focus();
          startSlideshowTimer();
        } else if (event.key === "ArrowLeft") {
          event.preventDefault();
          const prev = (idx - 1 + slideItems.length) % slideItems.length;
          setSlide(prev);
          if (slideDots[prev]) slideDots[prev].focus();
          startSlideshowTimer();
        }
      });
    });

    if (slideshowToggle) {
      slideshowToggle.addEventListener("click", () => {
        slideshowUserPaused = !slideshowUserPaused;
        updateSlideshowCaption();
        if (slideshowUserPaused) {
          stopSlideshowTimer();
        } else {
          startSlideshowTimer();
        }
      });
    }

    heroSlideshow.addEventListener("mouseenter", () => {
      slideshowHoverPaused = true;
      stopSlideshowTimer();
    });

    heroSlideshow.addEventListener("mouseleave", () => {
      slideshowHoverPaused = false;
      startSlideshowTimer();
    });

    heroSlideshow.addEventListener("focusin", () => {
      slideshowHoverPaused = true;
      stopSlideshowTimer();
    });

    heroSlideshow.addEventListener("focusout", (event) => {
      if (!heroSlideshow.contains(event.relatedTarget)) {
        slideshowHoverPaused = false;
        startSlideshowTimer();
      }
    });

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        stopSlideshowTimer();
      } else {
        startSlideshowTimer();
      }
    });

    if (typeof reducedMotion.addEventListener === "function") {
      reducedMotion.addEventListener("change", (event) => {
        slideshowUserPaused = event.matches;
        updateSlideshowCaption();
        if (slideshowUserPaused) {
          stopSlideshowTimer();
        } else {
          startSlideshowTimer();
        }
      });
    }

    setSlide(0);
    startSlideshowTimer();
  }

  // Interactive CardDisplay 3D Business Card Deck (CardDisplay, CycleContext, Gymmix)
  const bizCard = document.getElementById("bizcard-3d");
  const cardItems = bizCard ? Array.from(bizCard.querySelectorAll("[data-bizcard-item]")) : [];
  const flipBtn = document.querySelector("[data-card-flip]");
  const cardPills = Array.from(document.querySelectorAll(".bizcard-pill[data-bizcard-index]"));

  if (bizCard && cardItems.length) {
    let activeCardIndex = 0;
    let flipSteps = 0;
    let leaveTimer = null;

    const syncPills = () => {
      cardPills.forEach((pill, idx) => {
        const raw = pill.getAttribute("data-bizcard-index");
        const pillIdx = raw !== null ? Number(raw) : idx;
        const active = pillIdx === activeCardIndex;
        pill.classList.toggle("is-active", active);
        pill.setAttribute("aria-pressed", active ? "true" : "false");
      });
    };

    const setCardIndex = (targetIdx, animate = true) => {
      const count = cardItems.length;
      const nextIdx = ((targetIdx % count) + count) % count;

      if (!animate) {
        activeCardIndex = nextIdx;
        flipSteps = 0;
        bizCard.style.setProperty("--flip-deg", "0deg");
        cardItems.forEach((card, idx) => {
          const active = idx === activeCardIndex;
          card.classList.remove("is-leaving", "is-back-plane");
          card.classList.toggle("is-current", active);
          card.setAttribute("aria-hidden", active ? "false" : "true");
        });
        syncPills();
        return;
      }

      if (nextIdx === activeCardIndex) return;

      if (leaveTimer !== null) {
        window.clearTimeout(leaveTimer);
        leaveTimer = null;
      }

      const prevCard = cardItems[activeCardIndex];
      const nextCard = cardItems[nextIdx];

      cardItems.forEach((card) => card.classList.remove("is-leaving"));

      if (prevCard) {
        prevCard.classList.remove("is-current");
        prevCard.classList.add("is-leaving");
        prevCard.setAttribute("aria-hidden", "true");
      }

      flipSteps += 1;
      const nextIsBackPlane = (flipSteps % 2) === 1;

      if (nextCard) {
        nextCard.classList.toggle("is-back-plane", nextIsBackPlane);
        nextCard.classList.add("is-current");
        nextCard.setAttribute("aria-hidden", "false");
      }

      activeCardIndex = nextIdx;
      bizCard.style.setProperty("--flip-deg", `${flipSteps * 180}deg`);
      syncPills();

      leaveTimer = window.setTimeout(() => {
        cardItems.forEach((card) => card.classList.remove("is-leaving"));
        leaveTimer = null;
      }, 740);
    };

    const nextCard = () => setCardIndex(activeCardIndex + 1, true);

    setCardIndex(0, false);
    bizCard.addEventListener("click", nextCard);
    if (flipBtn) {
      flipBtn.addEventListener("click", nextCard);
    }
    cardPills.forEach((pill, idx) => {
      pill.addEventListener("click", () => {
        const raw = pill.getAttribute("data-bizcard-index");
        const target = raw !== null ? Number(raw) : idx;
        setCardIndex(Number.isFinite(target) ? target : idx, true);
      });
    });
  }

  // Subtle 3D Pointer Tilt
  if (window.matchMedia("(pointer: fine)").matches && !reducedMotion.matches) {
    document.querySelectorAll("[data-tilt-card]").forEach((el) => {
      el.addEventListener("mousemove", (event) => {
        const rect = el.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        el.style.setProperty("--tilt-y", `${(x * 5.5).toFixed(2)}deg`);
        el.style.setProperty("--tilt-x", `${(-y * 5.5).toFixed(2)}deg`);
      });
      el.addEventListener("mouseleave", () => {
        el.style.setProperty("--tilt-y", "0deg");
        el.style.setProperty("--tilt-x", "0deg");
      });
    });
  }

  // Bento Floating Pill Header Scroll State + Mobile Drawer
  const siteHeader = document.getElementById("site-header");
  const menuToggle = document.getElementById("menu-toggle");
  const mobileDrawer = document.getElementById("mobile-drawer");

  const updateHeaderScroll = () => {
    if (!siteHeader) return;
    siteHeader.classList.toggle("is-scrolled", window.scrollY > 12);
  };
  window.addEventListener("scroll", updateHeaderScroll, { passive: true });
  updateHeaderScroll();

  const setDrawerOpen = (open) => {
    if (!menuToggle || !mobileDrawer) return;
    menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
    mobileDrawer.setAttribute("aria-hidden", open ? "false" : "true");
    mobileDrawer.classList.toggle("is-open", open);
    document.body.classList.toggle("menu-open", open);
  };

  if (menuToggle && mobileDrawer) {
    menuToggle.addEventListener("click", () => {
      const next = menuToggle.getAttribute("aria-expanded") !== "true";
      setDrawerOpen(next);
    });

    mobileDrawer.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setDrawerOpen(false));
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setDrawerOpen(false);
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 960) setDrawerOpen(false);
    });
  }

  // Category Filtering
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

    if (orbitCard && !orbitCard.hidden) {
      window.requestAnimationFrame(() => placeOrbit(orbitShownDay + 0.5));
    }
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
      setDrawerOpen(false);
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
        { threshold: 0.06, rootMargin: "0px 0px -24px 0px" }
      );
      revealNodes.forEach((el) => revealObserver.observe(el));
    } else {
      revealNodes.forEach((el) => el.classList.add("is-visible"));
    }
  }
})();
