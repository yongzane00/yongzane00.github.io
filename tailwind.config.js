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
        vscode: {
          bg: '#1e1e1e',          // VS Code dark background
          sidebar: '#252526',      // Sidebar background
          editor: '#1e1e1e',       // Editor background
          panel: '#2d2d30',        // Panel background
          border: '#3e3e42',       // Border color
          text: '#d4d4d4',         // Main text
          comment: '#6a9955',      // Comments/secondary text
          keyword: '#569cd6',      // Keywords/primary accent
          string: '#ce9178',       // Strings/secondary accent
          function: '#dcdcaa',     // Function names
          variable: '#9cdcfe',     // Variables/links
          error: '#f44747',        // Error/warning
          success: '#4ec9b0',      // Success/highlight
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