import { getAllArticles } from "@/lib/mdx"
import ArticleCard from "@/components/ArticleCard"
import { getTranslations } from "next-intl/server"
import InFeedAd from "@/components/InFeedAd"
import React from "react"

export default async function ArticleList({ searchParams }: { searchParams?: Promise<{ q?: string }> }) {
    const articles = await getAllArticles()
    const query = (await searchParams)?.q?.toLowerCase() || ""
    const t = await getTranslations("ArticleList");

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
                    {query ? t('searchResults', {query}) : t('latestArticles')}
                </h2>
                <p className="mt-2 text-muted-foreground">
                    {query 
                        ? t('foundArticles', {count: filteredArticles.length})
                        : t('explore')
                    }
                </p>
            </div>
            {filteredArticles.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredArticles.map((article, index) => (
                        <React.Fragment key={article.slug}>
                            <ArticleCard article={article} />
                            {/* Insert ad after every 3 articles */}
                            {(index + 1) % 3 === 0 && (
                                <div className="col-span-full w-full">
                                    <InFeedAd />
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            ) : (
                <div className="text-center py-12">
                    <p className="text-xl text-gray-500">{t('noArticles')}</p>
                </div>
            )}
        </section>
    )
}
