'use client'

import { MotionConfig } from 'framer-motion'
import Header from '@/components/Header'
import About from '@/components/About'
import WorkExperience from '@/components/WorkExperience'
import Education from '@/components/Education'
import Publications from '@/components/Publications'
import Projects from '@/components/Projects'
import Technologies from '@/components/Technologies'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    // reducedMotion="user" makes every framer-motion animation honour the
    // OS-level "reduce motion" setting (pairs with the CSS guard in globals.css).
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-vscode-bg text-vscode-text">
        <Header />
        <main className="max-w-3xl mx-auto px-6">
          <About />
          <WorkExperience />
          <Education />
          <Publications />
          <Projects />
          <Technologies />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}