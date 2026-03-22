import type { Metadata } from "next";
import { Inter, Newsreader, Noto_Sans_Kannada } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import FilmStripProgress from "@/components/ui/FilmStripProgress";
import TopNavBar from "@/components/ui/TopNavBar";
import CmdKSearch from "@/components/ui/CmdKSearch";
import SimpleCursor from "@/components/ui/SimpleCursor";

const outfit = Inter({ subsets: ["latin"], variable: "--font-outfit" }); // Using Inter as fallback or just renaming it for better semantics if Outfit is not available, but I will actually try to import Outfit.

import { Outfit, Playfair_Display } from "next/font/google";

const fontOutfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700"],
});

const fontPlayfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
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
import CinematicAccents from "@/components/ui/CinematicAccents";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${fontOutfit.variable} ${fontPlayfair.variable} ${notoSansKannada.variable} antialiased hide-scrollbar`}>
      <body suppressHydrationWarning className="bg-background text-primary selection:bg-accent/30 relative hide-scrollbar overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <CinematicAccents />
          {/* Global Film Grain Overlay */}
          <div className="fixed inset-0 z-[100] pointer-events-none opacity-[0.03]">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <filter id="noiseFilter">
                <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
              </filter>
              <rect width="100%" height="100%" filter="url(#noiseFilter)" />
            </svg>
          </div>
          
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
