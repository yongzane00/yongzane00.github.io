'use client'

import { Mail, Github, Linkedin, GraduationCap } from 'lucide-react'

const EMAIL = 'zaneyong00@gmail.com'

const SOCIALS = [
  { href: 'https://scholar.google.com/citations?user=QQkv7XUAAAAJ&hl=en', label: 'Google Scholar', Icon: GraduationCap },
  { href: 'https://github.com/yongzane00', label: 'GitHub', Icon: Github },
  { href: 'https://www.linkedin.com/in/zaneyong/', label: 'LinkedIn', Icon: Linkedin },
]

export default function Footer() {
  return (
    <footer className="border-t border-vscode-border py-10">
      <div className="max-w-3xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <a
          href={`mailto:${EMAIL}`}
          className="inline-flex items-center gap-2 text-sm text-vscode-muted hover:text-vscode-keyword transition-colors"
        >
          <Mail size={16} /> {EMAIL}
        </a>

        <div className="flex items-center gap-2">
          {SOCIALS.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={label}
              aria-label={label}
              className="w-9 h-9 flex items-center justify-center rounded-md text-vscode-muted hover:text-vscode-keyword hover:bg-vscode-panel transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>

      {/* <p className="text-center text-xs text-vscode-muted mt-6">© Yong Zane</p> */}
    </footer>
  )
}
