export type Locale = 'de' | 'en';

export const profile = {
  name: 'Tarik Ermis',
  email: 'tarik@n3tz.ai',
  phone: '+49 1573 753 22 27',
  phoneHref: '+4915737532227',
  github: 'https://github.com/tarikermis',
  linkedin: 'https://www.linkedin.com/in/tarikermis',
  n3tz: 'https://n3tz.ai',
  griffi: 'https://griffi.ai',
} as const;

type Img = { src: string; width: number; height: number; alt: string };

export type Case = {
  id: string;
  client: string;
  sector: string;
  kind: string;
  title: string;
  problem: string;
  built: string[];
  result: string;
  stages?: string[];
  note?: string;
  image?: Img;
  link?: { label: string; href: string };
};

export type PlannerOption = { id: string; label: string };

export type Copy = {
  lang: Locale;
  path: string;
  alternatePath: string;
  alternateLabel: string;
  alternateName: string;
  legalPath: string;
  seo: { title: string; description: string };
  skip: string;
  nav: { plan: string; work: string; services: string; process: string; about: string; cta: string; menu: string };
  hero: {
    titleBefore: string;
    titleAccent: string;
    titleAfter: string;
    intro: string;
    primary: string;
    secondary: string;
    place: string;
    portraitAlt: string;
    proof: Array<{ value: string; label: string }>;
  };
  planner: {
    title: string;
    intro: string;
    stepTrade: string;
    stepTask: string;
    stepTools: string;
    toolsHint: string;
    trades: PlannerOption[];
    tasks: PlannerOption[];
    tools: PlannerOption[];
    resultLabel: string;
    weeks: string[];
    approveLabel: string;
    caseLabel: string;
    send: string;
    sendHint: string;
    mailSubject: string;
    mailIntro: string;
    mailTrade: string;
    mailTask: string;
    mailTools: string;
    mailNone: string;
    mailOutro: string;
  };
  work: { title: string; intro: string; built: string; result: string; ownProduct: string; more: string; cases: Case[] };
  griffiShots: Img[];
  services: {
    title: string;
    intro: string;
    items: Array<{ scene: string; title: string; text: string }>;
    extras: string;
  };
  process: {
    title: string;
    intro: string;
    steps: Array<{ title: string; text: string }>;
    pricing: string;
  };
  about: {
    title: string;
    paragraphs: string[];
    photo: Img;
    photoCredit: string;
    facts: Array<{ label: string; value: string }>;
  };
  faq: { title: string; items: Array<{ q: string; a: string }> };
  contact: {
    title: string;
    text: string;
    mail: string;
    call: string;
    copy: string;
    copied: string;
    vcard: string;
  };
  footer: { legal: string; n3tz: string; rights: string };
};

const portraitAltDe = 'Tarik Ermis im bordeauxroten T-Shirt im Grünen, Arme verschränkt';
const portraitAltEn = 'Tarik Ermis in a burgundy T-shirt outdoors, arms crossed';

