import { PosthogProvider } from "@/components/posthog-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import localFont from "next/font/local";

import "./globals.css";

const editorialNewUltralightItalic = localFont({
  src: "../fonts/editorial-new-ultralight-italic.ttf",
  variable: "--editorial-new-ultralight-italic",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${editorialNewUltralightItalic.variable} antialiased`}>
        <PosthogProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />

            <main>{children}</main>
          </ThemeProvider>
        </PosthogProvider>
      </body>
    </html>
  );
}

export { metadata } from "./metadata";
