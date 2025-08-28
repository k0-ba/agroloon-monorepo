"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLandingPageContext } from "@/app/[locale]/_components/context-provider";
import { Menu, X, ChevronDown } from "lucide-react";

type UseCase = {
  id: string;
  title: string;
  subtitle: string;
  emoji: string;
  description: string;
  problem: unknown;
  solution: unknown;
  benefits: unknown;
};

interface HeaderProps {
  scheduleText: string;
  solutionsText: string;
  useCases?: UseCase[];
  selectedUseCase?: string;
  onUseCaseChange?: (useCaseId: string) => void;
}

export function Header({ scheduleText, solutionsText, useCases, selectedUseCase, onUseCaseChange }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUseCaseDropdownOpen, setIsUseCaseDropdownOpen] = useState(false);
  const { openCalendly } = useLandingPageContext();

  const isOnSolutionsPage = useCases && selectedUseCase && onUseCaseChange;
  const currentUseCase = useCases?.find(uc => uc.id === selectedUseCase);
  
  // Get short version of title for space efficiency
  const getShortTitle = (title: string) => {
    const shortTitles: Record<string, string> = {
      "Agriculture & Farming": "Agriculture",
      "Insurance Providers": "Insurance",
      "Emergency Management": "Emergency",
      "Environmental Protection & Forestry": "Environmental",
      "Infrastructure Monitoring": "Infrastructure",
      "Security & Border Monitoring": "Security",
      "Government Agencies": "Government",
      "Research Institutions": "Research"
    };
    return shortTitles[title] || title.split(' ')[0];
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isUseCaseDropdownOpen) {
        const target = event.target as Element;
        if (!target.closest('.use-case-dropdown')) {
          setIsUseCaseDropdownOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isUseCaseDropdownOpen]);

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
            {isOnSolutionsPage && currentUseCase ? (
              /* Use Case Dropdown for Solutions Page */
              <div className="relative use-case-dropdown">
                <button
                  onClick={() => setIsUseCaseDropdownOpen(!isUseCaseDropdownOpen)}
                  className="px-4 py-2 border border-white/20 hover:border-white/40 rounded-full text-white/80 hover:text-white transition-all text-sm font-space-mono font-light flex items-center gap-2"
                >
                  <span>{currentUseCase.emoji}</span>
                  <span className="max-w-32 truncate">{getShortTitle(currentUseCase.title)}</span>
                  <ChevronDown className={`h-3 w-3 transition-transform ${isUseCaseDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isUseCaseDropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-[#0A0F08]/95 backdrop-blur-md border border-white/10 rounded-lg shadow-lg z-50">
                    <div className="p-2 max-h-80 overflow-y-auto">
                      {useCases?.map((useCase) => (
                        <button
                          key={useCase.id}
                          onClick={() => {
                            onUseCaseChange?.(useCase.id);
                            setIsUseCaseDropdownOpen(false);
                          }}
                          className={`w-full flex items-center gap-3 px-3 py-2 rounded-md transition-all text-left text-sm ${
                            selectedUseCase === useCase.id
                              ? "bg-white/20 text-white"
                              : "text-white/70 hover:bg-white/10 hover:text-white"
                          }`}
                        >
                          <span className="text-base">{useCase.emoji}</span>
                          <span className="font-space-mono font-light">{getShortTitle(useCase.title)}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* Regular Solutions Link */
              <Link href="/solutions">
                <button
                  className="px-4 py-2 border border-white/20 hover:border-white/40 rounded-full text-white/80 hover:text-white transition-all text-sm font-space-mono font-light"
                >
                  {solutionsText}
                </button>
              </Link>
            )}
            
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
              {isOnSolutionsPage && useCases ? (
                /* Use Case Selector for Mobile */
                <div className="space-y-2">
                  <div className="text-white/60 text-xs font-space-mono font-light text-center mb-2">Select Industry:</div>
                  {useCases.map((useCase) => (
                    <button
                      key={useCase.id}
                      onClick={() => {
                        onUseCaseChange?.(useCase.id);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-full transition-all text-sm font-space-mono font-light ${
                        selectedUseCase === useCase.id
                          ? "bg-white/20 border border-white/40 text-white"
                          : "border border-white/20 hover:border-white/40 text-white/80 hover:text-white"
                      }`}
                    >
                      <span>{useCase.emoji}</span>
                      <span className="truncate">{getShortTitle(useCase.title)}</span>
                    </button>
                  ))}
                </div>
              ) : (
                /* Regular Solutions Link */
                <Link href="/solutions">
                  <button
                    className="px-4 py-3 border border-white/20 hover:border-white/40 rounded-full text-white/80 hover:text-white transition-all text-sm font-space-mono font-light w-full text-center"
                  >
                    {solutionsText}
                  </button>
                </Link>
              )}
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