export const plannerMatrix: Record<string, { de: string[]; en: string[]; approve: { de: string; en: string }; caseId: string }> = {
  calls: {
    de: [
      'Ich höre mir an, welche Anrufe bei dir reinkommen, und schreibe mit dir die Fragen auf, die jeder Anrufer beantworten soll.',
      'Ein KI-Assistent nimmt ab, wenn du nicht kannst. Er stellt diese Fragen und legt jede Anfrage beim richtigen Kunden ab.',
      'Du bekommst jede Anfrage als kurze Notiz mit Rückrufwunsch. Was dringend ist, landet sofort auf deinem Handy.',
    ],
    en: [
      'I listen to which calls you get and write down with you the questions every caller should answer.',
      'An AI assistant picks up when you cannot. It asks those questions and files each enquiry with the right customer.',
      'You get every enquiry as a short note with a callback request. Urgent ones reach your phone right away.',
    ],
    approve: { de: 'Wie sich der Assistent vorstellt und was er zusagen darf.', en: 'How the assistant introduces itself and what it may promise.' },
    caseId: 'autohandel',
  },
  mail: {
    de: [
      'Wir gehen zehn echte E-Mails aus deinem Postfach durch und legen fest, welche Arten von Anfragen es gibt.',
      'Ein KI-Assistent liest neue Mails, ordnet sie dem Kunden zu und entwirft eine Antwort in deinem Ton.',
      'Du siehst morgens eine Liste: was erledigt werden kann, was einen Entwurf hat und was du selbst entscheiden musst.',
    ],
    en: [
      'We go through ten real emails from your inbox and agree which kinds of enquiry you get.',
      'An AI assistant reads new mail, matches it to the customer and drafts a reply in your voice.',
      'Each morning you see one list: what can be closed, what has a draft and what needs your decision.',
    ],
    approve: { de: 'Jede Antwort, bevor sie rausgeht.', en: 'Every reply before it goes out.' },
    caseId: 'griffi',
  },
  quotes: {
    de: [
      'Du zeigst mir drei Angebote, die du zuletzt geschrieben hast, und deine Preisliste.',
      'Aus einer Anfrage, einem Anruf oder einem Aufmaß entsteht ein Angebotsentwurf mit deinen Positionen und Preisen.',
      'Der Entwurf liegt fertig in deinem Programm. Du prüfst, änderst und schickst ihn ab.',
    ],
    en: [
      'You show me three quotes you wrote recently and your price list.',
      'An enquiry, a call or a site measurement becomes a draft quote with your line items and prices.',
      'The draft waits in your software. You check it, adjust it and send it.',
    ],
    approve: { de: 'Jeden Preis und jedes Angebot.', en: 'Every price and every quote.' },
    caseId: 'griffi',
  },
  receipts: {
    de: [
      'Wir schauen, wo deine Belege heute ankommen: Mail, Papier, Fotos vom Handy.',
      'Ein KI-Assistent sammelt sie ein und liest Betrag, Datum und Lieferant. Dann legt er sie sortiert ab.',
      'Am Monatsende ist der Ordner für das Steuerbüro fertig. Fehlt ein Beleg, siehst du das vorher.',
    ],
    en: [
      'We look at where your receipts arrive today: email, paper, photos on your phone.',
      'An AI assistant collects them and reads amount, date and supplier. Then it files them in order.',
      'At month end the folder for your accountant is ready. Missing receipts show up before that.',
    ],
    approve: { de: 'Was an das Steuerbüro geht.', en: 'What goes to your accountant.' },
    caseId: 'griffi',
  },
  handoff: {
    de: [
      'Wir zeichnen auf, wo heute Daten von Hand von einem Programm ins nächste getippt werden.',
      'Ich verbinde die Programme direkt, über ihre Schnittstelle oder, wenn es keine gibt, über das Formular, das du heute ausfüllst.',
      'Jeder Fall bekommt einen Status. Was nicht durchläuft, landet mit Grund bei der Person, die es klären kann.',
    ],
    en: [
      'We map where data is typed by hand from one program into the next.',
      'I connect the programs directly, through their interface or, where there is none, through the form you fill in today.',
      'Every case gets a status. Anything that fails lands, with the reason, with the person who can fix it.',
    ],
    approve: { de: 'Den ersten echten Fall, bevor der Rest automatisch läuft.', en: 'The first real case before the rest runs on its own.' },
    caseId: 'medivaro',
  },
  knowledge: {
    de: [
      'Wir sammeln, was dein Team ständig nachfragt: Preise, Abläufe, Regeln, Unterlagen.',
      'Ein Assistent beantwortet diese Fragen aus euren eigenen Unterlagen und zeigt immer die Quelle mit.',
      'Neue Leute finden Antworten selbst, ohne dich anzurufen. Was fehlt, siehst du an den offenen Fragen.',
    ],
    en: [
      'We collect what your team keeps asking: prices, procedures, rules, documents.',
      'An assistant answers from your own documents and always shows the source.',
      'New staff find answers without calling you. Gaps show up as open questions.',
    ],
    approve: { de: 'Welche Unterlagen der Assistent lesen darf.', en: 'Which documents the assistant may read.' },
    caseId: 'enterprise',
  },
};

