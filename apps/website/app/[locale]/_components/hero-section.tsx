"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLandingPageContext } from "./context-provider";
import { Dictionary } from "../_dictionaries";


interface HeroSectionProps {
  heroTranslations: Dictionary["hero"];
}

export function HeroSection({ heroTranslations }: HeroSectionProps) {
  const { openCalendly } = useLandingPageContext();

  return (
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
          poster="/ascending-drone-first-frame.jpg"
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
            {heroTranslations.title}
          </h1>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <p className="text-sm md:text-base text-white/50 font-light max-w-2xl">
              {heroTranslations.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <button
                onClick={openCalendly}
                className="px-8 py-4 border border-white/20 rounded-full text-white/70 hover:bg-white/5 hover:text-white/90 transition-all text-center"
              >
                {heroTranslations.schedule}
              </button>
              <Link
                href="#why"
                className="px-8 py-4 bg-white/10 hover:bg-white/15 border border-white/20 rounded-full text-white/90 hover:text-white transition-all text-center"
              >
                {heroTranslations.getStarted}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <ChevronDown className="h-6 w-6 text-white/40" />
      </div>
    </section>
  );
}
