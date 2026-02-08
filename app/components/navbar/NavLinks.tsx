import Link from "next/link"
import { NAV_ITEMS } from "./nav.config"

export default function NavLinks() {
  return (
    <div className="hidden md:flex items-center gap-6">
      {NAV_ITEMS.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="
            group flex flex-col items-center justify-center text-[18px] font-medium text-white/90 font-montserrat transition-colors
          "
        >
          <div className="flex items-center gap-2">
            <item.icon className="h-5 w-5 opacity-80 group-hover:opacity-100 group-hover:text-[#4facfe] transition-all" />
            <span className="group-hover:text-white transition-colors">{item.title}</span>
          </div>
          <span className="mt-1 h-[2px] w-0 rounded-full bg-[#4facfe] group-hover:w-full transition-all duration-300"></span>
        </Link>
      ))}
    </div>
  )
}
