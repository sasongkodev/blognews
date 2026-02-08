import Link from "next/link"
import Image from "next/image"
import { Calendar, User } from "lucide-react"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"
import { Article } from "@/lib/mdx"

interface ArticleCardProps {
    article: Article
}

export default function ArticleCard({ article }: ArticleCardProps) {
    return (
        <Link href={`/blog/${article.slug}`}>
            <Card className="group h-full overflow-hidden border-border/50 bg-card transition-all hover:border-primary/50 hover:shadow-lg dark:hover:border-primary/50">
                <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                        src={article.meta.image || "/assets/benner.svg"}
                        alt={article.meta.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </div>
                <CardHeader>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {article.meta.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            {article.meta.author}
                        </span>
                    </div>
                    <h3 className="line-clamp-2 text-xl font-bold tracking-tight group-hover:text-primary">
                        {article.meta.title}
                    </h3>
                </CardHeader>
                <CardContent>
                    <p className="line-clamp-3 text-sm text-muted-foreground">
                        {article.meta.description}
                    </p>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2">
                    {article.meta.tags?.map((tag) => (
                        <span
                            key={tag}
                            className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground ring-1 ring-inset ring-gray-500/10"
                        >
                            {tag}
                        </span>
                    ))}
                </CardFooter>
            </Card>
        </Link>
    )
}
