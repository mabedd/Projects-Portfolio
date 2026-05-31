import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { profile } from "@/data";
import { AuroraBackground, FloatingOrbs, GradientBeam } from "@/components/ui/background-effects";
import { FadeIn, MagneticButton } from "@/components/ui/primitives";

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % profile.rotatingWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24">
      <AuroraBackground />
      <FloatingOrbs />
      <GradientBeam />

      <div className="relative z-10 mx-auto max-w-6xl px-5 text-center md:px-8">
        <FadeIn delay={0.1}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent-cyan/30 bg-accent-cyan/10 px-4 py-1.5 text-sm text-accent-cyan">
            <Sparkles size={14} />
            <span>Full-Stack · Gen AI · Cloud · DevOps</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Engineering{" "}
            <span className="bg-gradient-to-r from-accent-cyan via-accent-violet to-accent-amber bg-clip-text text-transparent">
              intelligent
            </span>
            <br />
            digital experiences
          </h1>
        </FadeIn>

        <FadeIn delay={0.35}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400 md:text-xl">
            Hi, I&apos;m{" "}
            <span className="font-semibold text-white">{profile.name}</span> — a{" "}
            {profile.title.toLowerCase()} specializing in{" "}
            <span className="relative inline-block h-[1.4em] min-w-[200px] align-bottom text-left">
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIndex}
                  initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                  transition={{ duration: 0.4 }}
                  className="absolute left-0 bg-gradient-to-r from-accent-cyan to-accent-violet bg-clip-text font-semibold text-transparent"
                >
                  {profile.rotatingWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </p>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <MagneticButton href="#projects" variant="primary">
              View my work
            </MagneticButton>
            <MagneticButton href="#contact" variant="secondary">
              Get in touch
            </MagneticButton>
          </div>
        </FadeIn>

        <FadeIn delay={0.65}>
          <div className="mx-auto mt-16 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {profile.stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl font-bold text-white md:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-slate-500 md:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="mt-16 flex justify-center"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-slate-500 transition-colors hover:text-accent-cyan"
            aria-label="Scroll to about section"
          >
            <span className="text-xs uppercase tracking-widest">Explore</span>
            <ArrowDown size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
