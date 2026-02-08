import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import NavLinks from "./NavLinks"
import MobileNav from "./MobileNav"

export default function MainNav() {
  return (
    <nav className="border-b bg-background">
      <div className="relative mx-auto flex h-14 max-w-6xl items-center justify-center px-4">

        {/* Mobile Trigger (Left) */}
        <div className="absolute left-4 flex items-center md:hidden">
          <MobileNav />
        </div>

        {/* Desktop Navigation (Center) */}
        <NavLinks />

        {/* Search Bar (Right) */}
        <div className="absolute right-4 flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-[120px] bg-background pl-8 sm:w-[200px] lg:w-[300px]"
            />
          </div>
        </div>
      </div>
    </nav>
  )
}
