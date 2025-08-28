import { Locale } from "@/utils/i18n";

export type Dictionary = {
  hero: {
    title: string;
    description: string;
    schedule: string;
    getStarted: string;
  };
  why: {
    title: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    paragraph4: string;
    readMore: string;
    readLess: string;
    whoWeServe: string;
    serveItems: {
      farmers: string;
      agribusinesses: string;
      insurance: string;
      government: string;
      research: string;
      consultants: string;
    };
    solutions: string;
  };
  what: {
    title: string;
    paragraph1: string;
    paragraph2: string;
    byTheNumbers: string;
    stats: Array<{ value: string; description: string }>;
  };
  cta: {
    title: string;
    description: string;
    getStarted: string;
    schedule: string;
  };
  footer: {
    slogan: string;
    company: {
      header: string;
      aboutUs: string;
      careers: string;
      news: string;
      contact: string;
    };
    solutions: {
      header: string;
      fieldMonitoring: string;
      yieldPrediction: string;
      damageAssessment: string;
      precisionFarming: string;
    };
    for: {
      header: string;
      farmers: string;
      agribusinesses: string;
      insuranceCompanies: string;
      governmentAgencies: string;
    };
    resources: {
      header: string;
      blog: string;
      caseStudies: string;
      privacyPolicy: string;
      termsOfService: string;
    };
  };
};

export const dictionaries: Record<Locale, Dictionary> = {
  en: await import("./en").then((module) => module.default),
  hu: await import("./hu").then((module) => module.default),
};
