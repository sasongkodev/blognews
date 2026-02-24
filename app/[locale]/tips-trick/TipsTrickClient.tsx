"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Lightbulb, Code, Terminal, Globe, Zap, BookOpen, ArrowRight, Heart, Shield, Brain, TrendingUp } from "lucide-react";
import { TipCategory } from "@/lib/tips-trick";

const iconMap: Record<string, React.ReactNode> = {
    Terminal: <Terminal className="w-5 h-5" />,
    Code: <Code className="w-5 h-5" />,
    Globe: <Globe className="w-5 h-5" />,
    Zap: <Zap className="w-5 h-5" />,
    BookOpen: <BookOpen className="w-5 h-5" />,
    Lightbulb: <Lightbulb className="w-5 h-5" />,
};

const iconMapLarge: Record<string, React.ReactNode> = {
    Terminal: <Terminal className="w-10 h-10" />,
    Code: <Code className="w-10 h-10" />,
    Globe: <Globe className="w-10 h-10" />,
    Zap: <Zap className="w-10 h-10" />,
    BookOpen: <BookOpen className="w-10 h-10" />,
    Lightbulb: <Lightbulb className="w-10 h-10" />,
};

const categoryIcons: Record<string, React.ReactNode> = {
    "Mental Health": <Heart className="w-3.5 h-3.5" />,
    "Solusi": <Shield className="w-3.5 h-3.5" />,
    "Awareness": <Brain className="w-3.5 h-3.5" />,
    "Mindset": <TrendingUp className="w-3.5 h-3.5" />,
};

const categoryColors: Record<string, string> = {
    "Mental Health": "bg-rose-500/20 text-rose-500 dark:text-rose-400 border-rose-500/30",
    "Solusi": "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
    "Awareness": "bg-amber-500/20 text-amber-600 dark:text-amber-400 border-amber-500/30",
    "Mindset": "bg-violet-500/20 text-violet-600 dark:text-violet-400 border-violet-500/30",
};

interface TipsTrickClientProps {
    initialData: TipCategory[];
}

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
} satisfies import("framer-motion").Variants;

