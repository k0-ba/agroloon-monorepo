"use client";

import { ScrollingGallery } from "@/components/scrolling-gallery";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const topLayerImages = [
  {
    src: "/upper-lake-tisza-scenic-view.jpg",
    alt: "A breathtaking view of Lake Tisza with expansive, shimmering waters capturing its natural beauty",
    note: "A stunning view of Lake Tisza with shimmering waters",
  },
  {
    src: "/upper-infrared-water-mapping.jpg",
    alt: "An infrared image that clearly distinguishes water bodies from the surrounding landscape",
    note: "Infrared imaging highlights water bodies distinctly",
  },
  {
    src: "/upper-ndvi-visualization.jpg",
    alt: "A data-driven visualization emphasizing the Normalized Difference Vegetation Index (NDVI) for assessing vegetation vigor",
    note: "Visualizes NDVI to assess vegetation health",
  },
  {
    src: "/upper-cloud-identification.jpg",
    alt: "A focused depiction of cloud formations, making it easy to identify individual clouds",
    note: "Shows distinct cloud formations clearly",
  },
  {
    src: "/upper-cloud-map-clarification.jpg",
    alt: "A composite image using cloud mapping overlays to refine NDVI and other analyses for accurate data interpretation",
    note: "Cloud maps refine NDVI and other data",
  },
  {
    src: "/upper-false-color-analysis.jpg",
    alt: "A vibrant false-colored image that enhances visual differences in the data for clearer analysis",
    note: "False-color imagery enhances data contrast",
  },
  {
    src: "/upper-grvi-vegetation-health.jpg",
    alt: "An analytical view that compares green and red spectral bands via GRVI to provide detailed insights into vegetation health",
    note: "GRVI compares green and red bands for vegetation health",
  },
];

