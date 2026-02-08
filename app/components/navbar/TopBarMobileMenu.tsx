"use client";

import Link from "next/link";
import { ChevronDown, Zap, User, Github, Twitter, Youtube, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import Clock from "@/app/components/navbar/Clock";
import { MENU_ITEMS, TECH_CATEGORIES } from "./topbar.config";

interface TopBarMobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function TopBarMobileMenu({ isOpen, onClose }: TopBarMobileMenuProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-x-0 top-16 z-40 animate-in slide-in-from-top-5 lg:hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="overflow-hidden rounded-b-2xl bg-gray-900 shadow-2xl border border-gray-800">
                    <div className="space-y-1 p-4">
                        {MENU_ITEMS.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="flex items-center justify-between rounded-lg px-4 py-3 text-lg font-semibold text-white hover:bg-gray-800 transition-colors"
                                onClick={onClose}
                            >
                                {item.label}
                                {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
                            </Link>
                        ))}

                        {/* Tech Categories in Mobile */}
                        <div className="border-t border-gray-800 pt-4 mt-2">
                            <h3 className="px-4 py-2 text-sm font-semibold text-cyan-400">Kategori Teknologi</h3>
                            <div className="grid grid-cols-2 gap-2 px-4">
                                {TECH_CATEGORIES.map((category) => (
                                    <Link
                                        key={category.label}
                                        href={`/category/${category.label.toLowerCase()}`}
                                        className="flex items-center gap-2 rounded-lg bg-gray-800 p-3 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                                        onClick={onClose}
                                    >
                                        <span className={category.color}>
                                            <category.icon className="h-4 w-4" />
                                        </span>
                                        {category.label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Mobile Actions */}
                        <div className="border-t border-gray-800 pt-4 px-4">
                            <div className="flex items-center justify-between mb-4">
                                <Button className="flex-1 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 py-3 text-white">
                                    <Zap className="mr-2 h-4 w-4" />
                                    Subscribe
                                </Button>
                                <Button
                                    variant="outline"
                                    className="ml-2 rounded-lg border-gray-700 py-3 text-gray-300"
                                >
                                    <User className="h-4 w-4" />
                                </Button>
                            </div>

                            {/* Mobile Social */}
                            <div className="flex justify-center gap-4 py-3">
                                <a href="https://github.com" className="text-gray-400 hover:text-white">
                                    <Github className="h-5 w-5" />
                                </a>
                                <a href="https://twitter.com" className="text-gray-400 hover:text-white">
                                    <Twitter className="h-5 w-5" />
                                </a>
                                <a href="https://youtube.com" className="text-gray-400 hover:text-white">
                                    <Youtube className="h-5 w-5" />
                                </a>
                                <a href="https://instagram.com" className="text-gray-400 hover:text-white">
                                    <Instagram className="h-5 w-5" />
                                </a>
                            </div>

                            {/* Mobile Clock */}
                            <div className="mt-4 flex justify-center">
                                <div className="rounded-lg bg-gray-800 px-4 py-2">
                                    <Clock />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
