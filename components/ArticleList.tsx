import { getAllArticles } from "@/lib/mdx"
import ArticleCard from "@/components/ArticleCard"

export default async function ArticleList({ searchParams }: { searchParams?: Promise<{ q?: string }> }) {
    const articles = await getAllArticles()
    const query = (await searchParams)?.q?.toLowerCase() || ""

    const filteredArticles = query 
        ? articles.filter(article => 
            article.meta.title.toLowerCase().includes(query) || 
            article.meta.description.toLowerCase().includes(query)
          )
        : articles

    return (
        <section className="container mx-auto px-4 py-12">
            <div className="mb-8 flex flex-col items-center justify-center text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    {query ? `Hasil Pencarian: "${query}"` : "Artikel Terbaru"}
                </h2>
                <p className="mt-2 text-muted-foreground">
                    {query 
                        ? `Ditemukan ${filteredArticles.length} artikel untuk pencarian Anda.`
                        : "Jelajahi wawasan, tutorial, dan berita dari tim kami."
                    }
                </p>
            </div>
            {filteredArticles.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredArticles.map((article) => (
                        <ArticleCard key={article.slug} article={article} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-12">
                    <p className="text-xl text-gray-500">Tidak ada artikel yang ditemukan.</p>
                </div>
            )}
        </section>
    )
}
