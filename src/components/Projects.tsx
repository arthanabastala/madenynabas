import { motion } from 'motion/react';
import { useState } from 'react';

const projects = [
  {
    name: "ORIGINE",
    type: "Coffee Brand Website Concept",
    desc: "A dark, cinematic landing page concept for a modern specialty coffee brand.",
    link: "https://originecoffe.vercel.app/"
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

function MockupFallback({ name }: { name: string }) {
  if (name === "ORIGINE") {
    return (
      <div className="absolute inset-0 p-4 md:p-6 flex flex-col gap-4">
        <div className="flex justify-between items-center opacity-70">
          <div className="w-16 h-2 bg-text-main/80 rounded-sm"></div>
          <div className="w-6 h-2 bg-text-main/40 rounded-sm"></div>
        </div>
        <div className="my-auto flex flex-col items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-lime/20 to-transparent mb-2 border border-accent-lime/10"></div>
          <div className="w-3/4 h-5 bg-text-main/90 rounded-sm"></div>
          <div className="w-1/2 h-5 bg-text-main/90 rounded-sm"></div>
          <div className="flex gap-2 mt-2 w-full justify-center">
             <div className="w-24 h-2 bg-text-muted/50 rounded-sm"></div>
             <div className="w-16 h-2 bg-text-muted/50 rounded-sm"></div>
          </div>
          <div className="w-24 h-8 bg-black border border-white/10 rounded-full mt-4 flex items-center justify-center shadow-[0_0_20px_rgba(199,255,94,0.05)]">
             <div className="w-10 h-1 bg-white/80 rounded-sm"></div>
          </div>
        </div>
      </div>
    );
  }

  if (name === "FRAME") {
    return (
      <div className="absolute inset-0 p-4 md:p-6 flex flex-col gap-4 bg-[#111]">
        <div className="flex justify-between items-center mb-2">
          <div className="w-8 h-8 rounded-full bg-white/10"></div>
          <div className="w-24 h-1.5 bg-white/10 rounded-full"></div>
        </div>
        <div className="w-2/3 h-4 bg-white/20 rounded-sm mb-1"></div>
        <div className="w-1/2 h-4 bg-white/20 rounded-sm"></div>
        <div className="w-3/4 h-2 bg-white/5 rounded-sm mt-2"></div>
        <div className="mt-4 grid grid-cols-2 gap-3 h-full pb-4">
           <div className="bg-white/[0.03] rounded-lg border border-white/[0.05]"></div>
           <div className="bg-white/[0.03] rounded-lg border border-white/[0.05]"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 p-4 md:p-5 flex flex-col gap-3 bg-[#0c0c0c]">
      <div className="flex justify-between items-center pb-3 border-b border-white/[0.05]">
          <div className="w-20 h-3 bg-white/20 rounded-sm"></div>
          <div className="flex gap-2">
             <div className="w-6 h-1 bg-white/10 rounded-sm"></div>
             <div className="w-6 h-1 bg-white/10 rounded-sm"></div>
          </div>
      </div>
      <div className="h-16 shrink-0 w-full bg-accent-lime/[0.05] border border-accent-lime/10 rounded-lg flex items-center px-4">
         <div className="w-1/3 h-2 bg-accent-lime/40 rounded-sm"></div>
      </div>
      <div className="grid grid-cols-3 gap-2 mt-1 h-full pb-2">
         {[1, 2, 3].map((i) => (
           <div key={i} className="bg-white/[0.02] rounded-lg flex flex-col p-2 gap-2 border border-white/[0.03]">
              <div className="flex-1 bg-white/[0.05] rounded-sm mb-1"></div>
              <div className="h-1.5 w-3/4 bg-white/20 rounded-sm"></div>
              <div className="h-1.5 w-1/2 bg-white/10 rounded-sm"></div>
           </div>
         ))}
      </div>
    </div>
  );
}

function ProjectPreview({ project }: { project: typeof projects[0] }) {
  const [imgError, setImgError] = useState(false);
  const imagePath = project.name === "ORIGINE" ? "/coffeweb.png" : null;

  return (
    <div className="w-full aspect-[16/10] bg-card-dark rounded-xl border border-white/[0.04] overflow-hidden relative flex flex-col group-hover:border-white/[0.12] transition-colors duration-500">
      {/* Browser Header */}
      <div className="h-6 border-b border-white/[0.04] bg-white/[0.01] flex items-center px-3 gap-1.5 shrink-0 z-10 transition-colors duration-500 group-hover:bg-white/[0.03]">
        <div className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-accent-lime/80 transition-colors duration-300" />
        <div className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-accent-lime/40 transition-colors duration-300 delay-75" />
        <div className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-accent-lime/20 transition-colors duration-300 delay-150" />
      </div>
      
      {/* Browser Content */}
      <div className="flex-1 relative overflow-hidden bg-[#0A0A0A]">
        {imagePath && !imgError ? (
          <img 
            src={imagePath} 
            alt={project.name}
            className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-all duration-700 ease-out group-hover:scale-[1.03]"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="absolute inset-0 opacity-80 group-hover:scale-[1.03] group-hover:opacity-100 transition-all duration-700 ease-out">
            <MockupFallback name={project.name} />
          </div>
        )}
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section className="py-12 md:py-16 relative">
      <div className="mx-auto max-w-7xl px-8">
        
        <motion.div 
          id="works"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 flex items-baseline justify-between"
        >
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight">Selected Concepts</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, idx) => {
            const isClickable = !!project.link;
            const cardProps = {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, margin: "-50px" },
              transition: { duration: 0.6, delay: idx * 0.1, ease: "easeOut" },
              className: "group flex flex-col gap-4 h-full cursor-pointer"
            };

            const content = (
              <>
                <ProjectPreview project={project} />
                
                <div className="flex flex-col gap-2 h-full">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-medium tracking-tight text-text-main group-hover:text-text-main transition-opacity duration-300 relative">
                      {project.name}
                    </h3>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-text-muted/50 border border-white/5 bg-white/[0.02] px-2 py-0.5 rounded backdrop-blur-sm group-hover:border-white/10 transition-colors">
                      Concept Project
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm font-medium text-text-muted mb-1">{project.type}</p>
                    <p className="text-sm text-text-muted/60 leading-relaxed font-light mb-4">
                      {project.desc}
                    </p>
                    {isClickable && (
                      <div className="flex items-center mt-2">
                        <span className="inline-flex items-center justify-center px-4 py-1.5 text-xs font-medium bg-white/[0.03] text-text-muted border border-white/10 rounded-full group-hover:bg-accent-lime group-hover:text-bg-dark group-hover:border-accent-lime transition-all duration-300">
                          View Demo
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </>
            );

            return isClickable ? (
              <motion.a
                key={idx}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                {...cardProps}
              >
                {content}
              </motion.a>
            ) : (
              <motion.div
                key={idx}
                {...cardProps}
              >
                {content}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
