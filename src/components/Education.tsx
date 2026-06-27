'use client'

import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

function EduIcon() {
  return (
    <img
      src="/icons/ntu-icon.png"
      alt="Nanyang Technological University logo"
      className="w-11 h-11 rounded-md object-contain bg-white p-1 border border-vscode-border shrink-0 mt-0.5"
    />
  )
}

export default function Education() {
  return (
    <section id="education" className="py-12 border-b border-vscode-border">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-xl font-bold mb-6">
          <span className="syntax-comment">// </span>
          <span className="text-vscode-text">Education</span>
        </h2>

        {/* MSAI — part-time, alongside full-time role at A*STAR */}
        <div className="py-5 border-b border-vscode-border/60">
          <div className="flex items-start gap-3">
            <EduIcon />
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-semibold syntax-function">
                  Master of Science in Artificial Intelligence (MSAI)
                </h3>
                <span className="text-sm syntax-string whitespace-nowrap shrink-0">Aug 2026 – 2028 (Expected)</span>
              </div>
              <div className="flex items-center gap-2 mt-1 flex-wrap">
                <span className="text-sm text-vscode-muted">
                  Nanyang Technological University, Singapore · Part-time
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-vscode-success/15 text-vscode-success border border-vscode-success/30">
                  In Progress
                </span>
              </div>
              {/* <p className="text-sm text-vscode-text leading-relaxed mt-2">
                Pursued part-time alongside my full-time role at A*STAR (ARTC) — deepening foundations in
                modern AI across deep learning, NLP / LLMs, and applied machine learning.
              </p> */}
            </div>
          </div>
        </div>

        {/* Bachelor of Engineering — details collapsible */}
        <details className="group py-5">
          <summary>
            <div className="flex items-start gap-3">
              <EduIcon />
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-semibold syntax-function">Bachelor of Engineering in Bioengineering</h3>
                  <span className="text-sm syntax-string whitespace-nowrap shrink-0">Jul 2020 – May 2024</span>
                </div>
                <div className="flex items-center justify-between gap-4 mt-1">
                  <span className="text-sm text-vscode-muted">
                    Nanyang Technological University, Singapore · Full Time
                  </span>
                  <span className="text-xs text-vscode-muted inline-flex items-center gap-1 shrink-0">
                    <ChevronRight size={13} className="details-chevron" /> details
                  </span>
                </div>
              </div>
            </div>
          </summary>

          <div className="mt-4 space-y-4 text-sm sm:pl-14">
            <ul className="space-y-2">
              {[
                'Honours (Distinction)',
                'MOE Tuition Grant Holder',
                'Research focus in Applied ML in Bioengineering',
                'Developed a strong foundation ML and AI through independent study, projects, and applied research.',
              ].map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span className="syntax-success mt-0.5">▸</span>
                  <span className="text-vscode-text">{item}</span>
                </li>
              ))}
            </ul>

            <div>
              <h4 className="text-vscode-muted mb-2">Competition awards</h4>
              <ul className="space-y-2">
                <li className="flex gap-2.5">
                  <span className="syntax-success mt-0.5">▸</span>
                  <span className="text-vscode-text">
                    <span className="syntax-function">NTU CAO x ST Engineering Hackathon</span> — First
                    Runner-up <span className="text-vscode-muted">(Apr 2024)</span> · Surgical tray
                    optimization • ~$2M projected annual savings
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <span className="syntax-success mt-0.5">▸</span>
                  <span className="text-vscode-text">
                    <span className="syntax-function">MLDA Deep Learning Week Hackathon</span> — First
                    Runner-up, Team Leader <span className="text-vscode-muted">(Mar 2024)</span> ·
                    Video-caption pipeline • 12% accuracy improvement
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </details>
      </motion.div>
    </section>
  )
}
