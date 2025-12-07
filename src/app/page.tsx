'use client'

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
    <div className="min-h-screen bg-vscode-bg text-vscode-text">
      <Header />
      <About />
      <WorkExperience />
      <Education />
      <Publications />
      <Projects />
      <Technologies />
      <Footer />
    </div>
  )
}