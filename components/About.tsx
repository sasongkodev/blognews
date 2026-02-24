import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Github,
  Twitter,
  Linkedin,
  Code2,
  Cpu,
  Users,
  Terminal,
  BookOpen,
  Zap,
  Globe,
  Heart,
  Star,
  ArrowRight,
  Mail,
  Coffee,
} from "lucide-react";

const stats = [
  { value: "50+", label: "Articles Published", icon: BookOpen },
  { value: "2K+", label: "Monthly Readers", icon: Users },
  { value: "10+", label: "Topics Covered", icon: Globe },
  { value: "100%", label: "Open Source", icon: Heart },
];

const techStack = [
  { name: "Next.js", color: "bg-black", textColor: "text-white", label: "N" },
  { name: "React", color: "bg-[#61DAFB]", textColor: "text-slate-900", label: "R" },
  { name: "TypeScript", color: "bg-[#3178C6]", textColor: "text-white", label: "TS" },
  { name: "Tailwind", color: "bg-[#38B2AC]", textColor: "text-white", label: "TW" },
  { name: "Vercel", color: "bg-slate-900", textColor: "text-white", label: "▲" },
  { name: "MDX", color: "bg-amber-500", textColor: "text-white", label: "MDX" },
];

const timeline = [
  {
    year: "2024",
    title: "The Beginning",
    desc: "TemanKode started as a personal coding journal — documenting daily learnings and web dev experiments.",
    dot: "bg-cyan-400",
  },
  {
    year: "2024",
    title: "First 100 Readers",
    desc: "The blog grew organically. Developers across Indonesia started reading and sharing the articles.",
    dot: "bg-blue-400",
  },
  {
    year: "2025",
    title: "Community & Content",
    desc: "Expanded to tutorials, tips & tricks, and shortcut guides. Launched the multi-language support.",
    dot: "bg-purple-400",
  },
  {
    year: "2025",
    title: "Growing Together",
    desc: "Now reaching thousands of developers monthly, covering modern full-stack development topics.",
    dot: "bg-emerald-400",
  },
];

const pillars = [
  {
    icon: Code2,
    title: "Learn",
    desc: "Master modern web technologies through comprehensive tutorials and hands-on guides designed for all skill levels.",
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconBg: "bg-blue-500/20",
    iconColor: "text-blue-400",
    border: "border-blue-500/20 hover:border-blue-400/50",
  },
  {
    icon: Cpu,
    title: "Build",
    desc: "Create real-world applications and projects that solve problems and look great, pushing the boundaries of what's possible.",
    gradient: "from-cyan-500/20 to-teal-500/20",
    iconBg: "bg-cyan-500/20",
    iconColor: "text-cyan-400",
    border: "border-cyan-500/20 hover:border-cyan-400/50",
  },
  {
    icon: Users,
    title: "Share",
    desc: "Connect with fellow developers, exchange knowledge, and grow together in a supportive, open community.",
    gradient: "from-purple-500/20 to-violet-500/20",
    iconBg: "bg-purple-500/20",
    iconColor: "text-purple-400",
    border: "border-purple-500/20 hover:border-purple-400/50",
  },
];

const gridBgStyle = {
  backgroundImage: `
    linear-gradient(rgba(6,182,212,0.3) 1px, transparent 1px),
    linear-gradient(90deg, rgba(6,182,212,0.3) 1px, transparent 1px)
  `,
  backgroundSize: "40px 40px",
};

