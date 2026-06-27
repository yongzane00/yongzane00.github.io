/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Driven by CSS variables in globals.css (:root = light, .dark = dark) so the
        // whole palette theme-switches. RGB-channel vars keep opacity utilities working.
        vscode: {
          bg: 'rgb(var(--vscode-bg) / <alpha-value>)',
          sidebar: 'rgb(var(--vscode-sidebar) / <alpha-value>)',
          editor: 'rgb(var(--vscode-editor) / <alpha-value>)',
          panel: 'rgb(var(--vscode-panel) / <alpha-value>)',
          border: 'rgb(var(--vscode-border) / <alpha-value>)',
          text: 'rgb(var(--vscode-text) / <alpha-value>)',
          muted: 'rgb(var(--vscode-muted) / <alpha-value>)',
          comment: 'rgb(var(--vscode-comment) / <alpha-value>)',
          keyword: 'rgb(var(--vscode-keyword) / <alpha-value>)',
          string: 'rgb(var(--vscode-string) / <alpha-value>)',
          function: 'rgb(var(--vscode-function) / <alpha-value>)',
          variable: 'rgb(var(--vscode-variable) / <alpha-value>)',
          error: 'rgb(var(--vscode-error) / <alpha-value>)',
          success: 'rgb(var(--vscode-success) / <alpha-value>)',
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'blink': 'blink 1s infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}