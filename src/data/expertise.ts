import {
    Brain,
    Cloud,
    Code2,
    Container,
    Cpu,
    Database,
    GitBranch,
    Layers,
    MessageSquare,
    Server,
    Sparkles,
    Workflow,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface ExpertiseArea {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    icon: LucideIcon;
    accent: 'cyan' | 'violet' | 'amber' | 'emerald';
    highlights: string[];
}

export const expertiseAreas: ExpertiseArea[] = [
    {
        id: 'fullstack',
        title: 'Full-Stack Development',
        subtitle: 'End-to-end product engineering',
        description:
            'Designing and shipping production-grade web applications with modern React ecosystems, robust APIs, and polished user experiences.',
        icon: Code2,
        accent: 'cyan',
        highlights: [
            'React · Next.js · TypeScript',
            'REST & GraphQL APIs',
            'Responsive UI with Tailwind CSS',
            'State management & real-time features',
        ],
    },
    {
        id: 'genai',
        title: 'Generative AI',
        subtitle: 'LLM-powered products & automation',
        description:
            'Building intelligent applications with OpenAI, RAG pipelines, and conversational interfaces that solve real business problems.',
        icon: Brain,
        accent: 'violet',
        highlights: [
            'GPT & OpenAI API integration',
            'Chatbots & AI assistants',
            'Content generation & summarization',
            'Prompt engineering & AI UX',
        ],
    },
    {
        id: 'cloud',
        title: 'Cloud & Architecture',
        subtitle: 'Scalable, resilient systems',
        description:
            'Architecting cloud-native solutions with clean separation of concerns, from solution design to production deployment.',
        icon: Cloud,
        accent: 'amber',
        highlights: [
            'Solution architecture & system design',
            'Serverless & edge deployment',
            'AWS · Azure · GCP · Vercel',
            'Performance & reliability tuning',
        ],
    },
    {
        id: 'devops',
        title: 'DevOps & Integration',
        subtitle: 'Ship fast, ship safely',
        description:
            'Automating delivery pipelines, containerizing services, and integrating enterprise systems with external platforms.',
        icon: Container,
        accent: 'emerald',
        highlights: [
            'Docker & container workflows',
            'CI/CD & Netlify deployment',
            'Service integration engineering',
            'Agile delivery & best practices',
        ],
    },
];

export interface SkillCategory {
    title: string;
    icon: LucideIcon;
    skills: string[];
}

export const skillCategories: SkillCategory[] = [
    {
        title: 'Frontend',
        icon: Layers,
        skills: [
            'React',
            'Next.js',
            'TypeScript',
            'Tailwind CSS',
            'Framer Motion',
            'Redux',
            'Shadcn',
            'Syncfusion',
        ],
    },
    {
        title: 'Backend & Data',
        icon: Database,
        skills: [
            'Node.js',
            'Python',
            '.NET',
            'REST APIs',
            'GraphQL',
            'Appwrite',
            'cPanel',
            'SQL & NoSQL',
        ],
    },
    {
        title: 'AI & ML',
        icon: Sparkles,
        skills: [
            'OpenAI',
            'Ollama',
            'AI Chatbots',
            'RAG',
            'LangChain',
            'LlamaIndex',
            'Prompt Engineering',
            'SaaS AI Apps',
        ],
    },
    {
        title: 'Cloud & DevOps',
        icon: Server,
        skills: [
            'Docker',
            'Netlify',
            'Vercel',
            'Cloudinary',
            'CI/CD',
            'Hostinger',
            'AWS',
            'Azure',
            'GCP',
        ],
    },
    {
        title: 'Integration',
        icon: Workflow,
        skills: ['Enterprise APIs', 'System Integration', 'Apigee', 'API Gateway'],
    },
    {
        title: 'Tools',
        icon: GitBranch,
        skills: ['Git', 'GitHub', 'Jira', 'Trello', 'Notion', 'Figma'],
    },
];

export const techMarquee = [
    { name: 'React', icon: '/re.svg' },
    { name: 'Next.js', icon: '/next.svg' },
    { name: 'TypeScript', icon: '/ts.svg' },
    { name: 'Tailwind', icon: '/tail.svg' },
    { name: 'OpenAI', icon: '/openai.svg' },
    { name: 'Docker', icon: '/dock.svg' },
    { name: 'Netlify', icon: '/netlify.png' },
    { name: 'Vercel', icon: '/vercel.svg' },
    { name: 'Cloudinary', icon: '/cloud.svg' },
    { name: 'Appwrite', icon: '/app.svg' },
    { name: 'Framer', icon: '/framer.png' },
    { name: 'Redux', icon: '/redux.png' },
    { name: 'Shadcn', icon: '/shad.png' },
    { name: 'Syncfusion', icon: '/syncfusion.png' },
];

export const aboutCards = [
    {
        id: 1,
        title: 'Problem solver at heart',
        description:
            'I turn complex requirements into elegant, maintainable software — from AI-powered SaaS to enterprise dashboards.',
        span: 'lg:col-span-2 lg:row-span-2',
        featured: true,
    },
    {
        id: 2,
        title: 'Collaborative by default',
        description:
            'Open communication, agile workflows, and tight feedback loops with stakeholders and teams.',
        span: 'lg:col-span-1',
        featured: false,
    },
    {
        id: 3,
        title: 'Global & flexible',
        description:
            'Experienced working across time zones with distributed teams and international clients.',
        span: 'lg:col-span-1',
        featured: false,
    },
    {
        id: 4,
        title: 'Always learning',
        description:
            'Staying ahead in Gen AI, cloud-native patterns, and modern frontend architecture.',
        span: 'lg:col-span-2',
        featured: false,
    },
];

export const processSteps = [
    {
        phase: '01',
        title: 'Discovery & Architecture',
        description:
            'Deep-dive into goals, users, and constraints. Define system architecture, AI capabilities, and integration points.',
        icon: Cpu,
        color: 'from-accent-cyan/20 to-accent-cyan/5',
        border: 'border-accent-cyan/30',
    },
    {
        phase: '02',
        title: 'Build & Iterate',
        description:
            'Ship in focused sprints with design systems, API contracts, and continuous demos. Full-stack + AI features in parallel.',
        icon: MessageSquare,
        color: 'from-accent-violet/20 to-accent-violet/5',
        border: 'border-accent-violet/30',
    },
    {
        phase: '03',
        title: 'Deploy & Scale',
        description:
            'Production deployment with CI/CD, monitoring, and ongoing optimization. Cloud-ready from day one.',
        icon: Cloud,
        color: 'from-accent-emerald/20 to-accent-emerald/5',
        border: 'border-accent-emerald/30',
    },
];
