"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter, ExternalLink } from "lucide-react";

const socialFeeds = [
  {
    brand: "Ask Mysuru",
    platform: "Instagram",
    handle: "@askmysuru_official",
    url: "https://instagram.com/askmysuru_official",
    icon: <Instagram size={20} />,
    color: "from-purple-500/20 to-pink-500/20",
    description: "Daily heritage archives & cultural visual still series."
  },
  {
    brand: "Political360",
    platform: "Facebook",
    handle: "political360.in",
    url: "https://facebook.com/political360",
    icon: <Facebook size={20} />,
    color: "from-blue-600/20 to-blue-400/20",
    description: "Deep-dives into Karnataka's democratic landscape."
  },
  {
    brand: "Ask Mysuru",
    platform: "Facebook",
    handle: "askmysuru",
    url: "https://facebook.com/askmysuru",
    icon: <Facebook size={20} />,
    color: "from-blue-500/10 to-blue-800/10",
    description: "Community hub for historical dialogue."
  }
];

export default function SocialConnectivity() {
  return (
    <section className="py-24 px-6 md:px-12 bg-background border-t border-border" id="social">
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-16">
          <span className="font-label text-[10px] text-accent tracking-[0.4em] uppercase block mb-4">Digital Pulse</span>
          <h2 className="fluid-h2 font-headline italic text-primary leading-none tracking-tight">Social Convergence.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {socialFeeds.map((social, i) => (
            <motion.a
              key={i}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              className={`glass-card p-10 flex flex-col justify-between group overflow-hidden relative`}
            >
              {/* Animated Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <div className="p-3 bg-white/5 rounded-sm text-accent group-hover:text-white transition-colors">
                    {social.icon}
                  </div>
                  <ExternalLink size={14} className="text-primary-dim opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <span className="font-label text-[9px] uppercase tracking-[0.3em] text-accent block mb-2">{social.brand}</span>
                <h3 className="font-headline text-3xl italic text-primary mb-4">{social.handle}</h3>
                <p className="font-body text-xs text-primary-dim leading-relaxed max-w-[200px]">
                  {social.description}
                </p>
              </div>

              <div className="mt-12 relative z-10">
                <span className="font-label text-[8px] uppercase tracking-[0.4em] text-primary opacity-50 group-hover:opacity-100 transition-opacity">Connect on {social.platform}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
