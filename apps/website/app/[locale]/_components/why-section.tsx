"use client";

import { motion } from "framer-motion";
import { Dictionary } from "../_dictionaries";

interface WhySectionProps {
  whyTranslations: Dictionary["why"];
}

export function WhySection({ whyTranslations }: WhySectionProps) {
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
          <h2 className="font-editorial text-3xl md:text-5xl font-light text-white/80 tracking-tighter mb-12 text-center">
            {whyTranslations.title}
          </h2>
          <div className="text-white/50 font-light space-y-8 mb-16 text-justify">
            <p>{whyTranslations.paragraph1}</p>
            <p>{whyTranslations.paragraph2}</p>
          </div>
          <div className="relative flex items-center justify-center mb-16">
            <div className="absolute w-full border-t border-white/10"></div>
            <span className="font-editorial relative px-4 bg-[#0A0F08] text-white/60 text-lg font-light">
              {whyTranslations.whoWeServe}
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xl text-white/40">🌾</span>
              <span className="text-white/60 font-light">
                {whyTranslations.serveItems.farmers}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl text-white/40">🏢</span>
              <span className="text-white/60 font-light">
                {whyTranslations.serveItems.agribusinesses}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl text-white/40">🔍</span>
              <span className="text-white/60 font-light">
                {whyTranslations.serveItems.insurance}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl text-white/40">🏛️</span>
              <span className="text-white/60 font-light">
                {whyTranslations.serveItems.government}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl text-white/40">🔬</span>
              <span className="text-white/60 font-light">
                {whyTranslations.serveItems.research}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl text-white/40">📊</span>
              <span className="text-white/60 font-light">
                {whyTranslations.serveItems.consultants}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
