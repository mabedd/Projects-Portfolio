import { ArrowUpRight, Mail } from "lucide-react";
import { socialLinks } from "@/data";
import { FadeIn } from "@/components/ui/primitives";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-surface-50/50 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 md:flex-row md:px-8">
        <FadeIn>
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent-cyan to-accent-violet font-display text-sm font-bold text-surface">
              MA
            </span>
            <div>
              <p className="font-display text-sm font-semibold text-white">
                Mohammed Abed
              </p>
              <p className="text-xs text-slate-500">
                © {year} · All rights reserved
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all hover:border-accent-cyan/40 hover:bg-accent-cyan/10"
                aria-label={link.name}
              >
                <img src={link.icon} alt={link.name} className="h-4 w-4 opacity-80" />
              </a>
            ))}
            <a
              href="mailto:mohammed.o.abed@outlook.com"
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition-all hover:border-accent-cyan/40 hover:text-white"
            >
              <Mail size={14} />
              Email
              <ArrowUpRight size={12} className="opacity-50" />
            </a>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
