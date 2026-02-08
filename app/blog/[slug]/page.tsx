import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import { ArrowLeft, Calendar, User } from "lucide-react"
import { getArticleBySlug } from "@/lib/mdx"
import { Button } from "@/components/ui/button"

interface Props {
    params: Promise<{
        slug: string
    }>
}

export default async function BlogPost({ params }: Props) {
    const slug = (await params).slug
    const article = await getArticleBySlug(slug)

    if (!article) {
        notFound()
    }

    return (
        <article className="container mx-auto max-w-3xl px-4 py-12">
            <Button variant="ghost" asChild className="mb-8 pl-0 hover:bg-transparent hover:text-primary">
                <Link href="/" className="flex items-center gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    Back to Home
                </Link>
            </Button>

            <header className="mb-12">
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {article.meta.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {article.meta.author}
                    </span>
                </div>

                <h1 className="mb-6 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    {article.meta.title}
                </h1>

                {article.meta.image && (
                    <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border/50 shadow-lg my-8">
                        <Image
                            src={article.meta.image}
                            alt={article.meta.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                )}

                <div className="flex flex-wrap gap-2">
                    {article.meta.tags?.map((tag) => (
                        <span
                            key={tag}
                            className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </header>

            <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:scroll-mt-20 prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl">
                <MDXRemote source={article.content} />
            </div>
        </article>
    )
}
