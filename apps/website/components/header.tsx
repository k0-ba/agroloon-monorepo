"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLandingPageContext } from "@/app/[locale]/_components/context-provider";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  scheduleText: string;
  solutionsText: string;
}

export function Header({ scheduleText, solutionsText }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openCalendly } = useLandingPageContext();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScheduleClick = () => {
    openCalendly();
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-6 ${
        isScrolled ? "bg-[#0A0F08]/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/agroloon.svg"
              alt="Agroloon"
              width={120}
              height={40}
            />
          </Link>
          
          {/* Desktop CTAs that fade in when scrolling */}
          <div 
            className={`hidden md:flex items-center gap-4 transition-all duration-500 ${
              isScrolled 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-2 pointer-events-none"
            }`}
          >
            <button
              className="px-4 py-2 border border-white/20 hover:border-white/40 rounded-full text-white/80 hover:text-white transition-all text-sm font-space-mono font-light"
            >
              {solutionsText}
            </button>
            <button
              onClick={openCalendly}
              className="px-6 py-2 bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/50 rounded-full text-white hover:text-white transition-all text-sm font-space-mono font-light"
            >
              {scheduleText}
            </button>
          </div>

          {/* Mobile hamburger menu */}
          <div 
            className={`md:hidden transition-all duration-500 ${
              isScrolled 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-2 pointer-events-none"
            }`}
          >
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-white/80 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X size={20} />
              ) : (
                <Menu size={20} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {isMobileMenuOpen && isScrolled && (
          <div className="md:hidden mt-4 p-4 bg-[#0A0F08]/95 backdrop-blur-md rounded-lg border border-white/10">
            <div className="flex flex-col gap-3">
              <button
                className="px-4 py-3 border border-white/20 hover:border-white/40 rounded-full text-white/80 hover:text-white transition-all text-sm font-space-mono font-light w-full text-center"
              >
                {solutionsText}
              </button>
              <button
                onClick={handleScheduleClick}
                className="px-4 py-3 bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/50 rounded-full text-white hover:text-white transition-all text-sm font-space-mono font-light w-full text-center"
              >
                {scheduleText}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
