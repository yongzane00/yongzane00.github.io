'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="background" className="py-20 bg-vscode-bg relative">
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
            <span className="syntax-keyword">Background</span>
          </h2>
          
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Image
                src="/assets/profile_pic.jfif"
                alt="Yong Zane Profile"
                width={300}
                height={300}
                className="rounded-2xl shadow-2xl border-2 border-vscode-border hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-vscode-success rounded-full border-2 border-vscode-bg animate-pulse"></div>
            </motion.div>
            
            <motion.div 
              className="flex-1 space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="bg-vscode-sidebar p-8 rounded-2xl border border-vscode-border shadow-xl">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-3 bg-vscode-error rounded-full"></div>
                  <div className="w-3 h-3 bg-vscode-string rounded-full"></div>
                  <div className="w-3 h-3 bg-vscode-success rounded-full"></div>
                  <span className="text-vscode-comment text-sm ml-4">yong_zane.py</span>
                </div>
                
                <div className="font-mono text-sm leading-relaxed">
                  <div className="mb-3">
                    <span className="syntax-keyword">class</span>{' '}
                    <span className="syntax-function">ResearchEngineer</span>:
                  </div>
                  
                  <div className="ml-4 space-y-2">
                    <div>
                      <span className="syntax-keyword">def</span>{' '}
                      <span className="syntax-function">__init__</span>
                      <span className="text-vscode-text">(</span>
                      <span className="syntax-variable">self</span>
                      <span className="text-vscode-text">):</span>
                    </div>
                    
                    <div className="ml-4 space-y-1 text-sm">
                      <div>
                        <span className="syntax-variable">self</span>
                        <span className="text-vscode-text">.position = </span>
                        <span className="syntax-string">&quot;Research Engineer @ ARTC, A*STAR&quot;</span>
                      </div>
                      <div>
                        <span className="syntax-variable">self</span>
                        <span className="text-vscode-text">.specialization = {'{'}</span>
                      </div>
                      <div className="ml-4">
                        <span className="syntax-string">&quot;Multi-Agent Systems&quot;</span>
                        <span className="text-vscode-text">,</span>
                      </div>
                      <div className="ml-4">
                        <span className="syntax-string">&quot;Multimodal AI&quot;</span>
                        <span className="text-vscode-text">,</span>
                      </div>
                      <div className="ml-4">
                        <span className="syntax-string">&quot;LLM&quot;</span>
                        <span className="text-vscode-text">,</span>
                      </div>
                      <div className="ml-4">
                        <span className="syntax-string">&quot;Computer Vision&quot;</span>
                      </div>
                      <div>
                        <span className="text-vscode-text">{'}'}</span>
                      </div>
                      <div>
                        <span className="syntax-variable">self</span>
                        <span className="text-vscode-text">.publications = </span>
                        <span className="syntax-keyword">3</span>
                        <span className="syntax-comment">  # 2 Conference + 1 Journal (peer reviewed)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-vscode-comment italic">
                  Architecting scalable AI systems that transform research into production
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}