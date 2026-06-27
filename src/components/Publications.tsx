'use client'

import { motion } from 'framer-motion'
import { ExternalLink, FileText } from 'lucide-react'

interface Publication {
  title: string
  venue: string
  year: number
  type: 'conference' | 'journal'
  status: 'published' | 'accepted' | 'under-review'
  url?: string
  description: string
}

const publications: Publication[] = [
  {
    title: 'A Multi-Stage Hybrid Framework for Automated Interpretation of Multi-View Engineering Drawings Using Vision Language Model',
    venue: 'International Conference on Industrial Engineering and Applications (ICIEA)',
    year: 2025,
    type: 'conference',
    status: 'published',
    url: 'https://www.researchgate.net/publication/396967039_A_Multi-Stage_Hybrid_Framework_for_Automated_Interpretation_of_Multi-View_Engineering_Drawings_Using_Vision_Language_Model',
    description:
      'A multi-stage hybrid framework that fuses vision-language models with structured post-processing to interpret multi-view engineering drawings — automating a slow, error-prone manual reading task and feeding clean, structured data into downstream manufacturing systems.',
  },
  {
    title: 'From drawings to decisions: A hybrid vision-language framework for parsing 2D engineering drawings into structured manufacturing knowledge',
    venue: 'Robotics and Computer-Integrated Manufacturing',
    year: 2025,
    type: 'journal',
    status: 'published',
    url: 'https://www.sciencedirect.com/science/article/abs/pii/S0736584525002406',
    description:
      'An end-to-end vision-language framework that turns 2D engineering drawings into structured, machine-readable manufacturing knowledge — bridging legacy design documents and modern downstream automation and decision-making.',
  },
  {
    title: 'Automated Parsing of Engineering Drawings for Structured Information Extraction Using a Fine-tuned Document Understanding Transformer',
    venue: 'IEEE International Conference on Industrial Engineering and Engineering Management (IEEM)',
    year: 2025,
    type: 'conference',
    status: 'published',
    url: 'https://ieeexplore.ieee.org/document/11357576',
    description:
      'A fine-tuned Document Understanding Transformer that extracts structured information from complex engineering documents — the kind of extraction pipeline that lets LLMs reliably fetch, query, and reason over dense technical documentation.',
  },
]

const statusColor = (status: string) =>
  status === 'published' ? 'syntax-success' : status === 'accepted' ? 'syntax-string' : 'syntax-variable'

export default function Publications() {
  return (
    <section id="publications" className="py-12 border-b border-vscode-border">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-xl font-bold mb-6">
          <span className="syntax-comment">// </span>
          <span className="text-vscode-text">Publications</span>
        </h2>

        <div>
          {publications.map((pub, index) => (
            <div key={index} className="py-5 border-b border-vscode-border/60 last:border-0">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-semibold text-vscode-text leading-snug">{pub.title}</h3>
                <span className="text-sm syntax-string whitespace-nowrap shrink-0">{pub.year}</span>
              </div>
              <div className="text-sm text-vscode-muted mt-1">
                <span className="syntax-variable">{pub.venue}</span>
                {' · '}
                {pub.type === 'journal' ? 'Journal Article' : 'Conference Paper'}
                {' · '}
                <span className={statusColor(pub.status)}>{pub.status.replace('-', ' ').toUpperCase()}</span>
              </div>
              <p className="text-sm text-vscode-text leading-relaxed mt-2">{pub.description}</p>
              {pub.url && (
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm syntax-keyword hover:underline underline-offset-4 mt-2"
                >
                  <FileText size={14} /> Read paper <ExternalLink size={13} />
                </a>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
