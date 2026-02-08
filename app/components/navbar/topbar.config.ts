import {
    Code2,
    Terminal,
    Cloud,
    Cpu,
    Database
} from "lucide-react";

export const TECH_CATEGORIES = [
    { label: "Frontend", icon: Code2, color: "text-blue-400", subcategories: ["React", "Vue", "Angular", "Next.js", "Svelte"] },
    { label: "Backend", icon: Terminal, color: "text-green-400", subcategories: ["Node.js", "Python", "Go", "Java", "PHP"] },
    { label: "DevOps", icon: Cloud, color: "text-purple-400", subcategories: ["Docker", "Kubernetes", "AWS", "CI/CD", "Monitoring"] },
    { label: "AI/ML", icon: Cpu, color: "text-red-400", subcategories: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision"] },
    { label: "Database", icon: Database, color: "text-yellow-400", subcategories: ["SQL", "NoSQL", "Redis", "PostgreSQL", "MongoDB"] },
];

export const MENU_ITEMS = [
    { label: "Artikel", href: "/articles", hasDropdown: false },
    { label: "Tutorial", href: "/tutorials", hasDropdown: false },
    { label: "Teknologi", href: "#", hasDropdown: true },
    { label: "Tools", href: "/tools", hasDropdown: false },
    { label: "Podcast", href: "/podcast", hasDropdown: false },
];

export const TECH_TAGS = ["React", "Next.js", "TypeScript", "AI", "Python", "DevOps", "Cloud", "Database"];
