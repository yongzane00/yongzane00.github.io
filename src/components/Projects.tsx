'use client'

import { motion } from 'framer-motion'
import { Github } from 'lucide-react'

interface Project {
  title: string
  event: string
  description: string
  githubUrl?: string
  status?: string
}

const projects: Project[] = [
  {
    title: 'Catholic Community App (Malaysia)',
    event: 'Community Project · Mobile App',
    status: 'In Progress',
    description:
      'Contributing to a team building a mobile app for the Catholic community in Malaysia — bringing Mass timings, parish directory, events, daily readings, and announcements into one place.',
  },
  {
    title: 'Surgical-Tray Optimizer (STOp)',
    event: 'NTU CAO x ST Engineering Hackathon 2024 · First Runner-up',
    description:
      'Secured first runner-up position among 11 participating teams from a wide variety of disciplines at NTU.',
    // No public repository for this project.
  },
  {
    title: 'Video-Text Data Filtering Pipeline',
    event: 'NTU EEE MLDA Deep Learning Week 2024 Hackathon · Second Place',
    description:
      'Achieved second place out of over 50 participating teams from various educational institutions in Singapore.',
    githubUrl: 'https://github.com/yongzane00/Video-Text-Data-Filtering-Pipeline',
  },
  {
    title: 'ConnectEZ — AAC Device for Aphasia Patients',
    event: 'Medical Device Design & Biomedical Project Design & Management',
    description:
      'Led a team of 8 individuals in the development of an affordable AAC device, resulting in enhanced communication capabilities for Aphasia patients and a positive impact on their mental well-being.',
    githubUrl: 'https://github.com/yongzane00/ConnectEZ-Firebase',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-12 border-b border-vscode-border">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-xl font-bold mb-6">
          <span className="syntax-comment">// </span>
          <span className="text-vscode-text">Featured Projects</span>
        </h2>

        <div>
          {projects.map((project, index) => (
            <article key={index} className="border-b border-vscode-border/60 last:border-0 py-5">
              <div className="flex items-baseline justify-between gap-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-semibold syntax-function">{project.title}</h3>
                  {project.status && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-vscode-success/15 text-vscode-success border border-vscode-success/30">
                      {project.status}
                    </span>
                  )}
                </div>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm syntax-keyword hover:underline underline-offset-4"
                  >
                    <Github size={15} /> View on GitHub
                  </a>
                )}
              </div>
              <div className="text-sm text-vscode-muted mt-1">{project.event}</div>
              <p className="text-sm text-vscode-text leading-relaxed mt-1.5">{project.description}</p>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
