import type { Metadata } from "next";
import { Inter, Noto_Sans_Kannada, Geist, Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import FilmStripProgress from "@/components/ui/FilmStripProgress";
import TopNavBar from "@/components/ui/TopNavBar";
import CmdKSearch from "@/components/ui/CmdKSearch";
import SimpleCursor from "@/components/ui/SimpleCursor";
import Footer from "@/components/ui/Footer";
import { ProductionProviders } from "@/components/providers/ProductionProviders";
import { cn } from "@/lib/utils";

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

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: "Prashanth P. | Director & Cinematographer",
  description: "The digital portfolio of Prashanth P., Founder of Ask Mysuru. Documenting Heritage, Nature, and Society.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("antialiased", "hide-scrollbar", "relative", fontOutfit.variable, fontPlayfair.variable, notoSansKannada.variable, "font-sans", geist.variable)}>
      <head>
        {/* Preconnect to external origins */}
        <link rel="preconnect" href="https://img.youtube.com" />
        <link rel="dns-prefetch" href="https://img.youtube.com" />
        <link rel="preconnect" href="https://lh3.googleusercontent.com" />
        <link rel="dns-prefetch" href="https://lh3.googleusercontent.com" />
        <link rel="preconnect" href="https://www.transparenttextures.com" />
        <link rel="dns-prefetch" href="https://www.transparenttextures.com" />
      </head>
      <body suppressHydrationWarning className="bg-background text-primary selection:bg-accent/30 relative hide-scrollbar overflow-x-hidden">
        <ProductionProviders>
          {children}
          <Footer />
        </ProductionProviders>
      </body>
    </html>
  );
}