const casesDe: Case[] = [
  {
    id: 'autohandel',
    client: 'B2B-Autohändler',
    sector: 'Fahrzeugeinkauf und Weiterverkauf an Händler',
    kind: 'Kunde seit 2024',
    stages: ['Einkauf', 'Abwicklung', 'Ablage'],
    title: 'Seit 2024 baue ich für einen B2B-Autohändler die Software, mit der er Fahrzeuge einkauft und abwickelt.',
    problem: 'Der Händler kauft Fahrzeuge auf den Verkaufsplattformen großer Leasingfirmen und verkauft sie an Händler weiter. Gute Fahrzeuge sind dort in Sekunden weg, und jedes gekaufte Auto zieht Papierkram, Fristen und Abstimmung nach sich.',
    built: [
      'Einkaufs-Bots, die zur Verkaufsöffnung nach seinen Regeln kaufen, schneller als jemand von Hand klicken kann. Jede Änderung testen wir gemeinsam im echten Kauf.',
      'Eine eigene Software nur für seinen Betrieb. Darin läuft jedes Fahrzeug vom Kauf bis zur Übergabe, mit Fristen und Dokumenten, und sie löst seine alten Listen ab.',
      'Griffi als digitale Ablage für Belege und Dokumente.',
    ],
    result: 'Aus dem ersten Auftrag 2024 ist eine feste Zusammenarbeit geworden. Einkauf und Abwicklung laufen heute über Software, die ich für ihn baue und betreue.',
  },
  {
    id: 'medivaro',
    client: 'Medivaro Pflege',
    sector: 'Pflegehilfsmittel, Oberhausen',
    kind: 'Kundenprojekt',
    title: 'Eine neue Website, die Pflegebox-Anträge direkt an das Abrechnungsportal weitergibt.',
    problem: 'Anträge kamen über ein altes WordPress-Formular und mussten von Hand in das Abrechnungsportal übertragen werden.',
    built: [
      'Eine schnelle Website, auf der Angehörige die Pflegebox online beantragen.',
      'Einen Antrags-Dienst auf einem Server in Deutschland, der jeden Antrag als Vorgang im Portal anlegt und Medivaro Erfolg oder Fehler meldet.',
      'Gesundheitsdaten laufen nur über diesen Server, nie über Analyse- oder Mail-Dienste.',
    ],
    result: 'Die Website ist live. Die Übergabe ins Portal ist so gebaut, dass Medivaro zu jedem Antrag einen Status sieht und vor dem Absenden ein Mensch prüft.',
    note: 'Die Bilder auf der Kundenseite sind KI-Illustrationen.',
    image: { src: '/assets/work/medivaro.webp', width: 1280, height: 889, alt: 'Startseite von medivaro-pflege.de mit Pflegebox-Antrag' },
    link: { label: 'medivaro-pflege.de', href: 'https://medivaro-pflege.de' },
  },
  {
    id: 'storeradar',
    client: 'StoreRadar24',
    sector: 'Standortanalyse, Mainz',
    kind: 'Kundensoftware',
    title: 'Eine Web-App, die zu einer Adresse in wenigen Minuten einen Standortbericht erstellt.',
    problem: 'Ein klassisches Standortgutachten dauert Wochen. Wer einen Laden mieten will, soll vorher schnell und bezahlbar sehen, was die Adresse taugt.',
    built: [
      'Adresse eingeben, Bericht bekommen: Chancen und Risiken, Wettbewerb im Umfeld und fünf passende Nutzungen.',
      'Jede Zahl mit Quelle und Datum. Fehlende Daten zeigt der Bericht offen, statt sie schönzurechnen.',
      'Bericht im Browser und als PDF, bezahlt wird pro Analyse ohne Abo.',
    ],
    result: 'Live auf storeradar24.de. Entwicklung und technischer Betrieb laufen über n3tz.',
    image: { src: '/assets/work/storeradar.webp', width: 1280, height: 880, alt: 'Startseite von storeradar24.de: „Erst prüfen, dann mieten.“' },
    link: { label: 'storeradar24.de', href: 'https://storeradar24.de' },
  },
  {
    id: 'md-cleaning',
    client: 'MD Cleaning',
    sector: 'Reinigung und Hausmeisterservice, Völklingen',
    kind: 'Kundenwebsite',
    title: 'Eine Website, auf der Kunden aus der Region sofort sehen, was MD Cleaning macht und wie sie anfragen.',
    problem: 'Ein Servicebetrieb lebt von Anfragen aus der Umgebung. Die Website muss zeigen, was er anbietet und wo er hinfährt.',
    built: [
      'Leistungen von Gebäudereinigung bis Winterdienst, Einsatzgebiet und ein direkter Weg zur Anfrage.',
      'Aufgebaut, damit Google und KI-Suchen den Betrieb im Saarland richtig einordnen.',
    ],
    result: 'Live auf mdcleaning-saar.de.',
    image: { src: '/assets/work/md-cleaning.webp', width: 1280, height: 889, alt: 'Startseite von mdcleaning-saar.de, Reinigungsservice in Völklingen' },
    link: { label: 'mdcleaning-saar.de', href: 'https://mdcleaning-saar.de' },
  },
  {
    id: 'haliavrupa',
    client: 'HaliAvrupa',
    sector: 'Teppich-Onlineshop',
    kind: 'Technische Umsetzung',
    title: 'Ein Shopify-Shop, in dem Kunden ihren Teppich über Filter, Farben und Größen finden.',
    problem: 'Der alte Shop sollte umziehen, ohne dass alte Links ins Leere laufen.',
    built: [
      'Filter, verknüpfte Farbvarianten und eine Galerie, die auf dem Handy wischbar ist.',
      'Formulare, mit denen Kunden Ware zurückschicken, Mängel melden oder sich bewerben.',
      'Alte Links führen auf die neuen Seiten.',
    ],
    result: 'Live seit August 2026. HaliAvrupa nennt n3tz auf der eigenen Über-uns-Seite als Umsetzungspartner.',
    image: { src: '/assets/work/haliavrupa.webp', width: 1280, height: 800, alt: 'Kollektionsseite des HaliAvrupa-Shops' },
    link: { label: 'haliavrupa.com', href: 'https://haliavrupa.com' },
  },
  {
    id: 'griffi',
    client: 'Griffi',
    sector: 'Digitale Bürokraft fürs Handwerk',
    kind: 'Mein eigenes Produkt',
    title: 'Griffi nimmt Anrufe und Anfragen an, legt sie beim Kunden ab und bereitet Angebote vor.',
    problem: 'Meine Mutter arbeitet seit 30 Jahren im Büro eines Handwerksbetriebs. Was dort liegen bleibt, hängt zwischen Telefon, Papier und Programmen.',
    built: [
      'Telefon, Website-Chat, Postfach und Belege laufen in einem Programm zusammen. Am Telefon spricht ein eigener KI-Assistent.',
      'Die Daten liegen in der EU, sensible Felder sind verschlüsselt, und nichts geht ohne Freigabe raus.',
      'Selbst entwickelt, von der Telefonanlage bis zur Abrechnung.',
    ],
    result: 'Im täglichen Einsatz bei ersten Handwerks- und Servicebetrieben. Ein Pilotbetrieb hat seine Belegarbeit von rund zwei Stunden auf zehn Minuten gebracht (selbst berichtet, nicht unabhängig gemessen).',
    image: { src: '/assets/work/griffi.webp', width: 1280, height: 889, alt: 'Startseite von griffi.ai' },
    link: { label: 'griffi.ai', href: 'https://griffi.ai' },
  },
  {
    id: 'enterprise',
    client: 'Globaler Industriekonzern (DAX)',
    sector: 'Governance-Dokumente',
    kind: 'Konzernprojekt, freiberuflich',
    title: 'Eine KI-Plattform, in der Mitarbeitende über 26.000 interne Regelwerke durchsuchen und befragen.',
    problem: 'Richtlinien lagen verteilt in vielen Systemen, doppelt und in verschiedenen Fassungen.',
    built: [
      'Idee, Konzept und den ersten Prototyp habe ich selbst entwickelt. Als Hauptentwickler habe ich die Plattform bis in den echten Betrieb gebracht.',
      'Die Plattform gleicht jede Nacht alle Quellen ab, sortiert die Dokumente und findet doppelte Fassungen. Ein Chat beantwortet Fragen und nennt die Quelle.',
    ],
    result: 'Produktiv seit März 2026. Dieselbe Technik setze ich für kleine Betriebe ein, nur kleiner.',
  },
];

