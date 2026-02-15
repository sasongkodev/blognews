import Image from "next/image"
import { LayoutTextFlip } from "@/components/ui/layout-text-flip"
import { getTranslations } from "next-intl/server"

export default async function Hero() {
    const t = await getTranslations("Hero");
    const flipWords = ["Tutorial", "Insight", "Tips & Tricks", "Tech News"]; // Fallback or from messages?
    // flipWords from messages might be an array.
    // getTranslations returns a function. 
    // To get array: t.raw('flipWords') if supported, or t('flipWords') if it returns string.
    // Usually t('key') returns string.
    // If I structured it as array in json, I need to check how next-intl handles generic objects/arrays.
    // It seems next-intl recommends using `useMessages` or `getMessages` effectively for arrays or just separate keys.
    // Or I can use t.markup if I want specific handling.
    // Use `t.raw('flipWords')` if I want the array. NOTE: `raw` might need specific setup or just casting.
    
    // Let's assume I can get it. If not, I'll specific keys.
    // Actually, `t` function usually returns strings.
    // I will use `(t('flipWords') as unknown as string[])` if I am sure.
    // Or better, I'll fetch messages object for 'Hero'.
    
    return (
        <section className="relative w-full overflow-hidden">

            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/assets/benner.svg"
                    alt="Teman Kode Banner"
                    fill
                    priority
                    fetchPriority="high"
                    className="object-cover"
                />
                {/* Overlay untuk kontras teks */}
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <div className="mx-auto flex min-h-[420px] max-w-6xl flex-col items-center justify-center px-4 text-center">
                <div className="mb-4 flex flex-wrap items-center justify-center gap-2 text-white">
                    <LayoutTextFlip
                        text="Teman Kode"
                        words={t.raw('flipWords') as string[]}
                        duration={2500}
                    />
                </div>

                <h5 className="max-w-2xl text-sm font-normal leading-relaxed text-neutral-200 drop-shadow-md md:text-base">
                    {t('description')}
                </h5>
            </div>

        </section>
    )
}
