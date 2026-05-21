import { motion } from 'motion/react';

const services = [
  {
    num: "01",
    title: "Landing Page",
    desc: "One clean page to introduce your product, service, or campaign."
  },
  {
    num: "02",
    title: "Business Website",
    desc: "A modern website for UMKM, brands, communities, and small businesses."
  },
  {
    num: "03",
    title: "Portfolio Website",
    desc: "A personal website to present your work, profile, and credibility."
  },
  {
    num: "04",
    title: "Website Redesign",
    desc: "Turn an outdated website into a cleaner and more premium digital experience."
  }
];

export function Services() {
  return (
    <section id="services" className="py-32 md:py-40 relative">
      <div className="mx-auto max-w-7xl px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight">What I Do</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 md:p-14 rounded-2xl bg-card-dark hover:bg-white/[0.02] transition-colors duration-500 flex flex-col gap-8 group"
            >
              <span className="text-[10px] font-mono tracking-widest text-text-muted/50 group-hover:text-accent-lime transition-colors">{service.num}</span>
              <div>
                <h3 className="text-2xl font-medium mb-3 text-text-main group-hover:opacity-90">{service.title}</h3>
                <p className="text-text-muted leading-relaxed font-light">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
