import { getAllArticles, Article } from "@/lib/mdx"
import ArticleCard from "@/components/ArticleCard"

interface RecommendedArticlesProps {
    currentSlug: string
    tags?: string[]
}

export default async function RecommendedArticles({ currentSlug, tags }: RecommendedArticlesProps) {
    const allArticles = await getAllArticles()
    
    // Filter out current article
    const otherArticles = allArticles.filter(article => article.slug !== currentSlug)
    
    // Simple improved recommendation logic:
    // 1. Filter by tags if available
    // 2. If not enough tagged articles, fill with latest articles
    
    let recommended: Article[] = []
    
    if (tags && tags.length > 0) {
        recommended = otherArticles.filter(article => 
            article.meta.tags?.some(tag => tags.includes(tag))
        )
    }
    
    // If we have fewer than 3 related articles, fill with other recent articles
    // avoiding duplicates
    if (recommended.length < 3) {
        const remaining = otherArticles.filter(article => !recommended.includes(article))
        // Verify uniqueness
        for (const art of remaining) {
             if (recommended.length >= 3) break;
             if (!recommended.find(r => r.slug === art.slug)) {
                 recommended.push(art);
             }
        }
    }
    
    // Take top 3
    const displayArticles = recommended.slice(0, 3)

    if (displayArticles.length === 0) return null

    return (
        <section className="mt-16 border-t border-slate-800 pt-16">
            <h2 className="mb-8 text-2xl font-bold text-white">
                Recommended Articles
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {displayArticles.map((article) => (
                    <ArticleCard key={article.slug} article={article} />
                ))}
            </div>
        </section>
    )
}
