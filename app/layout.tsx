import type { Metadata } from "next";
import { Inter, Newsreader, Noto_Sans_Kannada } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import FilmStripProgress from "@/components/ui/FilmStripProgress";
import TopNavBar from "@/components/ui/TopNavBar";
import CmdKSearch from "@/components/ui/CmdKSearch";
import SimpleCursor from "@/components/ui/SimpleCursor";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-newsreader"
});
const notoSansKannada = Noto_Sans_Kannada({
  weight: ["400", "700"],
  subsets: ["kannada"],
  variable: "--font-noto-kannada"
});

export const metadata: Metadata = {
  title: "Prashanth P. | Director & Cinematographer",
  description: "The digital portfolio of Prashanth P., Founder of Ask Mysuru. Documenting Heritage, Nature, and Society.",
};

import Footer from "@/components/ui/Footer";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${newsreader.variable} ${notoSansKannada.variable} antialiased hide-scrollbar`}>
      <body suppressHydrationWarning className="bg-background text-primary selection:bg-accent/30 relative hide-scrollbar overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <SimpleCursor />
          <CmdKSearch />
          <TopNavBar />
          <SmoothScrollProvider>
            {children}
            <Footer />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
