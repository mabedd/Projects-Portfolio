import { workExperience, companies } from "@/data";
import {
  FadeIn,
  GlowCard,
  SectionHeading,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/primitives";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-cyan/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Career"
          title="Professional"
          highlight="journey"
          description="From full-stack development to solution architecture and enterprise integration — growing with every challenge."
        />

        <div className="relative">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-accent-cyan/50 via-accent-violet/30 to-transparent md:block lg:left-1/2 lg:-translate-x-px" />

          <StaggerContainer className="space-y-8">
            {workExperience.map((item, index) => (
              <StaggerItem key={item.id}>
                <div
                  className={`relative flex flex-col gap-6 md:flex-row md:items-center ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className="hidden lg:block lg:w-1/2" />

                  <div
                    className={`md:w-full lg:w-1/2 ${
                      index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"
                    }`}
                  >
                    <GlowCard
                      glowColor={
                        index % 4 === 0
                          ? "cyan"
                          : index % 4 === 1
                            ? "violet"
                            : index % 4 === 2
                              ? "amber"
                              : "emerald"
                      }
                      className="p-6"
                    >
                      <div className="flex items-start gap-4">
                        <img
                          src={item.thumbnail}
                          alt=""
                          className="h-14 w-14 shrink-0 rounded-xl bg-white/5 p-2"
                        />
                        <div>
                          <span className="text-xs font-medium uppercase tracking-wider text-accent-cyan">
                            Role {String(index + 1).padStart(2, "0")}
                          </span>
                          <h3 className="mt-1 font-display text-xl font-semibold text-white">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-slate-400">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </GlowCard>
                  </div>

                  <div className="absolute left-6 top-8 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-accent-cyan bg-surface md:block lg:left-1/2" />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        <FadeIn className="mt-20">
          <p className="mb-8 text-center text-sm uppercase tracking-widest text-slate-500">
            Platforms & tools I work with
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {companies.map((company) => (
              <div
                key={company.id}
                className="flex items-center gap-2 opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0"
              >
                <img src={company.icon} alt={company.name} className="h-6 w-6 md:h-8 md:w-8" />
                <img
                  src={company.nameIcon}
                  alt={company.name}
                  className="h-5 w-auto md:h-6"
                />
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
