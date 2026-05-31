export const navItems = [
  { name: "About", href: "#about" },
  { name: "Expertise", href: "#expertise" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
] as const;

export const profile = {
  name: "Mohammed Abed",
  title: "Full-Stack Software Engineer",
  tagline: "Building intelligent, scalable systems at the intersection of software, AI, and cloud.",
  email: "mohammed.o.abed@outlook.com",
  location: "Available globally · Remote-friendly",
  rotatingWords: [
    "Gen AI Applications",
    "Cloud Architecture",
    "Full-Stack Systems",
    "DevOps Pipelines",
    "Enterprise Integrations",
  ],
  stats: [
    { label: "Projects shipped", value: "15+" },
    { label: "Years building", value: "5+" },
    { label: "Tech domains", value: "4" },
  ],
} as const;

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/mabedd",
    icon: "/git.svg",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mohammed-abed-itil/",
    icon: "/link.svg",
  },
] as const;
