"use client";

import { useState, useRef, useEffect } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SearchBar() {
    const [searchQuery, setSearchQuery] = useState("");
    const [showSearch, setShowSearch] = useState(false);
    const searchRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setShowSearch(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
        }
    };

    return (
        <div className="relative" ref={searchRef}>
            {showSearch ? (
                <form onSubmit={handleSearch} className="animate-in fade-in duration-200">
                    <div className="flex items-center">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Cari artikel, tutorial, atau tools..."
                            className="w-64 rounded-l-lg bg-gray-800 px-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            autoFocus
                        />
                        <button
                            type="submit"
                            className="rounded-r-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-white hover:from-blue-700 hover:to-cyan-600"
                        >
                            <Search className="h-4 w-4" />
                        </button>
                    </div>
                </form>
            ) : (
                <Button
                    onClick={() => setShowSearch(true)}
                    size="icon"
                    variant="ghost"
                    className="text-gray-300 hover:bg-gray-800 hover:text-white"
                >
                    <Search className="h-5 w-5" />
                </Button>
            )}
        </div>
    );
}
