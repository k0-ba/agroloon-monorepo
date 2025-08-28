"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "../_components/footer";
import { useLandingPageContext } from "../_components/context-provider";

type UseCase = {
  id: string;
  title: string;
  subtitle: string;
  emoji: string;
  description: string;
  problem: {
    title: string;
    description: string;
    points: string[];
    conclusion?: string;
  };
  solution: {
    title: string;
    description: string;
    features: Array<{
      title: string;
      description: string;
      color: string;
    }>;
    conclusion: string;
  };
  benefits: Array<{
    title: string;
    description: string;
    metric: string;
    color: string;
  }>;
};

const useCases: UseCase[] = [
  {
    id: "agriculture",
    title: "Agriculture & Farming",
    subtitle: "farmers, agribusinesses, agricultural consultants",
    emoji: "🌾",
    description: "Optimize yield, reduce costs, and quickly respond to threats with continuous high-resolution monitoring.",
    problem: {
      title: "The Problem",
      description: "Farmers often face challenges that threaten their yield and profitability:",
      points: [
        "Crop damage caused by extreme weather such as hail, storms, and drought.",
        "Uneven crop growth and undetected stress areas leading to lower yields.",
        "Lack of timely, high-resolution data to support precision agriculture decisions."
      ],
      conclusion: "Traditional satellite solutions often lack sufficient resolution or revisit frequency to detect problems early and accurately. Manual field scouting is time-consuming and costly."
    },
    solution: {
      title: "Our Solution",
      description: "Agroloon provides continuous high-resolution monitoring over 800 km², delivering actionable data on:",
      features: [
        { title: "Real-time Crop Health", description: "Monitor crop health changes in near real-time to detect issues before they impact yield.", color: "green" },
        { title: "Damage Assessment", description: "Fast insurance claims and decision-making after weather events with immediate damage mapping.", color: "green" },
        { title: "Early Detection", description: "Identify pest infestations, irrigation problems, and nutrient deficiencies before they spread.", color: "green" }
      ],
      conclusion: "With Agroloon, farmers can optimize yield, reduce costs, and quickly respond to threats."
    },
    benefits: [
      { title: "Higher Resolution", description: "6x better quality than average satellite imagery with 5×5 cm precision per pixel.", metric: "600%", color: "green" },
      { title: "Continuous Monitoring", description: "Round-the-clock observation capabilities with frequent revisit times.", metric: "24/7", color: "blue" },
      { title: "Cost Reduction", description: "Lower cost than existing monitoring methods while delivering superior accuracy.", metric: "50%", color: "purple" },
      { title: "Large Coverage", description: "Monitor up to 800 km² simultaneously from a single balloon platform.", metric: "800", color: "orange" }
    ]
  },
  {
    id: "insurance",
    title: "Insurance Providers",
    subtitle: "damage assessment and claims processing",
    emoji: "🛡️",
    description: "Process claims faster, reduce operational costs, and improve customer trust with rapid damage assessment.",
    problem: {
      title: "The Problem",
      description: "Insurance companies need reliable, objective data to:",
      points: [
        "Validate agricultural damage claims quickly after extreme weather.",
        "Assess home and property damage across large areas.",
        "Detect fraud and ensure fair compensation."
      ],
      conclusion: "Traditional assessment methods rely heavily on manual inspections or low-resolution satellite imagery, causing delays and increasing costs."
    },
    solution: {
      title: "Our Solution",
      description: "Agroloon delivers:",
      features: [
        { title: "Rapid Imagery", description: "High-resolution imagery over affected areas delivered quickly after damage events.", color: "blue" },
        { title: "Automated Mapping", description: "AI-powered damage mapping for crops, homes, and infrastructure with precise accuracy.", color: "blue" },
        { title: "Historical Analysis", description: "Compare before and after conditions to distinguish new damage from pre-existing issues.", color: "blue" }
      ],
      conclusion: "With Agroloon, insurance providers can process claims faster, reduce operational costs, and improve customer trust."
    },
    benefits: [
      { title: "Rapid Response", description: "Deploy immediate assessment capabilities after disaster events for faster claim processing.", metric: "FAST", color: "blue" },
      { title: "Objective Data", description: "Eliminate subjective assessments with precise, high-resolution imagery and automated analysis.", metric: "OBJ", color: "green" },
      { title: "Cost Efficiency", description: "Reduce manual inspection costs while improving accuracy and claim processing speed.", metric: "COST", color: "purple" },
      { title: "Wide Coverage", description: "Assess damage across large geographical areas with a single platform deployment.", metric: "AREA", color: "orange" }
    ]
  },
  {
    id: "emergency",
    title: "Emergency Management",
    subtitle: "disaster response, emergency coordination",
    emoji: "🚨",
    description: "Act faster, improve coordination, and save lives with near real-time damage mapping and situational awareness.",
    problem: {
      title: "The Problem",
      description: "When disasters strike—wildfires, floods, earthquakes, or storms—responders need immediate, accurate situational awareness. Current solutions often suffer from:",
      points: [
        "Low resolution and poor revisit time of satellites.",
        "Risk to crewed aircraft during dangerous conditions.",
        "Delays in getting reliable maps for planning evacuation and rescue."
      ]
    },
    solution: {
      title: "Our Solution",
      description: "Agroloon offers:",
      features: [
        { title: "Continuous Monitoring", description: "High-resolution monitoring over large areas (800 km²) without risking human lives.", color: "red" },
        { title: "Real-time Mapping", description: "Near real-time damage mapping to guide response efforts and resource allocation.", color: "red" },
        { title: "Recovery Planning", description: "Post-event monitoring for effective recovery planning and progress tracking.", color: "red" }
      ],
      conclusion: "With Agroloon, emergency agencies can act faster, improve coordination, and save lives."
    },
    benefits: [
      { title: "Safe Operations", description: "Monitor dangerous areas without risking human lives or expensive aircraft.", metric: "SAFE", color: "red" },
      { title: "Rapid Deployment", description: "Quick deployment capabilities for immediate response to emerging disasters.", metric: "FAST", color: "orange" },
      { title: "Wide Area Coverage", description: "Monitor vast disaster areas simultaneously for comprehensive situational awareness.", metric: "WIDE", color: "yellow" },
      { title: "Actionable Intelligence", description: "High-resolution data for informed decision-making and effective resource coordination.", metric: "DATA", color: "blue" }
    ]
  },
  {
    id: "forestry",
    title: "Environmental Protection & Forestry",
    subtitle: "forest monitoring, environmental protection",
    emoji: "🌲",
    description: "Protect critical ecosystems with proactive monitoring for early detection of illegal activities and environmental hazards.",
    problem: {
      title: "The Problem",
      description: "Ecosystems and forests face increasing pressures:",
      points: [
        "Illegal logging and land-use changes.",
        "Invasive species and disease outbreaks.",
        "Pollution events affecting water bodies."
      ],
      conclusion: "Conventional monitoring systems often detect changes too late, when damage is already severe."
    },
    solution: {
      title: "Our Solution",
      description: "Agroloon provides:",
      features: [
        { title: "Early Detection", description: "Frequent, high-resolution observation for early detection of illegal activities and environmental changes.", color: "green" },
        { title: "Health Monitoring", description: "Continuous monitoring of forest and wetland health to detect stress, disease, and invasive species.", color: "green" },
        { title: "Hazard Detection", description: "Rapid detection of environmental hazards such as oil spills or large-scale contamination events.", color: "green" }
      ],
      conclusion: "With Agroloon, environmental agencies and NGOs can act proactively to protect critical ecosystems."
    },
    benefits: [
      { title: "Proactive Protection", description: "Detect illegal activities and environmental threats before they cause irreversible damage.", metric: "PREV", color: "green" },
      { title: "Large Scale Monitoring", description: "Cover vast protected areas and ecosystems with continuous, high-resolution surveillance.", metric: "WIDE", color: "blue" },
      { title: "Cost Effective", description: "More affordable than traditional aerial patrols or satellite monitoring with better results.", metric: "COST", color: "purple" },
      { title: "Evidence Collection", description: "Collect high-quality evidence for legal action and environmental impact assessments.", metric: "DATA", color: "orange" }
    ]
  },
  {
    id: "infrastructure",
    title: "Infrastructure Monitoring",
    subtitle: "construction, utilities, transportation, pipelines",
    emoji: "🏗️",
    description: "Maintain better oversight, reduce risks, and save costs with continuous monitoring of infrastructure corridors.",
    problem: {
      title: "The Problem",
      description: "Large-scale infrastructure such as highways, railways, pipelines, and power lines requires continuous monitoring:",
      points: [
        "Unauthorized construction or encroachments can create safety and legal risks.",
        "Vegetation growth around power lines can threaten service continuity.",
        "Delays or overruns in construction projects due to lack of oversight."
      ],
      conclusion: "Traditional aerial inspections are costly and periodic, leaving blind spots between flights."
    },
    solution: {
      title: "Our Solution",
      description: "Agroloon delivers:",
      features: [
        { title: "Continuous Coverage", description: "High-resolution coverage over infrastructure corridors without periodic gaps.", color: "orange" },
        { title: "Change Detection", description: "Automated detection of structural changes, encroachments, or damage to infrastructure.", color: "orange" },
        { title: "Planning Support", description: "Support for efficient planning, maintenance scheduling, and regulatory compliance.", color: "orange" }
      ],
      conclusion: "With Agroloon, operators and contractors maintain better oversight, reduce risks, and save costs."
    },
    benefits: [
      { title: "Continuous Oversight", description: "24/7 monitoring eliminates blind spots and ensures complete infrastructure oversight.", metric: "CONT", color: "orange" },
      { title: "Risk Reduction", description: "Early detection of encroachments and damage prevents costly accidents and service disruptions.", metric: "RISK", color: "red" },
      { title: "Cost Savings", description: "Reduce expensive aerial inspection costs while improving monitoring frequency and quality.", metric: "SAVE", color: "green" },
      { title: "Compliance Support", description: "Maintain regulatory compliance with detailed documentation and regular monitoring reports.", metric: "COMP", color: "blue" }
    ]
  },
  {
    id: "security",
    title: "Security & Border Monitoring",
    subtitle: "border monitoring, critical infrastructure protection",
    emoji: "🔒",
    description: "Gain better intelligence and improve response times with persistent observation of critical areas.",
    problem: {
      title: "The Problem",
      description: "Border areas and critical sites need constant monitoring:",
      points: [
        "Unauthorized movements and smuggling activities.",
        "Rapid infrastructure developments near sensitive regions.",
        "Limited coverage and high operational costs of traditional patrols."
      ],
      conclusion: "Existing solutions often lack real-time awareness and adequate detail."
    },
    solution: {
      title: "Our Solution",
      description: "Agroloon provides:",
      features: [
        { title: "Persistent Observation", description: "High-resolution observation of border areas and critical infrastructure sites.", color: "red" },
        { title: "Automated Detection", description: "AI-powered detection of movements and changes in infrastructure or activity patterns.", color: "red" },
        { title: "Remote Monitoring", description: "Cost-effective monitoring over large, remote areas without physical presence.", color: "red" }
      ],
      conclusion: "With Agroloon, security agencies gain better intelligence and improve response times."
    },
    benefits: [
      { title: "Continuous Surveillance", description: "Round-the-clock monitoring capabilities without human fatigue or shift changes.", metric: "24/7", color: "red" },
      { title: "Real-time Intelligence", description: "Immediate awareness of activities and changes in monitored areas for rapid response.", metric: "REAL", color: "orange" },
      { title: "Extensive Coverage", description: "Monitor vast border areas and multiple sites simultaneously from strategic positions.", metric: "WIDE", color: "blue" },
      { title: "Personnel Safety", description: "Reduce risk to security personnel by monitoring dangerous or remote areas remotely.", metric: "SAFE", color: "green" }
    ]
  },
  {
    id: "government",
    title: "Government Agencies",
    subtitle: "broader governmental applications",
    emoji: "🏛️",
    description: "Support efficient planning, maintenance, and compliance with continuous high-resolution coverage.",
    problem: {
      title: "The Challenge",
      description: "Government agencies face complex monitoring and oversight challenges across multiple sectors:",
      points: [
        "Land use monitoring and compliance enforcement across vast territories.",
        "Urban planning and development oversight requiring frequent updates.",
        "Environmental impact assessment and natural resource management.",
        "Budget constraints limiting frequency and scope of traditional monitoring methods."
      ]
    },
    solution: {
      title: "Our Solution",
      description: "Agroloon provides comprehensive monitoring capabilities for:",
      features: [
        { title: "Land Use Monitoring", description: "Track land development, zoning compliance, and unauthorized construction activities.", color: "blue" },
        { title: "Urban Planning", description: "Support city planning with detailed imagery and change detection for development projects.", color: "blue" },
        { title: "Resource Management", description: "Monitor natural resources, water bodies, and environmental compliance across regions.", color: "blue" },
        { title: "Policy Enforcement", description: "Provide evidence and data for regulatory compliance and policy enforcement activities.", color: "blue" }
      ],
      conclusion: ""
    },
    benefits: [
      { title: "Cost Efficiency", description: "Significantly reduce monitoring costs compared to traditional aerial surveys and field inspections.", metric: "COST", color: "blue" },
      { title: "Data-Driven Decisions", description: "Access high-quality, objective data for informed policy making and resource allocation.", metric: "DATA", color: "green" },
      { title: "Regular Updates", description: "Maintain current information with frequent monitoring cycles and change detection.", metric: "FREQ", color: "purple" },
      { title: "Transparency", description: "Provide transparent, verifiable data for public accountability and stakeholder communication.", metric: "TRANSP", color: "orange" }
    ]
  },
  {
    id: "research",
    title: "Research Institutions",
    subtitle: "academic and scientific research",
    emoji: "🔬",
    description: "Enable advanced research with high-quality, frequent observations for academic and scientific applications.",
    problem: {
      title: "Research Challenges",
      description: "Research institutions face significant challenges in accessing quality observational data:",
      points: [
        "Limited access to high-resolution temporal data for longitudinal studies.",
        "High costs and complex acquisition processes for commercial satellite data.",
        "Insufficient spatial and temporal resolution for detailed environmental studies.",
        "Long waiting times for custom data collection matching research needs."
      ]
    },
    solution: {
      title: "Our Solution",
      description: "Agroloon offers researchers unprecedented capabilities:",
      features: [
        { title: "High-Resolution Data", description: "5×5 cm resolution imagery for detailed analysis of environmental and agricultural phenomena.", color: "purple" },
        { title: "Temporal Studies", description: "Frequent observation cycles enabling time-series analysis and longitudinal research.", color: "purple" },
        { title: "Custom Deployments", description: "Tailored data collection campaigns designed to match specific research objectives and timelines.", color: "purple" },
        { title: "Multi-spectral Analysis", description: "Advanced imaging capabilities supporting vegetation analysis, water quality studies, and more.", color: "purple" }
      ],
      conclusion: ""
    },
    benefits: [
      { title: "Ecology & Environment", description: "Study ecosystem dynamics, biodiversity patterns, and environmental change over time.", metric: "ECO", color: "green" },
      { title: "Agricultural Sciences", description: "Research crop development, precision agriculture techniques, and sustainable farming practices.", metric: "AGR", color: "blue" },
      { title: "Climate Research", description: "Monitor climate change impacts, temperature variations, and seasonal patterns.", metric: "CLIM", color: "purple" },
      { title: "Technology Development", description: "Test and validate new remote sensing technologies and analytical methods.", metric: "TECH", color: "yellow" }
    ]
  }
];

