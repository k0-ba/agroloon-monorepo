import { PosthogProvider } from "@/components/posthog-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from '@vercel/analytics/next';
import { Header } from "@/components/header";
import { Space_Mono } from "next/font/google";
import Script from "next/script";

import "./globals.css";

const spaceMono = Space_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--space-mono",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="apollo-tracker" strategy="afterInteractive">
          {`
            function initApollo(){var n=Math.random().toString(36).substring(7),o=document.createElement("script");
            o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0,
            o.onload=function(){window.trackingFunctions.onLoad({appId:"686f9fceb47c1d0011f98726"})},
            document.head.appendChild(o)}initApollo();
          `}
        </Script>
      </head>
      <body className={`${spaceMono.variable} antialiased`}>
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

        <Analytics />
      </body>
    </html>
  );
}

export { metadata } from "./metadata";
