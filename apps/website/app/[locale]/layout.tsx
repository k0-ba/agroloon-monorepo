import { LandingPageContextProvider } from "./_components/context-provider";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <LandingPageContextProvider>{children}</LandingPageContextProvider>;
}
