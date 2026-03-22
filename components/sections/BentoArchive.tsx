"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function BentoArchive() {
  return (
    <section className="pt-32 px-8 max-w-7xl mx-auto pb-20">
      <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
        <div className="max-w-2xl">
          <span className="font-label text-primary tracking-[0.3em] text-[10px] mb-4 block uppercase">The Director's Cut</span>
          <h1 className="font-headline text-5xl md:text-7xl italic leading-tight text-on-surface">
            The Archive
          </h1>
        </div>
        <div className="flex gap-4 pb-2">
          <div className="flex flex-col items-end">
            <span className="font-label text-outline-variant text-[9px] tracking-widest uppercase">Sequence</span>
            <span className="font-body text-on-surface/40 text-sm">002 / 006</span>
          </div>
        </div>
      </div>

      <div className="bento-grid">
        {/* Item 1 */}
        <div className="col-span-12 md:col-span-8 row-span-2 group relative overflow-hidden bg-surface-container-low magnetic-pull cursor-none min-h-[400px]">
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-700 z-10"></div>
          <img 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
            alt="Echoes of Hampi" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1kk86122dq7lK7ac20SIIVbwwl_zhw1HLUbSnK0nzCzvU1hWDlVxprTxuwa2rwdt2P7AFrCwb5aX5Xj93NfpPetkxNvvXvANlHMMlwOmghb4NpzsS7ubDmMyJBelfdNkvEmZBqo4bNXtf863Xn7OtTjb60s0MqHTJQJHjQxT49l2YXapMiUGKa4W74DvEeENxnqPqI32Bju3kqn4wMtEzICxNDwaZ9GuGspd1Q6wTtGMCpWzGKsDhg7O__ai--xshzo51-43uow" 
          />
          <div className="absolute top-6 left-6 z-20">
            <span className="bg-primary-container/90 backdrop-blur-sm text-white px-3 py-1 text-[9px] font-label tracking-widest uppercase">Heritage</span>
          </div>
          <div className="absolute bottom-8 left-8 z-20">
            <h3 className="font-headline text-3xl italic text-white mb-2">Echoes of Hampi</h3>
            <p className="font-body text-white/60 text-sm tracking-wide max-w-xs uppercase text-[10px]">A visual study of forgotten empires</p>
          </div>
          <div className="absolute top-4 right-4 z-20 flex gap-1 opacity-40">
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
          </div>
        </div>

        {/* Item 2 */}
        <div className="col-span-12 md:col-span-4 row-span-1 group relative overflow-hidden bg-surface-container-low magnetic-pull cursor-none min-h-[250px]">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
          <img 
            className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-105" 
            alt="Silent Peaks" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQL_7kKDgF5_YEmII_1XvXM3k-HDVFnqV4U1n2vt3D_glzVSyLlrZHabSxnQR0fztqwxlgWaDy8UAJU8-HmIWGEDoVdZUb2J4t8wNXPBubgvNCnhYHtleiGUYZTBh6HIEPBClOTagKhYfJrD1i-ge03wUCQAb7_eAroc7KSqmacnWPsNcnBjX-l_0QSspz6kCDui3kEFyug-dnDNdNLz7X9gzk9V4yKx7QsxUjBLC1RUkCd2x3xnPHJnN4E7OVoPcSbNdUAgBI4w" 
          />
          <div className="absolute bottom-6 left-6 z-20">
            <span className="text-tertiary text-[9px] font-label tracking-widest uppercase mb-1 block">Nature</span>
            <h3 className="font-headline text-xl italic text-white">Silent Peaks</h3>
          </div>
        </div>

        {/* Item 3 */}
        <div className="col-span-12 md:col-span-4 row-span-2 group relative overflow-hidden bg-surface-container-low magnetic-pull cursor-none min-h-[400px]">
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-700 z-10"></div>
          <img 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
            alt="Silicon Shadows" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOkLHgRHeIxue4nQ62tyjZJugEHVqBNt3efwNEfv0QPaxsXmHXOdplXE90yc83om9QVBy530EIraw03WXhEdjjWmGs2s5nx0b1FFY3lSvqZK-uiSd4G7tgENBpzo0clOcq-1X4aQ9WIEaCQQbkP8Xd9tLc4kcykgBKFwvF5TofEo9mxn8xtUYAHErK7r3z2VJzdqv8JkH-7p4MoLKUzpEAQGjUdMP9zazJOGcz-p3S9PbAi0diyMwAWHPb1CikOURyAu_4ZTvAxg" 
          />
          <div className="absolute top-6 right-6 z-20">
            <span className="border border-white/20 backdrop-blur-md text-white px-3 py-1 text-[9px] font-label tracking-widest uppercase">Tech</span>
          </div>
          <div className="absolute bottom-8 left-8 z-20">
            <h3 className="font-headline text-2xl italic text-white mb-2">Silicon Shadows</h3>
            <p className="font-body text-white/50 text-[10px] uppercase tracking-tighter">Humanity & Code</p>
          </div>
          <div className="absolute top-0 bottom-0 left-4 w-px bg-white/10 z-20"></div>
        </div>

        {/* Item 4 */}
        <div className="col-span-12 md:col-span-4 row-span-1 group relative overflow-hidden bg-surface-container-low magnetic-pull cursor-none min-h-[250px]">
          <div className="absolute inset-0 bg-primary-container/10 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
          <img 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
            alt="Neon Pulse" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPizh-qfgKnSM_hZ4rWELRKKxauYg8s9C_UXS39RlTIL9J3gTESgJmAdqY0ytXFTtbyME8LKJGje-dVUl1ww6l9veMUlTw3HfhKfE2qGICV663gGqe2e3sPRGxBqZwJkyXMwB4O5Ou6ygn4INZLwO3y43kUL6SfjmCyox2ZvVA7MZ6Hlu3a5zQ9EMcQyRpWdj_Qla3mTvObg_V0n_kMxqGKN-6NTReiOwZCoX0fHF-XVcBXV8BFB_7OLHqR6MjzTDwrubAxjD_0g" 
          />
          <div className="absolute bottom-6 left-6 z-20">
            <span className="text-secondary text-[9px] font-label tracking-widest uppercase mb-1 block">City Spotlight</span>
            <h3 className="font-headline text-xl italic text-white">Neon Pulse</h3>
          </div>
        </div>

        {/* Item 5 */}
        <div className="col-span-12 md:col-span-4 row-span-2 group relative overflow-hidden bg-surface-container-low magnetic-pull cursor-none min-h-[400px]">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
            alt="The Human Condition" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpCxZ9Yaaw58MDUABMnRJShSKeUywzHR2QamYaR13g9xUsWrUsi0rgcaCbz6mqUpzxK_ULntl30XgqLGubezogCaydZNnKcEHL8ecgnFD2SIguxQ2-Fn8X4cocayFhMjX76dZ55z33hGUqNx78-XLW8Sq7Lw7TLtcb23kp0ZleYrdwI_pcVBPydWuTC3r3Ra27Dvf5Q7B5e5FmvEVvdEQ5LzEJE4CLl_7MH4htWtHViwnrvCeHkQN1u6ucFnzFhn5knikUNTXtvA" 
          />
          <div className="absolute inset-0 flex items-center justify-center z-20 px-8 text-center">
            <div>
              <span className="text-on-surface-variant text-[10px] font-label tracking-[0.4em] uppercase mb-4 block">Society</span>
              <h3 className="font-headline text-3xl italic text-white leading-tight">The Human Condition</h3>
              <div className="mt-6 w-12 h-px bg-primary mx-auto"></div>
            </div>
          </div>
        </div>

        {/* Item 6 */}
        <div className="col-span-12 md:col-span-8 row-span-1 group relative overflow-hidden bg-surface-container-low magnetic-pull cursor-none min-h-[250px]">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent z-10"></div>
          <img 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
            alt="Path to Enlightenment" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2LKfMzpvNhy54cRfx9aztJ2TYEJrJAWAdN6Ux7QD6QsWKIqmGT7jkPhBwKpsQJJfZo8N8jQFDdSTLZau86u7wzqWbPdQfAzGS128-4BnlWmVN1PQkz_gJyarj0DqAqAe76nDMRwrhS4i7ibhVrG1Al_KkvhrdZQG8RZ1gvYs_OBaKNm81qmM4wnxfQai2zPlynvI60bGhaGrCfjSIN_7dlUUTmiZtXzDqLLdkDz87SF1wFw6EivUiWqXNJI_Go62-jn32B2B0pQ" 
          />
          <div className="absolute top-0 bottom-0 left-0 w-2 bg-primary z-20"></div>
          <div className="absolute inset-y-0 left-12 flex flex-col justify-center z-20">
            <span className="text-primary text-[9px] font-label tracking-widest uppercase mb-2">Yatra</span>
            <h3 className="font-headline text-4xl italic text-white">Path to Enlightenment</h3>
            <p className="font-body text-white/40 text-[10px] tracking-[0.2em] mt-2 uppercase">A 4000km Pilgrimage Film</p>
          </div>
        </div>
      </div>

      <div className="mt-20 flex justify-center">
        <button className="group flex items-center gap-4 text-on-surface/60 hover:text-primary transition-colors duration-500 font-label text-[11px] tracking-[0.3em] uppercase">
          Explore More Archive
          <span className="material-symbols-outlined text-sm group-hover:translate-x-2 transition-transform">arrow_forward</span>
        </button>
      </div>
    </section>
  );
}
