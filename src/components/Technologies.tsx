'use client'

import { motion } from 'framer-motion'

interface Technology {
  name: string
  category: string
}

const technologies: Technology[] = [
  // Programming
  { name: 'Python', category: 'Programming' },
  { name: 'SQL', category: 'Programming' },
  { name: 'JavaScript', category: 'Programming' },
  { name: 'TypeScript', category: 'Programming' },

  // ML & AI
  { name: 'PyTorch', category: 'ML & AI' },
  { name: 'TensorFlow', category: 'ML & AI' },
  { name: 'CUDA', category: 'ML & AI' },
  { name: 'OpenCV', category: 'ML & AI' },
  { name: 'Scikit-learn', category: 'ML & AI' },

  // Agentic AI
  { name: 'LangChain', category: 'Agentic AI' },
  { name: 'LangGraph', category: 'Agentic AI' },
  { name: 'MCP', category: 'Agentic AI' },
  { name: 'RAG', category: 'Agentic AI' },

  // Frontend/UI
  { name: 'React', category: 'Frontend/UI' },
  { name: 'Next.js', category: 'Frontend/UI' },
  { name: 'Vite', category: 'Frontend/UI' },
  { name: 'Electron', category: 'Frontend/UI' },

  // Infras & DevOps
  { name: 'Linux', category: 'Infra & DevOps' },
  { name: 'Docker', category: 'Infra & DevOps' },
  { name: 'Kubernetes', category: 'Infra & DevOps' },
  { name: 'GitHub', category: 'Infra & DevOps' },
  { name: 'Bitbucket', category: 'Infra & DevOps' },
]

const CATEGORIES = ['Programming', 'ML & AI', 'Agentic AI', 'Frontend/UI', 'Infra & DevOps']

export default function Technologies() {
  return (
    <section id="technologies" className="py-12 border-b border-vscode-border">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-xl font-bold mb-6">
          <span className="syntax-comment">// </span>
          <span className="text-vscode-text">Technologies</span>
        </h2>

        <div className="space-y-5">
          {CATEGORIES.map((category) => (
            <div key={category} className="flex flex-col sm:flex-row sm:gap-6">
              <h3 className="text-sm text-vscode-muted shrink-0 sm:w-32 mb-2 sm:mb-0 sm:pt-1">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {technologies
                  .filter((t) => t.category === category)
                  .map((t) => (
                    <span
                      key={t.name}
                      className="text-xs px-2.5 py-1 rounded-md border border-vscode-border text-vscode-text hover:border-vscode-keyword hover:text-vscode-keyword transition-colors"
                    >
                      {t.name}
                    </span>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
