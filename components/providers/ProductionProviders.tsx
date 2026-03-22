"use client";

import { ReactNode, useState, useEffect } from "react";
import CinematicAccents from "@/components/ui/CinematicAccents";
import FilmGrain from "@/components/ui/FilmGrain";
import SimpleCursor from "@/components/ui/SimpleCursor";
import CmdKSearch from "@/components/ui/CmdKSearch";
import TopNavBar from "@/components/ui/TopNavBar";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { BespokeThemeProvider } from "@/components/providers/BespokeThemeProvider";

export function ProductionProviders({ children }: { children: ReactNode }) {
  // We remove the 'mounted' return barrier to prevent the entire React tree from remounting.
  // Instead, we only conditionally render the strictly client-side visual effects.
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <BespokeThemeProvider>
      {/* Visual accents are safe to render, they handle their own internal mounting/animation */}
      <CinematicAccents />
      <FilmGrain />
      
      {/* Strict client-only components */}
      {isClient && <SimpleCursor />}
      {isClient && <CmdKSearch />}
      
      <TopNavBar />
      
      <SmoothScrollProvider>
        {children}
      </SmoothScrollProvider>
    </BespokeThemeProvider>
  );
}
