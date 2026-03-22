import { Film, Star, Camera, Aperture, Video } from "lucide-react";

export default function AuthorityImpact() {
  return (
    <section className="bg-surface-container-lowest pt-0 pb-20 px-8 border-t border-borderDark/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-headline italic tracking-tighter mb-6 text-on-surface">Authority & Impact.</h2>
          <div className="h-[1px] w-24 bg-tertiary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
          <div className="flex flex-col items-center text-center">
            <span className="text-7xl font-headline tracking-tighter text-primary mb-2">160K+</span>
            <span className="text-[10px] font-label tracking-[0.4em] uppercase text-primary-dim">Engaged Community Reach</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="text-7xl font-headline tracking-tighter text-primary mb-2">2025</span>
            <span className="text-[10px] font-label tracking-[0.4em] uppercase text-primary-dim text-accent font-bold">Nalwadi Raja Venkatappa Nayaka Award</span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-60">
          <div className="text-sm font-bold tracking-[0.3em] font-label flex items-center gap-2 text-primary">
            ASK MYSURU
          </div>
          <div className="text-sm font-bold tracking-[0.3em] font-label flex items-center gap-2 text-primary">
            POLITICAL 360
          </div>
          <div className="text-sm font-bold tracking-[0.3em] font-label flex items-center gap-2 text-primary">
            P2 ADD AGENCY
          </div>
        </div>
      </div>
    </section>
  );
}
