"use client";

import { useState } from "react";
import { Search, Lightbulb, Code, Terminal, Globe, Zap, BookOpen } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TipCategory } from "@/lib/tips-trick";

const iconMap: Record<string, React.ReactNode> = {
    Terminal: <Terminal className="w-5 h-5" />,
    Code: <Code className="w-5 h-5" />,
    Globe: <Globe className="w-5 h-5" />,
    Zap: <Zap className="w-5 h-5" />,
    BookOpen: <BookOpen className="w-5 h-5" />,
    Lightbulb: <Lightbulb className="w-5 h-5" />,
};

interface TipsTrickClientProps {
    initialData: TipCategory[];
}

export default function TipsTrickClient({ initialData }: TipsTrickClientProps) {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeTab, setActiveTab] = useState("all");

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
        <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950">
            <div className="container px-4 md:px-6 py-12">
                <div className="flex flex-col items-center text-center space-y-4 mb-12">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900 dark:text-white">
                        Tips & <span className="text-cyan-500">Trick</span>
                    </h1>
                    <p className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
                        Kumpulan tips dan trik programming untuk meningkatkan produktivitas dan skill coding kamu.
                    </p>

                    <div className="w-full max-w-md relative mt-4">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input
                            type="text"
                            placeholder="Cari tips (e.g., 'git', 'performance', 'debug')..."
                            className="pl-10 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
                    <div className="flex justify-center mb-8 overflow-x-auto pb-2">
                        <TabsList className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-1 rounded-xl">
                            <TabsTrigger value="all" className="rounded-lg px-4 py-2 data-[state=active]:bg-cyan-500 data-[state=active]:text-white">All</TabsTrigger>
                            {initialData.map((cat) => (
                                <TabsTrigger key={cat.id} value={cat.id} className="rounded-lg px-4 py-2 flex items-center gap-2 data-[state=active]:bg-cyan-500 data-[state=active]:text-white">
                                    {iconMap[cat.iconName] || <Lightbulb className="w-5 h-5" />}
                                    {cat.name}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </div>

                    <div className="space-y-8">
                        {filteredCategories.length > 0 ? (
                            filteredCategories.map((category) => (
                                <div key={category.id} className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="p-2 bg-cyan-100 dark:bg-cyan-900/20 rounded-lg text-cyan-600 dark:text-cyan-400">
                                            {iconMap[category.iconName] || <Lightbulb className="w-5 h-5" />}
                                        </div>
                                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{category.name}</h2>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {category.tips.map((tip, index) => (
                                            <Card key={index} className="group hover:border-cyan-400 dark:hover:border-cyan-500 transition-colors duration-200 cursor-default bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
                                                <CardHeader className="pb-2">
                                                    <div className="flex justify-between items-start">
                                                        <h3 className="font-semibold text-slate-800 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                                            {tip.title}
                                                        </h3>
                                                        <span className="text-xs text-slate-400 font-medium px-2 py-0.5 bg-slate-50 dark:bg-slate-800/50 rounded-full">
                                                            {tip.category}
                                                        </span>
                                                    </div>
                                                </CardHeader>
                                                <CardContent>
                                                    <p className="text-sm text-slate-600 dark:text-slate-400">
                                                        {tip.description}
                                                    </p>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-12 text-gray-500">
                                <Lightbulb className="w-12 h-12 mx-auto mb-4 opacity-20" />
                                <p className="text-lg">Tidak ada tips ditemukan untuk "{searchQuery}"</p>
                                <button
                                    onClick={() => setSearchQuery("")}
                                    className="mt-2 text-cyan-500 hover:underline"
                                >
                                    Hapus pencarian
                                </button>
                            </div>
                        )}
                    </div>
                </Tabs>
            </div>
        </div>
    );
}
