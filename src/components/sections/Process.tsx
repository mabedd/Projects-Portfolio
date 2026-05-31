import { processSteps } from "@/data";
import {
  SectionHeading,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/primitives";
import { cn } from "@/lib/utils";

export function Process() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Approach"
          title="How I"
          highlight="deliver"
          description="A structured process from discovery to deployment — ensuring quality at every stage."
        />

        <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {processSteps.map((step) => {
            const Icon = step.icon;
            return (
              <StaggerItem key={step.phase}>
                <div
                  className={cn(
                    "group relative h-full overflow-hidden rounded-2xl border bg-gradient-to-b p-6 transition-all duration-500 hover:-translate-y-1 md:p-8",
                    step.border,
                    step.color
                  )}
                >
                  <div className="mb-6 flex items-center justify-between">
                    <span className="font-display text-4xl font-bold text-white/10">
                      {step.phase}
                    </span>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-transform group-hover:scale-110">
                      <Icon size={20} />
                    </div>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
