import { getAllArticles } from "@/lib/mdx"
import ArticleCard from "@/components/ArticleCard"

export default async function ArticleList() {
    const articles = await getAllArticles()

    return (
        <section className="container mx-auto px-4 py-12">
            <div className="mb-8 flex flex-col items-center justify-center text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Latest Articles
                </h2>
                <p className="mt-2 text-muted-foreground">
                    Discover insights, tutorials, and news from our team.
                </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {articles.map((article) => (
                    <ArticleCard key={article.slug} article={article} />
                ))}
            </div>
        </section>
    )
}