const bottomLayerImages = [
  {
    src: "/lower-villages-north-heves.jpg",
    alt: "An image showing three small villages located north of the town of Heves, highlighting their spatial layout and surrounding landscape",
    note: "3 small villages north of Heves",
  },
  {
    src: "/lower-nir-road-network.jpg",
    alt: "An image captured in the near-infrared spectrum of the same area, clearly showing the road network and infrastructure details",
    note: "NIR spectrum reveals the road network",
  },
  {
    src: "/lower-ndvi-visualization.jpg",
    alt: "A data-driven visualization emphasizing the Normalized Difference Vegetation Index (NDVI) for assessing vegetation vigor",
    note: "Visualizes NDVI to assess vegetation health",
  },
  {
    src: "/lower-cloud-identification.jpg",
    alt: "A focused depiction of cloud formations, making it easy to identify individual clouds",
    note: "Shows distinct cloud formations clearly",
  },
  {
    src: "/lower-cloud-map-clarification.jpg",
    alt: "A composite image using cloud mapping overlays to refine NDVI and other analyses for accurate data interpretation",
    note: "Cloud maps refine NDVI and other data",
  },
  {
    src: "/lower-false-color-analysis.jpg",
    alt: "A vibrant false-colored image that enhances visual differences in the data for clearer analysis",
    note: "False-color imagery enhances data contrast",
  },
  {
    src: "/lower-grvi-vegetation-health.jpg",
    alt: "An analytical view that compares green and red spectral bands via GRVI to provide detailed insights into vegetation health",
    note: "GRVI compares green and red bands for vegetation health",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0F08] text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-end overflow-hidden pb-20">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            src="/ascending-drone-footage.mp4"
            poster="/placeholder.svg?height=1080&width=1920"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/80" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <h1 className="font-editorial text-3xl md:text-5xl lg:text-6xl font-light text-white/90 tracking-tighter mb-12 w-full">
              High Resolution from the Stratosphere
            </h1>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              <p className="text-sm md:text-base text-white/50 font-light max-w-2xl">
                We are developing a new generation of high-altitude balloon
                technology for observations, supporting farmers'
                decision-making, and enhancing agricultural predictability.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <Link
                  href="#contact"
                  className="px-8 py-4 border border-white/20 rounded-full text-white/70 hover:bg-white/5 hover:text-white/90 transition-all text-center"
                >
                  Contact Us
                </Link>
                <Link
                  href="#why"
                  className="px-8 py-4 bg-white/10 hover:bg-white/15 border border-white/20 rounded-full text-white/90 hover:text-white transition-all text-center"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
          <ChevronDown className="h-6 w-6 text-white/40" />
        </div>
      </section>

      {/* Why Section */}
      <section className="py-32 bg-[#0A0F08]" id="why">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-editorial text-3xl md:text-5xl font-light text-white/80 tracking-tighter mb-12 text-center">
              Why Agroloon?
            </h2>
            <div className="text-white/50 font-light space-y-8 mb-16">
              <p>
                Agroloon aims to revolutionize agricultural forecasting by
                developing a new generation of high-altitude balloon technology.
                This innovation supports farmers' decision-making and enhances
                agricultural predictability by providing high-resolution images
                from the stratosphere.
              </p>
              <p>
                Our system enables the detection of the smallest differences in
                fields on an hourly basis, leading to effective damage
                assessment and yield prediction. By providing unprecedented
                visibility into crop health and field conditions, we empower
                agricultural stakeholders to make data-driven decisions that
                optimize yield and reduce waste.
              </p>
            </div>

            <div className="relative flex items-center justify-center mb-16">
              <div className="absolute w-full border-t border-white/10"></div>
              <span className="font-editorial relative px-4 bg-[#0A0F08] text-white/60 text-lg font-light">
                who we serve
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6">
              <div className="flex items-center gap-3">
                <span className="text-xl text-white/40">🌾</span>
                <span className="text-white/60 font-light">Farmers</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl text-white/40">🏢</span>
                <span className="text-white/60 font-light">Agribusinesses</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl text-white/40">🔍</span>
                <span className="text-white/60 font-light">
                  Insurance Companies
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl text-white/40">🏛️</span>
                <span className="text-white/60 font-light">
                  Government Agencies
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl text-white/40">🔬</span>
                <span className="text-white/60 font-light">
                  Research Institutions
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl text-white/40">📊</span>
                <span className="text-white/60 font-light">
                  Agricultural Consultants
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scrolling Image Layers */}
      <div className="py-16 overflow-hidden">
        <ScrollingGallery
          images={topLayerImages}
          direction="left"
          speed={0.5}
          notePosition="top"
          className="mb-8"
        />
        <ScrollingGallery
          images={bottomLayerImages}
          direction="right"
          speed={0.3}
          notePosition="bottom"
        />
      </div>

      {/* What Section */}
      <section className="py-32 bg-[#0A0F08]" id="what">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-editorial text-3xl md:text-5xl font-light text-white/80 tracking-tighter mb-12 text-center">
              What We Offer
            </h2>
            <div className="text-white/50 font-light space-y-8 mb-16">
              <p>
                Agroloon offers a high-altitude balloon system capable of
                monitoring the state of agricultural fields. The system provides
                ultra-high-resolution images with a resolution of 5x5 cm, which
                is approximately 600% higher quality than average satellite
                images.
              </p>
              <p>
                This allows for the detection of minor variations in fields on
                an hourly basis, facilitating effective damage assessment and
                yield prediction. Moreover, Agroloon's service is
                cost-effective, offering data at less than half the price of
                existing methods while delivering more accurate data 24/7.
              </p>
            </div>

            <div className="relative flex items-center justify-center mb-16">
              <div className="absolute w-full border-t border-white/10"></div>
              <span className="font-editorial relative px-4 bg-[#0A0F08] text-white/60 text-lg font-light">
                by the numbers
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center text-center">
                <h3 className="font-editorial text-3xl md:text-4xl font-light text-white/80 tracking-tighter mb-4">
                  600%
                </h3>
                <p className="text-white/50 font-light">
                  Higher quality than average satellite imagery
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <h3 className="font-editorial text-3xl md:text-4xl font-light text-white/80 tracking-tighter mb-4">
                  5×5 cm
                </h3>
                <p className="text-white/50 font-light">
                  Ultra-high precision imaging resolution
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <h3 className="font-editorial text-3xl md:text-4xl font-light text-white/80 tracking-tighter mb-4">
                  50%
                </h3>
                <p className="text-white/50 font-light">
                  Lower cost than existing monitoring methods
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="container mx-auto px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-editorial text-3xl md:text-5xl text-white/80 tracking-tighter mb-8">
              Ready to Transform Your Agricultural Insights?
            </h2>
            <p className="text-white/50 font-light text-base mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              molestie purus vitae lacus auctor consequat vel at ante. Sed sit
              amet sapien gravida, interdum tortor nec, ullamcorper diam.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Link
                href="mailto:info@agroloon.com"
                className="px-8 py-4 bg-white/10 hover:bg-white/15 border border-white/20 rounded-full text-white/90 hover:text-white transition-all w-full md:w-auto text-center"
              >
                Get Started
              </Link>
              <Link
                href="https://agroloon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-white/20 rounded-full text-white/70 hover:bg-white/5 hover:text-white/90 transition-all w-full md:w-auto text-center"
              >
                Schedule a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#070B06] border-t border-white/10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start mb-16">
            <div className="mb-8 md:mb-0">
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                <h3 className="font-editorial text-2xl font-light text-white/80 tracking-tighter">
                  agroloon
                </h3>
                <p className="text-white/40 text-sm">
                  © {new Date().getFullYear()} All rights reserved.
                </p>
              </div>
            </div>
            <div>
              <p className="text-white/40 text-base font-light">
                High Resolution from the Stratosphere
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-editorial text-xl font-light text-white/80 mb-4">
                Solutions
              </h4>
              <ul className="space-y-2 text-white/50 text-base">
                <li>
                  <Link
                    href="#"
                    className="font-light hover:text-white/70 transition-colors"
                  >
                    Field Monitoring
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="font-light hover:text-white/70 transition-colors"
                  >
                    Yield Prediction
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="font-light hover:text-white/70 transition-colors"
                  >
                    Damage Assessment
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="font-light hover:text-white/70 transition-colors"
                  >
                    Precision Farming
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-editorial text-xl font-light text-white/80 mb-4">
                For
              </h4>
              <ul className="space-y-2 text-white/50 text-base">
                <li>
                  <Link
                    href="#"
                    className="font-light hover:text-white/70 transition-colors"
                  >
                    Farmers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="font-light hover:text-white/70 transition-colors"
                  >
                    Agribusinesses
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="font-light hover:text-white/70 transition-colors"
                  >
                    Insurance Companies
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="font-light hover:text-white/70 transition-colors"
                  >
                    Government Agencies
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-editorial text-xl font-light text-white/80 mb-4">
                Company
              </h4>
              <ul className="space-y-2 text-white/50 text-base">
                <li>
                  <Link
                    href="#"
                    className="font-light hover:text-white/70 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="font-light hover:text-white/70 transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="font-light hover:text-white/70 transition-colors"
                  >
                    News
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="font-light hover:text-white/70 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-editorial text-xl font-light text-white/80 mb-4">
                Resources
              </h4>
              <ul className="space-y-2 text-white/50 text-base">
                <li>
                  <Link
                    href="#"
                    className="font-light hover:text-white/70 transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="font-light hover:text-white/70 transition-colors"
                  >
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="font-light hover:text-white/70 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="font-light hover:text-white/70 transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
            <div className="flex gap-6 text-white/40 text-sm mb-4 md:mb-0">
              <Link
                href="#"
                className="font-light hover:text-white/60 transition-colors"
              >
                Twitter
              </Link>
              <Link
                href="#"
                className="font-light hover:text-white/60 transition-colors"
              >
                LinkedIn
              </Link>
              <Link
                href="#"
                className="font-light hover:text-white/60 transition-colors"
              >
                Instagram
              </Link>
              <Link
                href="#"
                className="font-light hover:text-white/60 transition-colors"
              >
                YouTube
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="mailto:info@agroloon.com"
                className="font-light text-white/40 text-sm hover:text-white/60 transition-colors"
              >
                info@agroloon.com
              </Link>
              <Link
                href="https://agroloon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-light text-white/40 text-sm hover:text-white/60 transition-colors"
              >
                agroloon.com
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
