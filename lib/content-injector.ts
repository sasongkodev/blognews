import { Article } from "@/lib/mdx";

export function injectContent(content: string, allArticles: Article[], currentSlug: string): string {
    // Simplified to just usage of bottom-up approach which is more robust
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
        paragraphs.splice(5, 0, `<div class="ad-slot"></div>`);
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
        paragraphs.splice(2, 0, `<div class="ad-slot"></div>`);
    }

    // 5. Dynamic Ads every 4 paragraphs starting from para 9
    // Loop backwards to keep indices valid.
    // Calculate start index for the loop: find the largest N such that 9 + N*4 < paragraphs.length
    // We want to insert at 9, 13, 17...
    
    const startPara = 9;
    const interval = 4;
    
    // We can iterate from the end down to startPara to find insertion points
    // Insertions should be done in descending order
    
    // Find valid insertion points > 7
    let nextInsert = startPara;
    const insertionPoints: number[] = [];
    while (nextInsert < paragraphs.length) {
        insertionPoints.push(nextInsert);
        nextInsert += interval;
    }
    
    // Reverse to insert from end to start
    insertionPoints.reverse().forEach(index => {
        if (index < paragraphs.length) {
             paragraphs.splice(index, 0, `<div class="ad-slot"></div>`);
        }
    });

    // 5. Ad at the end (User Request) - Removed
    // paragraphs.push(`<div className="my-8 flex justify-center"><AdsterraBanner /></div>`);

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
