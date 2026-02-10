import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import { ArrowLeft, Calendar, User } from "lucide-react"
import { getArticleBySlug, getAllArticles } from "@/lib/mdx"
import { Button } from "@/components/ui/button"
import { Metadata } from "next"
import ShareButtons from "./ShareButtons"
import AdsSpace from "@/components/AdsSpace"

// Force dynamic rendering to ensure fresh content on each request
export const dynamic = 'force-dynamic'
export const revalidate = 0

interface Props {
    params: Promise<{
        slug: string
    }>
}

// Generate static params for all articles at build time
export async function generateStaticParams() {
    const articles = await getAllArticles()
    return articles.map((article) => ({
        slug: article.slug,
    }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const slug = (await params).slug
    const article = await getArticleBySlug(slug)

    if (!article) {
        return {
            title: 'Article Not Found',
        }
    }

    return {
        title: article.meta.title,
        description: article.meta.description,
        openGraph: {
            title: article.meta.title,
            description: article.meta.description,
            type: 'article',
            publishedTime: article.meta.date,
            authors: article.meta.author ? [article.meta.author] : undefined,
            images: article.meta.image ? [article.meta.image] : undefined,
        },
    }
}

const IN_ARTICLE_AD_URL = "https://www.effectivegatecpm.com/agm4rp3b1?key=bd19c8751f624ec024f6226a4d3bd6e2";
const SMARTLINK_AD_URL = "https://www.effectivegatecpm.com/dve7ruq4?key=073b227d7a23cf58fd76301563f53e5c";

function insertAdIntoContent(content: string): string {
    const paragraphs = content.split('\n\n');

    if (paragraphs.length > 5) {
        // Insert ad after the 5th paragraph
        paragraphs.splice(5, 0, `<AdsSpace url="${SMARTLINK_AD_URL}" />`);
    }

    if (paragraphs.length > 2) {
        // Insert ad after the 2nd paragraph
        paragraphs.splice(2, 0, `<AdsSpace url="${IN_ARTICLE_AD_URL}" />`);
    }

    return paragraphs.join('\n\n');
}

export default async function BlogPost({ params }: Props) {
    const slug = (await params).slug
    const article = await getArticleBySlug(slug)

    if (!article) {
        notFound()
    }

    return (
        <div className="min-h-screen bg-[#0f172a]">
            <article className="container mx-auto max-w-3xl px-4 py-12">
                <Button variant="ghost" asChild className="mb-8 pl-0 text-slate-400 hover:bg-transparent hover:text-cyan-400">
                    <Link href="/" className="flex items-center gap-2">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Home
                    </Link>
                </Button>

                <header className="mb-12">
                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mb-4">
                        <span className="flex items-center gap-1.5 rounded-full bg-slate-800 px-3 py-1">
                            <Calendar className="h-4 w-4" />
                            {article.meta.date}
                        </span>
                        <span className="flex items-center gap-1.5 rounded-full bg-slate-800 px-3 py-1">
                            <User className="h-4 w-4" />
                            {article.meta.author}
                        </span>
                    </div>

                    <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white lg:text-5xl">
                        {article.meta.title}
                    </h1>

                    {article.meta.image && (
                        <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-slate-700/50 shadow-lg my-8">
                            <Image
                                src={article.meta.image}
                                alt={article.meta.title}
                                fill
                                className="object-cover"
                                priority
                            />
                            {article.meta.image_credit && (
                                <div className="absolute bottom-0 left-0 right-0 bg-black/60 px-4 py-2 text-xs text-white backdrop-blur-sm">
                                    {article.meta.image_credit_url ? (
                                        <a
                                            href={article.meta.image_credit_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-cyan-400 transition-colors"
                                        >
                                            {article.meta.image_credit}
                                        </a>
                                    ) : (
                                        article.meta.image_credit
                                    )}
                                </div>
                            )}
                        </div>
                    )}

                    <div className="flex flex-wrap gap-2">
                        {article.meta.tags?.map((tag) => (
                            <span
                                key={tag}
                                className="inline-flex items-center rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400 ring-1 ring-inset ring-cyan-500/20"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </header>

                <div className="prose prose-lg prose-invert max-w-none prose-headings:scroll-mt-20 prose-headings:font-bold prose-headings:text-white prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-p:text-slate-300 prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:underline prose-strong:text-white prose-code:text-cyan-300 prose-pre:bg-slate-800 prose-pre:border prose-pre:border-slate-700 prose-img:rounded-xl prose-li:text-slate-300">
                    <MDXRemote
                        source={insertAdIntoContent(article.content)}
                        components={{ AdsSpace }}
                    />
                </div>

                {article.meta.sourceLink && (
                    <div className="mt-12 border-t border-slate-800 pt-6">
                        <p className="text-slate-400">
                            Source:{" "}
                            <a
                                href={article.meta.sourceLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-cyan-400 hover:underline"
                            >
                                {article.meta.sourceLink}
                            </a>
                        </p>
                    </div>
                )}

                <ShareButtons title={article.meta.title} slug={slug} />
                <AdsSpace />
            </article>
        </div>
    )
}
