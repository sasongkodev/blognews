"use client";

import Link from "next/link";
import { Github, Linkedin, Instagram, Heart, Terminal, Mail } from "lucide-react";

const SOCIAL_LINKS = [
    { icon: Github, href: "https://github.com/wahyupuji", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/wahyupuji", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/wahyupuji", label: "Instagram" },
    { icon: Mail, href: "mailto:hello@temankode.com", label: "Email" },
];

const FOOTER_NAV = [
    { label: "Artikel", href: "/articles" },
    { label: "Tips & Trik", href: "/tips-trick" },
    { label: "Tutorial", href: "/tutorial" },
    { label: "Tentang", href: "/about" },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-slate-800 bg-[#0f172a] py-8 md:py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-center gap-6 md:gap-8 text-center">

                    {/* Brand */}
                    <div className="space-y-3 md:space-y-4">
                        <Link href="/" className="inline-flex items-center gap-2 group">
                            <div className="bg-slate-800 p-1.5 md:p-2 rounded-lg group-hover:bg-slate-700 transition-colors">
                                <Terminal className="w-5 h-5 md:w-6 md:h-6 text-cyan-400" />
                            </div>
                            <span className="text-xl md:text-2xl font-bold text-white tracking-tight">
                                Teman<span className="text-cyan-400">Kode</span>
                            </span>
                        </Link>
                        <p className="max-w-sm md:max-w-md text-slate-300 leading-relaxed mx-auto text-xs md:text-sm px-4">
                            Blog personal seputar programming, tips & trick, dan pengalaman sebagai developer.
                        </p>
                    </div>

                    {/* Navigation */}
                    <nav className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
                        {FOOTER_NAV.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="text-xs md:text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Social Links */}
                    <div className="flex gap-2 md:gap-3">
                        {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 md:p-2.5 text-slate-300 hover:text-cyan-400 hover:bg-slate-800 rounded-full transition-all border border-slate-700/50 hover:border-cyan-400/50"
                                aria-label={label}
                            >
                                <Icon className="w-4 h-4 md:w-5 md:h-5" />
                            </a>
                        ))}
                    </div>

                    {/* Copyright */}
                    <div className="mt-2 md:mt-4 pt-6 md:pt-8 w-full border-t border-slate-800/50 flex flex-col sm:flex-row items-center justify-center gap-2 text-[10px] md:text-xs text-slate-400">
                        <p className="flex items-center gap-1">
                            © {currentYear} TemanKode • Made with <Heart className="w-3 h-3 text-red-500 fill-current" /> by Wahyu Puji
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
