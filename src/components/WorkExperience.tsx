'use client'

import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

interface Experience {
  title: string
  company: string
  period: string
  type: string
  logo: string
  achievements: string[]
  technologies: string[]
}

const experiences: Experience[] = [
  {
    title: 'AI/ML Research Engineer',
    company: 'Advanced Remanufacturing and Technology Centre (ARTC), A*STAR',
    period: 'Oct 2024 - Present',
    type: 'Full Time',
    logo: '/icons/astar-icon.png',
    achievements: [
      'Transforming ambiguous engineering problem statments into production-ready AI systems.',
      'Designing and building AI tools that help engineers work more productively.',
      'Scaling AI solutions with microservices, MCP servers and cloud-native infrastructure.',
    ],
    technologies: ['Python', 'MCP', 'RAG', 'LLM', 'VLM', 'CV', 'PyTorch', 'TensorFlow', 'CUDA', 'Linux', 'PostgreSQL', 'SQLite', 'Docker', 'Kubernetes', 'JavaScript', 'TypeScript', 'React'],
  },
  {
    title: 'ML and Computer Vision Research Assistant',
    company: 'School of Chemistry, Chemical Engineering and Biotechnology, NTU',
    period: 'May 2024 - Jul 2024',
    type: 'Part Time',
    logo: '/icons/ntu-cceb-icon.jpg',
    achievements: [
      'Pushing the research frontier of iSCAT microscopy with machine learning.',
      'Establishing the first large-scale foundational iSCAT microscopy dataset for protein characterization.',
    ],
    technologies: ['Python', 'OpenCV', 'Scikit-learn', 'ML', 'CV', 'Image Processing', 'Microscopy'],
  },
  {
    title: 'Optical Engineer Intern',
    company: 'Thermo Fisher Scientific Inc., Marsiling, Singapore',
    period: 'Dec 2022 - Jul 2023',
    type: 'Internship',
    logo: '/icons/thermofisher-icon.png',
    achievements: [
      'Automating large-scale image quality analysis with image processing algorithms',
      'Simulating fluorescence dye behaviour within the visible spectrum to validate research ideas',
    ],
    technologies: ['Python', 'OpenCV', 'Scikit-learn', 'ML', 'Image Processing', 'Optical Engineering', 'Simulation'],
  },
]

export default function WorkExperience() {
  return (
    <section id="experience" className="py-12 border-b border-vscode-border">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-xl font-bold mb-6">
          <span className="syntax-comment">// </span>
          <span className="text-vscode-text">Experience</span>
        </h2>

        <div>
          {experiences.map((exp, index) => (
            <details key={index} className="group border-b border-vscode-border/60 last:border-0 py-5">
              <summary>
                <div className="flex items-start gap-3">
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="w-11 h-11 rounded-md object-contain bg-white p-1 border border-vscode-border shrink-0 mt-0.5"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-semibold syntax-function">{exp.title}</h3>
                      <span className="text-sm syntax-string whitespace-nowrap shrink-0">{exp.period}</span>
                    </div>
                    <div className="flex items-center justify-between gap-4 mt-1">
                      <span className="text-sm text-vscode-muted">
                        {exp.company} · {exp.type}
                      </span>
                      <span className="text-xs text-vscode-muted inline-flex items-center gap-1 shrink-0">
                        <ChevronRight size={13} className="details-chevron" /> details
                      </span>
                    </div>
                  </div>
                </div>
              </summary>

              <div className="sm:pl-14">
                <ul className="mt-4 space-y-2.5">
                  {exp.achievements.map((a, i) => (
                    <li key={i} className="flex gap-2.5 text-sm leading-relaxed">
                      <span className="syntax-success mt-0.5">▸</span>
                      <span className="text-vscode-text">{a}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-0.5 rounded border border-vscode-border text-vscode-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </details>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
