import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Yong Zane — AI/ML Research Engineer @ A*STAR',
  description:
    'AI/ML Research Engineer at A*STAR (ARTC), Singapore. I build end-to-end AI solutions — from ML models and agentic/LLM tooling to the applications that ship them. 3 peer-reviewed publications (2025).',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Set the theme class before paint so there's no flash of the wrong theme.
            Default = follow the OS preference; a stored choice (from the toggle) wins. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.classList.toggle('dark',t==='dark');}catch(e){}})();`,
          }}
        />
        {children}
      </body>
    </html>
  )
}