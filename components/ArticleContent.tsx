"use client";

import { useEffect, useRef } from "react";

export default function ArticleContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const slots = containerRef.current.querySelectorAll(".ad-slot");

    slots.forEach((slot, index) => {
      // Skip if already has ad content
      if (slot.children.length > 0) return;

      const wrapper = document.createElement("div");
      wrapper.className = "flex justify-center my-8";
      wrapper.id = `adsterra-slot-${index}`;

      const adDiv = document.createElement("div");
      wrapper.appendChild(adDiv);

      // Inject Adsterra config script
      const configScript = document.createElement("script");
      configScript.textContent = `
        atOptions = {
          'key' : '9dbb0c11c5108cb110b9adad2a0380ed',
          'format' : 'iframe',
          'height' : 600,
          'width' : 160,
          'params' : {}
        };
      `;
      wrapper.appendChild(configScript);

      // Inject Adsterra invoke script
      const invokeScript = document.createElement("script");
      invokeScript.src =
        "https://www.highperformanceformat.com/9dbb0c11c5108cb110b9adad2a0380ed/invoke.js";
      wrapper.appendChild(invokeScript);

      slot.appendChild(wrapper);
    });
  }, []);

  return <div ref={containerRef}>{children}</div>;
}
