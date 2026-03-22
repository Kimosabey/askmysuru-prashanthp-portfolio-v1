import { ArrowRight, MapPin } from "lucide-react";

export default function ClientsPage() {
  return (
    <main className="pt-40 pb-20 bg-background min-h-screen">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <h1 className="font-headline text-5xl md:text-7xl italic text-primary mb-6">Ecosystem & Partners</h1>
        <div className="w-32 h-[1px] bg-accent mb-12"></div>
        
        <p className="text-primary-dim max-w-2xl font-body text-xl mb-24 leading-relaxed">
          The structural pillars of the P2 ADD Agency network. A media house built on robust affiliations and autonomous digital properties serving Karnataka.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-24">
          <a href="https://political360.in/" target="_blank" rel="noopener noreferrer" className="glass-card p-12 hover:border-accent shadow-cinematic group flex flex-col justify-between min-h-[400px]">
            <div>
              <span className="font-label text-[10px] uppercase tracking-[0.3em] text-accent mb-8 block bg-accent/10 px-3 py-1 w-fit border border-accent/20">Owned Media Property</span>
              <h3 className="font-headline text-4xl italic text-primary mb-4">Political360</h3>
              <p className="font-body text-primary-dim leading-relaxed">Karnataka's first dedicated political web portal and monthly magazine. Documenting the political heartbeat from Panchayat to Parliament.</p>
            </div>
            <div className="font-label text-[10px] uppercase tracking-[0.2em] font-bold text-primary-dim group-hover:text-primary flex items-center gap-3 mt-10 transition-all">
              EXPLORE PLATFORM <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </div>
          </a>
          
          <a href="https://askmysuru.com" target="_blank" rel="noopener noreferrer" className="glass-card p-12 hover:border-accent shadow-cinematic group flex flex-col justify-between min-h-[400px]">
            <div>
              <span className="font-label text-[10px] uppercase tracking-[0.3em] text-accent mb-8 block bg-accent/10 px-3 py-1 w-fit border border-accent/20">Owned Media Property</span>
              <h3 className="font-headline text-4xl italic text-primary mb-4">Ask Mysuru</h3>
              <p className="font-body text-primary-dim leading-relaxed">Mass-scale digital heritage and multi-vertical media platform actively educating 160K+ engaged followers directly.</p>
            </div>
            <div className="font-label text-[10px] uppercase tracking-[0.2em] font-bold text-primary-dim group-hover:text-primary flex items-center gap-3 mt-10 transition-all">
              EXPLORE PLATFORM <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </div>
          </a>
          
          <div className="glass-card-elevated p-12 group flex flex-col justify-between min-h-[400px]">
            <div>
              <span className="font-label text-[10px] uppercase tracking-[0.3em] text-primary mb-8 block px-3 py-1 w-fit border border-primary/20">Parent Entity / HQ</span>
              <h3 className="font-headline text-4xl italic text-primary mb-4">P2 ADD Agency</h3>
              <p className="font-body text-primary-dim leading-relaxed">The central headquarters in RR Nagara, Bengaluru, independently driving visual documentation, overarching agency management, and brand execution.</p>
            </div>
            <div className="font-label text-[10px] uppercase tracking-[0.3em] font-bold text-primary opacity-50 flex items-center gap-3 mt-10">
              <MapPin size={16} /> HEAD OFFICE
            </div>
          </div>
        </div>

        {/* Latest Chronicles Section */}
        <div className="mt-32 border-t border-border pt-24 pb-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="font-label text-[10px] uppercase tracking-[0.4em] text-accent mb-4 block">Political360 Feed</span>
              <h2 className="fluid-h2 font-headline italic text-primary leading-tight">Latest Chronicles</h2>
            </div>
            <a href="https://political360.in/" target="_blank" rel="noopener noreferrer" className="text-primary-dim hover:text-primary transition-all font-label text-[10px] uppercase tracking-widest border-b border-border pb-1">Enter Portal</a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            { [
              { title: "Karnataka Legislative Assembly LIVE", date: "March 18, 2026", category: "Governance" },
              { title: "The Chalavadi Narayanaswamy Interview", date: "March 14, 2026", category: "Exclusive" },
              { title: "Panchayat to Parliament Roadmap", date: "Feb 28, 2026", category: "Editorial" }
            ].map((article, i) => (
              <div key={i} className="glass-card p-8 group">
                <span className="text-[9px] font-label text-accent uppercase tracking-widest mb-4 block">{article.category}</span>
                <h3 className="font-headline text-2xl italic text-primary mb-6 leading-snug">"{article.title}"</h3>
                <div className="text-xs font-body text-primary-dim border-t border-border pt-4 mt-auto">
                  PUBLISHED: {article.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
