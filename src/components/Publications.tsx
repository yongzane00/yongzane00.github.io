'use client'

import { motion } from 'framer-motion'
import { ExternalLink, FileText, Calendar } from 'lucide-react'

interface Publication {
  title: string
  venue: string
  year: number
  type: 'conference' | 'journal'
  status: 'published' | 'accepted' | 'under-review'
  url?: string
  description: string
}

export default function Publications() {
  const publications: Publication[] = [
    {
      title: "A Multi-Stage Hybrid Framework for Automated Interpretation of Multi-View Engineering Drawings Using Vision Language Model",
      venue: "International Conference on Industrial Engineering and Applications (ICIEA)",
      year: 2025,
      type: "conference",
      status: "published",
      url: "https://arxiv.org/abs/2510.21862",
      description: "Novel hybrid framework combining VLMs with multi-stage processing for automated engineering drawing interpretation."
    },
    {
      title: "From drawings to decisions: A hybrid vision-language framework for parsing 2D engineering drawings into structured manufacturing knowledge",
      venue: "Robotics and Computer-Integrated Manufacturing",
      year: 2025,
      type: "journal",
      status: "published",
      url: "https://www.sciencedirect.com/science/article/abs/pii/S0736584525002406",
      description: "End-to-end system for transforming 2D engineering drawings into actionable manufacturing insights using vision-language models."
    },
    {
      title: "Automated Parsing of Engineering Drawings for Structured Information Extraction Using a Fine-tuned Document Understanding Transformer",
      venue: "IEEE International Conference on Industrial Engineering and Engineering Management (IEEM)",
      year: 2025,
      type: "conference",
      status: "published",
      url: "https://arxiv.org/abs/2505.01530",
      description: "Fine-tuned transformer architecture for extracting structured information from complex engineering documentation."
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'text-vscode-success'
      case 'accepted': return 'text-vscode-string'
      case 'under-review': return 'text-vscode-variable'
      default: return 'text-vscode-text'
    }
  }

  const getVenueIcon = (type: string) => {
    return type === 'journal' ? '📖' : '🎤'
  }

  return (
    <section id="publications" className="py-20 bg-vscode-editor relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="syntax-comment">// </span>
            <span className="syntax-keyword">Publications</span>
          </h2>

          <div className="space-y-6">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                className="bg-vscode-sidebar border border-vscode-border rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex-1 space-y-4">
                    {/* Title and Status */}
                    <div className="flex items-start space-x-3">
                      <span className="text-xl mt-1">{getVenueIcon(pub.type)}</span>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold syntax-function leading-tight mb-2">
                          {pub.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 text-sm">
                          <span className="syntax-variable">{pub.venue}</span>
                          <span className="syntax-keyword">•</span>
                          <span className="syntax-string">{pub.year}</span>
                          <span className="syntax-keyword">•</span>
                          <span className={getStatusColor(pub.status)}>
                            {pub.status.replace('-', ' ').toUpperCase()}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-vscode-text text-sm leading-relaxed">
                      {pub.description}
                    </p>

                    {/* Type Badge */}
                    <div className="flex items-center space-x-2">
                      <span className="bg-vscode-panel px-3 py-1 rounded-lg text-xs syntax-comment border border-vscode-border">
                        {pub.type === 'journal' ? 'Journal Article' : 'Conference Paper'}
                      </span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="mt-4 lg:mt-0 lg:ml-6 flex-shrink-0">
                    {pub.url && (
                      <motion.a
                        href={pub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-vscode-keyword hover:bg-vscode-function text-vscode-bg px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FileText size={16} />
                        <span>Read Paper</span>
                        <ExternalLink size={14} />
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Publication Stats */}
          <motion.div
            className="mt-12 bg-vscode-sidebar border border-vscode-border rounded-2xl p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <h3 className="text-lg font-semibold syntax-keyword mb-4">Publication Summary</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold syntax-function">{publications.length}</div>
                  <div className="text-sm syntax-comment">Total Publications</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold syntax-function">2025</div>
                  <div className="text-sm syntax-comment">Latest Publication Year</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold syntax-function">100%</div>
                  <div className="text-sm syntax-comment">Focus on AI/ML</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}