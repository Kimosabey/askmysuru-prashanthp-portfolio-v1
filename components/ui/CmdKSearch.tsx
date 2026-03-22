"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CmdKSearch() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20, x: "-50%" }}
            animate={{ opacity: 1, scale: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, scale: 0.95, y: -20, x: "-50%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-[15vh] left-1/2 w-full max-w-2xl z-[101] px-4"
          >
            <div className="w-full bg-black/75 backdrop-blur-2xl rounded-lg overflow-hidden shadow-[0_0_50px_-12px_rgba(32,111,192,0.3)] flex flex-col border border-white/10">
              
              {/* Search Input */}
              <div className="px-4 py-4 flex items-center gap-3 border-b border-white/5">
                <span className="material-symbols-outlined text-slate-500 text-xl">search</span>
                <input 
                  autoFocus 
                  className="flex-1 bg-transparent border-none focus:outline-none focus:ring-0 text-base font-body placeholder:text-slate-500 text-white" 
                  placeholder="Type a command or search..." 
                  type="text"
                />
                <kbd className="hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border border-white/20 bg-white/5 px-1.5 font-mono text-[10px] font-medium text-slate-400 opacity-100">
                  <span className="text-xs">ESC</span>
                </kbd>
              </div>

              <div className="flex-1 overflow-y-auto max-h-[450px] bg-black/40">
                {/* Suggestions Section */}
                <section className="p-2">
                  <h3 className="px-3 py-2 text-[10px] font-semibold uppercase tracking-widest text-slate-500">Director's Archive</h3>
                  
                  {/* Selected Item */}
                  <div className="flex items-center gap-3 px-3 py-2.5 rounded-md bg-primary/20 cursor-pointer group transition-all border border-primary/20">
                    <div className="w-10 h-10 rounded-sm overflow-hidden bg-slate-900 border border-white/10 shrink-0">
                      <img className="w-full h-full object-cover" alt="Srirangapatna Series" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjw3ASYtuBNEV2SAMjjKhBeYD1OBMeYfJQ49N2Df4gTzYtDlBQuLqQg9I4SmdB9AO63_PA1Dvfk0c0sxd6LoB_4KY8G-vPi1Tzt9Lm-9lEjK-KVnNAqjhhBHip7jESd3f5aW9AVPDMynvCln6Oz_5MPF4G1I-2dD3gJBwNtNbBV1n_GdcUN8-7zW49-AYEaeHmH1PahqpnNPRU8zusYRASG8lsQ4LJga5ES3060kjjvRHjSVCV2db7sTgGQBzN2e588v-sfW5gcQ"/>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-headline text-base text-white truncate">Srirangapatna Series</h4>
                      <p className="text-[10px] text-primary uppercase font-bold tracking-tighter">Archive • 4K Documentary</p>
                    </div>
                    <span className="material-symbols-outlined text-primary text-lg">check</span>
                  </div>

                  {/* Other Items */}
                  <div className="flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-white/5 cursor-pointer group transition-all mt-1">
                    <div className="w-10 h-10 rounded-sm overflow-hidden bg-slate-900 border border-white/5 shrink-0">
                      <img className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all" alt="Wildlife Conservation" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhont4UfwGYP3RqDT7X7-wIC9GSUrDCYcLhX64_JJbE8VDywSwQ7nSDpm0mbs3-SFLuL2Bpg3W0iaTJGavO4ILr0O3vTqLillQvrp2IA0gLvZQ_2kFHrjZhkchKRcMQNhoEqYQb07FYa2RrY6QIu8iceSMdjuXWIkeD5jOouzED3css5opkMo7E_bCwEA1ByNqPfYEKOcVSanVAjLXwDc3e6mxqKpglwgLXThhKuGgC5EjIe4qprE5Xl80RbYCdagXDCC1Se68CA"/>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-headline text-base text-slate-300 group-hover:text-white truncate transition-colors">Wildlife &amp; Conservation</h4>
                      <p className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">Director's Cut • Bandipur</p>
                    </div>
                    <span className="material-symbols-outlined text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity">keyboard_return</span>
                  </div>
                </section>
              </div>

              {/* Footer Hints */}
              <footer className="px-3 py-2.5 bg-white/5 border-t border-white/5 flex items-center justify-between text-[10px] text-slate-500 font-medium uppercase tracking-widest">
                <div className="flex gap-4">
                  <span className="flex items-center gap-1.5"><kbd className="bg-white/10 px-1 rounded">↑↓</kbd> to navigate</span>
                  <span className="flex items-center gap-1.5"><kbd className="bg-white/10 px-1 rounded">↵</kbd> to select</span>
                </div>
              </footer>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
