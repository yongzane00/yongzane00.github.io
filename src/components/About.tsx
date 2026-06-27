'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Mail, Download, GraduationCap, Github, Linkedin } from 'lucide-react'

const EMAIL = 'zaneyong00@gmail.com'
const RESUME_URL = '/assets/YongZane_Resume.pdf'

const LINKS = [
  { href: 'https://scholar.google.com/citations?user=QQkv7XUAAAAJ&hl=en', label: 'Google Scholar', Icon: GraduationCap },
  { href: 'https://github.com/yongzane00', label: 'GitHub', Icon: Github },
  { href: 'https://www.linkedin.com/in/zaneyong/', label: 'LinkedIn', Icon: Linkedin },
]

export default function About() {
  return (
    <section id="background" className="pt-14 pb-12 border-b border-vscode-border">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="syntax-comment text-sm mb-6">// Hi, my name is</p>

        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
          <Image
            src="/assets/profile_pic.JPG"
            alt="Yong Zane"
            width={96}
            height={96}
            className="rounded-full border border-vscode-border w-24 h-24 object-cover flex-shrink-0"
          />
          <div>
            <h1 className="text-3xl md:text-4xl font-bold syntax-function">Yong Zane</h1>
            <p className="text-lg md:text-xl font-semibold mt-1 text-vscode-text">
              AI/ML Research Engineer
              <span className="text-vscode-muted"> — </span>
              <span className="syntax-variable">Singapore</span>
            </p>
            <p className="text-sm text-vscode-muted mt-1">
              A*STAR · Advanced Remanufacturing and Technology Centre (ARTC)
            </p>
          </div>
        </div>

        <p className="text-vscode-text leading-relaxed mt-6 max-w-2xl">
          I build end-to-end AI solutions — from Multi-modal models, Multi-Agent Systems and MCP-servers to the production
          apps and platforms that put them in engineers&apos; hands.
        </p>

        {/* Primary CTAs */}
        <div className="flex flex-wrap items-center gap-3 mt-7">
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 bg-vscode-keyword text-vscode-bg px-4 py-2 rounded-md text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <Mail size={16} /> Email me
          </a>
          <a
            href={RESUME_URL}
            download
            className="inline-flex items-center gap-2 border border-vscode-border hover:border-vscode-keyword text-vscode-text px-4 py-2 rounded-md text-sm font-semibold transition-colors"
          >
            <Download size={16} /> Résumé
          </a>
        </div>

        {/* Secondary links */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-5 text-sm text-vscode-muted">
          <span>Connect with me:</span>
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-vscode-keyword underline-offset-4 hover:underline transition-colors"
            >
              <link.Icon size={15} /> {link.label}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
