export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-16 md:py-24 px-6 md:px-12 border-t border-border bg-surface z-10 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">
        
        {/* Core Identity */}
        <div className="md:col-span-4 flex flex-col gap-6">
          <img 
            src="/AskMysuru_Color.png" 
            alt="Ask Mysuru Official Logo" 
            className="h-10 w-auto object-contain filter brightness-0 invert opacity-80" 
          />
          <p className="text-primary-dim font-body text-sm max-w-sm leading-relaxed">
            Pioneering a digital renaissance for Karnataka's history. A curated visual archive where academic rigor seamlessly meets cinematic storytelling.
          </p>
          <p className="text-primary font-label uppercase tracking-widest text-[10px] mt-4">
            © {currentYear} PRASHANTH P. — DIRECTED BY VISION
          </p>
        </div>

        {/* Studio Portals */}
        <div className="md:col-span-3 md:col-start-7 flex flex-col gap-6">
          <h4 className="font-label text-xs uppercase tracking-widest text-primary-dim">Studio Ecosystem</h4>
          <div className="flex flex-col gap-4">
            <a href="https://askmysuru.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent font-headline italic text-lg transition-colors flex items-center justify-between group">
              AskMysuru.com
              <span className="material-symbols-outlined text-sm opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">arrow_forward</span>
            </a>
            <a href="https://political360.in/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent font-headline italic text-lg transition-colors flex items-center justify-between group">
              Political360.in
              <span className="material-symbols-outlined text-sm opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">arrow_forward</span>
            </a>
            <div className="text-primary-dim font-headline italic text-lg opacity-50 cursor-not-allowed">
              P2 ADD Agency
            </div>
          </div>
        </div>

        {/* Global Connections */}
        <div className="md:col-span-3 flex flex-col gap-6">
          <h4 className="font-label text-xs uppercase tracking-widest text-primary-dim">Professional Connect</h4>
          <div className="flex flex-col gap-4">
            <a href="mailto:lets@askmysuru.com" className="text-primary hover:text-accent font-headline italic text-lg transition-colors">lets@askmysuru.com</a>
            <div className="flex flex-wrap gap-4 mt-2">
              <a href="https://www.youtube.com/@AskMysuru" target="_blank" rel="noopener noreferrer" className="bg-surface-elevated hover:bg-border p-3 rounded-full transition-colors" aria-label="YouTube">
                <span className="material-symbols-outlined text-sm text-primary">play_arrow</span>
              </a>
              <a href="https://www.instagram.com/askmysuru_official/" target="_blank" rel="noopener noreferrer" className="bg-surface-elevated hover:bg-border p-3 rounded-full transition-colors" aria-label="Instagram">
                <span className="material-symbols-outlined text-sm text-primary">camera_alt</span>
              </a>
              <a href="https://facebook.com/askmysuru" target="_blank" rel="noopener noreferrer" className="bg-surface-elevated hover:bg-border p-3 rounded-full transition-colors" aria-label="Facebook">
                <span className="material-symbols-outlined text-sm text-primary">public</span>
              </a>
              <a href="https://chat.whatsapp.com/K3fhv59ylSQE83pVNCLzft" target="_blank" rel="noopener noreferrer" className="bg-surface-elevated hover:bg-border p-3 rounded-full transition-colors" aria-label="WhatsApp Community">
                <span className="material-symbols-outlined text-sm text-primary">chat</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Massive Typographic Anchor */}
      <div className="max-w-[1600px] mx-auto mt-24 mb-8 overflow-hidden">
        <h2 className="text-[clamp(3rem,12vw,14rem)] leading-[0.8] font-headline italic text-primary/5 tracking-tighter text-center select-none block w-full">
          DIRECTOR'S VISION
        </h2>
      </div>

      {/* Technical Film Badge */}
      <div className="w-full border-t border-border pt-8 flex justify-between items-center px-6 md:px-12 relative z-20">
        <div className="h-px bg-border flex-grow hidden md:block"></div>
        <div className="flex items-center gap-4 opacity-40 px-6 mx-auto md:mx-0">
          <span className="material-symbols-outlined text-xs text-primary">filter_frames</span>
          <span className="font-label text-[10px] tracking-[0.4em] uppercase text-primary">35MM DIGITAL PROCESS</span>
          <span className="material-symbols-outlined text-xs text-primary">filter_frames</span>
        </div>
        <div className="h-px bg-border flex-grow hidden md:block"></div>
      </div>
    </footer>
  );
}
