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
    kicker: string;
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
    items: Array<{ title: string; text: string; example: string }>;
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

const portraitAltDe = 'Tarik Ermis im Büro, dunkelblaues Sakko, Arme verschränkt';
const portraitAltEn = 'Tarik Ermis in the office, navy blazer, arms crossed';

export const plannerMatrix: Record<string, { de: string[]; en: string[]; approve: { de: string; en: string }; caseId: string }> = {
  calls: {
    de: [
      'Ich höre mir an, welche Anrufe bei dir reinkommen, und schreibe mit dir die Fragen auf, die jeder Anrufer beantworten soll.',
      'Ein Telefon-Agent nimmt ab, wenn du nicht kannst, stellt diese Fragen und legt jede Anfrage beim richtigen Kunden ab.',
      'Du bekommst jede Anfrage als kurze Notiz mit Rückrufwunsch. Was dringend ist, landet sofort auf deinem Handy.',
    ],
    en: [
      'I listen to which calls you get and write down with you the questions every caller should answer.',
      'A phone agent picks up when you cannot, asks those questions and files each enquiry with the right customer.',
      'You get every enquiry as a short note with a callback request. Urgent ones reach your phone right away.',
    ],
    approve: { de: 'Wie sich der Agent vorstellt und was er zusagen darf.', en: 'How the agent introduces itself and what it may promise.' },
    caseId: 'zohir',
  },
  mail: {
    de: [
      'Wir gehen zehn echte E-Mails aus deinem Postfach durch und legen fest, welche Arten von Anfragen es gibt.',
      'Ein Agent liest neue Mails, ordnet sie dem Kunden zu und schreibt einen Antwortentwurf in deinem Ton.',
      'Du siehst morgens eine Liste: was erledigt werden kann, was einen Entwurf hat und was du selbst entscheiden musst.',
    ],
    en: [
      'We go through ten real emails from your inbox and agree which kinds of enquiry you get.',
      'An agent reads new mail, matches it to the customer and drafts a reply in your voice.',
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
      'Ein Agent sammelt sie ein, liest Betrag, Datum und Lieferant und legt sie sortiert ab.',
      'Am Monatsende ist der Ordner für das Steuerbüro fertig. Fehlt ein Beleg, siehst du das vorher.',
    ],
    en: [
      'We look at where your receipts arrive today: email, paper, photos on your phone.',
      'An agent collects them, reads amount, date and supplier and files them in order.',
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
    id: 'zohir',
    client: 'Zohir',
    sector: 'B2B-Autohandel',
    kind: 'Kunde seit 2025',
    stages: ['Einkauf', 'Abwicklung', 'Ablage'],
    title: 'Für Zohirs Autohandel baue ich die Software, mit der er Fahrzeuge einkauft und abwickelt.',
    problem: 'Zohir kauft Fahrzeuge auf den Verkaufsplattformen großer Leasinggesellschaften und verkauft sie an Händler weiter. Gute Fahrzeuge sind dort in Sekunden weg, und jedes gekaufte Auto zieht Papierkram, Fristen und Abstimmung nach sich.',
    built: [
      'Einkaufs-Bots, die zur Verkaufsöffnung nach seinen Regeln kaufen. Jede Änderung testen wir gemeinsam im echten Kauf.',
      'CarFleet, ein eigenes Werkzeug, in dem jedes Fahrzeug vom Kauf bis zur Übergabe geführt wird. Es hat seine Planner-Listen ersetzt.',
      'Griffi als digitale Ablage für Belege und Dokumente.',
    ],
    result: 'Das erste Projekt hat zum nächsten geführt. Heute laufen Einkauf, Abwicklung und Ablage über Software, die ich für ihn gebaut habe und betreue.',
  },
  {
    id: 'medivaro',
    client: 'Medivaro Pflege',
    sector: 'Pflegehilfsmittel, Oberhausen',
    kind: 'Kundenprojekt',
    title: 'Neue Website und eine Antragsstrecke, die Pflegebox-Anträge direkt weitergibt.',
    problem: 'Anträge kamen über ein altes WordPress-Formular und mussten von Hand in das Abrechnungsportal übertragen werden.',
    built: [
      'Eine schnelle Website, auf der Angehörige die Pflegebox online beantragen.',
      'Einen Antrags-Dienst auf einem Server in Deutschland, der jeden Antrag als Vorgang im Portal anlegt und Medivaro Erfolg oder Fehler meldet.',
      'Gesundheitsdaten laufen nur über diesen Server, nie über Analyse- oder Mail-Dienste.',
    ],
    result: 'Die Website ist live. Die Übergabe ins Portal ist so gebaut, dass Medivaro zu jedem Antrag einen Status sieht und vor dem Absenden ein Mensch prüft.',
    image: { src: '/assets/work/medivaro.webp', width: 1280, height: 889, alt: 'Startseite von medivaro-pflege.de mit Pflegebox-Antrag' },
    link: { label: 'medivaro-pflege.de', href: 'https://medivaro-pflege.de' },
  },
  {
    id: 'gross',
    client: 'Michael Groß Meisterbetrieb',
    sector: 'Heizung, Klima, Sanitär in Völklingen',
    kind: 'Kundenwebsite',
    title: 'Website für einen SHK-Meisterbetrieb, auf der Kunden sofort sehen, was er macht und wie sie ihn erreichen.',
    problem: 'Ein Handwerksbetrieb braucht keine Präsentation, sondern Anrufe zu den Aufträgen, die er machen will.',
    built: ['Website mit klaren Leistungen, Einsatzgebiet und direktem Kontakt, gebaut für Google und KI-Suchen.'],
    result: 'Live auf gross-shk.de. Der Betrieb wollte einen ruhigen Start, deshalb stehen hier keine Zahlen.',
    image: { src: '/assets/work/gross.webp', width: 1280, height: 889, alt: 'Startseite von gross-shk.de, Michael Groß Meisterbetrieb' },
    link: { label: 'gross-shk.de', href: 'https://gross-shk.de' },
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
      'Eigene Formulare für Rücksendung, Reklamation, Bewerbung und Kooperation.',
      'Weiterleitungen von allen alten Adressen.',
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
      'Telefon, Website-Chat, Postfach und Belege in einer Oberfläche, mit eigenem Sprachagenten.',
      'Hosting in der EU, Verschlüsselung sensibler Felder, Freigabe vor jedem Versand.',
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
      'Eigene Idee, eigenes Konzept und eigener Prototyp, als Hauptentwickler bis zum Produktivsystem.',
      'Nächtlicher Abgleich, KI-Klassifizierung, Dublettenerkennung und ein Chat, der mit Quelle antwortet.',
    ],
    result: 'Produktiv seit März 2026. Dieselbe Technik setze ich für kleine Betriebe ein, nur kleiner.',
  },
];

