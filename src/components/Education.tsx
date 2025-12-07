'use client'

import { motion } from 'framer-motion'

export default function Education() {
  return (
    <section id="education" className="py-20 bg-vscode-bg relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="syntax-comment">// </span>
            <span className="syntax-keyword">Education</span>
          </h2>

          <motion.div
            className="bg-vscode-sidebar border border-vscode-border rounded-2xl p-8 shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Education Header */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">
                  <span className="syntax-function">Bachelor of Engineering in Bioengineering</span>
                </h3>
                <div className="text-lg syntax-variable mb-2">Nanyang Technological University, Singapore</div>
                <div className="flex items-center space-x-4 text-sm mb-4">
                  <span className="syntax-string">Jul 2020 – May 2024</span>
                </div>
              </div>
            </div>

            {/* Academic Achievements */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold syntax-keyword">Academic Excellence:</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <span className="syntax-success">▸</span>
                    <span className="syntax-string">CGPA: 4.30/5.00</span>
                    <span className="syntax-comment">(Distinction)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="syntax-success">▸</span>
                    <span className="text-vscode-text">MOE Tuition Grant Holder</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold syntax-keyword">Notable Achievements:</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <span className="syntax-success">▸</span>
                    <span className="text-vscode-text">Research focus in Biomedical Engineering</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="syntax-success">▸</span>
                    <span className="text-vscode-text">Strong foundation in ML and Systems Engineering</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Awards Section */}
            <div className="mt-8 pt-6 border-t border-vscode-border">
              <h4 className="text-lg font-semibold syntax-keyword mb-4">Competition Awards:</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <motion.div 
                  className="bg-vscode-panel p-4 rounded-lg border border-vscode-border"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="syntax-function text-sm font-semibold">NTU CAO x ST Engineering Hackathon</span>
                    <span className="syntax-string text-xs">Apr 2024</span>
                  </div>
                  <div className="syntax-variable text-sm">First Runner-up</div>
                  <div className="text-xs text-vscode-comment mt-1">Surgical tray optimization • ~$2M projected savings</div>
                </motion.div>

                <motion.div 
                  className="bg-vscode-panel p-4 rounded-lg border border-vscode-border"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="syntax-function text-sm font-semibold">MLDA Deep Learning Week Hackathon</span>
                    <span className="syntax-string text-xs">Mar 2024</span>
                  </div>
                  <div className="syntax-variable text-sm">First Runner-up (Team Leader)</div>
                  <div className="text-xs text-vscode-comment mt-1">Video-caption pipeline • 12% accuracy improvement</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}