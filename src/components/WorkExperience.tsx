'use client'

import { motion } from 'framer-motion'

export default function WorkExperience() {
  const experiences = [
    {
      title: "Research Engineer",
      company: "Advanced Remanufacturing and Technology Centre (ARTC), A*STAR",
      period: "Oct 2024 – Present",
      type: "Full Time",
      logo: "/icons/astar-icon.png",
      achievements: [
        "Architected and deployed a highly available LangGraph-based multi-agent system for dynamic task decomposition in complex manufacturing pipelines, resulting in a 50% reduction in decision-making latency and enabling scalable workflow automation.",
        "Fine-tuned state-of-the-art Vision-Language Models (VLMs) and object detection models leveraging both Transformer and CNN architectures for structured document parsing of 2D engineering drawings, increasing data ingestion throughput by 40%.",
        "Engineered and productionized highly scalable backend microservices using FastAPI and ASP.NET, containerized via Docker, and orchestrated with Kubernetes, supporting critical operations and achieving 99.9% uptime.",
        "Developed and shipped a multi-tenant Angular platform utilized by 10+ internal/external manufacturing teams for the real-time deployment, monitoring, and control of AI-powered workflows.",
        "Integrated and enforced MLOps standards using MLflow for experiment tracking and inference monitoring across pipelines, reducing model deployment time from 2 days to 4 hours."
      ],
      technologies: ["LangGraph", "PyTorch", "FastAPI", "ASP.NET", "Docker", "Kubernetes", "Angular", "MLflow"]
    },
    {
      title: "Machine Learning and Image Processing Research Assistant",
      company: "School of Chemistry, Chemical Engineering and Biotechnology, NTU",
      period: "May 2024 – Jul 2024",
      type: "Part Time",
      logo: "/icons/ntu-cceb-icon.jpg",
      achievements: [
        "Improved imaging sensitivity by 90% for single-particle tracking (SPT) through the implementation of unsupervised learning image denoising.",
        "Built a foundational large-scale microscopy imaging dataset and trained a regression model to enable accurate and automated protein size prediction."
      ],
      technologies: ["Python", "OpenCV", "Machine Learning", "Image Processing", "Microscopy"]
    },
    {
      title: "Optical Engineer Intern",
      company: "Thermo Fisher Scientific Inc., Marsiling, Singapore",
      period: "Dec 2022 – Jul 2023",
      type: "Internship",
      logo: "/icons/thermofisher-icon.png",
      achievements: [
        "Implemented image processing algorithms using OpenCV library to assess the optical performance of the instrument with a 25% acceleration of the feature extraction process while maintaining a 95% accuracy.",
        "Applied scikit-learn regression to model fluorescence dye behaviour across light spectra, achieving 80% prediction accuracy."
      ],
      technologies: ["OpenCV", "Scikit-learn", "Python", "Image Processing", "Optical Engineering"]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-vscode-editor relative">
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
            <span className="syntax-keyword">Work Experience</span>
          </h2>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-vscode-sidebar border border-vscode-border rounded-2xl p-8 shadow-xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Company Header */}
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex items-start space-x-4">
                  {/* Company Logo */}
                  <div className="flex-shrink-0">
                    <img
                      src={exp.logo}
                      alt={`${exp.company} Logo`}
                      className="h-16 object-contain bg-white rounded-lg p-2 shadow-md"
                    />
                  </div>
                  
                  {/* Company Details */}
                  <div>
                    <h3 className="text-2xl font-bold mb-2">
                      <span className="syntax-function">{exp.title}</span>
                    </h3>
                    <div className="text-lg syntax-variable mb-2">{exp.company}</div>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="syntax-string">{exp.period}</span>
                      <span className="syntax-keyword">•</span>
                      <span className="syntax-comment">{exp.type}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="space-y-4 mb-6">
                <h4 className="text-lg font-semibold syntax-keyword">Key Achievements:</h4>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, achIndex) => (
                    <motion.li
                      key={achIndex}
                      className="flex items-start space-x-3 text-sm leading-relaxed"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: achIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className="syntax-success mt-1">▸</span>
                      <span className="text-vscode-text">{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-sm font-semibold syntax-comment mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="bg-vscode-panel px-3 py-1 rounded-lg text-sm syntax-variable border border-vscode-border hover:bg-vscode-border transition-all duration-200"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}