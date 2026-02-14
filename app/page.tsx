import Hero from "@/components/Hero";
import ArticleList from "@/components/ArticleList";

export default async function Home({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  return (
    <main>
      <Hero />
      <ArticleList searchParams={searchParams} />
    </main>
  );
}
