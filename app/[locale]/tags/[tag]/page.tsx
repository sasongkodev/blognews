import { getArticlesByTag, getAllTags } from "@/lib/mdx"
import ArticleCard from "@/components/ArticleCard"
import { Button } from "@/components/ui/button"
import { Link } from "@/i18n/navigation"
import { ArrowLeft, Tag } from "lucide-react"
import { Metadata } from "next"

export const dynamic = 'force-dynamic'
export const revalidate = 0

interface Props {
    params: Promise<{ tag: string }>
}

export async function generateStaticParams() {
    const tags = await getAllTags()
    return tags.map((t) => ({ tag: encodeURIComponent(t.name) }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const tag = decodeURIComponent((await params).tag)
    return {
        title: `Articles tagged "${tag}" | TemanKode`,
        description: `Browse all articles tagged with "${tag}" on TemanKode.`,
    }
}

export default async function TagPage({ params }: Props) {
    const tag = decodeURIComponent((await params).tag)
    const articles = await getArticlesByTag(tag)

    return (
        <div className="min-h-screen bg-[#0f172a]">
            {/* Header */}
            <div className="bg-[#1e293b] border-b border-slate-700/50">
                <div className="container mx-auto px-4 py-12">
                    <Button variant="ghost" asChild className="mb-6 pl-0 text-slate-400 hover:bg-transparent hover:text-cyan-400">
                        <Link href="/" className="flex items-center gap-2">
                            <ArrowLeft className="h-4 w-4" />
                            Back to Home
                        </Link>
                    </Button>
                    <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 ring-1 ring-cyan-500/20">
                            <Tag className="h-6 w-6 text-cyan-400" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-extrabold tracking-tight text-white md:text-5xl">
                                {tag}
                            </h1>
                            <p className="mt-1 text-lg text-slate-400">
                                {articles.length} {articles.length === 1 ? "article" : "articles"} found
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Articles Grid */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {articles.map((article) => (
                        <ArticleCard key={article.slug} article={article} />
                    ))}
                </div>

                {articles.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                        <p className="text-lg text-slate-500">No articles found with this tag.</p>
                        <p className="text-sm text-slate-600">Check back soon for new content!</p>
                    </div>
                )}
            </div>
        </div>
    )
}
