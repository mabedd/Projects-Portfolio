import { skillCategories, techMarquee } from "@/data";
import {
  FadeIn,
  GlowCard,
  SectionHeading,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/primitives";

export function TechStack() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Tools I"
          highlight="master"
          description="A curated stack spanning modern frontend, AI integration, cloud services, and DevOps tooling."
        />

        <StaggerContainer className="mb-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <StaggerItem key={category.title}>
                <GlowCard className="h-full p-5">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-cyan/10 text-accent-cyan">
                      <Icon size={18} />
                    </div>
                    <h3 className="font-display font-semibold text-white">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-slate-400 transition-colors hover:border-accent-cyan/30 hover:text-accent-cyan"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </GlowCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>

      <FadeIn>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-surface to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-surface to-transparent" />

          <div className="flex animate-marquee gap-8 whitespace-nowrap">
            {[...techMarquee, ...techMarquee].map((tech, i) => (
              <div
                key={`${tech.name}-${i}`}
                className="flex shrink-0 items-center gap-3 rounded-2xl border border-white/10 bg-surface-50/80 px-6 py-4 backdrop-blur-sm"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="h-8 w-8 object-contain"
                />
                <span className="font-display text-sm font-medium text-slate-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
