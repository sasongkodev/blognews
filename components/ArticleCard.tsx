"use client"

import { Link } from "@/i18n/navigation"
import Image from "next/image"
import { Clock, ArrowRight, Tag } from "lucide-react"
import { Article } from "@/lib/mdx"
import { cn } from "@/lib/utils"

interface ArticleCardProps {
    article: Article
    className?: string
}

export default function ArticleCard({ article, className }: ArticleCardProps) {
    // Calculate reading time
    const wordsPerMinute = 200
    const wordCount = article.content ? article.content.split(/\s+/g).length : 0
    const readingTime = Math.ceil(wordCount / wordsPerMinute)

    const tags = article.meta.tags || []
    const visibleTags = tags.slice(0, 3)
    const remainingCount = tags.length - visibleTags.length

    return (
        <div className={cn("group relative block h-full", className)}>
            <Link href={`/articles/${article.slug}`} className="absolute inset-0 z-0" aria-label={article.meta.title} />
            <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-[#1e293b] text-slate-200 shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:shadow-cyan-500/10 dark:bg-[#1e293b]">
                {/* Image Section */}
                <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                        src={article.meta.image || "/assets/benner.svg"}
                        alt={article.meta.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>

                <div className="flex flex-1 flex-col p-6">
                    {/* Title */}
                    <h3 className="mb-3 line-clamp-2 text-xl font-bold leading-snug tracking-tight text-white transition-colors group-hover:text-cyan-400">
                        {article.meta.title}
                    </h3>

                    {/* Date */}
                    <p className="mb-3 text-sm font-medium text-slate-400">
                        {article.meta.date}
                    </p>

                    {/* Tags */}
                    {visibleTags.length > 0 && (
                        <div className="relative z-10 mb-4 flex flex-wrap items-center gap-1.5">
                            {visibleTags.map((tag) => (
                                <Link
                                    key={tag}
                                    href={`/tags/${encodeURIComponent(tag)}`}
                                    className="inline-flex items-center gap-1 rounded-full bg-cyan-500/10 px-2.5 py-0.5 text-[11px] font-medium text-cyan-400 ring-1 ring-inset ring-cyan-500/20 transition-colors hover:bg-cyan-500/20 hover:text-cyan-300"
                                >
                                    <Tag className="h-3 w-3" />
                                    {tag}
                                </Link>
                            ))}
                            {remainingCount > 0 && (
                                <span className="text-[11px] text-slate-500">+{remainingCount}</span>
                            )}
                        </div>
                    )}

                    {/* Description */}
                    <p className="mb-6 line-clamp-3 flex-1 text-sm leading-relaxed text-slate-400">
                        {article.meta.description}
                    </p>

                    {/* Footer */}
                    <div className="mt-auto flex items-center justify-between border-t border-slate-700/50 pt-4 text-sm text-slate-400">
                        <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span>{readingTime} min read</span>
                        </div>
                        <div className="flex items-center gap-1 font-medium text-cyan-400 transition-colors group-hover:text-cyan-300">
                            Read more
                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
