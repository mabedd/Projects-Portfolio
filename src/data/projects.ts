export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  techIcons: string[];
  link: string;
  category: "ai" | "fullstack" | "dashboard" | "marketing";
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Metaversus Campaign",
    description:
      "Stunning animated marketing campaign site with immersive motion design, built for high-impact brand storytelling.",
    image: "/p6.png",
    tags: ["React", "Framer Motion", "Marketing"],
    techIcons: ["/next.svg", "/tail.svg", "/framer.png"],
    link: "https://metaversusnext.netlify.app/",
    category: "marketing",
  },
  {
    id: 2,
    title: "Perfection Strength",
    description:
      "Full-featured real estate company website with modern UI, responsive layouts, and production hosting.",
    image: "/p2.png",
    tags: ["React", "Real Estate", "Production"],
    techIcons: ["/re.svg", "/tail.svg", "/ts.svg", "/framer.png", "/cpanel.png"],
    link: "https://perfectionandstrength.sa",
    category: "fullstack",
  },
  {
    id: 3,
    title: "eCommerce Analytics Dashboard",
    description:
      "Comprehensive admin analytics dashboard for eCommerce with rich data visualization and Shadcn UI components.",
    image: "/p5.png",
    tags: ["Next.js", "Analytics", "Dashboard"],
    techIcons: ["/next.svg", "/tail.svg", "/shad.png"],
    link: "https://shadcn-ecommerce.netlify.app",
    category: "dashboard",
  },
  {
    id: 4,
    title: "AI Chatbot",
    description:
      "ChatGPT-style conversational AI application with streaming responses, context management, and modern UX.",
    image: "/p4.png",
    tags: ["Gen AI", "OpenAI", "Next.js"],
    techIcons: ["/next.svg", "/tail.svg", "/ts.svg", "/openai.svg", "/vercel.png"],
    link: "https://nextjs-openai-1cgrd1kn5-mohammed-abeds-projects.vercel.app/",
    category: "ai",
  },
  {
    id: 5,
    title: "Article Summarizer",
    description:
      "AI-powered SaaS for intelligent article summarization using GPT-4, with subscription-ready architecture.",
    image: "/p3.png",
    tags: ["SaaS", "GPT-4", "Summarization"],
    techIcons: ["/next.svg", "/tail.svg", "/ts.svg", "/openai.svg", "/redux.png", "/vercel.png"],
    link: "https://667625e6cf35c43c5498f4bc--article-gptsummerizer.netlify.app/",
    category: "ai",
  },
  {
    id: 6,
    title: "Shoppy Admin",
    description:
      "Enterprise-grade eCommerce admin dashboard with Syncfusion components for inventory, orders, and analytics.",
    image: "/p1.png",
    tags: ["Dashboard", "eCommerce", "Enterprise"],
    techIcons: ["/re.svg", "/tail.svg", "/ts.svg", "/syncfusion.png"],
    link: "https://admin-shoppy.netlify.app",
    category: "dashboard",
  },
];

export const categoryLabels: Record<Project["category"], string> = {
  ai: "Generative AI",
  fullstack: "Full-Stack",
  dashboard: "Dashboard",
  marketing: "Marketing",
};

export const categoryColors: Record<Project["category"], string> = {
  ai: "bg-accent-violet/20 text-accent-violet border-accent-violet/30",
  fullstack: "bg-accent-cyan/20 text-accent-cyan border-accent-cyan/30",
  dashboard: "bg-accent-amber/20 text-accent-amber border-accent-amber/30",
  marketing: "bg-accent-emerald/20 text-accent-emerald border-accent-emerald/30",
};
