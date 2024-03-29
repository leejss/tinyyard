import "@/styles/globals.css";
import PageLayout from "@/components/PageLayout";
import { Analytics } from "@vercel/analytics/react";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import { ThemeProvider } from "@/components/ThemeProvider";
import LenisProvider from "@/components/LenisProvider";
export const metadata = {
  title: "tinyyard",
  description: "tinyyard is tinyyard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="antialiased overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LenisProvider>
            <PageLayout>{children}</PageLayout>
          </LenisProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