export default function TipsTrickClient({ initialData }: TipsTrickClientProps) {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeTab, setActiveTab] = useState("all");
    const params = useParams();
    const locale = params.locale as string || "en";

    const filteredCategories = initialData.map((category) => {
        if (activeTab !== "all" && activeTab !== category.id) return null;

        const filteredTips = category.tips.filter(
            (tip) =>
                tip.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                tip.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                tip.category.toLowerCase().includes(searchQuery.toLowerCase())
        );

        if (filteredTips.length === 0) return null;

        return {
            ...category,
            tips: filteredTips,
        };
    }).filter(Boolean) as TipCategory[];

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center">
            {/* Hero Section with Premium Glow Background */}
            <section className="relative w-full overflow-hidden border-b border-slate-200 dark:border-slate-800/50 pt-12 pb-12 lg:pt-16 lg:pb-12 flex justify-center">
                <div className="absolute inset-0 bg-slate-50 dark:bg-[#0B1120] pointer-events-none" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-cyan-500/10 dark:bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
                
                <div className="container relative mx-auto px-4 text-center z-10 max-w-4xl">
                    {/* Search bar inside Hero */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className="w-full max-w-2xl mx-auto relative group"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                        <div className="relative bg-white dark:bg-[#1e293b] rounded-2xl shadow-xl flex items-center p-2 border border-slate-200 dark:border-slate-700/50">
                            <Search className="w-5 h-5 text-slate-400 ml-3 shrink-0" />
                            <input
                                type="text"
                                placeholder="Cari tips (e.g., 'burnout', 'deadline')..."
                                className="w-full bg-transparent px-4 py-3 text-slate-900 dark:text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-0 text-base lg:text-lg"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="container mx-auto px-4 py-16 max-w-7xl">
                {/* Category Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex flex-wrap justify-center gap-2 p-1.5 bg-slate-200/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl">
                        <button
                            onClick={() => setActiveTab("all")}
                            className={`relative rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                                activeTab === "all" ? "text-white" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                            }`}
                        >
                            {activeTab === "all" && (
                                <motion.div
                                    layoutId="activeTabBadge"
                                    className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl"
                                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10">Semua</span>
                        </button>
                        {initialData.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveTab(cat.id)}
                                className={`relative rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                                    activeTab === cat.id ? "text-white" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                                }`}
                            >
                                {activeTab === cat.id && (
                                    <motion.div
                                        layoutId="activeTabBadge"
                                        className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl shadow-md"
                                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10 flex items-center gap-2">
                                    {iconMap[cat.iconName] || <Lightbulb className="w-4 h-4" />}
                                    {cat.name}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content */}
                <AnimatePresence mode="wait">
                    {filteredCategories.length > 0 ? (
                        <motion.div 
                            key="content"
                            variants={containerVariants}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="w-full"
                        >
                            {filteredCategories.map((category) => (
                                <div key={category.id} className="mb-16">
                                    {/* Category Section Header */}
                                    <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
                                        <div className="p-3 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-xl text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                                            {iconMap[category.iconName] || <Lightbulb className="w-6 h-6" />}
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{category.name}</h3>
                                            <p className="text-sm text-slate-500 dark:text-slate-400">{category.tips.length} artikel tersedia</p>
                                        </div>
                                    </motion.div>

                                    {/* Tips Grid */}
                                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                        {category.tips.map((tip, index) => {
                                            const badgeColor = categoryColors[tip.category] || "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700";
                                            const hasImage = !!tip.image;
                                            
                                            const cardContent = (
                                                <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white dark:bg-[#1e293b] text-slate-900 dark:text-slate-200 shadow-sm border border-slate-200 dark:border-slate-700/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-1">
                                                    
                                                    {/* Header Image or Icon Banner */}
                                                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center">
                                                        {hasImage ? (
                                                            <>
                                                                <Image 
                                                                    src={tip.image!} 
                                                                    alt={tip.title} 
                                                                    fill
                                                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                                />
                                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80" />
                                                            </>
                                                        ) : (
                                                            <>
                                                                <div className="absolute inset-0 opacity-[0.03] dark:opacity-5" style={{ backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                                                                <div className="relative text-cyan-500/50 dark:text-cyan-400/30 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-500">
                                                                    {iconMapLarge[category.iconName] || <Lightbulb className="w-12 h-12" />}
                                                                </div>
                                                            </>
                                                        )}

                                                        {/* Category badge */}
                                                        <div className={`absolute top-4 left-4 border px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 backdrop-blur-md shadow-sm ${badgeColor}`}>
                                                            {categoryIcons[tip.category]}
                                                            {tip.category}
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-1 flex-col p-6">
                                                        {/* Title */}
                                                        <h3 className="mb-3 line-clamp-2 text-xl font-bold leading-snug tracking-tight text-slate-900 dark:text-white transition-colors group-hover:text-cyan-600 dark:group-hover:text-cyan-400">
                                                            {tip.title}
                                                        </h3>

                                                        {/* Description */}
                                                        <p className="mb-6 line-clamp-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                                                            {tip.description}
                                                        </p>

                                                        {/* Footer */}
                                                        <div className="mt-auto flex items-center justify-end border-t border-slate-100 dark:border-slate-700/50 pt-5 text-sm">
                                                            <div className={`flex items-center gap-1.5 font-semibold text-cyan-600 dark:text-cyan-400 transition-colors group-hover:text-cyan-700 dark:group-hover:text-cyan-300 ${tip.slug ? 'cursor-pointer' : 'cursor-default'}`}>
                                                                {tip.slug ? 'Baca artikel lengkap' : 'Baca selengkapnya'}
                                                                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );

                                            return (
                                                <motion.div key={index} variants={itemVariants} className="h-full">
                                                    {tip.slug ? (
                                                        <Link href={`/${locale}/articles/${tip.slug}`} className="block h-full no-underline outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-2xl">
                                                            {cardContent}
                                                        </Link>
                                                    ) : (
                                                        <div className="h-full">
                                                            {cardContent}
                                                        </div>
                                                    )}
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div 
                            key="empty"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="text-center py-20 px-4 w-full"
                        >
                            <div className="w-24 h-24 mx-auto mb-6 bg-slate-100 dark:bg-slate-800/50 rounded-full flex items-center justify-center">
                                <Search className="w-10 h-10 text-slate-400 dark:text-slate-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Tidak ditemukan</h3>
                            <p className="text-lg text-slate-500 dark:text-slate-400 mb-6 max-w-md mx-auto">
                                Kami tidak dapat menemukan tips atau artikel untuk &quot;{searchQuery}&quot;.
                            </p>
                            <button
                                onClick={() => setSearchQuery("")}
                                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition-colors duration-200"
                            >
                                Hapus Pencarian
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>
        </div>
    );
}
