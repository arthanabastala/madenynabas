import { motion } from 'motion/react';

const projects = [
  {
    name: "ORIGINE",
    type: "Coffee Brand Website Concept",
    desc: "A dark, cinematic landing page for a modern coffee brand.",
  },
  {
    name: "FRAME",
    type: "Portfolio Website Concept",
    desc: "A clean personal website for creators, designers, and freelancers.",
  },
  {
    name: "LOCAL GOODS",
    type: "UMKM Website Concept",
    desc: "A simple business website with modern layout and clear product presentation.",
  }
];

export function Projects() {
  return (
    <section id="works" className="py-32 md:py-40 relative">
      <div className="mx-auto max-w-7xl px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 flex items-baseline justify-between"
        >
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight">Selected Concepts</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col gap-6 cursor-pointer"
            >
              {/* Mockup Placeholder */}
              <div className="w-full aspect-[4/3] bg-card-dark overflow-hidden relative mb-4">
                <div className="absolute inset-0 flex items-center justify-center bg-white/[0.01] group-hover:bg-white/[0.03] transition-colors duration-500">
                  <span className="text-text-muted/30 font-mono text-xs uppercase tracking-widest">Image</span>
                </div>
              </div>
              
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-medium tracking-tight text-text-main group-hover:opacity-80 transition-opacity">
                    {project.name}
                  </h3>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-text-muted/50">
                    Concept
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-text-muted mb-1">{project.type}</p>
                  <p className="text-sm text-text-muted/60 leading-relaxed font-light">
                    {project.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
