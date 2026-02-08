"use client";

import Link from "next/link";
import { TECH_CATEGORIES } from "./topbar.config";

interface TechDropdownProps {
    onLinkClick: () => void;
}

export default function TechDropdown({ onLinkClick }: TechDropdownProps) {
    return (
        <div className="absolute left-0 top-full mt-1 w-[600px] rounded-xl bg-gray-900 p-6 shadow-2xl border border-gray-700 animate-in slide-in-from-top-5 fade-in duration-200 grid grid-cols-2 gap-4">
            {TECH_CATEGORIES.map((category) => (
                <div key={category.label} className="space-y-2">
                    <div className="flex items-center gap-2">
                        <span className={category.color}>
                            <category.icon className="h-4 w-4" />
                        </span>
                        <h3 className="font-semibold text-white">{category.label}</h3>
                    </div>
                    <div className="space-y-1 pl-6">
                        {category.subcategories.map((sub) => (
                            <Link
                                key={sub}
                                href={`/category/${category.label.toLowerCase()}/${sub.toLowerCase()}`}
                                className="block text-sm text-gray-400 hover:text-white transition-colors"
                                onClick={onLinkClick}
                            >
                                {sub}
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
            <div className="col-span-2 mt-4 pt-4 border-t border-gray-800">
                <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">🔥 Trending Now:</span>
                    <div className="flex gap-2">
                        <span className="text-xs px-2 py-1 bg-blue-900/30 text-blue-300 rounded">Next.js 15</span>
                        <span className="text-xs px-2 py-1 bg-purple-900/30 text-purple-300 rounded">AI Agents</span>
                        <span className="text-xs px-2 py-1 bg-green-900/30 text-green-300 rounded">Edge Computing</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