const casesEn: Case[] = [
  {
    id: 'autohandel',
    client: 'B2B car dealer',
    sector: 'Buying vehicles and reselling them to dealers',
    kind: 'Client since 2024',
    stages: ['Buying', 'Processing', 'Filing'],
    title: 'Since 2024 I have built the software a B2B car dealer uses to buy and process vehicles.',
    problem: 'The dealer buys vehicles on the sales platforms of large leasing companies and sells them on to dealers. Good cars are gone within seconds, and every purchase brings paperwork, deadlines and coordination.',
    built: [
      'Purchase bots that buy by his rules the moment a sale opens, faster than anyone can click by hand. We test every change together in a real purchase.',
      'Custom software built only for his business. Each vehicle runs through it from purchase to handover, with deadlines and documents, and it is replacing his old lists.',
      'Griffi as the digital archive for receipts and documents.',
    ],
    result: 'The first job in 2024 turned into a lasting partnership. Buying and processing now run on software I build and maintain for him.',
  },
  {
    id: 'medivaro',
    client: 'Medivaro Pflege',
    sector: 'Care supplies, Oberhausen',
    kind: 'Client project',
    title: 'A new website and an application flow that passes care-box applications straight on.',
    problem: 'Applications came in through an old WordPress form and had to be copied into the billing portal by hand.',
    built: [
      'A fast website where families apply for the care box online.',
      'An application service on a server in Germany that creates each application as a case in the portal and reports success or failure to Medivaro.',
      'Health data only ever passes through that server, never through analytics or email services.',
    ],
    result: 'The website is live. The portal handoff is built so Medivaro sees a status for every application and a person checks before anything is submitted.',
    note: 'The images on the client site are AI illustrations.',
    image: { src: '/assets/work/medivaro.webp', width: 1280, height: 889, alt: 'Homepage of medivaro-pflege.de with the care-box application' },
    link: { label: 'medivaro-pflege.de', href: 'https://medivaro-pflege.de' },
  },
  {
    id: 'storeradar',
    client: 'StoreRadar24',
    sector: 'Location analysis, Mainz',
    kind: 'Client software',
    title: 'A web app that writes a location report for an address in a few minutes.',
    problem: 'A classic location survey takes weeks. Anyone about to rent a shop should see quickly and affordably what the address is worth.',
    built: [
      'Enter an address, get a report: opportunities and risks, nearby competitors and five fitting uses.',
      'Every number with source and date. Missing data is shown openly, not glossed over.',
      'Report in the browser and as a PDF, paid per analysis with no subscription.',
    ],
    result: 'Live on storeradar24.de. Development and technical operation run through n3tz.',
    image: { src: '/assets/work/storeradar.webp', width: 1280, height: 880, alt: 'Homepage of storeradar24.de: “Erst prüfen, dann mieten.”' },
    link: { label: 'storeradar24.de', href: 'https://storeradar24.de' },
  },
  {
    id: 'md-cleaning',
    client: 'MD Cleaning',
    sector: 'Cleaning and caretaking, Völklingen',
    kind: 'Client website',
    title: 'A website where local customers see at once what MD Cleaning does and how to ask for a quote.',
    problem: 'A service business lives on local enquiries. The website has to show what it offers and where it goes.',
    built: [
      'Services from building cleaning to winter service, service area and a direct way to enquire.',
      'Built so Google and AI search place the business correctly in Saarland.',
    ],
    result: 'Live on mdcleaning-saar.de.',
    image: { src: '/assets/work/md-cleaning.webp', width: 1280, height: 889, alt: 'Homepage of mdcleaning-saar.de, a cleaning service in Völklingen' },
    link: { label: 'mdcleaning-saar.de', href: 'https://mdcleaning-saar.de' },
  },
  {
    id: 'haliavrupa',
    client: 'HaliAvrupa',
    sector: 'Online rug shop',
    kind: 'Technical build',
    title: 'A Shopify shop where customers find their rug through filters, colours and sizes.',
    problem: 'The old shop had to move without any old link ending in nowhere.',
    built: [
      'Filters, linked colour variants and a gallery you can swipe on a phone.',
      'Dedicated forms for returns, complaints, jobs and partnerships.',
      'Redirects from every old address.',
    ],
    result: 'Live since August 2026. HaliAvrupa credits n3tz as its build partner on its own About page.',
    image: { src: '/assets/work/haliavrupa.webp', width: 1280, height: 800, alt: 'Collection page of the HaliAvrupa shop' },
    link: { label: 'haliavrupa.com', href: 'https://haliavrupa.com' },
  },
  {
    id: 'griffi',
    client: 'Griffi',
    sector: 'A digital office assistant for trades',
    kind: 'My own product',
    title: 'Griffi answers calls and enquiries, files them with the customer and prepares quotes.',
    problem: 'My mother has worked in the office of a trade business for 30 years. What piles up there sits between the phone, paper and software.',
    built: [
      'Phone, website chat, inbox and receipts come together in one program. On the phone, its own AI assistant does the talking.',
      'Data stays in the EU, sensitive fields are encrypted, and nothing goes out without approval.',
      'Built in-house, from the phone system to billing.',
    ],
    result: 'In daily use at the first trade and service businesses. One pilot business cut its receipt work from about two hours to ten minutes (self-reported, not independently measured).',
    image: { src: '/assets/work/griffi.webp', width: 1280, height: 889, alt: 'Homepage of griffi.ai' },
    link: { label: 'griffi.ai', href: 'https://griffi.ai' },
  },
  {
    id: 'enterprise',
    client: 'Global industrial group (DAX)',
    sector: 'Governance documents',
    kind: 'Enterprise project, freelance',
    title: 'An AI platform where staff search and question more than 26,000 internal policies.',
    problem: 'Policies were spread across many systems, duplicated and in different versions.',
    built: [
      'My own idea, concept and prototype, then lead developer through to production.',
      'Every night the platform syncs all sources, sorts the documents and finds duplicate versions. A chat answers questions and names the source.',
    ],
    result: 'In production since March 2026. I use the same technology for small businesses, just smaller.',
  },
];

