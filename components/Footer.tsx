"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin, Youtube, Instagram, Heart, Terminal } from "lucide-react";

const SOCIAL_LINKS = [
    { icon: Github, href: "https://github.com/wahyupuji", label: "GitHub" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
];

const FOOTER_NAV = [
    { label: "Articles", href: "/articles" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy", href: "/privacy" },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-slate-800 bg-[#0f172a] py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-center gap-8 text-center">

                    {/* Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="inline-flex items-center gap-2 group">
                            <div className="bg-slate-800 p-2 rounded-lg group-hover:bg-slate-700 transition-colors">
                                <Terminal className="w-6 h-6 text-cyan-400" />
                            </div>
                            <span className="text-2xl font-bold text-white tracking-tight">TemanKode</span>
                        </Link>
                        <p className="max-w-md text-slate-400 leading-relaxed mx-auto text-sm">
                            Tempatnya developer Indonesia belajar, berbagi, dan berkembang bersama.
                        </p>
                    </div>

                    {/* Navigation */}
                    <nav className="flex flex-wrap justify-center gap-8">
                        {FOOTER_NAV.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Social Links */}
                    <div className="flex gap-4">
                        {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-all border border-transparent hover:border-slate-700"
                                aria-label={label}
                            >
                                <Icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>

                    {/* Copyright */}
                    <div className="mt-8 pt-8 w-full border-t border-slate-800/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                        <p>© {currentYear} TemanKode. All rights reserved.</p>
                        <p className="flex items-center gap-1">
                            Made with <Heart className="w-3 h-3 text-red-500 fill-current" /> in Indonesia
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}