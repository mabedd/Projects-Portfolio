import { Check } from "lucide-react";
import { expertiseAreas } from "@/data";
import {
  GlowCard,
  SectionHeading,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/primitives";
import { cn } from "@/lib/utils";

const accentStyles = {
  cyan: {
    icon: "from-accent-cyan/20 to-accent-cyan/5 text-accent-cyan border-accent-cyan/30",
    dot: "bg-accent-cyan",
  },
  violet: {
    icon: "from-accent-violet/20 to-accent-violet/5 text-accent-violet border-accent-violet/30",
    dot: "bg-accent-violet",
  },
  amber: {
    icon: "from-accent-amber/20 to-accent-amber/5 text-accent-amber border-accent-amber/30",
    dot: "bg-accent-amber",
  },
  emerald: {
    icon: "from-accent-emerald/20 to-accent-emerald/5 text-accent-emerald border-accent-emerald/30",
    dot: "bg-accent-emerald",
  },
};

export function Expertise() {
  return (
    <section id="expertise" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-violet/[0.03] to-transparent" />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Expertise"
          title="Where I"
          highlight="excel"
          description="Four pillars of engineering — from intelligent AI products to cloud-native infrastructure and seamless integrations."
        />

        <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {expertiseAreas.map((area) => {
            const styles = accentStyles[area.accent];
            const Icon = area.icon;

            return (
              <StaggerItem key={area.id}>
                <GlowCard glowColor={area.accent} className="h-full p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div
                      className={cn(
                        "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border bg-gradient-to-br",
                        styles.icon
                      )}
                    >
                      <Icon size={22} />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                        {area.subtitle}
                      </p>
                      <h3 className="mt-1 font-display text-xl font-semibold text-white">
                        {area.title}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-slate-400">
                    {area.description}
                  </p>

                  <ul className="mt-6 space-y-2.5">
                    {area.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <span
                          className={cn(
                            "mt-1.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full",
                            styles.dot,
                            "bg-opacity-20"
                          )}
                        >
                          <Check size={10} className={styles.icon.split(" ")[2]} />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlowCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
