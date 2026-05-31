import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Mail, Send } from "lucide-react";
import { profile, socialLinks } from "@/data";
import { FadeIn, MagneticButton } from "@/components/ui/primitives";

const ctaWords = ["INNOVATIVE", "SCALABLE", "INTELLIGENT", "RELIABLE"];

export function Contact() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % ctaWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-t from-accent-violet/[0.05] to-transparent" />

      <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
        <FadeIn>
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-surface-50/80 p-10 backdrop-blur-xl md:p-16">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-cyan">
              Let&apos;s collaborate
            </p>

            <h2 className="mt-4 font-display text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Ready to build something{" "}
              <span className="relative inline-block min-w-[180px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={wordIndex}
                    initial={{ opacity: 0, rotateX: 90 }}
                    animate={{ opacity: 1, rotateX: 0 }}
                    exit={{ opacity: 0, rotateX: -90 }}
                    transition={{ duration: 0.4 }}
                    className="inline-block bg-gradient-to-r from-accent-cyan to-accent-violet bg-clip-text text-transparent"
                  >
                    {ctaWords[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
              ?
            </h2>

            <p className="mx-auto mt-4 max-w-lg text-slate-400">
              Whether you need a Gen AI product, a full-stack platform, or cloud
              architecture — I&apos;d love to hear about your project.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <MagneticButton
                href={`mailto:${profile.email}`}
                variant="primary"
                className="min-w-[200px]"
              >
                <Mail size={18} />
                {profile.email}
              </MagneticButton>
              <MagneticButton href="#projects" variant="secondary">
                Browse projects
              </MagneticButton>
            </div>

            <div className="mt-10 flex items-center justify-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-slate-400 transition-all hover:border-accent-cyan/40 hover:text-white"
                >
                  <img src={link.icon} alt={link.name} className="h-4 w-4 opacity-70" />
                  {link.name}
                  <ArrowUpRight
                    size={12}
                    className="opacity-0 transition-all group-hover:opacity-100"
                  />
                </a>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-500">
            <Send size={14} />
            {profile.location}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
