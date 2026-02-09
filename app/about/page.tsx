
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, Twitter, Linkedin, Code, Cpu, Users, Terminal } from "lucide-react"

export const metadata = {
    title: 'About',
    description: 'Learn about TemanKode - a tech blog and developer community focused on modern web development, tutorials, and coding resources.',
}

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-24 lg:py-32 bg-[#0a192f] text-white">
                <div className="absolute inset-0 bg-[url('/assets/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20"></div>
                <div className="container px-4 md:px-6 relative z-10">
                    <div className="flex flex-col items-center space-y-4 text-center">
                        <div className="space-y-4 max-w-3xl">
                            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                                About <span className="text-cyan-400">TemanKode</span>
                            </h1>
                            <p className="mx-auto text-lg text-gray-300 md:text-xl leading-relaxed">
                                Building a community of developers, sharing knowledge, and exploring the future of web technology together.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20 pointer-events-none">
                    <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob"></div>
                    <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob animation-delay-2000"></div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-24 bg-white dark:bg-slate-950">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900 dark:text-white">Our Mission</h2>
                        <p className="mt-4 text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                            Three pillars that define our purpose and drive our community forward.
                        </p>
                    </div>
                    <div className="grid gap-8 lg:grid-cols-3">
                        <div className="group flex flex-col items-center space-y-4 text-center p-8 border rounded-2xl shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-blue-200 dark:border-slate-800 dark:hover:border-blue-900 bg-slate-50 dark:bg-slate-900/50">
                            <div className="p-4 bg-blue-100 rounded-full dark:bg-blue-900/30 group-hover:scale-110 transition-transform duration-300">
                                <Code className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Learn</h3>
                            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                                Master modern web technologies through comprehensive tutorials and hands-on guides designed for all skill levels.
                            </p>
                        </div>
                        <div className="group flex flex-col items-center space-y-4 text-center p-8 border rounded-2xl shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-cyan-200 dark:border-slate-800 dark:hover:border-cyan-900 bg-slate-50 dark:bg-slate-900/50">
                            <div className="p-4 bg-cyan-100 rounded-full dark:bg-cyan-900/30 group-hover:scale-110 transition-transform duration-300">
                                <Cpu className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Build</h3>
                            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                                Create real-world applications and projects that solve problems and look great, pushing the boundaries of what's possible.
                            </p>
                        </div>
                        <div className="group flex flex-col items-center space-y-4 text-center p-8 border rounded-2xl shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-purple-200 dark:border-slate-800 dark:hover:border-purple-900 bg-slate-50 dark:bg-slate-900/50">
                            <div className="p-4 bg-purple-100 rounded-full dark:bg-purple-900/30 group-hover:scale-110 transition-transform duration-300">
                                <Users className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Share</h3>
                            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                                Connect with other developers, share your knowledge, experience, and grow together in a supportive environment.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Profile/Story Section - Optional */}
            <section className="py-24 bg-gray-50 dark:bg-slate-900/50">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-12 lg:grid-cols-2 items-center">
                        <div className="space-y-6">
                            <div className="inline-block px-3 py-1 text-sm font-semibold tracking-wider text-cyan-500 uppercase bg-cyan-500/10 rounded-full">
                                Since 2024
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900 dark:text-white">Our Story</h2>
                            <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
                                TemanKode started as a small personal blog to document my journey in web development. Over time, it has evolved into a resource for developers of all levels, driven by a passion for clean code and user-centric design.
                            </p>
                            <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
                                We believe in the power of open source and community-driven learning. Every line of code writes a story, and we're here to help you write yours.
                            </p>
                        </div>
                        <div className="relative h-[300px] lg:h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl skew-y-3 hover:skew-y-0 transition-all duration-500 hover:scale-105">
                            <Image
                                src="/assets/benner.svg"
                                alt="Workspace"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="py-24 bg-white dark:bg-slate-950">
                <div className="container px-4 md:px-6 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter mb-16 text-slate-900 dark:text-white">Technologies We Love</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                        <div className="flex flex-col items-center gap-4 group p-6 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                            <div className="h-20 w-20 bg-black text-white rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">N</div>
                            <span className="font-semibold text-lg text-slate-700 dark:text-slate-300">Next.js</span>
                        </div>
                        <div className="flex flex-col items-center gap-4 group p-6 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                            <div className="h-20 w-20 bg-[#61DAFB] text-slate-900 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <Code className="w-10 h-10" />
                            </div>
                            <span className="font-semibold text-lg text-slate-700 dark:text-slate-300">React</span>
                        </div>
                        <div className="flex flex-col items-center gap-4 group p-6 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                            <div className="h-20 w-20 bg-[#38B2AC] text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <Terminal className="w-10 h-10" />
                            </div>
                            <span className="font-semibold text-lg text-slate-700 dark:text-slate-300">Tailwind</span>
                        </div>
                        <div className="flex flex-col items-center gap-4 group p-6 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                            <div className="h-20 w-20 bg-[#3178C6] text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <Code className="w-10 h-10" />
                            </div>
                            <span className="font-semibold text-lg text-slate-700 dark:text-slate-300">TypeScript</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 bg-[#0a192f] text-white overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('/assets/grid.svg')] bg-center opacity-10"></div>
                <div className="container px-4 md:px-6 text-center relative z-10">
                    <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-6">Join the Community</h2>
                    <p className="mx-auto max-w-[600px] text-gray-300 mb-10 text-xl leading-relaxed">
                        Stay updated with the latest tutorials, articles, and projects. Let's build something amazing together.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-6 px-10 rounded-full text-lg shadow-lg hover:shadow-cyan-500/20 transition-all">
                            Subscribe to Newsletter
                        </Button>
                        <div className="flex gap-4 items-center justify-center">
                            <a href="#" className="p-4 bg-white/5 rounded-full hover:bg-white/20 transition-all hover:scale-110 border border-white/10">
                                <Twitter className="w-6 h-6" />
                            </a>
                            <a href="#" className="p-4 bg-white/5 rounded-full hover:bg-white/20 transition-all hover:scale-110 border border-white/10">
                                <Github className="w-6 h-6" />
                            </a>
                            <a href="#" className="p-4 bg-white/5 rounded-full hover:bg-white/20 transition-all hover:scale-110 border border-white/10">
                                <Linkedin className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
