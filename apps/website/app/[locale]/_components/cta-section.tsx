"use client";

import { useLandingPageContext } from "../_components/context-provider";
import { Dictionary } from "../_dictionaries";
import { Balancer } from "react-wrap-balancer"

interface CTASectionProps {
  ctaTranslations: Dictionary["cta"];
}

export function CTASection({ ctaTranslations }: CTASectionProps) {
  const { openCalendly } = useLandingPageContext();

  return (
    <section className="py-32">
      <div className="container mx-auto px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-space-mono text-3xl md:text-5xl text-white/80 tracking-tighter mb-8">
            <Balancer>
            {ctaTranslations.title}
            </Balancer>
          </h2>
          <p className="text-white/70 font-light text-base mb-12">
            {ctaTranslations.description}
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            {/* <Link
              href="mailto:info@agroloon.com"
              className="px-8 py-4 bg-white/10 hover:bg-white/15 border border-white/20 rounded-full text-white/90 hover:text-white transition-all w-full md:w-auto text-center"
            >
              {ctaTranslations.getStarted}
            </Link> */}
            <button
              onClick={openCalendly}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 rounded-full text-white hover:text-white transition-all w-full md:w-auto text-center font-medium"
            >
              {ctaTranslations.schedule}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
