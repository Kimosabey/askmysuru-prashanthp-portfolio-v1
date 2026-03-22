import { Award, Medal, BookOpen } from "lucide-react";

export default function CertificatesPage() {
  return (
    <main className="pt-40 pb-20 bg-background min-h-screen relative overflow-hidden">
      {/* Cinematic Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-24">
          <span className="font-label text-[10px] uppercase tracking-[0.5em] text-accent mb-6 block">Prestigious Accolades</span>
          <h1 className="font-headline text-6xl md:text-8xl italic text-primary mb-8 leading-[0.9]">Awards & Distinctions</h1>
          <div className="w-24 h-[1px] bg-accent mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <div className="relative group transition-transform duration-1000 perspective-card">
              <div className="absolute -inset-4 bg-accent/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full"></div>
              
              <div className="relative bg-[#0d0e12] border border-white/5 p-8 md:p-16 shadow-2xl transition-all duration-700 group-hover:border-accent/40 group-hover:shadow-[0_0_80px_rgba(32,111,192,0.15)] overflow-hidden">
                {/* Visual authenticity elements */}
                <div className="absolute top-0 left-0 w-32 h-32 border-l border-t border-accent/30 pointer-events-none"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-accent/30 pointer-events-none"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none">
                  <Award size={300} strokeWidth={0.5} />
                </div>

                <div className="relative z-10 text-center flex flex-col items-center">
                  <Medal size={64} className="text-accent mb-10 opacity-80" strokeWidth={1.5} />
                  
                  <h2 className="font-headline text-3xl md:text-5xl text-primary mb-8 leading-tight tracking-tight italic">
                    Nalwadi Raja <br/> Venkatappa Nayaka Award
                  </h2>
                  
                  <div className="w-16 h-[1px] bg-accent/30 mb-8"></div>
                  
                  <p className="font-body text-primary-dim text-lg md:text-xl max-w-lg mb-12 italic leading-relaxed">
                    "Recognizing Excellence in Historical Documentation & Cultural Digital Preservation."
                  </p>
                  
                  <div className="flex flex-col gap-2 font-label text-[9px] tracking-[0.3em] uppercase opacity-40">
                    <span>CONFERRED IN 2025</span>
                    <span>SURAPURA SAMSTHANA // CERT: 2025-01</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 flex flex-col gap-10">
            <div className="space-y-6">
              <h3 className="font-headline text-3xl text-primary italic">The Royal Presentation</h3>
              <p className="font-body text-primary-dim leading-relaxed">
                Presented by <span className="text-primary font-medium">Dr. Sri Raja Krishnappa Nayaka</span> (King of Surapura) and <span className="text-primary font-medium">Sri Krishnadevaraya</span> (Maharaja of Anegundi, 19th-generation descendant of the Vijayanagara Empire).
              </p>
            </div>
            
            <div className="glass-card p-8 space-y-4">
              <h4 className="font-label text-[10px] uppercase tracking-[0.2em] text-accent font-bold">Significance</h4>
              <p className="font-body text-sm text-primary-dim leading-relaxed">
                Formally recognized for his excellence in historical documentation and for the "Ask Mysuru" platform’s unprecedented role in reviving national interest in the hidden military and royal histories of Karnataka.
              </p>
            </div>

            <div className="pt-6 border-t border-border flex items-center gap-6">
              <div className="w-12 h-12 rounded-full border border-accent/20 flex items-center justify-center bg-accent/5">
                <BookOpen size={24} className="text-accent" strokeWidth={1.5} />
              </div>
              <div>
                <span className="block font-label text-[10px] text-primary-dim uppercase tracking-widest">Category</span>
                <span className="font-body text-primary text-sm">Heritage Documentation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
