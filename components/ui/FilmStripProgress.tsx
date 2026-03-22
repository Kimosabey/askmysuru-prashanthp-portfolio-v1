export default function FilmStripProgress() {
  return (
    <div className="fixed top-[88px] left-0 w-full h-8 bg-surface-container-lowest z-40 overflow-hidden flex items-center justify-between px-4 border-b border-outline-variant/10">
      <div className="flex gap-4 opacity-30">
        <div className="w-3 h-4 bg-secondary-container rounded-sm"></div>
        <div className="w-3 h-4 bg-secondary-container rounded-sm"></div>
        <div className="w-3 h-4 bg-secondary-container rounded-sm"></div>
      </div>
      <div className="text-[10px] font-label tracking-[0.3em] text-on-surface-variant uppercase">
        Frame 024 — Safety 35mm — Kodak Vision3
      </div>
      <div className="flex gap-4 opacity-30">
        <div className="w-3 h-4 bg-secondary-container rounded-sm"></div>
        <div className="w-3 h-4 bg-secondary-container rounded-sm"></div>
        <div className="w-3 h-4 bg-secondary-container rounded-sm"></div>
      </div>
    </div>
  );
}
