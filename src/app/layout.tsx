import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Yong Zane's Portfolio",
  description: 'Machine Learning & Web Development Engineer passionate about building end-to-end solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}