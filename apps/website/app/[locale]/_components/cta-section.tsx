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
        <div className="max-w-3xl mx-auto">
          <h2 className="font-space-mono text-3xl md:text-5xl text-white/80 tracking-tighter mb-8 text-center">
            <Balancer>
            {ctaTranslations.title}
            </Balancer>
          </h2>
          <div className="max-w-2xl mx-auto text-white/70 font-light text-base mb-12 space-y-4">
            <p className="text-justify font-semibold">
              Discover the power of stratospheric intelligence.
            </p>
            <p className="text-justify">
              With Agroloon&apos;s advanced high-altitude imaging solutions, gain unprecedented insights that transform your operations across diverse sectors.
            </p>
          </div>
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
