'use client'

import { useState } from 'react'
import { Download, Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const RESUME_URL = '/assets/YongZane_Resume.pdf'

const NAV_LINKS = [
  { href: '#background', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#publications', label: 'Publications' },
  { href: '#projects', label: 'Projects' },
  { href: '#technologies', label: 'Technologies' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-vscode-bg/90 backdrop-blur border-b border-vscode-border">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
        {/* Name */}
        <a href="#background" className="text-lg font-bold whitespace-nowrap" aria-label="Back to top">
          <span className="syntax-keyword">&gt; </span>
          <span className="syntax-function">Yong</span>
          <span className="text-vscode-text"> </span>
          <span className="syntax-variable">Zane</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex flex-1 justify-center">
          <ul className="flex items-center gap-7 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-vscode-muted hover:text-vscode-keyword transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={RESUME_URL}
            download
            className="hidden sm:inline-flex items-center gap-1.5 border border-vscode-border hover:border-vscode-keyword text-vscode-text px-3 py-1.5 rounded-md text-sm transition-colors duration-200"
          >
            <Download size={15} /> Résumé
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            className="lg:hidden w-9 h-9 flex items-center justify-center rounded-md text-vscode-muted hover:text-vscode-keyword hover:bg-vscode-panel transition-colors"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-vscode-border bg-vscode-bg">
          <nav className="max-w-5xl mx-auto px-6 py-4">
            <ul className="flex flex-col gap-3 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block text-vscode-muted hover:text-vscode-keyword transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={RESUME_URL}
              download
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center gap-1.5 mt-4 border border-vscode-border hover:border-vscode-keyword text-vscode-text px-3 py-2 rounded-md text-sm transition-colors duration-200"
            >
              <Download size={15} /> Résumé
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
