"use client";

import Link from "next/link";
import { Dictionary } from "../_dictionaries";
import Image from "next/image";

interface FooterProps {
  footerTranslations: Dictionary["footer"];
}

function FooterNav({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="font-editorial text-xl font-light text-white/80 mb-4">
        {title}
      </h4>
      <ul className="space-y-2 text-white/50 text-base">
        {links.map((link, idx) => (
          <li key={idx}>
            <Link
              href={link.href}
              className="font-light hover:text-white/70 transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer({ footerTranslations }: FooterProps) {
  const companyLinks = [
    { label: footerTranslations.company.aboutUs, href: "/about-us" },
    { label: footerTranslations.company.careers, href: "/careers" },
    { label: footerTranslations.company.news, href: "/news" },
    { label: footerTranslations.company.contact, href: "/contact" },
  ];

  const solutionsLinks = [
    {
      label: footerTranslations.solutions.fieldMonitoring,
      href: "/field-monitoring",
    },
    {
      label: footerTranslations.solutions.yieldPrediction,
      href: "/yield-prediction",
    },
    {
      label: footerTranslations.solutions.damageAssessment,
      href: "/damage-assessment",
    },
    {
      label: footerTranslations.solutions.precisionFarming,
      href: "/precision-farming",
    },
  ];

  const forLinks = [
    { label: footerTranslations.for.farmers, href: "/farmers" },
    { label: footerTranslations.for.agribusinesses, href: "/agribusinesses" },
    { label: footerTranslations.for.insuranceCompanies, href: "/insurance" },
    { label: footerTranslations.for.governmentAgencies, href: "/government" },
  ];

  const resourcesLinks = [
    { label: footerTranslations.resources.blog, href: "/blog" },
    { label: footerTranslations.resources.caseStudies, href: "/case-studies" },
    {
      label: footerTranslations.resources.privacyPolicy,
      href: "/privacy-policy",
    },
    {
      label: footerTranslations.resources.termsOfService,
      href: "/terms-of-service",
    },
  ];

  const socialLinks = [
    { label: "Twitter", href: "https://twitter.com" },
    { label: "Linked In", href: "https://linkedin.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Youtube", href: "https://youtube.com" },
  ];

  return (
    <footer className="py-12 bg-[#070B06] border-t border-white/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          <div className="mb-8 md:mb-0">
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
              <Image
                src="/agroloon.svg"
                alt="agroloon logo"
                width={90}
                height={30}
              />
              <p className="text-white/40 text-sm">
                © {new Date().getFullYear()} All rights reserved.
              </p>
            </div>
          </div>
          <div>
            <p className="text-white/40 text-base font-light">
              {footerTranslations.slogan}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <FooterNav
            title={footerTranslations.solutions.header}
            links={solutionsLinks}
          />
          <FooterNav title={footerTranslations.for.header} links={forLinks} />
          <FooterNav
            title={footerTranslations.company.header}
            links={companyLinks}
          />
          <FooterNav
            title={footerTranslations.resources.header}
            links={resourcesLinks}
          />
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <div className="flex gap-6 text-white/40 text-sm mb-4 md:mb-0">
            {socialLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="font-light hover:text-white/60 transition-colors"
              >
                {link.label}
              </Link>
            ))}
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
  );
}
