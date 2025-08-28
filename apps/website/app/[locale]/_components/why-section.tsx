"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { Dictionary } from "../_dictionaries";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface WhySectionProps {
  whyTranslations: Dictionary["why"];
}

export function WhySection({ whyTranslations }: WhySectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-32 bg-[#0A0F08]" id="why">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="font-space-mono text-3xl md:text-5xl font-light text-white/80 tracking-tighter mb-12 text-center">
            {whyTranslations.title}
          </h2>
          <div className="text-white/70 font-light mb-16 text-justify">
            {/* First paragraph - always visible */}
            <p className="mb-8">{whyTranslations.paragraph1}</p>
            
            {!isExpanded ? (
              // Phase 1: Collapsed state
              <>
                {/* Preview with gradient fade effect */}
                <div className="relative mb-6">
                  <p className="text-white/70">
                    {whyTranslations.paragraph2.split('.').slice(0, 2).join('.')}...
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#0A0F08] to-transparent pointer-events-none"></div>
                </div>
                
                {/* Read more button */}
                <div className="flex justify-end">
                  <button
                    onClick={() => setIsExpanded(true)}
                    className="flex items-center gap-2 text-white/60 hover:text-white/80 font-light py-4 transition-colors"
                  >
                    {whyTranslations.readMore}
                    <ChevronDown className="h-4 w-4 transition-transform duration-200" />
                  </button>
                </div>
              </>
            ) : (
              // Phase 2: Expanded state
              <>
                {/* All paragraphs without fade */}
                <div className="space-y-6 mb-6">
                  <p>{whyTranslations.paragraph2}</p>
                  <p>{whyTranslations.paragraph3}</p>
                  <p>{whyTranslations.paragraph4}</p>
                </div>
                
                {/* Read less button at the bottom */}
                <div className="flex justify-end">
                  <button
                    onClick={() => setIsExpanded(false)}
                    className="flex items-center gap-2 text-white/60 hover:text-white/80 font-light py-4 transition-colors"
                  >
                    {whyTranslations.readLess}
                    <ChevronDown className="h-4 w-4 transition-transform duration-200 rotate-180" />
                  </button>
                </div>
              </>
            )}
          </div>
          <div className="relative flex items-center justify-center mb-16">
            <div className="absolute w-full border-t border-white/10"></div>
            <span className="font-space-mono relative px-4 bg-[#0A0F08] text-white/60 text-lg font-light">
              {whyTranslations.whoWeServe}
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/solutions#agriculture" className="flex flex-col items-start gap-1 p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg transition-all group text-left">
              <div className="flex items-center justify-between w-full">
                <span className="text-white/60 group-hover:text-white/80 font-space-mono font-light transition-colors text-sm">
                  {whyTranslations.serveItems.agriculture}
                </span>
                <span className="text-lg text-white/40 group-hover:text-white/60 transition-colors ml-2">🌾</span>
              </div>
              <span className="text-[11px] text-white/40 group-hover:text-white/50 transition-colors font-light">
                {whyTranslations.serveItems.agriculturalDesc}
              </span>
            </Link>
            <Link href="/solutions#insurance" className="flex flex-col items-start gap-1 p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg transition-all group text-left">
              <div className="flex items-center justify-between w-full">
                <span className="text-white/60 group-hover:text-white/80 font-space-mono font-light transition-colors text-sm">
                  {whyTranslations.serveItems.insurance}
                </span>
                <span className="text-lg text-white/40 group-hover:text-white/60 transition-colors ml-2">🛡️</span>
              </div>
              <span className="text-[11px] text-white/40 group-hover:text-white/50 transition-colors font-light">
                {whyTranslations.serveItems.insuranceDesc}
              </span>
            </Link>
            <Link href="/solutions#emergency" className="flex flex-col items-start gap-1 p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg transition-all group text-left">
              <div className="flex items-center justify-between w-full">
                <span className="text-white/60 group-hover:text-white/80 font-space-mono font-light transition-colors text-sm">
                  {whyTranslations.serveItems.emergency}
                </span>
                <span className="text-lg text-white/40 group-hover:text-white/60 transition-colors ml-2">🚨</span>
              </div>
              <span className="text-[11px] text-white/40 group-hover:text-white/50 transition-colors font-light">
                {whyTranslations.serveItems.emergencyDesc}
              </span>
            </Link>
            <Link href="/solutions#forestry" className="flex flex-col items-start gap-1 p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg transition-all group text-left">
              <div className="flex items-center justify-between w-full">
                <span className="text-white/60 group-hover:text-white/80 font-space-mono font-light transition-colors text-sm">
                  {whyTranslations.serveItems.forestry}
                </span>
                <span className="text-lg text-white/40 group-hover:text-white/60 transition-colors ml-2">🌲</span>
              </div>
              <span className="text-[11px] text-white/40 group-hover:text-white/50 transition-colors font-light">
                {whyTranslations.serveItems.forestryDesc}
              </span>
            </Link>
            <Link href="/solutions#infrastructure" className="flex flex-col items-start gap-1 p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg transition-all group text-left">
              <div className="flex items-center justify-between w-full">
                <span className="text-white/60 group-hover:text-white/80 font-space-mono font-light transition-colors text-sm">
                  {whyTranslations.serveItems.infrastructure}
                </span>
                <span className="text-lg text-white/40 group-hover:text-white/60 transition-colors ml-2">🏗️</span>
              </div>
              <span className="text-[11px] text-white/40 group-hover:text-white/50 transition-colors font-light">
                {whyTranslations.serveItems.infrastructureDesc}
              </span>
            </Link>
            <Link href="/solutions#security" className="flex flex-col items-start gap-1 p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg transition-all group text-left">
              <div className="flex items-center justify-between w-full">
                <span className="text-white/60 group-hover:text-white/80 font-space-mono font-light transition-colors text-sm">
                  {whyTranslations.serveItems.security}
                </span>
                <span className="text-lg text-white/40 group-hover:text-white/60 transition-colors ml-2">🔒</span>
              </div>
              <span className="text-[11px] text-white/40 group-hover:text-white/50 transition-colors font-light">
                {whyTranslations.serveItems.securityDesc}
              </span>
            </Link>
            <Link href="/solutions#government" className="flex flex-col items-start gap-1 p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg transition-all group text-left">
              <div className="flex items-center justify-between w-full">
                <span className="text-white/60 group-hover:text-white/80 font-space-mono font-light transition-colors text-sm">
                  {whyTranslations.serveItems.government}
                </span>
                <span className="text-lg text-white/40 group-hover:text-white/60 transition-colors ml-2">🏛️</span>
              </div>
              <span className="text-[11px] text-white/40 group-hover:text-white/50 transition-colors font-light">
                {whyTranslations.serveItems.governmentDesc}
              </span>
            </Link>
            <Link href="/solutions#research" className="flex flex-col items-start gap-1 p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg transition-all group text-left">
              <div className="flex items-center justify-between w-full">
                <span className="text-white/60 group-hover:text-white/80 font-space-mono font-light transition-colors text-sm">
                  {whyTranslations.serveItems.research}
                </span>
                <span className="text-lg text-white/40 group-hover:text-white/60 transition-colors ml-2">🔬</span>
              </div>
              <span className="text-[11px] text-white/40 group-hover:text-white/50 transition-colors font-light">
                {whyTranslations.serveItems.researchDesc}
              </span>
            </Link>
          </div>
          <div className="flex justify-center mt-12">
            <Link href="/solutions">
              <button className="px-8 py-4 border border-white/30 hover:border-white/50 rounded-full text-white/90 hover:text-white transition-all font-medium">
                {whyTranslations.solutions}
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