const gridBgStyleDim = {
  backgroundImage: `
    linear-gradient(rgba(6,182,212,0.5) 1px, transparent 1px),
    linear-gradient(90deg, rgba(6,182,212,0.5) 1px, transparent 1px)
  `,
  backgroundSize: "40px 40px",
};

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* ─── Hero ────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-32 lg:py-40 bg-[#0a192f] text-white">
        <div className="absolute inset-0 opacity-10" style={gridBgStyle} />
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-blue-600 rounded-full blur-[130px] opacity-20 animate-pulse-slow" />
        <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-cyan-500 rounded-full blur-[130px] opacity-20 animate-pulse-slow" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-400 text-sm font-mono">
              <Terminal className="w-3.5 h-3.5" />
              <span>whoami</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              About{" "}
              <span className="relative">
                <span className="text-cyan-400">TemanKode</span>
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500" />
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-gray-300 text-lg md:text-xl leading-relaxed">
              Building a community of developers — sharing knowledge, writing
              clean code, and exploring the frontiers of modern web technology
              together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/tutorial">
                <Button className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold px-8 py-6 rounded-full text-base transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-0.5">
                  Explore Tutorials <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 px-8 py-6 rounded-full text-base transition-all duration-300 bg-transparent hover:-translate-y-0.5"
                >
                  <Github className="mr-2 w-4 h-4" /> Follow on GitHub
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Stats ───────────────────────────────────────────────── */}
      <section className="py-16 bg-slate-900 border-y border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-slate-700">
            {stats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="flex flex-col items-center text-center gap-3 px-6 py-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                  <Icon className="w-5 h-5 text-cyan-400" />
                </div>
                <span className="text-4xl font-bold text-white font-mono">{value}</span>
                <span className="text-sm text-gray-400 font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Mission / Pillars ───────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 space-y-4">
            <span className="inline-block px-3 py-1 text-xs font-mono font-semibold tracking-widest text-cyan-600 uppercase bg-cyan-50 rounded-full border border-cyan-100">
              Our Mission
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
              Three Pillars, One Purpose
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Everything we do at TemanKode is guided by these core principles.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {pillars.map(({ icon: Icon, title, desc, gradient, iconBg, iconColor, border }) => (
              <div
                key={title}
                className={`group relative flex flex-col items-center space-y-5 text-center p-10 rounded-3xl border backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl bg-gradient-to-br ${gradient} ${border}`}
              >
                <div className={`p-5 rounded-2xl ${iconBg} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-8 h-8 ${iconColor}`} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
                <p className="text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Story + Timeline ────────────────────────────────────── */}
      <section className="py-28 bg-[#0a192f] text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-5" style={gridBgStyleDim} />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid gap-16 lg:grid-cols-2 items-start">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="inline-block px-3 py-1 text-xs font-mono font-semibold tracking-widest text-cyan-400 uppercase bg-cyan-400/10 rounded-full border border-cyan-400/20">
                  Our Story
                </span>
                <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                  From a Blog to <span className="text-cyan-400">a Community</span>
                </h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                TemanKode started as a personal coding journal — a place to
                document daily learnings, experiments, and the struggles of
                modern web development. What began as notes for myself became a
                resource for developers across Indonesia.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                We believe every developer has a story worth sharing. Clean
                code, clean thinking, and open knowledge — that&apos;s what TemanKode
                is about.
              </p>
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-cyan-400/10 border border-cyan-400/20">
                <Coffee className="w-6 h-6 text-cyan-400 shrink-0" />
                <p className="text-gray-300 text-sm">
                  Made with passion, late-night coffee, and a deep love for good code.
                </p>
              </div>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/50 via-blue-400/30 to-transparent" />
              <div className="space-y-10">
                {timeline.map(({ year, title, desc, dot }, i) => (
                  <div key={i} className="relative">
                    <div className={`absolute -left-[25px] top-1 w-4 h-4 rounded-full ${dot} border-2 border-slate-900 shadow-lg`} />
                    <div className="space-y-1.5">
                      <span className="text-xs font-mono font-bold text-cyan-400 tracking-widest uppercase">{year}</span>
                      <h4 className="text-lg font-bold text-white">{title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Author Profile ──────────────────────────────────────── */}
      <section className="py-28 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 space-y-4">
            <span className="inline-block px-3 py-1 text-xs font-mono font-semibold tracking-widest text-cyan-600 uppercase bg-cyan-50 rounded-full border border-cyan-100">
              Meet The Author
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              The Person Behind The Code
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 text-center space-y-6">
              <div className="mx-auto w-28 h-28 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <Terminal className="w-14 h-14 text-white" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-slate-900">Wahyu Puji</h3>
                <p className="text-cyan-600 font-mono text-sm font-semibold tracking-wide">
                  Full-Stack Developer &amp; Content Creator
                </p>
              </div>

              <p className="text-gray-500 leading-relaxed max-w-lg mx-auto">
                Passionate about web development, open source, and sharing
                knowledge with the developer community. I write about Next.js,
                TypeScript, and modern web technologies.
              </p>

              <div className="flex flex-wrap gap-2 justify-center">
                {["Next.js", "TypeScript", "React", "Node.js", "Tailwind CSS"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-mono font-semibold bg-slate-100 text-slate-700 rounded-full border border-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 justify-center pt-2">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-slate-100 hover:bg-cyan-50 hover:text-cyan-600 text-slate-600 transition-all duration-200 hover:scale-110">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-all duration-200 hover:scale-110">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-blue-600 text-slate-600 transition-all duration-200 hover:scale-110">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:hello@temankode.com" className="p-3 rounded-xl bg-slate-100 hover:bg-emerald-50 hover:text-emerald-600 text-slate-600 transition-all duration-200 hover:scale-110">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Tech Stack ──────────────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 space-y-4">
            <span className="inline-block px-3 py-1 text-xs font-mono font-semibold tracking-widest text-cyan-600 uppercase bg-cyan-50 rounded-full border border-cyan-100">
              Stack
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Technologies We Love</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Handpicked tools for modern, scalable, and beautifully crafted web applications.
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 max-w-4xl mx-auto">
            {techStack.map(({ name, color, textColor, label }) => (
              <div key={name} className="group flex flex-col items-center gap-3 p-4 rounded-2xl hover:bg-slate-50 transition-all duration-300 cursor-default">
                <div className={`h-16 w-16 ${color} ${textColor} rounded-2xl flex items-center justify-center text-xl font-extrabold shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
                  {label}
                </div>
                <span className="text-sm font-semibold text-slate-600 group-hover:text-slate-900 transition-colors">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────── */}
      <section className="py-36 bg-[#0a192f] text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10" style={gridBgStyle} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 text-center relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-400 text-sm font-mono">
            <Star className="w-3.5 h-3.5" />
            <span>Join the Community</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-3xl mx-auto leading-tight">
            Let&apos;s Build Something <span className="text-cyan-400">Amazing</span> Together
          </h2>
          <p className="mx-auto max-w-xl text-gray-300 text-lg sm:text-xl leading-relaxed">
            Stay updated with the latest tutorials, articles, and developer tips.
            Join thousands of developers who learn with TemanKode.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link href="/">
              <Button className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold py-6 px-10 rounded-full text-lg shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:-translate-y-0.5">
                <Zap className="mr-2 w-5 h-5" />
                Start Reading
              </Button>
            </Link>
            <div className="flex gap-3 items-center">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-full hover:bg-white/20 transition-all duration-200 hover:scale-110 border border-white/10">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-full hover:bg-white/20 transition-all duration-200 hover:scale-110 border border-white/10">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-full hover:bg-white/20 transition-all duration-200 hover:scale-110 border border-white/10">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
