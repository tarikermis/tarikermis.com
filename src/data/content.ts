export type Locale = 'en' | 'de';

type Link = {
  label: string;
  href: string;
};

type Project = {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  owned: string;
  tags: string[];
  links: Link[];
  featured?: boolean;
};

export const profile = {
  name: 'Tarik Ermis',
  email: 'tarik@n3tz.ai',
  phone: '+49 1573 753 22 27',
  github: 'https://github.com/tarikermis',
  linkedin: 'https://www.linkedin.com/in/tarikermis',
  resume: 'https://techrez.io/resume/tarik-ermis',
  n3tz: 'https://n3tz.ai',
  location: 'Völklingen, Saarland, Germany',
} as const;

export const copy: Record<Locale, {
  lang: string;
  path: string;
  alternatePath: string;
  alternateLabel: string;
  seo: { title: string; description: string };
  nav: { work: string; approach: string; about: string; links: string; hello: string };
  hero: {
    eyebrow: string;
    titleStart: string;
    titleAccent: string;
    titleEnd: string;
    intro: string;
    signature: string;
    email: string;
    vcard: string;
    portraitAlt: string;
    metrics: Array<{ value: string; label: string }>;
  };
  work: {
    kicker: string;
    title: string;
    intro: string;
    caveat: string;
    built: string;
    projects: Project[];
  };
  approach: {
    kicker: string;
    title: string;
    intro: string;
    items: Array<{ number: string; title: string; text: string; tools: string }>;
  };
  about: {
    kicker: string;
    title: string;
    paragraphs: string[];
    languagesLabel: string;
    languages: string[];
    timelineLabel: string;
    timeline: Array<{ period: string; role: string; company: string }>;
  };
  contact: {
    kicker: string;
    title: string;
    text: string;
    email: string;
    copyEmail: string;
    copied: string;
    scan: string;
    vcard: string;
  };
  quick: { title: string; close: string; intro: string };
  footer: { note: string; legal: string; source: string; language: string };
}> = {
  en: {
    lang: 'en',
    path: '/',
    alternatePath: '/de/',
    alternateLabel: 'DE',
    seo: {
      title: 'Tarik Ermis — Freelance AI agents & workflow automation',
      description: 'I’m Tarik. Show me one task you keep doing by hand. I’ll work through it with you and build an agent or automation that fits the tools you already use.',
    },
    nav: { work: 'Work', approach: 'Services', about: 'About', links: 'Links', hello: 'Say hello' },
    hero: {
      eyebrow: 'Independent engineer · Founder of n3tz',
      titleStart: 'Which part of your week runs on repeat?',
      titleAccent: '',
      titleEnd: '',
      intro: 'I’m Tarik. Show me one task you keep doing by hand. I’ll work through it with you and build an agent or automation that fits the tools you already use.',
      signature: 'I build what others plan.',
      email: 'Describe your workflow',
      vcard: 'Save contact',
      portraitAlt: 'Tarik Ermis, software architect and founder of n3tz',
      metrics: [
        { value: '10+', label: 'years building software' },
        { value: '0→1', label: 'products, not just prototypes' },
        { value: 'Full stack', label: 'from pixels to packets' },
      ],
    },
    work: {
      kicker: 'Selected work',
      title: 'Where I’ve done this',
      intro: '',
      caveat: '',
      built: 'What I built',
      projects: [
        {
          number: '01',
          eyebrow: 'Founder · Product · Engineering',
          title: 'Empfang by n3tz',
          description: 'A production AI receptionist for phone and web. It holds real-time conversations, captures leads, books appointments, and brings the work behind them into one multi-tenant product.',
          owned: 'Product direction · Voice & SIP · Web apps · Backend · Infrastructure · Go-to-market',
          tags: ['Python', 'TypeScript', 'Realtime AI', 'SIP', 'PostgreSQL', 'Cloudflare'],
          links: [
            { label: 'Explore Empfang', href: 'https://n3tz.ai/empfang/' },
            { label: 'Meet n3tz', href: 'https://n3tz.ai/' },
          ],
          featured: true,
        },
        {
          number: '02',
          eyebrow: 'AI/ML · Enterprise platforms',
          title: 'Enterprise AI systems',
          description: 'Document intelligence, RAG, and multi-agent systems for enterprise and public-sector contexts—including a platform working across more than 10,000 governance documents.',
          owned: 'Agent orchestration · Retrieval · Realtime UX · Automated tests · Infrastructure as code',
          tags: ['RAG', 'Multi-agent', 'AWS', 'OpenSearch', 'React', 'Vue'],
          links: [{ label: 'View résumé', href: profile.resume }],
        },
        {
          number: '03',
          eyebrow: 'Product engineering · Commerce',
          title: 'Commerce that keeps moving',
          description: 'Multi-role commerce and operations products across gaming and retail: checkout, localization, real-time order tracking, admin tools, SEO, and performance.',
          owned: 'Architecture · Frontend · APIs · Payments · Search & SEO · Delivery',
          tags: ['Vue', 'Nuxt', 'Node.js', 'MongoDB', 'Payments', 'WebSockets'],
          links: [
            { label: 'EloHeaven', href: 'https://eloheaven.gg' },
            { label: 'OdinBoost', href: 'https://odinboost.com' },
          ],
        },
      ],
    },
    approach: {
      kicker: 'Services',
      title: 'What I can build for you',
      intro: 'We start with a recent example from your desk. Together we agree what the first version should do and where you want a human to check the result.',
      items: [
        { number: "01", title: "Your personal agent", text: "Give me a recurring task and a few examples of how you handle it. I set up an agent with your instructions and tools, then test the results with you.", tools: "Example · Draft replies in your voice" },
        { number: "02", title: "A handoff between tools", text: "When an enquiry lands in your inbox, someone has to copy it into the next system. I connect the steps and make exceptions visible to the person handling them.", tools: "Example · Turn an enquiry into a CRM record" },
        { number: "03", title: "Answers from your own documents", text: "I connect your chosen documents to a searchable assistant. Your team can ask a question, open the source and check the answer.", tools: "Example · Find the current approval procedure" },
      ],
    },
    about: {
      kicker: 'A little context',
      title: 'Direct, curious, and close to the work.',
      paragraphs: [
        'I’ve spent more than a decade building software and over five years working deeply with AI. Along the way I’ve led teams, rebuilt large interfaces, shipped finance and commerce products, and learned that the best technical work starts with listening.',
        'I’m based in Völklingen, Saarland—close enough to several borders that different languages and perspectives feel normal. I like difficult product problems, honest collaboration, and software that earns its complexity.',
      ],
      languagesLabel: 'Languages I work in',
      languages: ['German', 'English', 'Turkish', 'French'],
      timelineLabel: 'Abridged timeline',
      timeline: [
        { period: '2022—now', role: 'Founder & software architect', company: 'n3tz' },
        { period: '2024—now', role: 'Full-stack & AI/ML engineer', company: 'QUERPLEX' },
        { period: '2023—24', role: 'Lead developer', company: 'elunic' },
        { period: 'Before', role: 'Engineering across AI, fintech & commerce', company: 'Product teams' },
      ],
    },
    contact: {
      kicker: 'Open channel',
      title: 'What did you do by hand this week?',
      text: 'We start with a recent example from your desk. Together we agree what the first version should do and where you want a human to check the result.',
      email: 'Describe your workflow',
      copyEmail: 'Copy email',
      copied: 'Email copied',
      scan: 'Scan to save my contact',
      vcard: 'Download vCard',
    },
    quick: { title: 'Find me online', close: 'Close', intro: 'The short route to the useful places.' },
    footer: { note: 'Designed and built by Tarik, with Astro and very little JavaScript.', legal: 'Legal & privacy', source: 'Source', language: 'Deutsch' },
  },
  de: {
    lang: 'de',
    path: '/de/',
    alternatePath: '/',
    alternateLabel: 'EN',
    seo: {
      title: 'Tarik Ermis — KI-Agenten & Prozessautomatisierung',
      description: 'Tarik Ermis baut persönliche KI-Agenten und verbindet bestehende Programme. Gemeinsam automatisieren wir einen konkreten Ablauf aus deinem Arbeitsalltag.',
    },
    nav: { work: 'Arbeit', approach: 'Leistungen', about: 'Über mich', links: 'Links', hello: 'Hallo sagen' },
    hero: {
      eyebrow: 'Freier Softwareentwickler · Gründer von n3tz',
      titleStart: 'Welche Arbeit wiederholt sich bei dir jede Woche?',
      titleAccent: '',
      titleEnd: '',
      intro: 'Ich bin Tarik. Zeig mir eine Aufgabe, die du immer wieder von Hand erledigst. Wir gehen sie zusammen durch. Daraus baue ich einen Agenten oder eine Automatisierung für die Programme, die du schon nutzt.',
      signature: 'Ich baue, was andere planen.',
      email: 'Ablauf schildern',
      vcard: 'Kontakt speichern',
      portraitAlt: 'Tarik Ermis, Software-Architekt und Gründer von n3tz',
      metrics: [
        { value: '10+', label: 'Jahre Softwareentwicklung' },
        { value: '0→1', label: 'Produkte statt Folien' },
        { value: 'Full Stack', label: 'von Pixeln bis Paketen' },
      ],
    },
    work: {
      kicker: 'Projekte',
      title: 'Wo ich das schon umgesetzt habe',
      intro: '',
      caveat: '',
      built: 'Mein Anteil',
      projects: [
        {
          number: '01',
          eyebrow: 'Gründer · Produkt · Engineering',
          title: 'Empfang von n3tz',
          description: 'Ein produktiver KI-Empfang für Telefon und Web. Er führt Gespräche in Echtzeit, erfasst Anfragen, bucht Termine und verbindet die Arbeit dahinter in einem mandantenfähigen Produkt.',
          owned: 'Produktrichtung · Voice & SIP · Web-Apps · Backend · Infrastruktur · Go-to-Market',
          tags: ['Python', 'TypeScript', 'Echtzeit-KI', 'SIP', 'PostgreSQL', 'Cloudflare'],
          links: [
            { label: 'Empfang entdecken', href: 'https://n3tz.ai/empfang/' },
            { label: 'n3tz kennenlernen', href: 'https://n3tz.ai/' },
          ],
          featured: true,
        },
        {
          number: '02',
          eyebrow: 'AI/ML · Enterprise-Plattformen',
          title: 'Enterprise-KI-Systeme',
          description: 'Document Intelligence, RAG und Multi-Agent-Systeme im Enterprise- und Public-Sector-Umfeld – darunter eine Plattform für mehr als 10.000 Governance-Dokumente.',
          owned: 'Agent-Orchestrierung · Retrieval · Echtzeit-UX · Tests · Infrastructure as Code',
          tags: ['RAG', 'Multi-Agent', 'AWS', 'OpenSearch', 'React', 'Vue'],
          links: [{ label: 'Lebenslauf ansehen', href: profile.resume }],
        },
        {
          number: '03',
          eyebrow: 'Product Engineering · Commerce',
          title: 'Commerce, der in Bewegung bleibt',
          description: 'Commerce- und Operations-Produkte mit mehreren Rollen für Gaming und Retail: Checkout, Lokalisierung, Live-Auftragsstatus, Admin-Werkzeuge, SEO und Performance.',
          owned: 'Architektur · Frontend · APIs · Payments · Suche & SEO · Delivery',
          tags: ['Vue', 'Nuxt', 'Node.js', 'MongoDB', 'Payments', 'WebSockets'],
          links: [
            { label: 'EloHeaven', href: 'https://eloheaven.gg' },
            { label: 'OdinBoost', href: 'https://odinboost.com' },
          ],
        },
      ],
    },
    approach: {
      kicker: 'Leistungen',
      title: 'Was ich für dich baue',
      intro: 'Wir schauen uns einen echten Fall aus deinem Alltag an. Gemeinsam legen wir fest, was die erste Version erledigen soll und an welcher Stelle du selbst prüfen möchtest.',
      items: [
        { number: "01", title: "Dein persönlicher Agent", text: "Du zeigst mir eine wiederkehrende Aufgabe und ein paar Beispiele. Ich richte den Agenten mit deinen Vorgaben und Werkzeugen ein. Die Ergebnisse prüfen wir gemeinsam.", tools: "Beispiel · Antworten in deinem Ton vorbereiten" },
        { number: "02", title: "Eine Verbindung zwischen Programmen", text: "Eine Anfrage kommt per Mail, jemand tippt sie im nächsten System wieder ein. Ich verbinde die Schritte und mache sichtbar, welche Fälle jemand prüfen muss.", tools: "Beispiel · Aus einer Anfrage einen CRM-Eintrag anlegen" },
        { number: "03", title: "Antworten aus deinen Unterlagen", text: "Ich mache ausgewählte Dokumente für einen Assistenten durchsuchbar. Dein Team stellt eine Frage und kann die Antwort direkt an der Quelle prüfen.", tools: "Beispiel · Den aktuellen Freigabeprozess finden" },
      ],
    },
    about: {
      kicker: 'Etwas Kontext',
      title: 'Direkt, neugierig und nah an der Arbeit.',
      paragraphs: [
        'Seit mehr als zehn Jahren baue ich Software, seit über fünf Jahren arbeite ich intensiv mit KI. In dieser Zeit habe ich Teams geleitet, große Interfaces erneuert, Finanz- und Commerce-Produkte ausgeliefert – und gelernt, dass gute technische Arbeit mit Zuhören beginnt.',
        'Ich lebe in Völklingen im Saarland – nah genug an mehreren Grenzen, dass verschiedene Sprachen und Blickwinkel ganz normal sind. Ich mag schwierige Produktfragen, ehrliche Zusammenarbeit und Software, die sich ihre Komplexität verdient.',
      ],
      languagesLabel: 'Sprachen, in denen ich arbeite',
      languages: ['Deutsch', 'Englisch', 'Türkisch', 'Französisch'],
      timelineLabel: 'Kurzfassung',
      timeline: [
        { period: '2022—heute', role: 'Gründer & Software-Architekt', company: 'n3tz' },
        { period: '2024—heute', role: 'Full-Stack & AI/ML Engineer', company: 'QUERPLEX' },
        { period: '2023—24', role: 'Lead Developer', company: 'elunic' },
        { period: 'Davor', role: 'Engineering in KI, Fintech & Commerce', company: 'Produktteams' },
      ],
    },
    contact: {
      kicker: 'Direkter Draht',
      title: 'Was hast du diese Woche von Hand erledigt?',
      text: 'Wir schauen uns einen echten Fall aus deinem Alltag an. Gemeinsam legen wir fest, was die erste Version erledigen soll und an welcher Stelle du selbst prüfen möchtest.',
      email: 'Ablauf schildern',
      copyEmail: 'E-Mail kopieren',
      copied: 'E-Mail kopiert',
      scan: 'Scannen und Kontakt speichern',
      vcard: 'vCard herunterladen',
    },
    quick: { title: 'Du findest mich hier', close: 'Schließen', intro: 'Der kurze Weg zu den nützlichen Orten.' },
    footer: { note: 'Entworfen und gebaut von Tarik – mit Astro und sehr wenig JavaScript.', legal: 'Impressum & Datenschutz', source: 'Quellcode', language: 'English' },
  },
};
