import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import {
  projects,
  categoryLabels,
  categoryColors,
  type Project,
} from "@/data";
import {
  FadeIn,
  GlowCard,
  SectionHeading,
} from "@/components/ui/primitives";
import { cn } from "@/lib/utils";

type Filter = "all" | Project["category"];

const filters: { label: string; value: Filter }[] = [
  { label: "All", value: "all" },
  { label: "Gen AI", value: "ai" },
  { label: "Full-Stack", value: "fullstack" },
  { label: "Dashboards", value: "dashboard" },
  { label: "Marketing", value: "marketing" },
];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected"
          highlight="projects"
          description="Production applications spanning AI chatbots, SaaS platforms, analytics dashboards, and marketing experiences."
        />

        <FadeIn className="mb-10 flex flex-wrap justify-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActiveFilter(filter.value)}
              className={cn(
                "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                activeFilter === filter.value
                  ? "text-surface"
                  : "text-slate-400 hover:text-white"
              )}
            >
              {activeFilter === filter.value && (
                <motion.span
                  layoutId="project-filter"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-cyan to-accent-violet"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{filter.label}</span>
            </button>
          ))}
        </FadeIn>

        <motion.div
          layout
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <GlowCard className="group flex h-full flex-col overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-50 via-transparent to-transparent opacity-80" />
        <span
          className={cn(
            "absolute left-4 top-4 rounded-full border px-3 py-1 text-xs font-medium backdrop-blur-sm",
            categoryColors[project.category]
          )}
        >
          {categoryLabels[project.category]}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold text-white">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-slate-500"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
          <div className="flex -space-x-2">
            {project.techIcons.map((icon) => (
              <div
                key={icon}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-surface-100"
              >
                <img src={icon} alt="" className="h-4 w-4 object-contain" />
              </div>
            ))}
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-accent-cyan transition-colors hover:text-accent-violet"
          >
            Live site
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </GlowCard>
  );
}