export default function SolutionsPage() {
  const [selectedUseCase, setSelectedUseCase] = useState<string>("agriculture");
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const { openCalendly } = useLandingPageContext();
  const contentRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);

  // Handle URL fragments for deep linking
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && useCases.find(uc => uc.id === hash)) {
      setSelectedUseCase(hash);
    }
    setIsInitialLoad(false);
  }, []);

  // Update URL fragment when selection changes and scroll to content
  useEffect(() => {
    window.history.replaceState(null, '', `/solutions#${selectedUseCase}`);
    
    // Scroll to divider line when use case changes (but not on initial load)
    if (dividerRef.current && !isInitialLoad) {
      setTimeout(() => {
        // Position divider line (bottom border of section) exactly at the bottom of the header
        const headerHeight = 120; // Full header height including padding
        const sectionBottom = dividerRef.current!.getBoundingClientRect().bottom + window.pageYOffset;
        const targetScrollPosition = sectionBottom - headerHeight;
        
        window.scrollTo({
          top: targetScrollPosition,
          behavior: 'smooth'
        });
      }, 100);
    }
  }, [selectedUseCase, isInitialLoad]);

  const currentUseCase = useCases.find(uc => uc.id === selectedUseCase) || useCases[0];

  const handleUseCaseChange = (useCaseId: string) => {
    setSelectedUseCase(useCaseId);
  };

  return (
    <div className="min-h-screen bg-[#0A0F08] text-white">
      <Header 
        scheduleText="Schedule a Demo"
        solutionsText="Solutions"
        useCases={useCases}
        selectedUseCase={selectedUseCase}
        onUseCaseChange={handleUseCaseChange}
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[#0A0F08]">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="font-space-mono text-4xl md:text-6xl font-light text-white/90 tracking-tighter mb-8">
              Solutions for Every Industry
            </h1>
            <p className="text-white/70 font-light text-lg md:text-xl max-w-3xl mx-auto mb-12">
              Discover how Agroloon&apos;s stratospheric intelligence transforms operations across diverse sectors with unprecedented visibility and real-time insights.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industry Selector */}
      <section ref={dividerRef} className="py-8 bg-[#0A0F08] border-b border-white/10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {useCases.map((useCase) => (
                <button
                  key={useCase.id}
                  onClick={() => handleUseCaseChange(useCase.id)}
                  className={`px-3 py-3 md:px-4 md:py-3 rounded-lg text-xs md:text-sm font-space-mono font-light transition-all text-center ${
                    selectedUseCase === useCase.id
                      ? "bg-white/20 border border-white/40 text-white"
                      : "bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white/90"
                  }`}
                >
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-lg md:text-xl">{useCase.emoji}</span>
                    <span className="leading-tight">{useCase.title}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Content */}
      <AnimatePresence mode="wait">
        <motion.div
          ref={contentRef}
          key={selectedUseCase}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          {/* Use Case Header */}
          <section className="py-16 bg-[#0A0F08]">
            <div className="container mx-auto px-4 md:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-4xl">{currentUseCase.emoji}</span>
                  <div>
                    <h2 className="font-space-mono text-3xl md:text-5xl font-light text-white/90 tracking-tighter">
                      {currentUseCase.title}
                    </h2>
                    <p className="text-white/60 text-lg mt-2">{currentUseCase.subtitle}</p>
                  </div>
                </div>
                <p className="text-white/70 font-light text-lg md:text-xl mb-12">
                  {currentUseCase.description}
                </p>
              </div>
            </div>
          </section>

          {/* Problem Section */}
          <section className="py-16 bg-white/5">
            <div className="container mx-auto px-4 md:px-8">
              <div className="max-w-4xl mx-auto">
                <h3 className="font-space-mono text-3xl md:text-4xl font-light text-white/90 tracking-tighter mb-8">
                  {currentUseCase.problem.title}
                </h3>
                <p className="text-white/70 font-light text-lg mb-6">
                  {currentUseCase.problem.description}
                </p>
                <ul className="space-y-3 text-white/70 font-light mb-6">
                  {currentUseCase.problem.points.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-white/40 rounded-full mt-3 flex-shrink-0"></div>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                {currentUseCase.problem.conclusion && (
                  <p className="text-white/70 font-light text-lg">
                    {currentUseCase.problem.conclusion}
                  </p>
                )}
              </div>
            </div>
          </section>

          {/* Solution Section */}
          <section className="py-16 bg-[#0A0F08]">
            <div className="container mx-auto px-4 md:px-8">
              <div className="max-w-4xl mx-auto">
                <h3 className="font-space-mono text-3xl md:text-4xl font-light text-white/90 tracking-tighter mb-8">
                  {currentUseCase.solution.title}
                </h3>
                <p className="text-white/70 font-light text-lg mb-8">
                  {currentUseCase.solution.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {currentUseCase.solution.features.map((feature, index) => (
                    <div key={index} className="p-4 bg-white/5 border border-white/10 rounded-lg">
                      <CheckCircle className={`h-6 w-6 text-${feature.color}-400 mb-3`} />
                      <h4 className="text-white/90 font-medium mb-2">{feature.title}</h4>
                      <p className="text-white/70 text-sm font-light">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
                {currentUseCase.solution.conclusion && (
                  <p className="text-white/70 font-light text-lg">
                    {currentUseCase.solution.conclusion}
                  </p>
                )}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16 bg-white/5">
            <div className="container mx-auto px-4 md:px-8">
              <div className="max-w-4xl mx-auto">
                <h3 className="font-space-mono text-3xl md:text-4xl font-light text-white/90 tracking-tighter mb-12 text-center">
                  Key Benefits for {currentUseCase.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {currentUseCase.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className={`w-8 h-8 bg-${benefit.color}-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1`}>
                        <span className={`text-${benefit.color}-400 text-xs`}>{benefit.metric}</span>
                      </div>
                      <div>
                        <h4 className="text-white/90 font-medium mb-2">{benefit.title}</h4>
                        <p className="text-white/70 text-sm font-light">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </motion.div>
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20 bg-[#0A0F08] border-t border-white/10">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-space-mono text-3xl md:text-4xl font-light text-white/90 tracking-tighter mb-8">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-white/70 font-light text-lg mb-12">
              Discover how stratospheric intelligence can revolutionize your industry with unprecedented insights and real-time monitoring capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={openCalendly}
                className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/50 rounded-full text-white hover:text-white transition-all font-medium"
              >
                Schedule a Demo
              </button>
              <Link href="/">
                <button className="px-8 py-4 border border-white/30 hover:border-white/50 rounded-full text-white/90 hover:text-white transition-all font-medium">
                  Back to Home
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer footerTranslations={{
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
      }} />
    </div>
  );
}
