import { Article } from '@/lib/mdx'

export function injectContent(
  content: string,
  allArticles: Article[],
  currentSlug: string
): string {
  // Simplified to just usage of bottom-up approach which is more robust
  return injectContentBottomUp(content, allArticles, currentSlug)
}

function injectContentBottomUp(
  content: string,
  allArticles: Article[],
  currentSlug: string
): string {
  const paragraphs = content.split('\n\n')
  const availableArticles = allArticles.filter((a) => a.slug !== currentSlug)

  // Shuffle available articles safely
  const shuffled = [...availableArticles].sort(() => 0.5 - Math.random())
  let articleIndex = 0

  const getNextArticle = () => {
    if (articleIndex < shuffled.length) {
      return shuffled[articleIndex++]
    }
    return null
  }

  // Insert article links at strategic positions (descending order to keep indices valid)

  // 1. Link at 7
  if (paragraphs.length > 7) {
    const article = getNextArticle()
    if (article) {
      const linkHtml = createLinkHtml(article)
      paragraphs.splice(7, 0, linkHtml)
    }
  }

  // 2. Link at 3
  if (paragraphs.length > 3) {
    const article = getNextArticle()
    if (article) {
      const linkHtml = createLinkHtml(article)
      paragraphs.splice(3, 0, linkHtml)
    }
  }

  return paragraphs.join('\n\n')
}

function createLinkHtml(article: Article) {
  return `
<div className="my-8 rounded-lg border-l-4 border-cyan-500 bg-slate-800/50 p-4 not-prose">
  <p className="mb-2 text-sm font-bold uppercase tracking-wider text-slate-400">Baca Juga</p>
  <a href="/articles/${article.slug}" className="text-lg font-bold text-cyan-400 hover:text-cyan-300 hover:underline">
    ${article.meta.title}
  </a>
</div>`
}
