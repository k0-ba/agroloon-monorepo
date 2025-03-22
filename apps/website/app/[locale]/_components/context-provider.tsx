"use client";

import { createContext, useContext, useRef, useState, ReactNode } from "react";
import { PopupModal } from "react-calendly";

interface LandingPageContextValue {
  isCalendlyOpen: boolean;
  openCalendly: () => void;
  closeCalendly: () => void;
  rootRef: React.RefObject<HTMLDivElement>;
}

const LandingPageContext = createContext<LandingPageContextValue | undefined>(
  undefined
);

export function LandingPageContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isCalendlyOpen, setCalendlyOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const openCalendly = () => setCalendlyOpen(true);
  const closeCalendly = () => setCalendlyOpen(false);

  return (
    <LandingPageContext.Provider
      value={{ isCalendlyOpen, openCalendly, closeCalendly, rootRef }}
    >
      <div ref={rootRef}>
        {children}
        {rootRef.current && (
          <PopupModal
            url={process.env.NEXT_PUBLIC_CALENDLY_URL as string}
            onModalClose={closeCalendly}
            open={isCalendlyOpen}
            rootElement={rootRef.current}
          />
        )}
      </div>
    </LandingPageContext.Provider>
  );
}

export function useLandingPageContext() {
  const context = useContext(LandingPageContext);
  if (!context) {
    throw new Error(
      "useLandingPageContext must be used within a LandingPageContextProvider"
    );
  }
  return context;
}
