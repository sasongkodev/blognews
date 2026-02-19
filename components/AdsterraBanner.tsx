"use client";

import { useEffect, useRef } from "react";

const AdsterraBanner = () => {
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bannerRef.current) {
      const banner = bannerRef.current;
      if (banner.firstChild) return;

      const conf = document.createElement("script");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `//www.highperformanceformat.com/1957eaf720730ff3f436d45b6806128b/invoke.js`;
      conf.innerHTML = `atOptions = ${JSON.stringify({
        key: "1957eaf720730ff3f436d45b6806128b",
        format: "iframe",
        height: 250,
        width: 300,
        params: {},
      })}`;

      const iframe = document.createElement("iframe");
      iframe.style.width = "300px";
      iframe.style.height = "250px";
      iframe.style.border = "none";
      iframe.style.overflow = "hidden";
      banner.appendChild(iframe);
      
      const iframeDoc = iframe.contentWindow?.document;
      if (iframeDoc) {
        iframeDoc.open();
        iframeDoc.write(`
          <!DOCTYPE html>
          <html>
            <head>
              <style>body{margin:0;padding:0;overflow:hidden;}</style>
            </head>
            <body>
            </body>
          </html>
        `);
        iframeDoc.close();
        
        // Append scripts to the iframe body
        iframeDoc.body.appendChild(conf);
        iframeDoc.body.appendChild(script);
      }
    }
  }, []);

  return (
    <div className="flex justify-center my-8">
      <div
        ref={bannerRef}
        className="mx-auto flex justify-center items-center bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden"
        style={{ width: "300px", height: "250px" }}
      />
    </div>
  );
};

export default AdsterraBanner;