export const copy: Record<Locale, Copy> = {
  de: {
    lang: 'de',
    path: '/',
    alternatePath: '/en/',
    alternateLabel: 'EN',
    alternateName: 'English',
    legalPath: '/de/impressum/',
    seo: {
      title: 'Tarik Ermis · Weniger Büroarbeit für Handwerk und kleine Betriebe',
      description: 'Ich nehme Handwerks- und kleinen Betrieben Anrufe, Mails, Angebote und Belege ab, mit Software und KI als Werkzeug. Mit Referenzen und einem Bauplan für deinen Betrieb.',
    },
    skip: 'Zum Inhalt springen',
    nav: { plan: 'Bauplan', work: 'Referenzen', services: 'Leistungen', process: 'Ablauf', about: 'Über mich', cta: 'Projekt anfragen', menu: 'Menü' },
    hero: {
      titleBefore: 'Ich helfe dir, endlich wieder ',
      titleAccent: 'Zeit',
      titleAfter: ' für deinen Betrieb zu haben.',
      intro: 'Ich bin Tarik aus Völklingen und arbeite für Handwerks- und kleine Betriebe. Ich nehme dir Anrufe, Mails, Angebote und Belege ab, mit der Software, die du schon hast. KI ist dabei nur ein Werkzeug. Was zählt, ist das Ergebnis, und was rausgeht, gibst du frei.',
      primary: 'Bauplan für meinen Betrieb',
      secondary: 'Referenzen ansehen',
      place: 'Völklingen, Saarland · vor Ort oder remote',
      portraitAlt: portraitAltDe,
      proof: [
        { value: 'seit 2016', label: 'Software für Konzerne und Betriebe' },
        { value: '26.000+', label: 'Dokumente in einer KI-Plattform, die ich gebaut habe' },
        { value: 'Publikumspreis', label: 'Demo Day 2026, Universität des Saarlandes' },
      ],
    },
    planner: {
      title: 'Stell dir deinen ersten Helfer zusammen.',
      intro: 'Drei Klicks, dann siehst du, wie ich bei dir anfangen würde und welches Projekt dem am nächsten kommt. Den Bauplan schickst du mir mit einem Klick.',
      stepTrade: 'Was macht dein Betrieb?',
      stepTask: 'Was kostet dich jede Woche die meiste Zeit?',
      stepTools: 'Womit arbeitest du heute?',
      toolsHint: 'Mehrere möglich',
      trades: [
        { id: 'shk', label: 'Heizung, Sanitär, Elektro' },
        { id: 'bau', label: 'Bau, Ausbau, Maler' },
        { id: 'service', label: 'Reinigung und Service' },
        { id: 'handel', label: 'Handel und Autohandel' },
        { id: 'pflege', label: 'Pflege und Gesundheit' },
        { id: 'buero', label: 'Büro, Agentur, Kanzlei' },
      ],
      tasks: [
        { id: 'calls', label: 'Anrufe, die ich nicht annehmen kann' },
        { id: 'mail', label: 'E-Mails und Anfragen beantworten' },
        { id: 'quotes', label: 'Angebote schreiben' },
        { id: 'receipts', label: 'Belege und Rechnungen sortieren' },
        { id: 'handoff', label: 'Daten von Programm zu Programm tippen' },
        { id: 'knowledge', label: 'Dieselben Fragen vom Team' },
      ],
      tools: [
        { id: 'outlook', label: 'Outlook oder Gmail' },
        { id: 'excel', label: 'Excel-Listen' },
        { id: 'branchensoftware', label: 'Branchensoftware' },
        { id: 'whatsapp', label: 'WhatsApp' },
        { id: 'papier', label: 'Papier und Ordner' },
        { id: 'shop', label: 'Website oder Onlineshop' },
      ],
      resultLabel: 'Dein Bauplan',
      weeks: ['Woche 1 · Hinschauen', 'Woche 2 bis 3 · Bauen', 'Ab Woche 4 · Im Alltag'],
      approveLabel: 'Du gibst frei',
      caseLabel: 'So habe ich das schon gebaut',
      send: 'Bauplan an Tarik schicken',
      sendHint: 'Öffnet dein E-Mail-Programm mit dem fertigen Text. Du kannst ihn vorher ändern.',
      mailSubject: 'Bauplan für meinen Betrieb',
      mailIntro: 'Hallo Tarik,\n\nich habe mir auf tarikermis.com einen Bauplan zusammengestellt:',
      mailTrade: 'Betrieb',
      mailTask: 'Größter Zeitfresser',
      mailTools: 'Wir arbeiten mit',
      mailNone: 'noch offen',
      mailOutro: 'Kannst du dir das bei uns anschauen?\n\nViele Grüße',
    },
    work: {
      title: 'Was ich schon gebaut habe, für wen und mit welchem Ergebnis.',
      intro: 'Hier stehen Kundenprojekte, mein eigenes Produkt und meine Arbeit für einen Konzern. Ich schreibe nur, was belegt ist, und Zahlen nur mit Quelle.',
      built: 'Gebaut',
      result: 'Ergebnis',
      ownProduct: 'Eigenes Produkt',
      more: 'Ansehen',
      cases: casesDe,
    },
    griffiShots: [
      { src: '/assets/work/griffi-anruf.webp', width: 560, height: 1212, alt: 'Griffi Zentrale: Anrufliste mit Zusammenfassungen, Beispieldaten' },
      { src: '/assets/work/griffi-anfrage.webp', width: 560, height: 1212, alt: 'Griffi Zentrale: Anfrage beim Kunden abgelegt, Beispieldaten' },
      { src: '/assets/work/griffi-angebot.webp', width: 560, height: 1212, alt: 'Griffi Zentrale: Angebotsentwurf zur Freigabe, Beispieldaten' },
    ],
    services: {
      title: 'Wo ich dir Arbeit abnehme.',
      intro: 'Jedes Projekt beginnt bei einer Aufgabe, die dich heute Zeit kostet. Erkennst du eine davon wieder?',
      items: [
        { scene: 'Du stehst auf der Baustelle, das Telefon klingelt, und der Anrufer ruft den nächsten Betrieb an.', title: 'Anrufe und Anfragen', text: 'Ein KI-Assistent nimmt ab, wenn du keine Hand frei hast. Er fragt alles, was du für den Rückruf brauchst, und schickt dir eine kurze Notiz. Mails und Chat-Anfragen laufen genauso.' },
        { scene: 'Abends sitzt du noch am Küchentisch und schreibst Angebote.', title: 'Angebote', text: 'Aus einer Anfrage oder einem Aufmaß entsteht ein Entwurf mit deinen Positionen und Preisen. Du prüfst ihn und schickst ihn ab.' },
        { scene: 'Am Monatsende suchst du Belege aus Mails, Fotos und Ordnern zusammen.', title: 'Belege', text: 'Ein KI-Assistent sammelt die Belege ein, liest sie und legt sie sortiert ab. Am Monatsende ist der Ordner für das Steuerbüro fertig.' },
        { scene: 'Jemand tippt dieselben Daten von einem Programm ins nächste.', title: 'Programme verbinden', text: 'Ich verbinde deine Programme, damit die Daten von selbst weiterlaufen. Klappt ein Fall nicht, landet er mit Grund bei der Person, die ihn klären kann.' },
        { scene: 'Dein Team ruft dich an, weil es einen Preis oder eine Regel nicht findet.', title: 'Firmenwissen', text: 'Preise, Abläufe und Regeln liegen an einem Ort. Dein Team fragt, und der Assistent antwortet aus euren Unterlagen mit Quelle.' },
      ],
      extras: 'Außerdem baue ich Websites, die Anfragen bringen, und schule dein Team im Umgang mit KI.',
    },
    process: {
      title: 'So läuft ein Projekt mit mir.',
      intro: 'Von der ersten Frage bis zum laufenden System sprichst du nur mit mir.',
      steps: [
        { title: 'Wir schauen uns einen echten Fall an.', text: 'Vor Ort oder per Video. Du zeigst mir eine Aufgabe, so wie sie heute läuft, mit echten Beispielen.' },
        { title: 'Du bekommst ein schriftliches Angebot.', text: 'Mit Umfang, Ziel, Stunden und Preis. Vorher wird nichts gebaut und nichts berechnet.' },
        { title: 'Ich baue, du testest im Alltag.', text: 'Die erste Version läuft schnell. Wir prüfen sie an deinen echten Fällen, bis das vereinbarte Ziel erreicht ist.' },
        { title: 'Es läuft, und ich bleibe da.', text: 'Wartung, Fragen deines Teams und der nächste Schritt, wenn du einen willst.' },
      ],
      pricing: 'Abgerechnet wird als Festpreis oder nach Aufwand. Beides steht vorher im Angebot.',
    },
    about: {
      title: 'Nach zehn Jahren Software für große Firmen baue ich sie jetzt für Betriebe wie deinen.',
      paragraphs: [
        'Ich bin Fachinformatiker und entwickle seit 2016 Software. Zuletzt war ich Lead Developer in München und freiberuflicher KI-Entwickler für einen DAX-Konzern. Dort habe ich eine Plattform für Dokumente von der Idee bis in den echten Betrieb gebracht.',
        'Mit n3tz habe ich in Saarbrücken eine eigene Firma gegründet und Griffi gebaut, die digitale Bürokraft fürs Handwerk. Als Freiberufler bringe ich dieselbe Technik in deinen Betrieb, in Paketen, die zu kleinen Firmen passen.',
        'Ich spreche Deutsch, Englisch und Türkisch. Ich komme vorbei, wenn es hilft, und sonst sehen wir uns per Video.',
      ],
      photo: { src: '/assets/work/demoday-stage.webp', width: 900, height: 1350, alt: 'Tarik Ermis beim Pitch auf dem Demo Day 2026 der Universität des Saarlandes' },
      photoCredit: 'Demo Day 2026 · Foto: Viktoriia Karakatsii / SouthWestX',
      facts: [
        { label: 'Firma', value: 'n3tz GmbH, Saarbrücken' },
        { label: 'Schwerpunkt', value: 'KI am Telefon, im Postfach und in euren Unterlagen' },
        { label: 'Zuvor', value: 'DAX-Konzern (freiberuflich), elunic AG, LendeXe' },
        { label: 'Sprachen', value: 'Deutsch, Englisch, Türkisch' },
      ],
    },
    faq: {
      title: 'Häufige Fragen.',
      items: [
        { q: 'Brauche ich dafür neue Software?', a: 'Meistens nicht. Ich baue um die Programme herum, die du schon nutzt. Wenn etwas Neues nötig ist, sage ich dir vorher warum.' },
        { q: 'Was passiert mit meinen Daten?', a: 'Kundendaten laufen über Server in der EU, sensible Felder werden verschlüsselt. Welche KI welche Daten sieht, legen wir vorher schriftlich fest.' },
        { q: 'Schreibt die KI einfach an meine Kunden?', a: 'Nur wenn du das willst. Standard ist: Die KI bereitet vor, du gibst frei.' },
        { q: 'Was kostet das?', a: 'Das hängt vom Ablauf ab. Nach dem ersten Gespräch bekommst du ein Angebot mit festem Umfang und Preis, bevor ich anfange.' },
        { q: 'Arbeitest du auch außerhalb des Saarlands?', a: 'Ja. Die meiste Arbeit geht remote. Im Saarland und in der Umgebung komme ich gern vorbei.' },
      ],
    },
    contact: {
      title: 'Zeig mir, wo es bei dir hakt.',
      text: 'Schreib mir in zwei, drei Sätzen, welche Arbeit sich bei dir wiederholt. Ich melde mich persönlich.',
      mail: 'E-Mail schreiben',
      call: 'Anrufen',
      copy: 'Adresse kopieren',
      copied: 'Kopiert',
      vcard: 'Kontakt speichern',
    },
    footer: { legal: 'Impressum und Datenschutz', n3tz: 'n3tz.ai', rights: 'Tarik Ermis' },
  },
  en: {
    lang: 'en',
    path: '/en/',
    alternatePath: '/',
    alternateLabel: 'DE',
    alternateName: 'Deutsch',
    legalPath: '/legal/',
    seo: {
      title: 'Tarik Ermis · Less office work for trades and small businesses',
      description: 'I take calls, emails, quotes and receipts off trade and small businesses, with software and AI as the tool. With case studies and a build plan for your business.',
    },
    skip: 'Skip to content',
    nav: { plan: 'Build plan', work: 'Work', services: 'Services', process: 'Process', about: 'About', cta: 'Start a project', menu: 'Menu' },
    hero: {
      titleBefore: 'I help you finally get your ',
      titleAccent: 'time',
      titleAfter: ' back.',
      intro: 'I’m Tarik from Völklingen in Germany, and I work for trade and small businesses. I take calls, emails, quotes and receipts off your hands, using the software you already have. AI is just a tool. What counts is the result, and you approve what goes out.',
      primary: 'Build plan for my business',
      secondary: 'See the work',
      place: 'Völklingen, Saarland · on site or remote',
      portraitAlt: portraitAltEn,
      proof: [
        { value: 'since 2016', label: 'building software for enterprises and small firms' },
        { value: '26,000+', label: 'documents in an AI platform I built' },
        { value: 'Audience award', label: 'Demo Day 2026, Saarland University' },
      ],
    },
    planner: {
      title: 'Put together your first assistant.',
      intro: 'Three clicks and you see how I would start with you and which project comes closest. Send the plan to me in one click.',
      stepTrade: 'What does your business do?',
      stepTask: 'What eats the most time every week?',
      stepTools: 'What do you work with today?',
      toolsHint: 'Pick any',
      trades: [
        { id: 'shk', label: 'Heating, plumbing, electrical' },
        { id: 'bau', label: 'Construction and finishing' },
        { id: 'service', label: 'Cleaning and services' },
        { id: 'handel', label: 'Retail and car trade' },
        { id: 'pflege', label: 'Care and health' },
        { id: 'buero', label: 'Office, agency, practice' },
      ],
      tasks: [
        { id: 'calls', label: 'Calls I can’t take' },
        { id: 'mail', label: 'Answering emails and enquiries' },
        { id: 'quotes', label: 'Writing quotes' },
        { id: 'receipts', label: 'Sorting receipts and invoices' },
        { id: 'handoff', label: 'Retyping data between programs' },
        { id: 'knowledge', label: 'The same questions from the team' },
      ],
      tools: [
        { id: 'outlook', label: 'Outlook or Gmail' },
        { id: 'excel', label: 'Excel sheets' },
        { id: 'branchensoftware', label: 'Industry software' },
        { id: 'whatsapp', label: 'WhatsApp' },
        { id: 'papier', label: 'Paper and folders' },
        { id: 'shop', label: 'Website or online shop' },
      ],
      resultLabel: 'Your build plan',
      weeks: ['Week 1 · Look', 'Weeks 2 to 3 · Build', 'From week 4 · In daily use'],
      approveLabel: 'You approve',
      caseLabel: 'Where I have built this before',
      send: 'Send the plan to Tarik',
      sendHint: 'Opens your email app with the text ready. You can edit it first.',
      mailSubject: 'Build plan for my business',
      mailIntro: 'Hi Tarik,\n\nI put together a build plan on tarikermis.com:',
      mailTrade: 'Business',
      mailTask: 'Biggest time sink',
      mailTools: 'We work with',
      mailNone: 'not sure yet',
      mailOutro: 'Could you take a look at this for us?\n\nBest regards',
    },
    work: {
      title: 'What I have built, for whom and with what result.',
      intro: 'Client projects, my own product and enterprise work, each with what can be shown. I only give numbers where there is a source.',
      built: 'Built',
      result: 'Result',
      ownProduct: 'Own product',
      more: 'Visit',
      cases: casesEn,
    },
    griffiShots: [
      { src: '/assets/work/griffi-anruf.webp', width: 560, height: 1212, alt: 'Griffi: call list with summaries, sample data' },
      { src: '/assets/work/griffi-anfrage.webp', width: 560, height: 1212, alt: 'Griffi: enquiry filed with the customer, sample data' },
      { src: '/assets/work/griffi-angebot.webp', width: 560, height: 1212, alt: 'Griffi: draft quote waiting for approval, sample data' },
    ],
    services: {
      title: 'Where I take work off your hands.',
      intro: 'Every project starts with one task that costs you time today. Do you recognise one of these?',
      items: [
        { scene: 'You are on a job, the phone rings, and the caller tries the next business instead.', title: 'Calls and enquiries', text: 'An AI assistant picks up when your hands are full. It asks everything you need for the callback and sends you a short note. Emails and chat enquiries work the same way.' },
        { scene: 'In the evening you are still at the kitchen table writing quotes.', title: 'Quotes', text: 'An enquiry or a site measurement becomes a draft with your line items and prices. You check it and send it.' },
        { scene: 'At month end you hunt for receipts in emails, photos and folders.', title: 'Receipts', text: 'Receipts are collected, read and filed in order. At month end the folder for your accountant is ready.' },
        { scene: 'Someone types the same data from one program into the next.', title: 'Connecting programs', text: 'I connect your programs so the data moves on by itself. If a case fails, it lands, with the reason, with the person who can fix it.' },
        { scene: 'Your team calls you because they cannot find a price or a rule.', title: 'Company knowledge', text: 'Prices, procedures and rules sit in one place. Your team asks, and the assistant answers from your documents with the source.' },
      ],
      extras: 'I also build websites that bring enquiries and train your team to use AI.',
    },
    process: {
      title: 'How a project with me runs.',
      intro: 'From the first question to the running system, you only deal with me.',
      steps: [
        { title: 'We look at one real case.', text: 'On site or by video. You show me a task the way it runs today, with real examples.' },
        { title: 'You get a written offer.', text: 'With scope, goal, hours and price. Nothing is built or billed before that.' },
        { title: 'I build, you test in daily work.', text: 'The first version runs quickly. We check it against your real cases until the agreed goal is met.' },
        { title: 'It runs, and I stay around.', text: 'Maintenance, questions from your team and the next step when you want one.' },
      ],
      pricing: 'Billed as a fixed price or by time. Either way it is in the offer first.',
    },
    about: {
      title: 'After ten years of software for large companies, I now build it for businesses like yours.',
      paragraphs: [
        'I trained as an application developer and have built software since 2016. Most recently as lead developer in Munich and as a freelance AI engineer for a DAX-listed group, where I took a document platform from idea to production.',
        'With n3tz I founded my own company in Saarbrücken and built Griffi, a digital office assistant for trades. As a freelancer I bring the same technology to your business, in packages that fit small companies.',
        'I speak German, English and Turkish. I come by when it helps; otherwise we meet by video.',
      ],
      photo: { src: '/assets/work/demoday-stage.webp', width: 900, height: 1350, alt: 'Tarik Ermis pitching at Demo Day 2026, Saarland University' },
      photoCredit: 'Demo Day 2026 · Photo: Viktoriia Karakatsii / SouthWestX',
      facts: [
        { label: 'Company', value: 'n3tz GmbH, Saarbrücken' },
        { label: 'Focus', value: 'AI on the phone, in the inbox and in your documents' },
        { label: 'Before', value: 'DAX group (freelance), elunic AG, LendeXe' },
        { label: 'Languages', value: 'German, English, Turkish' },
      ],
    },
    faq: {
      title: 'Common questions.',
      items: [
        { q: 'Do I need new software?', a: 'Usually not. I build around the programs you already use. If something new is needed, I tell you why first.' },
        { q: 'What happens to my data?', a: 'Customer data runs on servers in the EU and sensitive fields are encrypted. Which AI sees which data is agreed in writing first.' },
        { q: 'Will the AI just write to my customers?', a: 'Only if you want it to. The default is: the AI prepares, you approve.' },
        { q: 'What does it cost?', a: 'It depends on the workflow. After the first conversation you get an offer with fixed scope and price before I start.' },
        { q: 'Do you work outside Germany?', a: 'Yes. Most work is remote. In Saarland and nearby I am happy to come by.' },
      ],
    },
    contact: {
      title: 'Show me where things get stuck.',
      text: 'Write me two or three sentences about the work that keeps repeating. I reply personally.',
      mail: 'Write an email',
      call: 'Call',
      copy: 'Copy address',
      copied: 'Copied',
      vcard: 'Save contact',
    },
    footer: { legal: 'Legal notice and privacy', n3tz: 'n3tz.ai', rights: 'Tarik Ermis' },
  },
};
