import type { FeatureCardIcon } from '../shared/components/feature-card/feature-card';

type ShowcaseCard = {
  title: string;
  icon: FeatureCardIcon;
  hoverText: string;
};

type ShowcaseSection = {
  title: string;
  layout: 'grid' | 'slider';
  cards: ShowcaseCard[];
};

export const contentData = {
  brand: {
    name: 'IM Digital',
    heroTitleHighlight: 'Digital Business',
  },

  showcaseUi: {
    en: {
      scrollExplore: 'Scroll to explore',
      indicatorLabelPrefix: 'Go to',
    },
    ro: {
      scrollExplore: 'Deruleaza pentru explorare',
      indicatorLabelPrefix: 'Mergi la',
    },
  },

  hero: {
    en: {
      title: 'Complete and Modern Solutions for a Digital Business',
      text: 'Low code solutions for a short journey from idea to market',
      image: '/assets/images/hero-main.jpg',
      cta: {
        label: 'Start Demo',
        trackingName: 'hero_start_demo',
        aria: 'Start demo request',
      },
    },
    ro: {
      title: 'Solutii complete si moderne pentru un Digital Business',
      text: 'Solutii low code pentru un drum scurt de la idee la piata.',
      image: '/assets/images/hero-main.jpg',
      cta: {
        label: 'Incepe demo',
        trackingName: 'hero_start_demo',
        aria: 'Porneste cererea de demo',
      },
    },
  },

  heroBadges: [
    { title: 'Identity verified', text: 'Client ID 78521', icon: 'scan-face' },
    { title: 'ANAF Check', text: 'Validated', icon: 'coins' },
    { title: 'Loan Application', text: 'Approved', icon: 'code-window' },
  ] satisfies Array<{ title: string; text: string; icon: FeatureCardIcon }>,

  solutionsIntro: {
    smallTitle: 'Digital solutions',
    title: 'Everything you need to move faster online',
    text: 'We design, build and improve digital products with a simple mix of strategy, design and engineering.',
  },

  solutionCards: [
    {
      title: 'E-commerce',
      text: 'Online stores, checkout flows and commerce experiences built for growth.',
      icon: 'cart',
      image: '/assets/images/solution-commerce.jpg',
    },
    {
      title: 'Low-code apps',
      text: 'Internal tools and customer-facing apps delivered faster with flexible platforms.',
      icon: 'layers',
      image: '/assets/images/solution-low-code.jpg',
    },
    {
      title: 'Automation',
      text: 'Workflows that reduce manual work and keep teams focused on what matters.',
      icon: 'bolt',
      image: '/assets/images/solution-automation.jpg',
    },
  ],

  showcase: {
    en: {
      demos: {
        title: 'Explore the Demos on our Digital Solutions',
        layout: 'grid',
        cards: [
          {
            title: 'Digital Journey',
            icon: 'route',
            hoverText: 'Guided experiences from first click to completed flow.',
          },
          {
            title: 'Innovation Toolkits',
            icon: 'magnet',
            hoverText: 'Reusable building blocks that shorten delivery time.',
          },
          {
            title: 'Financial Flows',
            icon: 'coins',
            hoverText: 'Clear and reliable flows for financial products.',
          },
          {
            title: 'Biometrics',
            icon: 'scan-face',
            hoverText: 'Secure identity checks with a low-friction user experience.',
          },
        ],
      },
      knowMore: {
        title: 'Do you want to know more?',
        layout: 'grid',
        cards: [
          {
            title: 'Machine Learning',
            icon: 'brain',
            hoverText: 'Models trained on real usage data for better decisions.',
          },
          {
            title: 'Advanced Biometrics',
            icon: 'user-scan',
            hoverText: 'Client verification flows with modern biometric checks.',
          },
          {
            title: 'Low-code/no-code',
            icon: 'code-window',
            hoverText: 'Build more, code less, and keep delivery moving.',
          },
          {
            title: 'Computer Vision',
            icon: 'eye',
            hoverText: 'Image understanding for documents, media, and operations.',
          },
          {
            title: 'Document Automation',
            icon: 'chip',
            hoverText: 'OCR and structured data extraction for business documents.',
          },
          {
            title: 'Krunity',
            icon: 'badge-check',
            hoverText: 'A compliant, intuitive, and powerful BPMN 2.0 foundation.',
          },
        ],
      },
      nextSteps: {
        title: 'Next steps',
        layout: 'grid',
        cards: [
          {
            title: 'Web API',
            icon: 'laptop-code',
            hoverText: 'Connect your products through clean, documented APIs.',
          },
          {
            title: 'Digital Solutions',
            icon: 'devices',
            hoverText: 'Shape the next customer journey with modular solutions.',
          },
          {
            title: 'Content Hub',
            icon: 'help-square',
            hoverText: 'Explore resources, stories, and product knowledge.',
          },
        ],
      },
    },
    ro: {
      demos: {
        title: 'Descopera demo-urile solutiilor digitale',
        layout: 'grid',
        cards: [
          {
            title: 'Parcurs digital',
            icon: 'route',
            hoverText: 'Experiente ghidate de la primul click pana la flux finalizat.',
          },
          {
            title: 'Kituri de inovare',
            icon: 'magnet',
            hoverText: 'Componente reutilizabile care reduc timpul de livrare.',
          },
          {
            title: 'Fluxuri financiare',
            icon: 'coins',
            hoverText: 'Fluxuri clare si stabile pentru produse financiare.',
          },
          {
            title: 'Biometrics',
            icon: 'scan-face',
            hoverText: 'Verificari sigure de identitate cu experienta simpla pentru utilizator.',
          },
        ],
      },
      knowMore: {
        title: 'Vrei sa afli mai multe?',
        layout: 'grid',
        cards: [
          {
            title: 'Invatare automata',
            icon: 'brain',
            hoverText: 'Modele antrenate pe date reale de utilizare.',
          },
          {
            title: 'Biometrie avansata',
            icon: 'user-scan',
            hoverText: 'Fluxuri de verificare cu tehnologii biometrice moderne.',
          },
          {
            title: 'Low-code/no-code',
            icon: 'code-window',
            hoverText: 'Construiesti mai mult, scrii mai putin cod si livrezi mai rapid.',
          },
          {
            title: 'Viziune computerizata',
            icon: 'eye',
            hoverText: 'Intelegerea imaginilor pentru documente, media si operatiuni.',
          },
          {
            title: 'Automatizare documente',
            icon: 'chip',
            hoverText: 'OCR si extragere structurata de date din documente business.',
          },
          {
            title: 'Krunity',
            icon: 'badge-check',
            hoverText: 'O baza BPMN 2.0 conforma, intuitiva si puternica.',
          },
        ],
      },
      nextSteps: {
        title: 'Pasii urmatori',
        layout: 'grid',
        cards: [
          {
            title: 'API web',
            icon: 'laptop-code',
            hoverText: 'Conecteaza produsele prin API-uri curate si documentate.',
          },
          {
            title: 'Digital Solutions',
            icon: 'devices',
            hoverText: 'Construieste urmatorul parcurs digital cu solutii modulare.',
          },
          {
            title: 'Content Hub',
            icon: 'help-square',
            hoverText: 'Exploreaza resurse, articole si informatii despre produse.',
          },
        ],
      },
    },
  } satisfies Record<'en' | 'ro', Record<'demos' | 'knowMore' | 'nextSteps', ShowcaseSection>>,

  footer: {
    links: [
      'Landings',
      'Termeni si conditii',
      'Protectia datelor',
      'Politica cookies',
      'Politica GDPR',
    ],
    poweredBy: 'IM Digital :: powered by Starbyte',
  },

  navigation: {
    text: {
      en: {
        homeAria: 'IM Digital homepage',
        changeLanguage: 'Change language',
        switchTheme: 'Switch theme',
        toggleMenu: 'Toggle menu',
        digitalSolutions: 'Digital Solutions',
        useCases: 'Use Cases',
        industries: 'Industries',
        aboutUs: 'About Us',
        news: 'News',
        loan: 'Loan Origination',
        onboarding: 'Online Onboarding',
        surveillance: 'Computer Surveillance',
        anaf: 'ANAF Integration',
        ocr: 'ID Card OCR',
        videoConference: 'Video Conference',
        esign: 'eSign',
        vision: 'Computer Vision',
        selfPayment: 'Selfie Payment',
        certifications: 'Certifications',
        careers: 'Careers',
        contentHub: 'Content Hub',
        contactUs: 'Contact Us',
      },
      ro: {
        homeAria: 'Pagina principala IM Digital',
        changeLanguage: 'Schimba limba',
        switchTheme: 'Schimba tema',
        toggleMenu: 'Deschide meniul',
        digitalSolutions: 'Solutii Digitale',
        useCases: 'Cazuri de utilizare',
        industries: 'Industrii',
        aboutUs: 'Despre Noi',
        news: 'Noutati',
        loan: 'Originare Credite',
        onboarding: 'Onboarding Online',
        surveillance: 'Computer Surveillance',
        anaf: 'Integrare ANAF',
        ocr: 'OCR Carte ID',
        videoConference: 'Video Conference',
        esign: 'Semnatura Electronica',
        vision: 'Computer Vision',
        selfPayment: 'Selfie Payment',
        certifications: 'Certificari',
        careers: 'Cariere',
        contentHub: 'Content Hub',
        contactUs: 'Contact',
      },
    },
    items: [
      {
        id: 'solutions',
        label: 'digitalSolutions',
        submenu: [
          { id: 'loan', label: 'loan', fragment: 'loan' },
          { id: 'onboarding', label: 'onboarding', fragment: 'onboarding' },
          { id: 'surveillance', label: 'surveillance', fragment: 'computer-surveillance' },
          { id: 'anaf', label: 'anaf', fragment: 'anaf-integration' },
          { id: 'ocr', label: 'ocr', fragment: 'ocr' },
          { id: 'videoConference', label: 'videoConference', fragment: 'video-conference' },
          { id: 'vision', label: 'vision', fragment: 'vision' },
          { id: 'selfPayment', label: 'selfPayment', fragment: 'selfie-payment' },
        ],
      },
      { id: 'usecases', label: 'useCases', fragment: 'usecases' },
      { id: 'industries', label: 'industries', fragment: 'industries' },
      {
        id: 'about',
        label: 'aboutUs',
        submenu: [
          { id: 'certifications', label: 'certifications', fragment: 'certifications' },
          { id: 'careers', label: 'careers', fragment: 'careers' },
          { id: 'contentHub', label: 'contentHub', fragment: 'content-hub' },
          { id: 'contactUs', label: 'contactUs', fragment: 'contact' },
        ],
      },
      { id: 'news', label: 'news', fragment: 'news' },
    ],
  },
};
