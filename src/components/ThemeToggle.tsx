'use client'

import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const [isDark, setIsDark] = useState(false)

  // The actual theme class is set pre-paint by the inline script in layout.tsx.
  // Here we just sync state once mounted to avoid a hydration mismatch.
  useEffect(() => {
    setMounted(true)
    setIsDark(document.documentElement.classList.contains('dark'))
  }, [])

  const toggle = () => {
    const next = !document.documentElement.classList.contains('dark')
    document.documentElement.classList.toggle('dark', next)
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light')
    } catch (e) {
      /* ignore */
    }
    setIsDark(next)
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light / dark theme"
      title="Toggle theme"
      className="w-9 h-9 flex items-center justify-center rounded-md text-vscode-muted hover:text-vscode-keyword hover:bg-vscode-panel transition-colors"
    >
      {/* Render a stable icon until mounted to match the server output */}
      {mounted && isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}
