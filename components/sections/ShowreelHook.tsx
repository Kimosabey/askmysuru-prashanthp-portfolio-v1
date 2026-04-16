"use client";

import { useState } from "react";
import { Play, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function ShowreelHook() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="relative w-full py-24 bg-background flex flex-col items-center justify-center border-t border-border">
        <div className="max-w-[1600px] mx-auto text-center px-6 md:px-12 w-full">
          <h2 className="font-sans text-xs md:text-sm tracking-[0.4em] text-accent uppercase mb-8">The 60-Second Hook</h2>
          <p className="font-headline text-xl md:text-3xl lg:text-5xl text-primary leading-relaxed mb-12">
            Every frame is a painted canvas of <span className="italic text-accent">culture, heritage, and the silence of nature.</span>
          </p>
          
          <Dialog>
            <DialogTrigger 
              className="group relative flex items-center justify-center gap-4 mx-auto"
              aria-label="Play Showreel"
            >
              <span className="relative flex items-center justify-center w-16 h-16 md:w-24 md:h-24 rounded-full border border-primary/40 bg-primary/10 group-hover:bg-primary/20 transition-all duration-500 backdrop-blur-md">
                <Play className="w-6 h-6 md:w-8 md:h-8 text-white ml-2 group-hover:scale-110 transition-transform duration-300" />
              </span>
              <span className="absolute -bottom-8 font-sans text-xs tracking-widest uppercase text-white/50 group-hover:text-white transition-colors duration-300">
                Play Showreel
              </span>
            </DialogTrigger>
            <DialogContent className="max-w-7xl w-[95vw] max-h-[85dvh] aspect-video p-0 bg-black border-none overflow-hidden">
              <DialogHeader className="sr-only">
                <DialogTitle>Cinematic Showreel</DialogTitle>
              </DialogHeader>
              <iframe 
                src="https://www.youtube.com/embed/6j6rTem3JbA?autoplay=1" 
                title="Cinematic Showreel"
                className="w-full h-full border-none"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  );
}
