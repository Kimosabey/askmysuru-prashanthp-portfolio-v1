import { ArrowRight, MapPin } from "lucide-react";

export default function ClientsPage() {
  return (
    <main className="pt-40 pb-20 bg-background min-h-screen">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <h1 className="font-headline text-5xl md:text-7xl italic text-primary mb-6">Ecosystem & Partners</h1>
        <div className="w-32 h-[1px] bg-accent mb-12"></div>
        
        <p className="text-primary-dim max-w-2xl font-body text-xl mb-24 leading-relaxed">
          The structural pillars of the Ask Mysuru heritage media network and P2 ADD Agency. Dedicated to documenting and preserving Karnataka's cultural legacy.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-24">
          <a href="https://askmysuru.com" target="_blank" rel="noopener noreferrer" className="glass-card p-6 md:p-12 hover:border-accent shadow-cinematic group flex flex-col justify-between min-h-[300px] md:min-h-[400px]">
            <div>
              <span className="font-label text-[10px] uppercase tracking-[0.3em] text-accent mb-8 block bg-accent/10 px-3 py-1 w-fit border border-accent/20">Owned Media Property</span>
              <h3 className="font-headline text-4xl italic text-primary mb-4">Ask Mysuru</h3>
              <p className="font-body text-primary-dim leading-relaxed">Mass-scale digital heritage and multi-vertical media platform actively educating 160K+ engaged followers directly. Dedicated to revealing the hidden stories of the Karunadu region.</p>
            </div>
            <div className="font-label text-[10px] uppercase tracking-[0.2em] font-bold text-primary-dim group-hover:text-primary flex items-center gap-3 mt-10 transition-all">
              EXPLORE PLATFORM <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </div>
          </a>
          
          <div className="glass-card-elevated p-6 md:p-12 group flex flex-col justify-between min-h-[300px] md:min-h-[400px]">
            <div>
              <span className="font-label text-[10px] uppercase tracking-[0.3em] text-primary mb-8 block px-3 py-1 w-fit border border-primary/20">Parent Entity / HQ</span>
              <h3 className="font-headline text-4xl italic text-primary mb-4">P2 ADD Agency</h3>
              <p className="font-body text-primary-dim leading-relaxed">The central headquarters in Ideal Homes, RR Nagara, Bengaluru, independently driving visual documentation, heritage preservation, overarching agency management, and brand execution.</p>
            </div>
            <div className="font-label text-[10px] uppercase tracking-[0.3em] font-bold text-primary opacity-50 flex items-center gap-3 mt-10">
              <MapPin size={16} /> HEAD OFFICE
            </div>
          </div>
          
          <div className="glass-card p-6 md:p-12 group flex flex-col justify-between min-h-[300px] md:min-h-[400px]">
            <div>
              <span className="font-label text-[10px] uppercase tracking-[0.3em] text-accent mb-8 block bg-accent/10 px-3 py-1 w-fit border border-accent/20">Institutional Recognition</span>
              <h3 className="font-headline text-4xl italic text-primary mb-4">Royal Heritage Network</h3>
              <p className="font-body text-primary-dim leading-relaxed">Collaborations with royal heritage organizations including the Surapura Samsthana and Anegundi dynasty for authentic historical documentation and cultural preservation.</p>
            </div>
            <div className="font-label text-[10px] uppercase tracking-[0.2em] font-bold text-primary-dim group-hover:text-primary flex items-center gap-3 mt-10 transition-all">
              LEARN MORE <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </div>

        {/* Documentary Archives Section */}
        <div className="mt-32 border-t border-border pt-24 pb-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="font-label text-[10px] uppercase tracking-[0.4em] text-accent mb-4 block">Featured Heritage Work</span>
              <h2 className="fluid-h2 font-headline italic text-primary leading-tight">Documentary Archive</h2>
            </div>
            <a href="https://askmysuru.com" target="_blank" rel="noopener noreferrer" className="text-primary-dim hover:text-primary transition-all font-label text-[10px] uppercase tracking-widest border-b border-border pb-1">Explore All</a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            { [
              { title: "The Srirangapatna Series (15+ Episodes)", date: "18th Century Fortress", category: "Military Heritage" },
              { title: "The Surapura Dynasty (46+ Episodes)", date: "Royal Nayaka Resistance", category: "Royal History" },
              { title: "Wildlife & Conservation in Bandipur", date: "Tiger Advocacy", category: "Environmental" }
            ].map((article, i) => (
              <div key={i} className="glass-card p-8 group">
                <span className="text-[9px] font-label text-accent uppercase tracking-widest mb-4 block">{article.category}</span>
                <h3 className="font-headline text-2xl italic text-primary mb-6 leading-snug">"{article.title}"</h3>
                <div className="text-xs font-body text-primary-dim border-t border-border pt-4 mt-auto">
                  {article.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
