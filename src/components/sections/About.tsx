import { aboutCards } from "@/data";
import {
  GlowCard,
  SectionHeading,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/primitives";

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="About"
          title="Crafting software that"
          highlight="matters"
          description={profileTagline}
        />

        <StaggerContainer className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {aboutCards.map((card) => (
            <StaggerItem
              key={card.id}
              className={card.span}
            >
              <GlowCard
                glowColor={card.featured ? "cyan" : "violet"}
                className={`h-full p-6 md:p-8 ${card.featured ? "min-h-[280px]" : ""}`}
              >
                {card.featured && (
                  <div className="mb-4 inline-flex rounded-full border border-accent-cyan/30 bg-accent-cyan/10 px-3 py-1 text-xs font-medium text-accent-cyan">
                    Core philosophy
                  </div>
                )}
                <h3 className="font-display text-xl font-semibold text-white md:text-2xl">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400 md:text-base">
                  {card.description}
                </p>
                {card.featured && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {["React", "TypeScript", "OpenAI", "Docker", "Cloud"].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </GlowCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

const profileTagline =
  "From AI-powered SaaS platforms to enterprise dashboards — I build full-stack solutions that are scalable, beautiful, and production-ready.";
