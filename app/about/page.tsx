"use client";

import { useState } from "react";
import { Award, Youtube, ArrowRight, Users, Camera, Instagram, FileText } from "lucide-react";
import dynamic from "next/dynamic";

const PdfPreview = dynamic(() => import("@/components/ui/PdfPreview"), {
  ssr: false,
});

export default function AboutPage() {
  return (
    <>
    <main className="pt-32 md:pt-48 pb-20 bg-background relative">
      {/* Section 1: The Visionary Founder */}
      <section className="px-6 md:px-12 mb-32 max-w-[1600px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <span className="font-label text-[10px] text-accent tracking-[0.4em] uppercase block mb-6">Media House Builder & Visionary // Prashanth P.</span>
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl italic leading-[0.9] tracking-tighter text-primary mb-8 drop-shadow-cinematic">
              The Architect <br/>
              <span className="text-primary-dim font-light not-italic text-3xl md:text-5xl lg:text-6xl tracking-tight">of Heritage</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-primary-dim max-w-2xl leading-relaxed mb-10">
              Prashanth P. is a Bengaluru–Mysuru-based digital media entrepreneur and heritage documentarian. He has engineered a full-scale independent media brand dedicated to preserving and archiving Karnataka's rich cultural and historical legacy through his agency, **P2 ADD Agency**.
            </p>
            
            {/* Focus Areas Tags */}
            <div className="flex flex-wrap gap-4 mb-12">
              {["Digital Media Entrepreneurship", "Heritage Documentation", "Socio-Political Analysis", "Cinematic Storytelling"].map((area, i) => (
                <div key={i} className="px-4 py-2 border border-border rounded-full hover:border-accent hover:text-accent transition-colors">
                  <span className="font-label text-[10px] uppercase tracking-widest">{area}</span>
                </div>
              ))}
            </div>

            <p className="font-headline italic text-2xl md:text-3xl text-accent-dim">
              "ದಾಖಲಿಸದ ಇತಿಹಾಸವು ಅಳಿಸಿಹೋಗುತ್ತದೆ." <span className="font-body text-sm not-italic opacity-60 ml-4 font-light text-primary">(Unrecorded history is lost.)</span>
            </p>
          </div>
          <div className="lg:col-span-4 relative group mt-16 lg:mt-0">
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t border-l border-border z-20"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b border-r border-border z-20"></div>
            <div className="overflow-hidden aspect-[4/5] relative bg-surface border border-border shadow-cinematic rounded-2xl">
              <img 
                className="w-full h-full object-cover grayscale contrast-125 filter group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 mix-blend-luminosity hover:mix-blend-normal" 
                alt="Prashanth P. Personal Rider Profile" 
                src="/Prashanth_Profile.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80 pointer-events-none"></div>
            </div>
            <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm px-4 py-2 border border-border z-20 rounded-sm">
              <span className="font-label text-[10px] tracking-[0.2em] text-primary uppercase">35MM EXPOSURE // ROAD TRUTH</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Major Documentary Series (Bento Grid) */}
      <section className="px-6 md:px-12 mb-32 max-w-[1600px] mx-auto relative z-10">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="fluid-h2 font-headline italic text-primary leading-none tracking-tight mb-4">Selected Filmography</h2>
            <span className="font-label text-[10px] text-primary-dim uppercase tracking-[0.3em]">Archiving the Soul of Karnataka</span>
          </div>
          <div className="hidden md:block w-32 h-[1px] bg-border mb-2"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[800px]">
          {/* Srirangapatna Series */}
          <div className="lg:col-span-7 relative group overflow-hidden bg-surface flex flex-col justify-end min-h-[400px] border border-border hover:border-accent/40 transition-colors rounded-2xl">
            <img 
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000 mix-blend-lighten" 
              alt="Ancient Srirangapatna Temple and River" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcRkML4Y6jPCVzbN_RnzTurZeHJzamTw7jM303h4Y5onWCnIoQ1GjvD82eCxiseH2bqidX11lXAy4mxbKKkz1E8pCn9yPjQaP4652-69v2TX-34dIXtmIInov_0_S9Uz-LNGQIUvkumtFJlkQFCWGc0Q0yNFG8r3waaIHX424Lm4UFR9-D53uMNL8IhTJsJw8DRjmB9vCDOTGzJJ4k489AHv0qkDvFq4uNIvKNRbrwYjT1VJp27GXMvF12qrLXKfMzq5bfA4KCgQ"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
            <div className="relative z-10 p-8 md:p-12">
              <span className="font-label text-[10px] tracking-[0.2em] uppercase bg-primary text-background px-3 py-1.5 mb-6 inline-block font-bold">15 EPISODES</span>
              <h3 className="font-headline text-4xl md:text-6xl italic text-primary mb-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">The Srirangapatna Series</h3>
              <p className="font-body text-primary-dim max-w-md text-sm md:text-base leading-relaxed md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">An exhaustive visual chronicle of Tipu Sultan's capital and its spiritual lineage.</p>
            </div>
          </div>

          {/* Wildlife & Conservation */}
          <div className="lg:col-span-5 relative group overflow-hidden bg-surface flex flex-col justify-end min-h-[400px] border border-border hover:border-accent/40 transition-colors rounded-2xl">
            <img 
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000 mix-blend-lighten" 
              alt="Wild Bengal Tiger in Bandipur Forest" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGkA2m0WEEwPz5lFb_CjUtyMRq6VibvDGMh1720B-xhMAuOyOUff02KXi82qx_PbXiJAjs9qKTGCjUZwAHtmT4-SN2uQ84PXoJtCHrK0n80zK6zYM0ibsXUqi7DSMjA2DwNrPUf6fQ_2SY2RAkBOEpv5-sfn8ZYD_k0flaBbHo7YRVGao5OKisgazus2-tVitvz6ageCCCZ-OGq4-BjKSgkIcovZ0rYdZLb8OXyoBzjJchAuN8BM1BzLmbw3RoxUYbCip8sYLGBA"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
            <div className="relative z-10 p-8 md:p-12">
              <span className="font-label text-[10px] tracking-[0.2em] uppercase border border-border px-3 py-1.5 mb-6 inline-block text-primary">BANDIPUR CONSERVATION</span>
              <h3 className="font-headline text-3xl md:text-5xl italic text-primary mb-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Wildlife & Conservation</h3>
              <p className="font-body text-primary-dim text-sm md:text-base leading-relaxed md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">Exploring tiger conservation efforts and the delicate balance of the Western Ghats forests in Bandipur.</p>
            </div>
          </div>

          {/* Surapura-Vijayanagara Series */}
          <div className="lg:col-span-12 relative group overflow-hidden bg-surface min-h-[400px] border border-border hover:border-accent/40 transition-colors rounded-2xl">
            <img 
              className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-1000 mix-blend-luminosity hover:mix-blend-normal" 
              alt="Hampi Vijayanagara Ruins Sunset" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDO549CDqtKk4CLiaW3SSiy4Mk3OAGeElA0xkycALowXOYvWOTvrJa3zOgj_21iVapTEL5Pkk7glBvzFo95wwshBxpXHTO-36N2e1L9K9mphf3p04_Go580uR3b3JMJRfPfWCZmYmwrNNLU79hLfTY0K5sE7jput42tktnVblFjtW8N0J5bj3GQ5qs7Y6-wbI7YaapaxLaErVNNcQAQFpfokJqf1WESBgNubK0Di9eYlvh4NwIEPDoc3xtq0Y65tv-Q2As_8KxWFw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
            <div className="absolute inset-0 flex items-center p-8 md:p-16 z-10">
              <div className="max-w-2xl">
                <span className="font-label text-[10px] tracking-[0.3em] uppercase text-accent mb-4 block">MAGNUM OPUS</span>
                <h3 className="font-headline text-5xl md:text-7xl italic text-primary mb-6">Surapura-Vijayanagara Series</h3>
                <p className="font-body text-primary-dim text-lg leading-relaxed">A 46+ episode odyssey tracing the zenith of South Indian empire and the valor of the Surapura Nayakas.</p>
                <div className="mt-10 flex gap-4 opacity-40">
                  <div className="h-1 w-12 bg-primary"></div>
                  <div className="h-1 w-4 bg-primary"></div>
                  <div className="h-1 w-4 bg-primary"></div>
                </div>
              </div>
            </div>
            <div className="absolute top-12 right-12 text-right hidden lg:block z-10 select-none">
              <span className="text-[12rem] leading-none font-headline italic text-primary/5">46+</span>
              <div className="font-label text-[10px] uppercase tracking-[0.4em] text-primary-dim -mt-8">Chapters Recorded</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: The Heritage Recognition */}
      <section className="bg-surface py-16 md:py-32 lg:py-48 mb-32 relative border-y border-border">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-accent/0 to-accent"></div>
        <div className="px-6 max-w-screen-2xl mx-auto text-center relative z-10">
          <span className="font-label text-[10px] text-accent tracking-[0.4em] mb-8 block uppercase">Distinction & Honor</span>
          <h2 className="font-headline text-3xl md:text-5xl lg:text-7xl italic text-primary mb-12 drop-shadow-cinematic">Nalwadi Raja Venkatappa Nayaka Award</h2>
          
<div className="inline-flex items-center justify-center gap-8 mb-20 opacity-40">
  <div className="w-16 h-px bg-primary"></div>
  <Award size={40} className="text-primary" />
  <div className="w-16 h-px bg-primary"></div>
</div>
          
          <div className="max-w-3xl mx-auto bg-surface-elevated p-10 md:p-16 border border-border relative text-left shadow-cinematic rounded-3xl">
            <div className="absolute -top-[1px] -right-[1px] p-2 bg-accent text-primary font-label text-[10px] uppercase font-bold tracking-[0.2em] shadow-xl">Certified 2025</div>
            <p className="font-body text-xl md:text-2xl leading-relaxed mb-8 text-primary">
              Recipient of this prestigious honor in <span className="text-accent underline decoration-accent/30 underline-offset-8 font-bold">2025</span>, for outstanding contributions to historical documentation and the preservation of Karnataka's revolutionary heritage.
            </p>
            <div className="text-primary-dim italic font-kannada text-2xl tracking-wide opacity-80 border-t border-border/50 pt-8 mt-8">
              ಅತ್ಯುತ್ತಮ ಇತಿಹಾಸ ಸಂಶೋಧನೆ ಮತ್ತು ಸಾಕ್ಷ್ಯಚಿತ್ರ ನಿರ್ಮಾಣಕ್ಕಾಗಿ
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Digital Media Links & Social Reach */}
      <section className="px-6 md:px-12 mb-32 max-w-[1600px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <a href="https://youtube.com/@AskMysuru" target="_blank" rel="noopener noreferrer" className="glass-card p-10 flex flex-col justify-between group hover:-translate-y-2">
            <div>
              <Youtube size={48} className="text-[#FF0000] mb-8" />
              <h4 className="font-headline text-4xl italic mb-2 text-primary">YouTube</h4>
              <div className="text-2xl md:text-4xl lg:text-5xl font-black text-primary mb-4 tracking-tighter">63.4K+ <span className="text-xs font-label uppercase tracking-widest opacity-40 block mt-2 text-primary-dim font-light">Subscribers // 450+ Productions</span></div>
            </div>
            <div className="inline-flex items-center gap-3 font-label text-[10px] uppercase tracking-[0.2em] font-bold text-primary-dim group-hover:text-primary group-hover:gap-5 transition-all mt-12">
              VISIT CHANNEL <ArrowRight size={14} />
            </div>
          </a>
          
          <div className="glass-card-elevated bg-accent p-10 flex flex-col justify-between text-background relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-background/10 to-transparent pointer-events-none"></div>
            <div className="relative z-10">
              <Users size={48} className="mb-8 opacity-90" />
              <h4 className="font-headline text-4xl italic mb-2">Community Reach</h4>
              <div className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 tracking-tighter">160K+</div>
              <p className="font-body text-sm opacity-80 leading-relaxed font-semibold">Total engaged audience across Instagram, Facebook, and Twitter.</p>
            </div>
            <div className="h-1 bg-background/20 w-full mt-12 overflow-hidden relative z-10">
              <div className="h-full bg-background w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-out"></div>
            </div>
          </div>
          
          <a href="https://instagram.com/askmysuru_official" target="_blank" rel="noopener noreferrer" className="glass-card p-10 flex flex-col justify-between group hover:-translate-y-2">
            <div>
              <Instagram size={48} className="text-primary mb-8 opacity-80" />
              <h4 className="font-headline text-4xl italic mb-2 text-primary">Instagram</h4>
              <p className="font-body text-primary-dim mt-4 leading-relaxed max-w-[200px]">Daily visual vignettes of Karnataka's hidden architecture and culture.</p>
            </div>
            <div className="inline-flex items-center gap-3 font-label text-[10px] uppercase tracking-[0.2em] font-bold text-primary-dim group-hover:text-primary group-hover:gap-5 transition-all mt-12">
              FOLLOW FEED <ArrowRight size={14} />
            </div>
          </a>
        </div>
      </section>

      {/* Section 5: Institutional Partnerships */}
      <section className="px-6 md:px-12 max-w-[1600px] mx-auto pb-12 relative z-10">
        <div className="border-t border-border pt-24 pb-12">
          <h2 className="font-label text-[10px] text-primary-dim text-center tracking-[0.4em] mb-20 uppercase">ESTEEMED COLLABORATORS</h2>
          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32">
            <div className="flex flex-col items-center gap-4 group">
              <span className="font-headline text-2xl md:text-3xl lg:text-4xl text-primary opacity-60 group-hover:opacity-100 transition-opacity break-words text-center">Raja Sri Krishnadevaraya</span>
              <div className="text-[10px] uppercase tracking-[0.2em] text-accent md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all font-bold">Royal Heritage Advisory</div>
            </div>
            <div className="flex flex-col items-center gap-4 group">
              <span className="font-headline text-2xl md:text-4xl lg:text-5xl font-black tracking-widest text-primary uppercase opacity-60 group-hover:opacity-100 transition-opacity break-words text-center">P2 ADD AGENCY</span>
              <div className="text-[10px] uppercase tracking-[0.2em] text-accent md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all font-bold">Creative Production Partner</div>
            </div>
            <div className="flex flex-col items-center gap-4 group">
              <img src="/AskMysuru_Color.png" alt="Ask Mysuru" className="h-10 md:h-12 filter brightness-0 invert opacity-60 group-hover:opacity-100 transition-opacity object-contain" />
              <div className="text-[10px] uppercase tracking-[0.2em] text-accent md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all font-bold">Founding Media Platform</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Credentials Profile */}
      <section className="px-6 md:px-12 py-24 max-w-[1600px] mx-auto relative z-10 border-t border-border">
        <div className="text-center mb-16">
          <h3 className="font-headline text-4xl md:text-6xl italic text-primary mb-6">Full Credentials & Profile</h3>
          <p className="font-body text-primary-dim max-w-xl mx-auto mb-12 leading-relaxed">A comprehensive documentation of heritage initiatives, awards, and the professional trajectory of Prashanth P.</p>
          <div className="w-24 h-[1px] bg-accent mx-auto opacity-30"></div>
        </div>

        <div className="mt-12 backdrop-blur-sm max-w-full overflow-hidden">
          <PdfPreview 
            isEmbedded={true}
            fileUrl="/Prashanth_P_Profile.pdf" 
          />
        </div>
      </section>
    </main>
    </>
  );
}
