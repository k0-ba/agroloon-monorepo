"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <button className="flex items-center gap-3 p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg transition-all group">
              <span className="text-xl text-white/40 group-hover:text-white/60 transition-colors">🌾</span>
              <span className="text-white/60 group-hover:text-white/80 font-light transition-colors">
                {whyTranslations.serveItems.farmers}
              </span>
            </button>
            <button className="flex items-center gap-3 p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg transition-all group">
              <span className="text-xl text-white/40 group-hover:text-white/60 transition-colors">🏢</span>
              <span className="text-white/60 group-hover:text-white/80 font-light transition-colors">
                {whyTranslations.serveItems.agribusinesses}
              </span>
            </button>
            <button className="flex items-center gap-3 p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg transition-all group">
              <span className="text-xl text-white/40 group-hover:text-white/60 transition-colors">🔍</span>
              <span className="text-white/60 group-hover:text-white/80 font-light transition-colors">
                {whyTranslations.serveItems.insurance}
              </span>
            </button>
            <button className="flex items-center gap-3 p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg transition-all group">
              <span className="text-xl text-white/40 group-hover:text-white/60 transition-colors">🏛️</span>
              <span className="text-white/60 group-hover:text-white/80 font-light transition-colors">
                {whyTranslations.serveItems.government}
              </span>
            </button>
            <button className="flex items-center gap-3 p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg transition-all group">
              <span className="text-xl text-white/40 group-hover:text-white/60 transition-colors">🔬</span>
              <span className="text-white/60 group-hover:text-white/80 font-light transition-colors">
                {whyTranslations.serveItems.research}
              </span>
            </button>
            <button className="flex items-center gap-3 p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg transition-all group">
              <span className="text-xl text-white/40 group-hover:text-white/60 transition-colors">📊</span>
              <span className="text-white/60 group-hover:text-white/80 font-light transition-colors">
                {whyTranslations.serveItems.consultants}
              </span>
            </button>
          </div>
          <div className="flex justify-center mt-12">
            <button className="px-8 py-4 bg-white/15 hover:bg-white/25 border border-white/30 hover:border-white/50 rounded-full text-white/90 hover:text-white transition-all font-medium">
              {whyTranslations.solutions}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
