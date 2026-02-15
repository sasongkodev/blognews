import { getAllArticles } from "@/lib/mdx"
import ArticleCard from "@/components/ArticleCard"
import { Button } from "@/components/ui/button"
import { Link } from "@/i18n/navigation"
import { ArrowLeft } from "lucide-react"

// Force dynamic rendering to ensure fresh content on each request
export const dynamic = 'force-dynamic'
export const revalidate = 0

export const metadata = {
    title: "All Articles | Teman Kode",
    description: "Browse all our articles, tutorials, and insights.",
}

export default async function ArticlesPage() {
    const articles = await getAllArticles()

    return (
        <div className="min-h-screen bg-[#0f172a]">
            {/* Header Section */}
            <div className="bg-[#1e293b] border-b border-slate-700/50">
                <div className="container mx-auto px-4 py-12">
                    <Button variant="ghost" asChild className="mb-6 pl-0 text-slate-400 hover:bg-transparent hover:text-cyan-400">
                        <Link href="/" className="flex items-center gap-2">
                            <ArrowLeft className="h-4 w-4" />
                            Back to Home
                        </Link>
                    </Button>
                    <h1 className="text-3xl font-extrabold tracking-tight text-white md:text-5xl">
                        All Articles
                    </h1>
                    <p className="mt-4 max-w-2xl text-lg text-slate-400">
                        Explore our latest code tutorials, tech insights, and development tips.
                    </p>
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
                        <p className="text-lg text-slate-500">No articles found yet.</p>
                        <p className="text-sm text-slate-600">Check back soon for new content!</p>
                    </div>
                )}
            </div>
        </div>
    )
}
