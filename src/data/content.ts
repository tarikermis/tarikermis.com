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
    now: string;
    building: string;
    buildingValue: string;
    focus: string;
    focusValue: string;
    localTime: string;
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
      title: 'Tarik Ermis — Software Architect, AI Engineer & Founder',
      description: 'Tarik Ermis builds production AI systems and full-stack products—from real-time voice agents to enterprise platforms and their infrastructure.',
    },
    nav: { work: 'Work', approach: 'Approach', about: 'About', links: 'Links', hello: 'Say hello' },
    hero: {
      eyebrow: 'Hi, I’m Tarik — building at the edge of AI and product.',
      titleStart: 'I turn difficult ideas into software that feels',
      titleAccent: 'beautifully simple.',
      titleEnd: '',
      intro: 'Software architect, AI engineer, and founder of n3tz. I shape the product, write the code, and run the systems—from real-time voice AI to full-stack platforms.',
      signature: 'I build what others plan.',
      email: 'Email me',
      vcard: 'Save contact',
      portraitAlt: 'Tarik Ermis, software architect and founder of n3tz',
      now: 'Now',
      building: 'Building',
      buildingValue: 'n3tz · Empfang',
      focus: 'Current focus',
      focusValue: 'Voice AI + useful products',
      localTime: 'Local time',
      metrics: [
        { value: '10+', label: 'years building software' },
        { value: '0→1', label: 'products, not just prototypes' },
        { value: 'Full stack', label: 'from pixels to packets' },
      ],
    },
    work: {
      kicker: 'Selected work',
      title: 'Systems with a pulse.',
      intro: 'I’m happiest where product thinking, hard engineering, and real operations meet. Much of the client code is private; the thinking and outcomes are not.',
      caveat: 'Public where it can be. Specific where it matters.',
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
      kicker: 'From model to metal',
      title: 'I don’t stop at the demo.',
      intro: 'A good prototype proves an idea. A good product survives users, edge cases, invoices, alerts, and Monday morning.',
      items: [
        {
          number: '01',
          title: 'AI systems',
          text: 'Conversational AI, retrieval, agents, evaluation, and the product experience around them—designed for useful behavior, not a model screenshot.',
          tools: 'Python · TypeScript · RAG · Realtime voice · Agent orchestration',
        },
        {
          number: '02',
          title: 'Product engineering',
          text: 'I move between interface, API, data model, and business flow. That short feedback loop turns ambiguous ideas into coherent products.',
          tools: 'React · Vue · Astro · Node.js · Mobile · Payments · Multi-tenancy',
        },
        {
          number: '03',
          title: 'Platforms & operations',
          text: 'Deployment is part of the design. I build the containers, infrastructure, observability, backups, and release paths that keep software dependable.',
          tools: 'AWS · Azure · GCP · Hetzner · Docker · Kubernetes · Terraform',
        },
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
      title: 'Have a difficult problem?',
      text: 'Those are usually the interesting ones. Send me the rough version—what you’re trying to make, what is stuck, or what should exist but doesn’t yet.',
      email: 'Start a conversation',
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
      title: 'Tarik Ermis — Software-Architekt, AI Engineer & Gründer',
      description: 'Tarik Ermis baut produktive KI-Systeme und Full-Stack-Produkte – von Echtzeit-Sprachagenten bis zu Enterprise-Plattformen samt Infrastruktur.',
    },
    nav: { work: 'Arbeit', approach: 'Arbeitsweise', about: 'Über mich', links: 'Links', hello: 'Hallo sagen' },
    hero: {
      eyebrow: 'Hi, ich bin Tarik — dort zu Hause, wo KI zum Produkt wird.',
      titleStart: 'Ich mache aus schwierigen Ideen Software, die sich',
      titleAccent: 'erstaunlich einfach anfühlt.',
      titleEnd: '',
      intro: 'Software-Architekt, AI Engineer und Gründer von n3tz. Ich forme das Produkt, schreibe den Code und betreibe die Systeme – von Echtzeit-Sprach-KI bis zur vollständigen Plattform.',
      signature: 'Ich baue, was andere planen.',
      email: 'E-Mail schreiben',
      vcard: 'Kontakt speichern',
      portraitAlt: 'Tarik Ermis, Software-Architekt und Gründer von n3tz',
      now: 'Gerade',
      building: 'Ich baue',
      buildingValue: 'n3tz · Empfang',
      focus: 'Im Fokus',
      focusValue: 'Sprach-KI + nützliche Produkte',
      localTime: 'Ortszeit',
      metrics: [
        { value: '10+', label: 'Jahre Softwareentwicklung' },
        { value: '0→1', label: 'Produkte statt Folien' },
        { value: 'Full Stack', label: 'von Pixeln bis Paketen' },
      ],
    },
    work: {
      kicker: 'Ausgewählte Arbeit',
      title: 'Systeme mit Puls.',
      intro: 'Am liebsten arbeite ich dort, wo Produktdenken, anspruchsvolle Technik und echter Betrieb zusammenkommen. Viel Kundencode ist privat; die Denkweise und Ergebnisse sind es nicht.',
      caveat: 'Öffentlich, wo es geht. Konkret, wo es zählt.',
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
      kicker: 'Vom Modell bis zur Maschine',
      title: 'Bei der Demo höre ich nicht auf.',
      intro: 'Ein guter Prototyp beweist eine Idee. Ein gutes Produkt übersteht Nutzer, Sonderfälle, Rechnungen, Alarme und den Montagmorgen.',
      items: [
        {
          number: '01',
          title: 'KI-Systeme',
          text: 'Conversational AI, Retrieval, Agenten, Evaluation und die Produktoberfläche darum – ausgelegt auf nützliches Verhalten statt auf einen Modell-Screenshot.',
          tools: 'Python · TypeScript · RAG · Echtzeit-Voice · Agent-Orchestrierung',
        },
        {
          number: '02',
          title: 'Product Engineering',
          text: 'Ich wechsle zwischen Interface, API, Datenmodell und Geschäftsprozess. Diese kurze Schleife macht aus unscharfen Ideen stimmige Produkte.',
          tools: 'React · Vue · Astro · Node.js · Mobile · Payments · Multi-Tenancy',
        },
        {
          number: '03',
          title: 'Plattform & Betrieb',
          text: 'Deployment gehört zum Design. Ich baue Container, Infrastruktur, Observability, Backups und Release-Wege, die Software verlässlich halten.',
          tools: 'AWS · Azure · GCP · Hetzner · Docker · Kubernetes · Terraform',
        },
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
      title: 'Ein schwieriges Problem?',
      text: 'Das sind meistens die interessanten. Schick mir die unfertige Version – was du bauen willst, was feststeckt oder was längst existieren sollte.',
      email: 'Gespräch starten',
      copyEmail: 'E-Mail kopieren',
      copied: 'E-Mail kopiert',
      scan: 'Scannen und Kontakt speichern',
      vcard: 'vCard herunterladen',
    },
    quick: { title: 'Du findest mich hier', close: 'Schließen', intro: 'Der kurze Weg zu den nützlichen Orten.' },
    footer: { note: 'Entworfen und gebaut von Tarik – mit Astro und sehr wenig JavaScript.', legal: 'Impressum & Datenschutz', source: 'Quellcode', language: 'English' },
  },
};
