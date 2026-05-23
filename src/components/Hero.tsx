import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const navbarHeight = 96;
      let extraOffset = 16;
      if (id === "process" || id === "contact") {
        extraOffset = 40;
      }
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - navbarHeight - extraOffset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative min-h-[90vh] pt-24 pb-12 overflow-x-clip flex items-center">
      <div className="mx-auto max-w-7xl px-8 w-full relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6 lg:gap-8"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.05] tracking-tight">
            I design and build modern websites that make brands look more{" "}
            <span className="font-accent text-accent-lime text-5xl md:text-6xl lg:text-[4.5rem] mt-1 inline-block -rotate-1 opacity-90">
              credible.
            </span>
          </h1>

          <p className="text-base md:text-lg text-text-muted max-w-lg leading-relaxed font-light mt-0">
            Landing pages, business websites, portfolios, and redesigns with clean structure, modern visuals, and clear direction.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, "contact")}
              className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-accent-lime text-bg-dark font-medium hover:bg-white transition-all duration-300 group"
            >
              Start a Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#works"
              onClick={(e) => handleScroll(e, "works")}
              className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-transparent border border-white/10 text-text-main font-medium hover:bg-white/5 transition-all duration-300"
            >
              View Projects
            </a>
          </div>

          <div className="pt-4 flex items-center gap-3 text-sm text-text-muted/80">
            <div className="w-1.5 h-1.5 rounded-full bg-accent-lime/60" />
            <p className="font-light">Available for landing pages, website redesigns, and portfolio websites.</p>
          </div>
        </motion.div>

        {/* Visual Element */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="relative h-[400px] lg:h-[500px] w-full hidden md:block"
        >
          {/* Desktop Browser Mockup */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full max-w-[460px] lg:max-w-[520px] aspect-[16/10] bg-card-dark rounded-2xl border border-white/[0.08] shadow-2xl shadow-black/80 overflow-hidden transform-gpu rotate-2 hover:rotate-1 transition-transform duration-700 z-0">
            {/* Window Controls */}
            <div className="h-8 border-b border-white/[0.04] bg-white/[0.01] flex items-center px-4 gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
            </div>

            {/* Browser Content */}
            <div className="p-6 lg:p-8 flex flex-col gap-6 h-full relative">
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-lime/[0.02] rounded-full blur-[60px]"></div>

              {/* Navbar skeleton */}
              <div className="flex justify-between items-center relative z-10">
                <div className="w-16 h-3 bg-white/[0.15] rounded-sm"></div>
                <div className="flex gap-4">
                  <div className="w-8 h-2 bg-text-muted/20 rounded-sm"></div>
                  <div className="w-8 h-2 bg-text-muted/20 rounded-sm"></div>
                  <div className="w-12 h-2 bg-text-muted/20 rounded-sm"></div>
                </div>
              </div>

              {/* Hero skeleton */}
              <div className="flex flex-col gap-3 relative z-10 mt-4">
                <div className="w-3/4 h-8 bg-white/[0.12] rounded"></div>
                <div className="w-1/2 h-8 bg-white/[0.12] rounded"></div>

                <div className="mt-2 flex flex-col gap-2">
                  <div className="w-2/3 h-2 bg-text-muted/20 rounded-sm"></div>
                  <div className="w-1/2 h-2 bg-text-muted/20 rounded-sm"></div>
                </div>

                <div className="w-32 h-8 bg-accent-lime rounded-full flex items-center justify-center mt-4 border border-accent-lime/20 shadow-[0_0_15px_rgba(199,255,94,0.15)]">
                  <div className="w-16 h-1.5 bg-bg-dark rounded-sm"></div>
                </div>
              </div>

              {/* Service cards skeleton */}
              <div className="grid grid-cols-2 gap-4 mt-auto relative z-10">
                <div className="h-24 bg-white/[0.02] border border-white/[0.05] rounded-xl p-4 flex flex-col gap-2 backdrop-blur-sm">
                  <div className="w-6 h-6 bg-white/[0.05] rounded mt-auto"></div>
                  <div className="w-16 h-2 bg-white/10 rounded-sm mt-1"></div>
                </div>
                <div className="h-24 bg-white/[0.02] border border-white/[0.05] rounded-xl p-4 flex flex-col gap-2 backdrop-blur-sm">
                  <div className="w-6 h-6 bg-white/[0.05] rounded mt-auto"></div>
                  <div className="w-16 h-2 bg-white/10 rounded-sm mt-1"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Preview Mockup */}
          <div className="absolute left-0 top-[20%] lg:left-4 lg:top-[15%] w-[160px] h-[340px] lg:w-[180px] lg:h-[380px] bg-bg-dark rounded-[2rem] border border-white/[0.12] shadow-2xl shadow-black/90 overflow-hidden transform-gpu -rotate-6 hover:-rotate-4 transition-transform duration-700 z-10">
            {/* Notch */}
            <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-20">
              <div className="w-16 h-4 bg-black rounded-b-xl border-x border-b border-white/[0.1]"></div>
            </div>

            <div className="h-full bg-gradient-to-b from-card-dark to-bg-dark p-4 pt-10 flex flex-col gap-5 relative">
              {/* Subtle Mobile Glow */}
              <div className="absolute inset-x-0 top-12 h-32 bg-accent-lime/[0.03] blur-[40px]"></div>

              {/* Mobile Navbar */}
              <div className="flex justify-between items-center relative z-10">
                <div className="w-12 h-2 bg-white/[0.15] rounded-sm"></div>
                <div className="w-5 h-2 bg-white/[0.05] rounded-sm"></div>
              </div>

              {/* Mobile Hero */}
              <div className="flex flex-col gap-2 items-center text-center mt-3 relative z-10">
                <div className="w-full h-5 bg-white/[0.12] rounded"></div>
                <div className="w-4/5 h-5 bg-white/[0.12] rounded"></div>

                <div className="flex flex-col gap-1.5 w-full items-center mt-2.5">
                  <div className="w-full h-1.5 bg-text-muted/20 rounded-sm"></div>
                  <div className="w-5/6 h-1.5 bg-text-muted/20 rounded-sm"></div>
                </div>

                <div className="w-full h-9 bg-accent-lime rounded-full mt-4 flex items-center justify-center border border-accent-lime/20 shadow-[0_0_10px_rgba(199,255,94,0.1)]">
                  <div className="w-12 h-1.5 bg-bg-dark rounded-sm"></div>
                </div>
              </div>

              {/* Mobile Cards */}
              <div className="flex flex-col gap-2 mt-auto relative z-10">
                <div className="h-16 bg-white/[0.02] border border-white/[0.05] rounded-xl flex items-end p-3">
                  <div className="w-12 h-1.5 bg-white/10 rounded-sm"></div>
                </div>
                <div className="h-8 bg-white/[0.02] border border-white/[0.05] rounded-t-xl"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
