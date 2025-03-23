import type { Dictionary } from "./index";

const en: Dictionary = {
  hero: {
    title: "High-Resolution from the Stratosphere",
    description: `
      We are developing a new generation of high-altitude balloon technology for
      observations, supporting farmers' decision-making, and enhancing
      agricultural predictability.
    `.trim(),
    schedule: "Schedule a Demo",
    getStarted: "Get Started",
  },
  why: {
    title: "Why Agroloon?",
    paragraph1: `
      Agroloon aims to revolutionize agricultural forecasting by developing a
      new generation of high-altitude balloon technology. This innovation
      supports farmers' decision-making and enhances agricultural predictability
      by providing high-resolution images from the stratosphere.
    `.trim(),
    paragraph2: `
      Our system enables the detection of the smallest differences in fields on
      an hourly basis, leading to effective damage assessment and yield
      prediction. By providing unprecedented visibility into crop health and
      field conditions, we empower agricultural stakeholders to make data-driven
      decisions that optimize yield and reduce waste.
    `.trim(),
    whoWeServe: "who we serve",
    serveItems: {
      farmers: "Farmers",
      agribusinesses: "Agribusinesses",
      insurance: "Insurance Companies",
      government: "Government Agencies",
      research: "Research Institutions",
      consultants: "Agricultural Consultants",
    },
  },
  what: {
    title: "What We Offer",
    paragraph1: `
      Agroloon offers a high-altitude balloon system capable of monitoring the
      state of agricultural fields. The system provides ultra-high-resolution
      images with a resolution of 5x5 cm, which is approximately 600% higher
      quality than average satellite images.
    `.trim(),
    paragraph2: `
      This allows for the detection of minor variations in fields on an hourly
      basis, facilitating effective damage assessment and yield prediction.
      Moreover, Agroloon's service is cost-effective, offering data at less than
      half the price of existing methods while delivering more accurate data
      24/7.
    `.trim(),
    byTheNumbers: "by the numbers",
    stats: [
      {
        value: "600%",
        description: "Higher quality than average satellite imagery",
      },
      {
        value: "5\u00D75 cm",
        description: "Ultra-high precision per pixel",
      },
      {
        value: "50%",
        description: "Lower cost than existing monitoring methods",
      },
    ],
  },
  cta: {
    title: "Ready to Transform Your Agricultural Insights?",
    description: `
      Discover the power of precision agriculture. With Agroloon's advanced
      imaging solutions, gain insights that transform your farming operations
      and drive sustainable growth.
    `.trim(),
    getStarted: "Get Started",
    schedule: "Schedule a Demo",
  },
  footer: {
    slogan: "High Resolution from the Stratosphere",
    company: {
      header: "Company",
      aboutUs: "About Us",
      careers: "Careers",
      news: "News",
      contact: "Contact",
    },
    solutions: {
      header: "Solutions",
      fieldMonitoring: "Field Monitoring",
      yieldPrediction: "Yield Prediction",
      damageAssessment: "Damage Assessment",
      precisionFarming: "Precision Farming",
    },
    for: {
      header: "For",
      farmers: "Farmers",
      agribusinesses: "Agribusinesses",
      insuranceCompanies: "Insurance Companies",
      governmentAgencies: "Government Agencies",
    },
    resources: {
      header: "Resources",
      blog: "Blog",
      caseStudies: "Case Studies",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
    },
  },
};

export default en;
