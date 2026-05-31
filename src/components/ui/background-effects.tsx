import { motion } from "framer-motion";

export function AuroraBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -left-1/4 -top-1/4 h-[600px] w-[600px] rounded-full bg-accent-cyan/20 blur-[120px] animate-pulseGlow" />
      <div
        className="absolute -right-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-accent-violet/15 blur-[100px] animate-pulseGlow"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-accent-amber/10 blur-[100px] animate-pulseGlow"
        style={{ animationDelay: "2s" }}
      />
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
    </div>
  );
}

export function FloatingOrbs() {
  const orbs = [
    { size: 8, x: "10%", y: "20%", delay: 0, color: "bg-accent-cyan/40" },
    { size: 6, x: "85%", y: "15%", delay: 1, color: "bg-accent-violet/40" },
    { size: 10, x: "75%", y: "70%", delay: 2, color: "bg-accent-amber/30" },
    { size: 5, x: "20%", y: "75%", delay: 0.5, color: "bg-accent-emerald/40" },
  ];

  return (
    <>
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${orb.color} blur-sm`}
          style={{ width: orb.size, height: orb.size, left: orb.x, top: orb.y }}
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: orb.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
}

export function GradientBeam() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 h-px overflow-hidden">
      <div className="h-full w-1/3 animate-shimmer bg-gradient-to-r from-transparent via-accent-cyan/60 to-transparent bg-[length:200%_100%]" />
    </div>
  );
}
