import React from "react";
import { motion } from "motion/react";

const audiences = [
  { title: "UMKM & Local Brands", desc: "For local businesses ready to go digital." },
  { title: "Creators & Personal Brands", desc: "For individuals building their online profile." },
  { title: "Communities", desc: "For groups that need a clean landing page." },
  { title: "Small Businesses", desc: "For small companies that want a credible presence." }
];

export function Audience() {
  return (
    <section className="py-12 md:py-16 relative">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-4"
          >
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight">
              Built for brands that need a cleaner digital presence.
            </h2>
            <p className="text-base md:text-lg text-text-muted leading-relaxed font-light max-w-md">
              For UMKM, creators, communities, personal brands, and small businesses that want to look more credible, modern, and easier to trust online.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {audiences.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                className="p-5 rounded-2xl bg-card-dark border border-white/[0.04] flex flex-col gap-2 group hover:border-white/[0.1] transition-colors duration-500"
              >
                <h3 className="text-lg font-medium text-text-main group-hover:text-accent-lime transition-colors">{item.title}</h3>
                <p className="text-sm text-text-muted/80 font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
