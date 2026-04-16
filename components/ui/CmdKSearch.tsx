"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { MOCK_PROJECTS } from "@/lib/mockData";
import { Search, CornerDownLeft } from "lucide-react";

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
            className="fixed top-[15dvh] left-1/2 w-full max-w-2xl max-h-[calc(100dvh-120px)] z-[101] px-4"
          >
            <div className="w-full bg-black/75 backdrop-blur-2xl rounded-lg overflow-hidden shadow-[0_0_50px_-12px_rgba(32,111,192,0.3)] flex flex-col border border-white/10 max-h-full overflow-y-auto">
              
              {/* Search Input */}
              <div className="px-4 py-4 flex items-center gap-3 border-b border-white/5">
                <Search className="text-slate-500" size={20} />
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
                  
                  {MOCK_PROJECTS.map((project, index) => (
                    <Link href={`/project/${project.id}`} key={project.id} onClick={() => setIsOpen(false)}>
                      <div className="flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-white/5 cursor-pointer group transition-all mt-1 border border-transparent">
                        <div className="w-10 h-10 rounded-sm overflow-hidden bg-slate-900 border border-white/5 shrink-0">
                          <img className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all" alt={project.title} src={project.featuredImg} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-headline text-base text-slate-300 group-hover:text-white truncate transition-colors">{project.title}</h4>
                          <p className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">Director's Cut • {project.category}</p>
                        </div>
                        <CornerDownLeft className="text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
                      </div>
                    </Link>
                  ))}
                </section>
              </div>

              {/* Footer Hints */}
              <footer className="hidden sm:flex px-3 py-2.5 bg-white/5 border-t border-white/5 items-center justify-between text-[10px] text-slate-500 font-medium uppercase tracking-widest">
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