const casesEn: Case[] = [
  {
    id: 'zohir',
    client: 'Zohir',
    sector: 'B2B car trade',
    kind: 'Client since 2025',
    stages: ['Buying', 'Processing', 'Filing'],
    title: 'For Zohir’s car trading business I build the software he uses to buy and process vehicles.',
    problem: 'Zohir buys vehicles on the sales platforms of large leasing companies and sells them on to dealers. Good cars are gone within seconds, and every purchase brings paperwork, deadlines and coordination.',
    built: [
      'Purchase bots that buy by his rules the moment a sale opens. We test every change together in a real purchase.',
      'CarFleet, a dedicated tool that tracks each vehicle from purchase to handover. It replaced his Planner lists.',
      'Griffi as the digital archive for receipts and documents.',
    ],
    result: 'The first project led to the next. Today buying, processing and filing run on software I built and maintain for him.',
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
    image: { src: '/assets/work/medivaro.webp', width: 1280, height: 889, alt: 'Homepage of medivaro-pflege.de with the care-box application' },
    link: { label: 'medivaro-pflege.de', href: 'https://medivaro-pflege.de' },
  },
  {
    id: 'gross',
    client: 'Michael Groß Meisterbetrieb',
    sector: 'Heating, cooling and plumbing in Völklingen',
    kind: 'Client website',
    title: 'A website for a master plumbing business where customers see at once what he does and how to reach him.',
    problem: 'A trade business does not need a showcase. It needs calls for the jobs it wants.',
    built: ['A website with clear services, service area and direct contact, built for Google and AI search.'],
    result: 'Live on gross-shk.de. The business wanted a quiet start, so there are no figures here.',
    image: { src: '/assets/work/gross.webp', width: 1280, height: 889, alt: 'Homepage of gross-shk.de, Michael Groß Meisterbetrieb' },
    link: { label: 'gross-shk.de', href: 'https://gross-shk.de' },
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
      'Phone, website chat, inbox and receipts in one place, with its own voice agent.',
      'EU hosting, encryption of sensitive fields, approval before anything is sent.',
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
      'Nightly sync, AI classification, duplicate detection and a chat that answers with its source.',
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
      title: 'Tarik Ermis · KI-Agenten und Automatisierung für Handwerk und KMU',
      description: 'Ich baue KI-Helfer und Automatisierungen, die Handwerks- und kleinen Betrieben die Büroarbeit abnehmen. Mit Referenzen, Ablauf und einem Bauplan für deinen Betrieb.',
    },
    skip: 'Zum Inhalt springen',
    nav: { plan: 'Bauplan', work: 'Referenzen', services: 'Leistungen', process: 'Ablauf', about: 'Über mich', cta: 'Projekt anfragen', menu: 'Menü' },
    hero: {
      kicker: 'Für Handwerk und kleine Betriebe, im Saarland und darüber hinaus',
      titleBefore: 'Ich baue KI-Helfer, die deinem Betrieb die ',
      titleAccent: 'Büroarbeit',
      titleAfter: ' abnehmen.',
      intro: 'Ich bin Tarik, Softwareentwickler und Gründer von n3tz. Ich richte Agenten und Automatisierungen ein, die mit deinen vorhandenen Programmen arbeiten. Was rausgeht, gibst du frei.',
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
      intro: 'Kundenprojekte, mein eigenes Produkt und Konzernarbeit, jeweils mit dem, was belegt ist. Zahlen nenne ich nur, wo es eine Quelle gibt.',
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
      title: 'Was ich für dich baue.',
      intro: 'Jedes Projekt beginnt bei einer Aufgabe, die heute Zeit kostet. Daraus wird ein kleines, klar umrissenes Paket.',
      items: [
        { title: 'Ein Agent für dein Büro', text: 'Er nimmt Anrufe, Mails und Chat-Anfragen an, legt sie beim Kunden ab und bereitet Antworten oder Angebote vor. Auf Basis von Griffi oder ganz für dich gebaut.', example: 'Beispiel: Anrufe nach Feierabend werden zu Rückrufnotizen mit allen Angaben.' },
        { title: 'Automatisierung zwischen deinen Programmen', text: 'Wo heute jemand abtippt, reden die Programme direkt miteinander. Fehler landen mit Grund bei der Person, die sie klären kann.', example: 'Beispiel: Ein Website-Antrag wird automatisch zum Vorgang im Fachportal.' },
        { title: 'Ein Assistent für euer Firmenwissen', text: 'Preise, Abläufe und Regeln an einem Ort. Dein Team fragt, der Assistent antwortet aus euren Unterlagen und zeigt die Quelle.', example: 'Beispiel: Neue Leute finden die Antwort, ohne den Chef anzurufen.' },
        { title: 'Eine Website, die Anfragen bringt', text: 'Klare Leistungen, Einsatzgebiet und ein direkter Weg zu dir. Gebaut für Google und KI-Suchen, auf Wunsch mit Agent dahinter.', example: 'Beispiel: gross-shk.de für einen SHK-Meisterbetrieb.' },
        { title: 'Schulung für dein Team', text: 'Dein Team setzt KI an Aufgaben aus eurem Alltag ein und lernt, welche Unterlagen es ihr geben darf und welche nicht.', example: 'Beispiel: ein Tag Praxis mit euren echten Vorlagen.' },
      ],
    },
    process: {
      title: 'So läuft ein Projekt mit mir.',
      intro: 'Ein Ansprechpartner von der ersten Frage bis zum laufenden System. Das bin ich.',
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
        'Ich bin Fachinformatiker und entwickle seit 2016 Software. Zuletzt als Lead Developer in München und als freiberuflicher KI-Entwickler für einen DAX-Konzern, wo ich eine Dokumentenplattform von der Idee bis zum Produktivsystem gebracht habe.',
        'Mit n3tz habe ich in Saarbrücken eine eigene Firma gegründet und Griffi gebaut, die digitale Bürokraft fürs Handwerk. Als Freiberufler bringe ich dieselbe Technik in deinen Betrieb, in Paketen, die zu kleinen Firmen passen.',
        'Ich spreche Deutsch, Englisch und Türkisch. Ich komme vorbei, wenn es hilft, und sonst sehen wir uns per Video.',
      ],
      photo: { src: '/assets/work/demoday-stage.webp', width: 900, height: 1350, alt: 'Tarik Ermis beim Pitch auf dem Demo Day 2026 der Universität des Saarlandes' },
      photoCredit: 'Demo Day 2026 · Foto: Viktoriia Karakatsii / SouthWestX',
      facts: [
        { label: 'Firma', value: 'n3tz GmbH, Saarbrücken' },
        { label: 'Schwerpunkt', value: 'KI-Agenten, Automatisierung, RAG, Sprachagenten' },
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
      title: 'Tarik Ermis · AI agents and automation for trades and small businesses',
      description: 'I build AI assistants and automations that take office work off trade and small businesses. With case studies, how a project runs and a build plan for your business.',
    },
    skip: 'Skip to content',
    nav: { plan: 'Build plan', work: 'Work', services: 'Services', process: 'Process', about: 'About', cta: 'Start a project', menu: 'Menu' },
    hero: {
      kicker: 'For trades and small businesses in Germany and beyond',
      titleBefore: 'I build AI assistants that take the ',
      titleAccent: 'office work',
      titleAfter: ' off your business.',
      intro: 'I’m Tarik, a software engineer and the founder of n3tz. I set up agents and automations that work with the software you already use. You approve what goes out.',
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
      title: 'What I build for you.',
      intro: 'Every project starts with one task that costs time today. It becomes a small, clearly scoped package.',
      items: [
        { title: 'An agent for your office', text: 'It takes calls, emails and chat enquiries, files them with the customer and prepares replies or quotes. Built on Griffi or entirely for you.', example: 'Example: after-hours calls become callback notes with every detail.' },
        { title: 'Automation between your programs', text: 'Where someone retypes data today, the programs talk to each other. Failures land, with the reason, with the person who can fix them.', example: 'Example: a website application becomes a case in the industry portal.' },
        { title: 'An assistant for company knowledge', text: 'Prices, procedures and rules in one place. Your team asks, the assistant answers from your documents and shows the source.', example: 'Example: new staff find the answer without calling the boss.' },
        { title: 'A website that brings enquiries', text: 'Clear services, service area and a direct way to reach you. Built for Google and AI search, with an agent behind it if you want.', example: 'Example: gross-shk.de for a master plumbing business.' },
        { title: 'Training for your team', text: 'Your team uses AI on tasks from your own day and learns which documents it may share and which it may not.', example: 'Example: one practical day with your real templates.' },
      ],
    },
    process: {
      title: 'How a project with me runs.',
      intro: 'One contact from the first question to the running system. That’s me.',
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
        { label: 'Focus', value: 'AI agents, automation, RAG, voice agents' },
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
