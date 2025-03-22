"use client";

import { motion } from "framer-motion";
import { Dictionary } from "../_dictionaries";

interface WhatSectionProps {
  whatTranslations: Dictionary["what"];
}

export function WhatSection({ whatTranslations }: WhatSectionProps) {
  return (
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
            {whatTranslations.title}
          </h2>
          <div className="text-white/50 font-light space-y-8 mb-16 text-justify">
            <p>{whatTranslations.paragraph1}</p>
            <p>{whatTranslations.paragraph2}</p>
          </div>
          <div className="relative flex items-center justify-center mb-16">
            <div className="absolute w-full border-t border-white/10"></div>
            <span className="font-editorial relative px-4 bg-[#0A0F08] text-white/60 text-lg font-light">
              {whatTranslations.byTheNumbers}
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {whatTranslations.stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <h3 className="font-editorial text-3xl md:text-4xl font-light text-white/80 tracking-tighter mb-4">
                  {stat.value}
                </h3>
                <p className="text-white/50 font-light">{stat.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
