"use client";

import { Bell, Github, Twitter, Youtube, Zap, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Clock from "@/app/components/navbar/Clock";

export default function UserActions() {
    return (
        <>
            {/* Notifications */}
            <Button
                size="icon"
                variant="ghost"
                className="relative text-gray-300 hover:bg-gray-800 hover:text-white hidden md:flex"
            >
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                    3
                </span>
            </Button>

            {/* Social Icons */}
            <div className="hidden md:flex items-center gap-1 border-l border-gray-700 pl-3">
                <Button
                    size="icon"
                    variant="ghost"
                    className="rounded-full text-gray-300 hover:bg-gray-800 hover:text-white"
                    asChild
                >
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                    </a>
                </Button>
                <Button
                    size="icon"
                    variant="ghost"
                    className="rounded-full text-gray-300 hover:bg-gray-800 hover:text-white"
                    asChild
                >
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <Twitter className="h-4 w-4" />
                    </a>
                </Button>
                <Button
                    size="icon"
                    variant="ghost"
                    className="rounded-full text-gray-300 hover:bg-gray-800 hover:text-white"
                    asChild
                >
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <Youtube className="h-4 w-4" />
                    </a>
                </Button>
            </div>

            {/* User & Auth */}
            <div className="hidden md:flex items-center gap-2">
                <Button className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-4 text-white hover:from-blue-700 hover:to-cyan-600">
                    <Zap className="mr-2 h-4 w-4" />
                    Subscribe
                </Button>
                <Button
                    size="icon"
                    variant="ghost"
                    className="rounded-full border border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
                >
                    <User className="h-5 w-5" />
                </Button>
            </div>

            {/* Clock - Desktop */}
            <div className="hidden lg:flex items-center ml-2">
                <div className="rounded-lg bg-gray-800/80 px-3 py-1.5">
                    <Clock />
                </div>
            </div>
        </>
    );
}
