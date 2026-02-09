"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Terminal,
  Search,
  Github,
  Twitter,
  Linkedin,
  Menu
} from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle
} from "@/components/ui/sheet";
import Clock from "@/app/components/navbar/Clock";

const NAV_LINKS = [
  { href: "/articles", label: "Articles" },
  { href: "/tutorial", label: "Tutorial" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/shortcut", label: "Shortcut" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full flex flex-col shadow-md transition-all duration-300">

      <div className="bg-[#0a192f] text-white py-2 relative">
        <div className="container mx-auto px-4 flex items-center justify-between h-8">

          {/* Left: Clock */}
          <div className="flex items-center">
            <Clock />
          </div>

          {/* Center: Logo (Absolute positioning for true center) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-blue-500/20 p-1.5 rounded-md group-hover:bg-blue-500/30 transition-colors border border-blue-400/20">
                <Terminal className="w-4 h-4 text-cyan-400" />
              </div>
              <span className="font-bold text-lg tracking-tight font-sans">
                Teman<span className="text-cyan-400">Kode</span>
              </span>
            </Link>
          </div>

          {/* Right: Socials */}
          <div className="hidden sm:flex items-center gap-1">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-1.5 text-gray-400 hover:text-white transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-1.5 text-gray-400 hover:text-white transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-1.5 text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Trigger (Visible on small screens) */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="sm:hidden text-white hover:bg-white/10 ml-auto z-10">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-primary" />
                  TemanKode
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-2 mt-6">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-lg font-medium px-4 py-3 rounded-md transition-colors font-mono",
                      pathname === link.href
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-muted"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/*
        ROW 2: Main Nav
        - White Background
        - Content: Nav Links (Center, Fira Code 20px Black), Search (Right)
      */}
      <div className="bg-white border-b border-gray-200 py-3">
        <div className="container mx-auto px-4 flex items-center justify-between">

          {/* Nav Links (Center) */}
          <nav className="hidden sm:flex items-center gap-8 mx-auto">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative font-['Fira_Code',monospace] text-[16px] md:text-[18px] font-medium tracking-tight transition-all duration-200",
                    isActive ? "text-cyan-400 font-bold" : "text-black hover:text-cyan-400"
                  )}
                >
                  {link.label}
                  <span className={cn(
                    "absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300",
                    isActive ? "w-full" : "group-hover:w-full"
                  )} />
                </Link>
              )
            })}
          </nav>

          {/* Search (Right) */}
          <div className="flex items-center ml-auto sm:ml-0">
            <div className="relative group">
              <input
                type="text"
                placeholder="Search..."
                className="pl-9 pr-4 py-1.5 text-sm bg-gray-100 border border-transparent rounded-full focus:outline-none focus:bg-white focus:ring-2 focus:ring-cyan-200 focus:border-cyan-400 transition-all w-[150px] focus:w-[220px]"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-cyan-400 transition-colors" />
            </div>
          </div>

        </div>
      </div>

    </header>
  );
}
