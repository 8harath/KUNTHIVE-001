export type ProjectCategory = "all" | "landing-pages" | "web-apps" | "dashboards" | "tools";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    category: "web-apps",
    description: "Full-stack e-commerce platform with payment integration, product management, and order tracking.",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    image: "/projects/ecommerce.png",
    link: "https://example.com",
    github: "https://github.com"
  },
  {
    id: "2",
    title: "SaaS Landing Page",
    category: "landing-pages",
    description: "Modern landing page for a SaaS product with animations and conversion-focused design.",
    tags: ["React", "Framer Motion", "Tailwind"],
    image: "/projects/saas-landing.png",
    link: "https://example.com"
  },
  {
    id: "3",
    title: "Analytics Dashboard",
    category: "dashboards",
    description: "Real-time analytics dashboard with interactive charts and data visualization.",
    tags: ["React", "D3.js", "WebSocket"],
    image: "/projects/analytics.png",
    link: "https://example.com"
  },
  {
    id: "4",
    title: "AI Content Generator",
    category: "tools",
    description: "AI-powered content generation tool using GPT-4 for marketing copy and blog posts.",
    tags: ["OpenAI", "Next.js", "TypeScript"],
    image: "/projects/ai-tool.png",
    github: "https://github.com"
  },
  {
    id: "5",
    title: "Portfolio Template",
    category: "landing-pages",
    description: "Customizable portfolio template for developers and designers with dark mode support.",
    tags: ["Next.js", "Tailwind", "MDX"],
    image: "/projects/portfolio.png",
    link: "https://example.com",
    github: "https://github.com"
  },
  {
    id: "6",
    title: "Task Management App",
    category: "web-apps",
    description: "Collaborative task management application with real-time updates and team features.",
    tags: ["React", "Firebase", "Material-UI"],
    image: "/projects/taskmanager.png",
    link: "https://example.com"
  },
  {
    id: "7",
    title: "Financial Dashboard",
    category: "dashboards",
    description: "Personal finance dashboard for tracking expenses, budgets, and investment portfolios.",
    tags: ["Next.js", "Chart.js", "Prisma"],
    image: "/projects/finance.png",
    link: "https://example.com"
  },
  {
    id: "8",
    title: "Restaurant Landing",
    category: "landing-pages",
    description: "Beautiful landing page for a restaurant with online reservation and menu showcase.",
    tags: ["React", "GSAP", "Tailwind"],
    image: "/projects/restaurant.png",
    link: "https://example.com"
  },
  {
    id: "9",
    title: "Code Snippet Manager",
    category: "tools",
    description: "Developer tool for organizing and sharing code snippets with syntax highlighting.",
    tags: ["Next.js", "Prism.js", "MongoDB"],
    image: "/projects/snippets.png",
    github: "https://github.com"
  },
  {
    id: "10",
    title: "Social Media Dashboard",
    category: "dashboards",
    description: "Unified dashboard for managing multiple social media accounts and analytics.",
    tags: ["React", "Redux", "API Integration"],
    image: "/projects/social-dashboard.png",
    link: "https://example.com"
  },
  {
    id: "11",
    title: "Blog Platform",
    category: "web-apps",
    description: "Modern blog platform with markdown support, comments, and SEO optimization.",
    tags: ["Next.js", "MDX", "Vercel"],
    image: "/projects/blog.png",
    link: "https://example.com",
    github: "https://github.com"
  },
  {
    id: "12",
    title: "Image Optimizer Tool",
    category: "tools",
    description: "Web-based tool for optimizing and compressing images without quality loss.",
    tags: ["React", "Sharp", "Worker API"],
    image: "/projects/image-optimizer.png",
    link: "https://example.com"
  },
  {
    id: "13",
    title: "Crypto Tracker",
    category: "web-apps",
    description: "Real-time cryptocurrency price tracker with portfolio management features.",
    tags: ["React", "CoinGecko API", "Redux"],
    image: "/projects/crypto.png",
    link: "https://example.com"
  },
  {
    id: "14",
    title: "Fitness App Landing",
    category: "landing-pages",
    description: "Engaging landing page for a fitness app with animated sections and testimonials.",
    tags: ["React", "Framer Motion", "CSS"],
    image: "/projects/fitness.png",
    link: "https://example.com"
  },
  {
    id: "15",
    title: "URL Shortener",
    category: "tools",
    description: "Custom URL shortener service with analytics and QR code generation.",
    tags: ["Next.js", "Redis", "PostgreSQL"],
    image: "/projects/url-shortener.png",
    link: "https://example.com",
    github: "https://github.com"
  }
];

export const categories = [
  { id: "all", label: "All" },
  { id: "landing-pages", label: "Landing Pages" },
  { id: "web-apps", label: "Web Apps" },
  { id: "dashboards", label: "Dashboards" },
  { id: "tools", label: "Tools" }
] as const;
