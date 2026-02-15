
import { getAllArticles } from "@/lib/mdx"
import ArticleCard from "@/components/ArticleCard"

export default async function TutorialPage() {
    const allArticles = await getAllArticles()

    // Filter articles that have the 'tutorial' tag
    // Case insensitive check for the tag
    const tutorialArticles = allArticles.filter(article =>
        article.meta.tags?.some(tag => tag.toLowerCase() === 'tutorial')
    )

    return (
        <section className="container mx-auto px-4 py-12">
            <div className="mb-8 flex flex-col items-center justify-center text-center">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                    Tutorials
                </h1>
                <p className="max-w-2xl text-muted-foreground text-lg">
                    Step-by-step guides and hands-on tutorials to help you master modern web development technologies.
                </p>
            </div>

            {tutorialArticles.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {tutorialArticles.map((article) => (
                        <ArticleCard key={article.slug} article={article} />
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                    <p className="text-xl text-muted-foreground">No tutorials found yet.</p>
                    <p className="mt-2 text-sm text-muted-foreground">Check back soon for new content!</p>
                </div>
            )}
        </section>
    )
}
