"use client";

import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  Terminal
} from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

// Config
import { MENU_ITEMS, TECH_TAGS } from "./topbar.config";

// Sub-components
import TechDropdown from "./TechDropdown";
import SearchBar from "./SearchBar";
import TopBarMobileMenu from "./TopBarMobileMenu";
import UserActions from "./UserActions";

export default function TopBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTechDropdown, setActiveTechDropdown] = useState<string | null>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns on click outside
  useEffect(() => {
    // simpler global click handler
    const handleGlobalClick = () => {
      if (activeTechDropdown) setActiveTechDropdown(null);
      if (isMenuOpen) setIsMenuOpen(false);
    }

    document.addEventListener("mousedown", handleGlobalClick);
    return () => document.removeEventListener("mousedown", handleGlobalClick);
  }, [isMenuOpen, activeTechDropdown]);

  return (
    <>
      {/* Top Bar */}
      <div className={cn(
        "sticky top-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-gray-900/95 backdrop-blur-lg border-gray-800 shadow-2xl"
          : "bg-gradient-to-b from-gray-900 to-gray-800 border-gray-700"
      )}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">

            {/* Logo Section */}
            <div className="flex items-center gap-4">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMenuOpen(!isMenuOpen)
                }}
                className="rounded-lg p-2 text-gray-300 hover:bg-gray-800 lg:hidden"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>

              <Link
                href="/"
                className="group flex items-center gap-3"
              >
                <div className="relative">
                  <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 opacity-75 blur transition-all group-hover:opacity-100 group-hover:blur-md"></div>
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-700 to-cyan-600">
                    <Terminal className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="font-['Monstera',sans-serif] text-2xl font-bold tracking-tight text-white">
                    Teman Kode
                  </span>
                  <span className="text-xs font-medium text-cyan-300 opacity-0 transition-opacity group-hover:opacity-100">
                    Tech Blog & Community
                  </span>
                </div>
              </Link>

              {/* Tech Tags - Desktop */}
              <div className="hidden lg:flex items-center gap-2 ml-4">
                {TECH_TAGS.slice(0, 3).map((tag) => (
                  <Link
                    key={tag}
                    href={`/tag/${tag.toLowerCase()}`}
                    className="rounded-full bg-gray-800 px-3 py-1 text-xs font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
                <span className="text-gray-500 text-xs">+{TECH_TAGS.length - 3} more</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {MENU_ITEMS.map((item) => (
                <div key={item.label} className="relative">
                  {item.hasDropdown ? (
                    <div className="relative">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveTechDropdown(activeTechDropdown === item.label ? null : item.label);
                        }}
                        className={cn(
                          "flex items-center gap-1 rounded-lg px-4 py-2.5 font-['Monstera',sans-serif] text-[17px] font-semibold transition-all duration-200",
                          activeTechDropdown === item.label
                            ? "bg-gray-800 text-white"
                            : "text-gray-300 hover:bg-gray-800 hover:text-white"
                        )}
                      >
                        {item.label}
                        <ChevronDown className={cn(
                          "h-4 w-4 transition-transform duration-200",
                          activeTechDropdown === item.label ? "rotate-180" : ""
                        )} />
                      </button>

                      {/* Tech Categories Mega Menu */}
                      {activeTechDropdown === item.label && (
                        <div onClick={(e) => e.stopPropagation()}>
                          <TechDropdown onLinkClick={() => setActiveTechDropdown(null)} />
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="rounded-lg px-4 py-2.5 font-['Monstera',sans-serif] text-[17px] font-semibold text-gray-300 transition-all duration-200 hover:bg-gray-800 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Right Section - Actions */}
            <div className="flex items-center gap-3">
              <SearchBar />
              <UserActions />
            </div>
          </div>
        </div>

        {/* Tech Tags Bar */}
        <div className="border-t border-gray-800 bg-gray-900/50">
          <div className="mx-auto max-w-7xl px-4 py-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
                <span className="text-xs font-medium text-cyan-400 whitespace-nowrap">
                  🔥 Trending Topics:
                </span>
                {TECH_TAGS.map((tag) => (
                  <Link
                    key={tag}
                    href={`/tag/${tag.toLowerCase()}`}
                    className="whitespace-nowrap rounded-full bg-gray-800/50 px-3 py-1 text-xs font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
              <div className="hidden lg:flex items-center gap-2">
                <span className="text-xs text-gray-500">📅 Latest: </span>
                <Link href="/articles/latest" className="text-xs text-cyan-300 hover:text-cyan-200">
                  Next.js 15 Deep Dive →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <TopBarMobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}