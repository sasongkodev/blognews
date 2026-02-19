'use client'
import { useEffect, useRef } from 'react'
import { config } from '@/lib/config'

export default function InFeedAd() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Don't render if ads are disabled
  if (!config.features.ads) return null;

  useEffect(() => {
    if (containerRef.current && !containerRef.current.firstChild) {
      const iframe = document.createElement('iframe');
      iframe.style.border = 'none';
      iframe.style.width = '300px';
      iframe.style.height = '250px';
      // Ensure iframe doesn't overflow container
      iframe.style.maxWidth = '100%'; 
      containerRef.current.appendChild(iframe);
      
      const doc = iframe.contentWindow?.document;
      if (doc) {
          doc.open();
          doc.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <style>body { margin: 0; padding: 0; display: flex; justify-content: center; }</style>
            </head>
            <body>
                <script>
                    atOptions = {
                        'key' : '1957eaf720730ff3f436d45b6806128b',
                        'format' : 'iframe',
                        'height' : 250,
                        'width' : 300,
                        'params' : {}
                    };
                </script>
                <script type="text/javascript" src="https://www.highperformanceformat.com/1957eaf720730ff3f436d45b6806128b/invoke.js"></script>
            </body>
            </html>
          `);
          doc.close();
      }
    }
  }, [])

  return (
    <div className="w-full flex justify-center my-8 bg-slate-50/5 p-4 rounded-lg" ref={containerRef}>
        {/* Ad will be injected here */}
    </div>
  )
}
