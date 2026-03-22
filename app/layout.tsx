import type { Metadata } from "next";
import { Inter, Newsreader, Noto_Sans_Kannada } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import FilmStripProgress from "@/components/ui/FilmStripProgress";
import TopNavBar from "@/components/ui/TopNavBar";
import CmdKSearch from "@/components/ui/CmdKSearch";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable} ${notoSansKannada.variable} antialiased dark`}>
      <body className="bg-black text-slate-50 selection:bg-primary/30 relative">
        <FilmStripProgress />
        <CmdKSearch />
        <TopNavBar />
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
