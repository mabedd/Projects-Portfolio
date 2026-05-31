import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface FadeInProps extends HTMLMotionProps<"div"> {
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
}

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.5,
  ...props
}: FadeInProps) {
  const directions = {
    up: { y: 24, x: 0 },
    down: { y: -24, x: 0 },
    left: { x: 24, y: 0 },
    right: { x: -24, y: 0 },
    none: { x: 0, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}

export function StaggerContainer({
  children,
  className,
  stagger = 0.1,
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <FadeIn className={cn("mb-16", align === "center" && "text-center")}>
      {eyebrow && (
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent-cyan">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
        {title}{" "}
        {highlight && (
          <span className="bg-gradient-to-r from-accent-cyan via-accent-violet to-accent-amber bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 max-w-2xl text-base text-slate-400 md:text-lg",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </FadeIn>
  );
}

export function GlowCard({
  children,
  className,
  glowColor = "cyan",
}: {
  children: React.ReactNode;
  className?: string;
  glowColor?: "cyan" | "violet" | "amber" | "emerald";
}) {
  const glows = {
    cyan: "group-hover:shadow-accent-cyan/20",
    violet: "group-hover:shadow-accent-violet/20",
    amber: "group-hover:shadow-accent-amber/20",
    emerald: "group-hover:shadow-accent-emerald/20",
  };

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/10 bg-surface-50/80 backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:shadow-2xl",
        glows[glowColor],
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      {children}
    </div>
  );
}

export function MagneticButton({
  children,
  href,
  variant = "primary",
  className,
  external,
}: {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
}) {
  const variants = {
    primary:
      "bg-gradient-to-r from-accent-cyan to-accent-violet text-surface font-semibold shadow-lg shadow-accent-cyan/25 hover:shadow-accent-violet/30",
    secondary:
      "border border-white/20 bg-white/5 text-white backdrop-blur-sm hover:border-white/40 hover:bg-white/10",
    ghost: "text-slate-300 hover:text-white hover:bg-white/5",
  };

  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm transition-all duration-300 md:text-base",
        variants[variant],
        className
      )}
    >
      {children}
    </motion.a>
  );
}
