import { PosthogProvider } from "@/components/posthog-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from '@vercel/analytics/next';
import { Header } from "@/components/header";
import { Space_Mono } from "next/font/google";

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
