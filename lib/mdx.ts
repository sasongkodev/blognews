import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const rootDirectory = path.join(process.cwd(), 'content', 'articles')

export type Article = {
    slug: string
    meta: {
        title: string
        description: string
        date: string
        author?: string
        image?: string
        image_credit?: string
        image_credit_url?: string
        sourceLink?: string
        tags?: string[]
    }
    content: string
}

export const getArticleBySlug = async (slug: string): Promise<Article | null> => {
    try {
        const filePath = path.join(rootDirectory, `${slug}.mdx`)
        const fileContent = fs.readFileSync(filePath, 'utf8')
        const { data, content } = matter(fileContent)

        return {
            slug,
            meta: data as Article['meta'],
            content,
        }
    } catch (error) {
        return null
    }
}

export const getAllArticles = async (): Promise<Article[]> => {
    if (!fs.existsSync(rootDirectory)) {
        return []
    }

    const files = fs.readdirSync(rootDirectory)

    const articles = files.map((file) => {
        const slug = file.replace(/\.mdx$/, '')
        const filePath = path.join(rootDirectory, file)
        const fileContent = fs.readFileSync(filePath, 'utf8')
        const { data, content } = matter(fileContent)

        return {
            slug,
            meta: data as Article['meta'],
            content,
        }
    })

    return articles.sort((a, b) => {
        if (new Date(a.meta.date) > new Date(b.meta.date)) {
            return -1
        }
        return 1
    })
}

export const getAllTags = async (): Promise<{ name: string; count: number }[]> => {
    const articles = await getAllArticles()
    const tagMap = new Map<string, number>()

    articles.forEach((article) => {
        article.meta.tags?.forEach((tag) => {
            const normalized = tag.trim()
            tagMap.set(normalized, (tagMap.get(normalized) || 0) + 1)
        })
    })

    return Array.from(tagMap.entries())
        .map(([name, count]) => ({ name, count }))
        .sort((a, b) => b.count - a.count)
}

export const getArticlesByTag = async (tag: string): Promise<Article[]> => {
    const articles = await getAllArticles()
    return articles.filter((article) =>
        article.meta.tags?.some(
            (t) => t.toLowerCase() === tag.toLowerCase()
        )
    )
}
