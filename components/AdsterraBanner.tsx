'use client'

import Script from 'next/script'

export default function AdsterraBanner() {
  return (
    <div className="flex justify-center my-8">
      <div id="adsterra-banner" />

      <Script id="adsterra-config" strategy="afterInteractive">
        {`
          atOptions = {
            'key' : '9dbb0c11c5108cb110b9adad2a0380ed',
            'format' : 'iframe',
            'height' : 600,
            'width' : 160,
            'params' : {}
          };
        `}
      </Script>

      <Script
        src="https://www.highperformanceformat.com/9dbb0c11c5108cb110b9adad2a0380ed/invoke.js"
        strategy="afterInteractive"
      />
    </div>
  )
}
