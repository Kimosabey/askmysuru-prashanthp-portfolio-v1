"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const photos = [
  { url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDO549CDqtKk4CLiaW3SSiy4Mk3OAGeElA0xkycALowXOYvWOTvrJa3zOgj_21iVapTEL5Pkk7glBvzFo95wwshBxpXHTO-36N2e1L9K9mphf3p04_Go580uR3b3JMJRfPfWCZmYmwrNNLU79hLfTY0K5sE7jput42tktnVblFjtW8N0J5bj3GQ5qs7Y6-wbI7YaapaxLaErVNNcQAQFpfokJqf1WESBgNubK0Di9eYlvh4NwIEPDoc3xtq0Y65tv-Q2As_8KxWFw", category: "Architecture" },
  { url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGkA2m0WEEwPz5lFb_CjUtyMRq6VibvDGMh1720B-xhMAuOyOUff02KXi82qx_PbXiJAjs9qKTGCjUZwAHtmT4-SN2uQ84PXoJtCHrK0n80zK6zYM0ibsXUqi7DSMjA2DwNrPUf6fQ_2SY2RAkBOEpv5-sfn8ZYD_k0flaBbHo7YRVGao5OKisgazus2-tVitvz6ageCCCZ-OGq4-BjKSgkIcovZ0rYdZLb8OXyoBzjJchAuN8BM1BzLmbw3RoxUYbCip8sYLGBA", category: "Wildlife" },
  { url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcRkML4Y6jPCVzbN_RnzTurZeHJzamTw7jM303h4Y5onWCnIoQ1GjvD82eCxiseH2bqidX11lXAy4mxbKKkz1E8pCn9yPjQaP4652-69v2TX-34dIXtmIInov_0_S9Uz-LNGQIUvkumtFJlkQFCWGc0Q0yNFG8r3waaIHX424Lm4UFR9-D53uMNL8IhTJsJw8DRjmB9vCDOTGzJJ4k489AHv0qkDvFq4uNIvKNRbrwYjT1VJp27GXMvF12qrLXKfMzq5bfA4KCgQ", category: "Architecture" },
  { url: "/Prashanth_Bike.jpg", category: "BTS" },
];

export default function PhotoGallery() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Architecture", "Wildlife", "BTS"];

  const filteredPhotos = filter === "All" ? photos : photos.filter(p => p.category === filter);

  return (
    <section className="py-24 px-6 md:px-12 bg-background border-t border-border" id="gallery">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="font-label text-[10px] text-accent tracking-[0.4em] uppercase block mb-4">Visual Stills</span>
            <h2 className="fluid-h2 font-headline italic text-primary leading-none tracking-tight">The Gallery.</h2>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-2">
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`font-label text-[10px] uppercase tracking-[0.2em] transition-colors whitespace-nowrap ${
                  filter === c ? "text-accent border-b border-accent" : "text-primary-dim hover:text-primary"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredPhotos.map((photo, i) => (
            <motion.div
              layout
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="aspect-[4/5] overflow-hidden bg-surface relative group cursor-pointer"
            >
              <Image 
                src={photo.url} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                alt="Gallery"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/40 md:opacity-0 md:group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="font-label text-[8px] uppercase tracking-widest text-white border-l border-accent pl-2">{photo.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
