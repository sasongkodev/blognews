import { Newspaper, Laptop, Bot, PenTool, LucideIcon } from "lucide-react"

export interface NavItem {
  title: string
  href: string
  icon: LucideIcon
}

export const NAV_ITEMS: NavItem[] = [
  { title: "News", href: "/", icon: Newspaper },
  { title: "Tech", href: "/category/tech", icon: Laptop },
  { title: "AI", href: "/category/ai", icon: Bot },
  { title: "Opinion", href: "/category/opinion", icon: PenTool },
]
