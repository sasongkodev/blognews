import Image from "next/image"

export default function Hero() {
    return (
        <section className="relative w-full overflow-hidden">

            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/assets/benner.svg"
                    alt="Teman Kode Banner"
                    fill
                    priority
                    className="object-cover"
                />
                {/* Overlay untuk kontras teks */}
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <div className="mx-auto flex min-h-[420px] max-w-6xl flex-col items-center justify-center px-4 text-center">
                <h1 className="mb-4 text-4xl font-bold tracking-tight text-white drop-shadow-lg md:text-5xl">
                    Teman Kode
                </h1>

                <h5 className="max-w-2xl text-sm font-normal leading-relaxed text-neutral-200 drop-shadow-md md:text-base">
                    Media berbagi insight, tutorial, dan opini seputar dunia teknologi,
                    pemrograman, dan perkembangan digital secara ringkas dan relevan.
                </h5>
            </div>

        </section>
    )
}
