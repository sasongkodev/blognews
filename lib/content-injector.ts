import { Article } from "@/lib/mdx";

export function injectContent(content: string, allArticles: Article[], currentSlug: string): string {
    const paragraphs = content.split('\n\n');
    const availableArticles = allArticles.filter(a => a.slug !== currentSlug);

    // Helper to get a random article
    const getRandomArticle = () => {
        if (availableArticles.length === 0) return null;
        const randomIndex = Math.floor(Math.random() * availableArticles.length);
        return availableArticles.splice(randomIndex, 1)[0];
    };

    // Inject Interlinks (Baca Juga)
    // Position: After paragraph 7 (Index 7)
    if (paragraphs.length > 7) {
        const article = getRandomArticle();
        if (article) {
             const linkHtml = `
<div className="my-8 rounded-lg border-l-4 border-cyan-500 bg-slate-800/50 p-4">
  <p className="mb-2 font-bold text-white">Baca Juga:</p>
  <a href="/articles/${article.slug}" className="text-lg font-medium text-cyan-400 hover:underline">
    ${article.meta.title}
  </a>
</div>`;
            paragraphs.splice(7, 0, linkHtml);
        }
    }

    // Position: After paragraph 3 (Index 3)
    if (paragraphs.length > 3) {
        const article = getRandomArticle();
        if (article) {
             const linkHtml = `
<div className="my-8 rounded-lg border-l-4 border-cyan-500 bg-slate-800/50 p-4">
  <p className="mb-2 font-bold text-white">Baca Juga:</p>
  <a href="/articles/${article.slug}" className="text-lg font-medium text-cyan-400 hover:underline">
    ${article.meta.title}
  </a>
</div>`;
            paragraphs.splice(3, 0, linkHtml);
        }
    }

    // Inject Ads (Logic moved from page.tsx)
    // Note: Indices shift as we insert.
    // Original plan: Ad after 5, Ad after 2.
    // Current insertions:
    // If length > 7: Insert at 7.
    // If length > 3: Insert at 3.
    
    // Let's re-evaluate insertion indices to avoid conflict.
    // It's safer to insert from bottom up to preserve indices.
    
    // Reset and redo with bottom-up approach
    return injectContentBottomUp(content, allArticles, currentSlug);
}

function injectContentBottomUp(content: string, allArticles: Article[], currentSlug: string): string {
    const paragraphs = content.split('\n\n');
    const availableArticles = allArticles.filter(a => a.slug !== currentSlug);
    
    // Shuffle available articles safely
    const shuffled = [...availableArticles].sort(() => 0.5 - Math.random());
    let articleIndex = 0;

    const getNextArticle = () => {
        if (articleIndex < shuffled.length) {
            return shuffled[articleIndex++];
        }
        return null;
    };

    // We want:
    // 1. Ad after para 5
    // 2. Ad after para 2
    // 3. Link after para 3
    // 4. Link after para 7
    
    // Sort insertion points descending:
    // 7 (Link)
    // 5 (Ad)
    // 3 (Link)
    // 2 (Ad)

    // Check bounds before inserting

    // 1. Link at 7
    if (paragraphs.length > 7) {
        const article = getNextArticle();
        if (article) {
            const linkHtml = createLinkHtml(article);
            paragraphs.splice(7, 0, linkHtml);
        }
    }

    // 2. Ad at 5
    if (paragraphs.length > 5) {
        paragraphs.splice(5, 0, `<AdsterraBanner />`);
    }

    // 3. Link at 3
    if (paragraphs.length > 3) {
        const article = getNextArticle();
        if (article) {
           const linkHtml = createLinkHtml(article);
           paragraphs.splice(3, 0, linkHtml);
        }
    }

    // 4. Ad at 2
    if (paragraphs.length > 2) {
        paragraphs.splice(2, 0, `<AdsterraBanner />`);
    }

    return paragraphs.join('\n\n');
}

function createLinkHtml(article: Article) {
    return `
<div className="my-8 rounded-lg border-l-4 border-cyan-500 bg-slate-800/50 p-4 not-prose">
  <p className="mb-2 text-sm font-bold uppercase tracking-wider text-slate-400">Baca Juga</p>
  <a href="/articles/${article.slug}" className="text-lg font-bold text-cyan-400 hover:text-cyan-300 hover:underline">
    ${article.meta.title}
  </a>
</div>`;
}
