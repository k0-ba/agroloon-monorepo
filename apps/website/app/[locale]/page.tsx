import { loadAndGetCorrectDictionary, Locale } from "@/utils/i18n";

import { dictionaries } from "./_dictionaries";
import { HeroSection } from "./_components/hero-section";
import { WhySection } from "./_components/why-section";
import { GallerySection } from "./_components/gallery-section";
import { WhatSection } from "./_components/what-section";
import { CTASection } from "./_components/cta-section";
import { Footer } from "./_components/footer";

export default async function LandingPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  const dictionary = await loadAndGetCorrectDictionary(locale, dictionaries);

  return (
    <div className="min-h-screen bg-[#0A0F08] text-white">
      <HeroSection heroTranslations={dictionary.hero} />
      <WhySection whyTranslations={dictionary.why} />
      <GallerySection locale={locale} />
      <WhatSection whatTranslations={dictionary.what} />
      <CTASection ctaTranslations={dictionary.cta} />
      <Footer footerTranslations={dictionary.footer} />
    </div>
  );
}
