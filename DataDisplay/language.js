(() => {
  const storageKey = 'datadisplay.language';
  const messages = {
    de: {
      pages: {
        homeTitle: 'DataDisplay – Diagramme und Dashboards für Mac und iPad',
        homeDescription: 'DataDisplay für Mac und iPad. Tabellen importieren, Daten in Diagrammen vergleichen und Ergebnisse als Dashboard oder Präsentation zeigen.',
        imprintTitle: 'Impressum – DataDisplay',
        imprintDescription: 'Impressum und Kontakt für DataDisplay.',
        privacyTitle: 'Datenschutz – DataDisplay',
        privacyDescription: 'Datenschutzhinweise für die DataDisplay-Website.'
      },
      skip: 'Zum Inhalt springen',
      'navigation.main': 'Hauptnavigation',
      'navigation.menu': 'Navigation öffnen',
      'navigation.workflow': 'Zum Arbeitsschritt springen',
      'language.switch': 'Sprache',
      'language.german': 'Deutsch',
      'language.english': 'Englisch',
      'theme.label': 'Farbschema',
      'theme.system': 'System',
      'theme.light': 'Hell',
      'theme.dark': 'Dunkel',
      'nav.overview': 'Überblick',
      'nav.features': 'Funktionen',
      'nav.feedback': 'Feedback',
      'nav.getApp': 'Zur App',
      'nav.home': 'Startseite',
      'hero.platform': 'Für Mac und iPad',
      'hero.titleFirst': 'Von der Tabelle',
      'hero.titleSecond': 'zur Präsentation.',
      'hero.lead': 'Importiere deine Tabellen, vergleiche Entwicklungen im Dashboard und übernimm ausgewählte Diagramme direkt auf eine Folie.',
      'hero.features': 'Funktionen ansehen',
      'hero.formats': 'Dateiformate',
      'hero.dashboardAlt': 'Illustriertes DataDisplay-Dashboard mit Umsatzverläufen, Jahresumsatz und einem Vergleich von drei Filialen.',
      'hero.dashboardCaption': 'Dashboard-Illustration mit Beispieldaten',
      'workflow.import': 'Tabellen importieren',
      'workflow.charts': 'Diagramme erstellen',
      'workflow.dashboard': 'Dashboard gestalten',
      'workflow.present': 'Ergebnisse präsentieren',
      'formats.title': 'Mit deinen Tabellen starten.',
      'formats.copy': 'Öffne eine Arbeitsmappe, wähle die benötigten Blätter und prüfe die Werte direkt in DataDisplay.',
      'formats.textFiles': 'Texttabellen',
      'formats.note': 'Beim Numbers-Import übernimmt DataDisplay die Zellwerte und die zuletzt gespeicherten Formelergebnisse.',
      'features.alt': 'Funktionen am Beispiel des Filialumsatzes',
      'charts.category': 'Diagramme',
      'charts.title': 'Verläufe vergleichen.',
      'charts.copy': 'Wähle aus 26 Diagrammarten. Im Liniendiagramm siehst du, wie sich die Monatsumsätze der drei Filialen entwickeln und wann sich ihr Abstand vergrößert.',
      'charts.panelTitle': 'Monatsumsatz',
      'charts.unit': 'Euro je Filiale',
      'charts.alt': 'Filiale Nord steigt von 12.400 auf 20.100 Euro, West von 11.200 auf 17.100 Euro und Süd von 9.800 auf 16.200 Euro.',
      'charts.caption': 'Beispieldaten · Januar bis Dezember 2026',
      'dashboard.category': 'Dashboard',
      'dashboard.title': 'Details im Kontext.',
      'dashboard.copy': 'Ordne Diagramme, Tabellenausschnitte und Kommentare auf einer Fläche an. So kannst du den Gesamtumsatz und die Beiträge der einzelnen Filialen gemeinsam betrachten.',
      'dashboard.panelTitle': 'Filialvergleich',
      'dashboard.total': 'Gesamtumsatz',
      'dashboard.totalValue': '53.400',
      'dashboard.alt': 'Nord 20.100 Euro, West 17.100 Euro, Süd 16.200 Euro.',
      'dashboard.caption': 'Beispielausschnitt aus dem Dashboard',
      'presentation.category': 'Präsentation',
      'presentation.title': 'Ergebnisse zeigen.',
      'presentation.copy': 'Übernimm ein Diagramm auf eine Folie und ergänze deine Einordnung. Führe die Präsentation in DataDisplay vor oder exportiere sie als PDF oder PowerPoint-Datei.',
      'presentation.slideLabel': 'Umsatzbericht 2026',
      'presentation.slideTitle': 'Nord führt im Dezember.',
      'presentation.slideAlt': 'Der Monatsumsatz der Filiale Nord liegt im Dezember bei 20.100 Euro und damit über West und Süd.',
      'presentation.caption': 'Beispielfolie mit demselben Datenstand',
      'availability.title': 'DataDisplay für Mac und iPad.',
      'availability.copy': 'Der Link zum App Store folgt.',
      'feedback.title': 'Feedback & Vorschläge',
      'feedback.copy': 'Welcher Arbeitsschritt könnte leichter sein? Welche Darstellung fehlt dir?',
      'feedback.note': 'Der Kontakt für Rückmeldungen wird ergänzt.',
      'footer.copyright': '© DataDisplay',
      'footer.legal': 'Rechtliche Informationen',
      'footer.imprint': 'Impressum',
      'footer.privacy': 'Datenschutz',
      'footer.backToTop': 'Zurück nach oben',
      'demo.workspaces': 'Arbeitsbereiche',
      'demo.table': 'Tabelle',
      'demo.preparation': 'Aufbereitung',
      'demo.chart': 'Diagramm',
      'demo.presentation': 'Präsentation',
      'demo.revenue': 'Filialumsatz',
      'demo.monthlyRevenue': 'Monatsumsatz in €',
      'demo.annualRevenue': 'Jahresumsatz',
      'demo.annualValue': '499.900 €',
      'demo.allBranches': 'Alle drei Filialen',
      'demo.quarterlyRevenue': 'Umsatz je Quartal',
      'data.axis20': '20.000',
      'data.axis15': '15.000',
      'data.axis10': '10.000',
      'data.jan': 'Jan',
      'data.apr': 'Apr',
      'data.jul': 'Jul',
      'data.oct': 'Okt',
      'data.dec': 'Dez',
      'data.december': 'Dezember',
      'data.north': 'Nord',
      'data.south': 'Süd',
      'data.northValue': '20.100 €',
      'data.westValue': '17.100 €',
      'data.southValue': '16.200 €',
      'country.germany': 'Deutschland',
      'imprint.title': 'Impressum',
      'imprint.intro': 'Angaben nach § 5 DDG zum Anbieter von DataDisplay.',
      'imprint.provider': 'Anbieter',
      'imprint.contact': 'Kontakt',
      'imprint.phone': 'Telefon',
      'imprint.email': 'E-Mail',
      'imprint.registerTitle': 'Vertretung und Register',
      'imprint.managingDirectors': 'Geschäftsführer',
      'imprint.registerCourt': 'Registergericht',
      'imprint.localCourt': 'Amtsgericht Bad Oeynhausen',
      'imprint.registerNumber': 'Registernummer',
      'imprint.vatId': 'Umsatzsteuer-ID',
      'imprint.back': 'Zur DataDisplay-Seite',
      'privacy.title': 'Datenschutz',
      'privacy.intro': 'Hier erfährst du, welche Daten bei einem Besuch der DataDisplay-Website verarbeitet werden.',
      'privacy.controller': 'Verantwortlicher',
      'privacy.reachUs': 'Du erreichst uns unter',
      'privacy.moreDetails': 'Weitere Angaben stehen im',
      'privacy.hosting': 'Besuch der Website und Hosting',
      'privacy.hostingDetails': 'Diese Website wird über GitHub Pages bereitgestellt. Beim Aufruf verarbeitet der Hosting-Dienst technische Verbindungsdaten. GitHub informiert darüber, dass die IP-Adresse von Besuchern zum Schutz und zur Sicherheit des Dienstes protokolliert und gespeichert wird. Dazu können weitere Angaben zur angeforderten Seite und zur Verbindung gehören.',
      'privacy.processing': 'Die Verarbeitung dient der technischen Auslieferung, dem sicheren Betrieb und der Abwehr von Störungen. Soweit wir dafür verantwortlich sind, stützen wir sie auf unser berechtigtes Interesse am Betrieb einer sicheren und erreichbaren Website (Art. 6 Abs. 1 lit. f DSGVO). GitHub beschreibt seine eigene Datenverarbeitung und die Dauer der Speicherung in der',
      'privacy.githubPolicy': 'Datenschutzerklärung von GitHub',
      'privacy.and': 'sowie in der Dokumentation zu',
      'privacy.githubPages': 'GitHub Pages und Besucherdaten',
      'privacy.transfers': 'GitHub kann personenbezogene Daten auch an Orten außerhalb des Europäischen Wirtschaftsraums verarbeiten. Informationen zu internationalen Übermittlungen und den dabei verwendeten Schutzmaßnahmen findest du in',
      'privacy.transfersLink': 'GitHubs Angaben zu internationalen Datenübermittlungen',
      'privacy.preferences': 'Darstellung der Website',
      'privacy.preferenceDetails': 'Wenn du im Farbschalter „Hell“ oder „Dunkel“ auswählst, speichert dein Browser diese Wahl lokal auf deinem Gerät, damit sie beim nächsten Besuch wieder gilt. Wählst du „System“, wird die gespeicherte Farbauswahl gelöscht und die Website folgt der Darstellungseinstellung deines Geräts. Wenn du die Sprache manuell änderst, speichert dein Browser diese Wahl ebenfalls lokal für deinen nächsten Besuch. Du kannst die manuelle Farbauswahl jederzeit mit „System“ zurücksetzen. Die Einstellungen werden nicht an uns übertragen.',
      'privacy.noTracking': 'Die Website setzt selbst keine Cookies und verwendet keine Reichweitenmessung oder Werbeverfolgung.',
      'privacy.emailContact': 'Kontakt per E-Mail',
      'privacy.emailProcessing': 'Wenn du uns wegen eines bestehenden oder geplanten Vertrags per E-Mail schreibst, verarbeiten wir deine Absenderadresse, deine Nachricht und die darin enthaltenen Angaben, um den Vertrag zu bearbeiten oder vorzubereiten (Art. 6 Abs. 1 lit. b DSGVO). Bei anderen Anfragen beruht die Bearbeitung auf unserem berechtigten Interesse, an uns gerichtete Nachrichten zu beantworten (Art. 6 Abs. 1 lit. f DSGVO).',
      'privacy.retention': 'Wir speichern die Korrespondenz so lange, wie sie für die Bearbeitung erforderlich ist, und beachten gesetzliche Aufbewahrungspflichten.',
      'privacy.rights': 'Deine Rechte',
      'privacy.rightsDetails': 'Im gesetzlichen Rahmen kannst du Auskunft über deine personenbezogenen Daten verlangen sowie ihre Berichtigung oder Löschung und die Einschränkung ihrer Verarbeitung beantragen. Du kannst der Verarbeitung widersprechen, die auf berechtigten Interessen beruht. Soweit anwendbar, hast du außerdem ein Recht auf Datenübertragbarkeit. Wende dich dafür an die im',
      'privacy.emailInNotice': 'angegebene E-Mail-Adresse.',
      'privacy.complaints': 'Du kannst dich bei einer Datenschutzaufsichtsbehörde beschweren. Zuständig ist insbesondere die',
      'privacy.authority': 'Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen'
    },
    en: {
      pages: {
        homeTitle: 'DataDisplay – Charts and dashboards for Mac and iPad',
        homeDescription: 'DataDisplay for Mac and iPad. Import spreadsheets, compare data in charts, and present your findings in a dashboard or slide deck.',
        imprintTitle: 'Legal Notice – DataDisplay',
        imprintDescription: 'Provider details and contact information for DataDisplay.',
        privacyTitle: 'Privacy Notice – DataDisplay',
        privacyDescription: 'Privacy information for the DataDisplay website.'
      },
      skip: 'Skip to content',
      'navigation.main': 'Main navigation',
      'navigation.menu': 'Open navigation',
      'navigation.workflow': 'Jump to a step',
      'language.switch': 'Language',
      'language.german': 'German',
      'language.english': 'English',
      'theme.label': 'Appearance',
      'theme.system': 'System',
      'theme.light': 'Light',
      'theme.dark': 'Dark',
      'nav.overview': 'Overview',
      'nav.features': 'Features',
      'nav.feedback': 'Feedback',
      'nav.getApp': 'Get the app',
      'nav.home': 'Home',
      'hero.platform': 'For Mac and iPad',
      'hero.titleFirst': 'From spreadsheet',
      'hero.titleSecond': 'to presentation.',
      'hero.lead': 'Import your spreadsheets, compare trends in a dashboard, and place selected charts straight onto a slide.',
      'hero.features': 'Explore features',
      'hero.formats': 'File formats',
      'hero.dashboardAlt': 'DataDisplay dashboard illustration with revenue trends, annual revenue, and a comparison of three branches.',
      'hero.dashboardCaption': 'Dashboard illustration with sample data',
      'workflow.import': 'Import spreadsheets',
      'workflow.charts': 'Create charts',
      'workflow.dashboard': 'Build a dashboard',
      'workflow.present': 'Present your results',
      'formats.title': 'Start with your spreadsheets.',
      'formats.copy': 'Open a workbook, choose the sheets you need, and review the values in DataDisplay.',
      'formats.textFiles': 'Text files',
      'formats.note': 'When you import a Numbers file, DataDisplay reads its cell values and the most recently saved formula results.',
      'features.alt': 'Features shown with branch revenue examples',
      'charts.category': 'Charts',
      'charts.title': 'Compare trends.',
      'charts.copy': 'Choose from 26 chart types. This line chart shows how monthly revenue changes across three branches and where the gap between them widens.',
      'charts.panelTitle': 'Monthly revenue',
      'charts.unit': 'Euros per branch',
      'charts.alt': 'North increases from €12,400 to €20,100, West from €11,200 to €17,100, and South from €9,800 to €16,200.',
      'charts.caption': 'Sample data · January to December 2026',
      'dashboard.category': 'Dashboard',
      'dashboard.title': 'See the full picture.',
      'dashboard.copy': 'Arrange charts, table excerpts, and notes on one canvas. See total revenue alongside each branch’s contribution.',
      'dashboard.panelTitle': 'Branch comparison',
      'dashboard.total': 'Total revenue',
      'dashboard.totalValue': '53,400',
      'dashboard.alt': 'North €20,100, West €17,100, South €16,200.',
      'dashboard.caption': 'Example view from the dashboard',
      'presentation.category': 'Presentation',
      'presentation.title': 'Share your findings.',
      'presentation.copy': 'Place a chart on a slide and add your interpretation. Present from DataDisplay or export your deck as a PDF or PowerPoint file.',
      'presentation.slideLabel': 'Revenue report 2026',
      'presentation.slideTitle': 'North leads in December.',
      'presentation.slideAlt': 'North branch monthly revenue is €20,100 in December, ahead of West and South.',
      'presentation.caption': 'Example slide using the same data',
      'availability.title': 'DataDisplay for Mac and iPad.',
      'availability.copy': 'The App Store link will be added soon.',
      'feedback.title': 'Feedback & suggestions',
      'feedback.copy': 'Which step could be easier? What kind of view is missing?',
      'feedback.note': 'Feedback contact details will be added soon.',
      'footer.copyright': '© DataDisplay',
      'footer.legal': 'Legal information',
      'footer.imprint': 'Legal notice',
      'footer.privacy': 'Privacy',
      'footer.backToTop': 'Back to top',
      'demo.workspaces': 'Workspaces',
      'demo.table': 'Table',
      'demo.preparation': 'Preparation',
      'demo.chart': 'Chart',
      'demo.presentation': 'Presentation',
      'demo.revenue': 'Branch revenue',
      'demo.monthlyRevenue': 'Monthly revenue in €',
      'demo.annualRevenue': 'Annual revenue',
      'demo.annualValue': '€499,900',
      'demo.allBranches': 'All three branches',
      'demo.quarterlyRevenue': 'Revenue by quarter',
      'data.axis20': '20,000',
      'data.axis15': '15,000',
      'data.axis10': '10,000',
      'data.jan': 'Jan',
      'data.apr': 'Apr',
      'data.jul': 'Jul',
      'data.oct': 'Oct',
      'data.dec': 'Dec',
      'data.december': 'December',
      'data.north': 'North',
      'data.south': 'South',
      'data.northValue': '€20,100',
      'data.westValue': '€17,100',
      'data.southValue': '€16,200',
      'country.germany': 'Germany',
      'imprint.title': 'Legal Notice',
      'imprint.intro': 'Provider information under Section 5 of the German Digital Services Act (DDG).',
      'imprint.provider': 'Provider',
      'imprint.contact': 'Contact',
      'imprint.phone': 'Telephone',
      'imprint.email': 'Email',
      'imprint.registerTitle': 'Representatives and register',
      'imprint.managingDirectors': 'Managing directors',
      'imprint.registerCourt': 'Commercial register court',
      'imprint.localCourt': 'Local Court of Bad Oeynhausen',
      'imprint.registerNumber': 'Registration number',
      'imprint.vatId': 'VAT ID',
      'imprint.back': 'Back to DataDisplay',
      'privacy.title': 'Privacy',
      'privacy.intro': 'This notice explains what data is processed when you visit the DataDisplay website.',
      'privacy.controller': 'Controller',
      'privacy.reachUs': 'You can reach us at',
      'privacy.moreDetails': 'Further details are available in the',
      'privacy.hosting': 'Website visits and hosting',
      'privacy.hostingDetails': 'This website is hosted on GitHub Pages. When you visit, the hosting provider processes technical connection data. GitHub states that visitor IP addresses are logged and stored to protect and secure the service. This may also include details about the requested page and connection.',
      'privacy.processing': 'This processing supports delivery of the website, secure operation, and prevention of service disruptions. Where we are responsible for it, we rely on our legitimate interest in operating a secure and available website (Article 6(1)(f) GDPR). GitHub describes its own data processing and retention period in its',
      'privacy.githubPolicy': 'Privacy Statement',
      'privacy.and': 'and in the documentation about',
      'privacy.githubPages': 'GitHub Pages visitor data',
      'privacy.transfers': 'GitHub may also process personal data outside the European Economic Area. Information about international transfers and the safeguards used is available in',
      'privacy.transfersLink': 'GitHub’s information about international data transfers',
      'privacy.preferences': 'Website preferences',
      'privacy.preferenceDetails': 'If you choose Light or Dark in the appearance menu, your browser stores that choice locally on your device so it applies on your next visit. Selecting System clears the saved appearance choice and follows your device setting. If you change the language manually, your browser stores that choice locally for your next visit as well. You can reset the manual appearance choice at any time by selecting System. These preferences are not sent to us.',
      'privacy.noTracking': 'This website does not set its own cookies or use audience measurement or advertising tracking.',
      'privacy.emailContact': 'Contact by email',
      'privacy.emailProcessing': 'If you email us about an existing or planned contract, we process your email address, message, and the information it contains to perform or prepare the contract (Article 6(1)(b) GDPR). We process other enquiries based on our legitimate interest in replying to messages sent to us (Article 6(1)(f) GDPR).',
      'privacy.retention': 'We keep correspondence for as long as necessary to handle the enquiry and observe any statutory retention requirements.',
      'privacy.rights': 'Your rights',
      'privacy.rightsDetails': 'Within the scope of applicable law, you may request access to your personal data, its correction or deletion, and restriction of its processing. You may object to processing based on legitimate interests. Where applicable, you also have the right to data portability. To exercise these rights, contact us at the email address in the',
      'privacy.emailInNotice': 'section above.',
      'privacy.complaints': 'You may lodge a complaint with a data protection supervisory authority. The competent authority in particular is the',
      'privacy.authority': 'State Commissioner for Data Protection and Freedom of Information of North Rhine-Westphalia'
    }
  };

  function browserLanguage() {
    const preferences = navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language || 'de'];
    for (const preference of preferences) {
      const language = String(preference).toLowerCase();
      if (language.startsWith('en')) return 'en';
      if (language.startsWith('de')) return 'de';
    }
    return 'de';
  }

  function storedLanguage() {
    try {
      const value = window.localStorage.getItem(storageKey);
      return value === 'de' || value === 'en' ? value : null;
    } catch {
      return null;
    }
  }

  function lookup(language, key) {
    const dictionary = messages[language];
    if (Object.prototype.hasOwnProperty.call(dictionary, key)) return dictionary[key];
    return key.split('.').reduce((value, part) => value && value[part], dictionary);
  }

  function applyLanguage(language) {
    const dictionary = messages[language];
    if (!dictionary) return;

    document.documentElement.lang = language;
    document.title = dictionary.pages[document.body.dataset.page + 'Title'];

    const description = document.querySelector('meta[name="description"]');
    const descriptionKey = description && description.dataset.i18nContent;
    if (descriptionKey) description.content = lookup(language, descriptionKey);

    document.querySelectorAll('[data-i18n]').forEach(element => {
      const value = lookup(language, element.dataset.i18n);
      if (typeof value === 'string') element.textContent = value;
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(element => {
      const value = lookup(language, element.dataset.i18nAria);
      if (typeof value === 'string') element.setAttribute('aria-label', value);
    });
    document.querySelectorAll('[data-i18n-button-aria]').forEach(element => {
      const value = lookup(language, element.dataset.i18nButtonAria);
      if (typeof value === 'string') element.setAttribute('aria-label', value);
    });
    document.querySelectorAll('[data-language-choice]').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.languageChoice === language));
    });
  }

  const initialLanguage = storedLanguage() || browserLanguage();
  applyLanguage(initialLanguage);

  document.querySelectorAll('[data-language-choice]').forEach(button => {
    button.addEventListener('click', () => {
      const language = button.dataset.languageChoice;
      if (!messages[language]) return;
      try {
        window.localStorage.setItem(storageKey, language);
      } catch {
        // Die Auswahl gilt auch dann für diese Seite, wenn Speicher blockiert ist.
      }
      applyLanguage(language);
    });
  });
})();
