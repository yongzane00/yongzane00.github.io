'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface Technology {
  name: string
  category: string
  startYear: number
  projects?: number
  description?: string
}

export default function Technologies() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  
  // Calculate years of experience dynamically
  const calculateYears = (startYear: number): number => {
    const currentYear = new Date().getFullYear()
    return Math.max(1, currentYear - startYear + 1) // Minimum 1 year
  }
  
  // Get experience level based on years
  const getExperienceLevel = (years: number): string => {
    if (years >= 5) return '>5 years'
    if (years >= 3) return '3-5 years'
    return '<2 years'
  }

  const technologiesData: Technology[] = [
    // Programming
    { name: 'Python', category: 'Programming', startYear: 2020, projects: 15, description: 'ML/AI development, backend services' },
    { name: 'SQL', category: 'Programming', startYear: 2022, projects: 8, description: 'Database design & optimization' },
    { name: 'C# (ASP.NET)', category: 'Programming', startYear: 2024, projects: 6, description: 'Enterprise backend development' },
    { name: 'TypeScript', category: 'Programming', startYear: 2024, projects: 5, description: 'Type-safe web development' },
    { name: 'JavaScript', category: 'Programming', startYear: 2024, projects: 5, description: 'Frontend & full-stack development' },
    
    // ML & AI
    { name: 'PyTorch', category: 'ML & AI', startYear: 2022, projects: 12, description: 'Deep learning research & production' },
    { name: 'Scikit-learn', category: 'ML & AI', startYear: 2021, projects: 10, description: 'Traditional ML algorithms' },
    { name: 'OpenCV', category: 'ML & AI', startYear: 2021, projects: 7, description: 'Computer vision applications' },
    { name: 'TensorFlow', category: 'ML & AI', startYear: 2024, projects: 4, description: 'Deep learning & model deployment' },
    
    // DevOps
    { name: 'Docker', category: 'DevOps', startYear: 2024, projects: 8, description: 'Containerization & deployment' },
    { name: 'REST APIs', category: 'DevOps', startYear: 2024, projects: 10, description: 'API design & development' },
    { name: 'MLflow', category: 'DevOps', startYear: 2024, projects: 5, description: 'ML experiment tracking' },
    { name: 'Kubernetes', category: 'DevOps', startYear: 2024, projects: 2, description: 'Container orchestration' },
    { name: 'CI/CD Pipelines', category: 'DevOps', startYear: 2024, projects: 3, description: 'Automated deployment workflows' },
    
    // Agentic AI
    { name: 'LangChain', category: 'Agentic AI', startYear: 2024, projects: 4, description: 'LLM application frameworks' },
    { name: 'LangGraph', category: 'Agentic AI', startYear: 2024, projects: 3, description: 'Multi-agent system orchestration' },
    { name: 'LangSmith', category: 'Agentic AI', startYear: 2024, projects: 2, description: 'LLM debugging & evaluation' },
    { name: 'Google ADK', category: 'Agentic AI', startYear: 2025, projects: 1, description: 'Google AI development kit' },
    
    // Frontend/UI
    { name: 'Angular', category: 'Frontend/UI', startYear: 2024, projects: 3, description: 'Enterprise web applications' },
    { name: 'React', category: 'Frontend/UI', startYear: 2025, projects: 2, description: 'Modern component-based UI development' },
    { name: 'Next.js', category: 'Frontend/UI', startYear: 2025, projects: 1, description: 'Full-stack React framework' },
    { name: 'HTML', category: 'Frontend/UI', startYear: 2024, projects: 6, description: 'Web markup & structure' },
    { name: 'CSS', category: 'Frontend/UI', startYear: 2024, projects: 6, description: 'UI styling & responsive design' },
    { name: 'Electron', category: 'Frontend/UI', startYear: 2025, projects: 1, description: 'Desktop application development' }
  ]
  
  // Add calculated years to each technology
  const technologies = technologiesData.map(tech => ({
    ...tech,
    years: calculateYears(tech.startYear),
    yearsLabel: getExperienceLevel(calculateYears(tech.startYear))
  }))

  const categories = ['all', ...Array.from(new Set(technologies.map(tech => tech.category)))]

  const filteredTechnologies = selectedCategory === 'all' 
    ? technologies 
    : technologies.filter(tech => tech.category === selectedCategory)

  const getYearColor = (yearsLabel: string) => {
    switch (yearsLabel) {
      case '>5 years': return 'text-vscode-success bg-vscode-success/10 border-vscode-success/30'
      case '3-5 years': return 'text-vscode-string bg-vscode-string/10 border-vscode-string/30'
      case '<2 years': return 'text-vscode-variable bg-vscode-variable/10 border-vscode-variable/30'
      default: return 'text-vscode-comment bg-vscode-comment/10 border-vscode-comment/30'
    }
  }

  return (
    <section id="technologies" className="py-20 bg-vscode-bg relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="syntax-comment">// </span>
            <span className="syntax-keyword">Technologies</span>
          </h2>

          {/* Category Filter */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 border ${
                  selectedCategory === category
                    ? 'bg-vscode-keyword text-vscode-bg border-vscode-keyword'
                    : 'bg-vscode-sidebar text-vscode-text border-vscode-border hover:bg-vscode-panel'
                }`}
              >
                {category === 'all' ? 'All Technologies' : category}
              </button>
            ))}
          </motion.div>

          {/* Technologies Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            layout
          >
            {filteredTechnologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="bg-vscode-sidebar border border-vscode-border rounded-xl p-5 hover:shadow-xl transition-all duration-300 group hover:border-vscode-keyword/50"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                layout
              >
                {/* Tech Name */}
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold syntax-function text-lg group-hover:text-vscode-keyword transition-colors duration-300">
                    {tech.name}
                  </h3>
                </div>

                {/* Experience Years */}
                <div className="mb-3">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${getYearColor(tech.yearsLabel)}`}>
                    {tech.yearsLabel}
                  </span>
                </div>

                {/* Category */}
                <div className="mb-3">
                  <span className="text-xs syntax-comment bg-vscode-panel px-2 py-1 rounded">
                    {tech.category}
                  </span>
                </div>

                {/* Description */}
                {tech.description && (
                  <p className="text-xs text-vscode-text opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    {tech.description}
                  </p>
                )}

                {/* Hover Effect Indicator */}
                <div className="h-1 w-0 bg-gradient-to-r from-vscode-keyword to-vscode-function rounded-full mt-3 group-hover:w-full transition-all duration-500"></div>
              </motion.div>
            ))}
          </motion.div>

          {/* Experience Summary */}
          <motion.div
            className="mt-12 bg-vscode-sidebar border border-vscode-border rounded-2xl p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <h3 className="text-lg font-semibold syntax-keyword mb-6">Experience Overview</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold syntax-success mb-2">Expert Level</div>
                  <div className="text-sm syntax-comment mb-2">5+ Years Experience</div>
                  <div className="flex flex-wrap justify-center gap-1">
                    {technologies.filter(t => t.yearsLabel === '>5 years').map(tech => (
                      <span key={tech.name} className="text-xs bg-vscode-success/20 text-vscode-success px-2 py-1 rounded">
                        {tech.name}
                      </span>
                    ))}
                    {technologies.filter(t => t.yearsLabel === '>5 years').length === 0 && (
                      <span className="text-xs syntax-comment italic">Building towards this level</span>
                    )}
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold syntax-string mb-2">Advanced</div>
                  <div className="text-sm syntax-comment mb-2">3-5 Years Experience</div>
                  <div className="flex flex-wrap justify-center gap-1">
                    {technologies.filter(t => t.yearsLabel === '3-5 years').slice(0, 4).map(tech => (
                      <span key={tech.name} className="text-xs bg-vscode-string/20 text-vscode-string px-2 py-1 rounded">
                        {tech.name}
                      </span>
                    ))}
                    {technologies.filter(t => t.yearsLabel === '3-5 years').length > 4 && (
                      <span className="text-xs syntax-comment">+{technologies.filter(t => t.yearsLabel === '3-5 years').length - 4} more</span>
                    )}
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold syntax-variable mb-2">Developing</div>
                  <div className="text-sm syntax-comment mb-2">{'<'}2 Years Experience</div>
                  <div className="flex flex-wrap justify-center gap-1">
                    {technologies.filter(t => t.yearsLabel === '<2 years').slice(0, 4).map(tech => (
                      <span key={tech.name} className="text-xs bg-vscode-variable/20 text-vscode-variable px-2 py-1 rounded">
                        {tech.name}
                      </span>
                    ))}
                    {technologies.filter(t => t.yearsLabel === '<2 years').length > 4 && (
                      <span className="text-xs syntax-comment">+{technologies.filter(t => t.yearsLabel === '<2 years').length - 4} more</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}