"use client";

import { Facebook, Linkedin, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

interface ShareButtonsProps {
    title: string;
    slug: string;
}

export default function ShareButtons({ title, slug }: ShareButtonsProps) {
    const [baseUrl, setBaseUrl] = useState("");

    useEffect(() => {
        setBaseUrl(window.location.origin);
    }, []);

    const articleUrl = `${baseUrl}/articles/${slug}`;
    const encodedUrl = encodeURIComponent(articleUrl);
    const encodedTitle = encodeURIComponent(title);

    const shareLinks = {
        whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    };

    return (
        <div className="flex items-center gap-4 mt-8 pt-6 border-t border-slate-800">
            <span className="text-sm text-slate-400">Share:</span>
            <div className="flex gap-3">
                <a
                    href={shareLinks.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-green-500/10 text-green-400 hover:bg-green-500/20 transition-colors"
                    aria-label="Share on WhatsApp"
                >
                    <MessageCircle className="w-5 h-5" />
                </a>
                <a
                    href={shareLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-colors"
                    aria-label="Share on LinkedIn"
                >
                    <Linkedin className="w-5 h-5" />
                </a>
                <a
                    href={shareLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-blue-600/10 text-blue-500 hover:bg-blue-600/20 transition-colors"
                    aria-label="Share on Facebook"
                >
                    <Facebook className="w-5 h-5" />
                </a>
            </div>
        </div>
    );
}
