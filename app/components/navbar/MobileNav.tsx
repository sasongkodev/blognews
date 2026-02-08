"use client"

import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Link from "next/link"
import { NAV_ITEMS } from "./nav.config"
import { useState } from "react"

export default function MobileNav() {
    const [open, setOpen] = useState(false)

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left">
                <SheetHeader>
                    <SheetTitle className="text-left">Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 py-4">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
                        >
                            <item.icon className="h-4 w-4" />
                            {item.title}
                        </Link>
                    ))}
                </div>
            </SheetContent>
        </Sheet>
    )
}
