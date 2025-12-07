'use client'

export default function Header() {
  return (
    <header className="bg-vscode-sidebar border-b border-vscode-border py-6 sticky top-0 z-50">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-3xl font-bold">
            <span className="syntax-keyword">&gt; </span>
            <span className="syntax-function">Yong</span>
            <span className="text-vscode-text"> </span>
            <span className="syntax-variable">Zane</span>
            <span className="syntax-keyword animate-blink">_</span>
          </h1>
          
          {/* Social Icons in Header */}
          <div className="hidden md:flex items-center space-x-4 ml-8">
            <a
              href="https://scholar.google.com/citations?user=QQkv7XUAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-200 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1 p-2"
              title="Google Scholar"
            >
              <img 
                src="/icons/google-scholar-icon.svg" 
                alt="Google Scholar" 
                className="w-6 h-6 filter brightness-0 hover:brightness-0 hover:invert hover:scale-110 transition-all duration-300"
              />
            </a>
            <a
              href="https://github.com/yongzane00"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-200 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1 p-2"
              title="GitHub"
            >
              <img 
                src="/icons/github-icon.svg" 
                alt="GitHub" 
                className="w-6 h-6 filter brightness-0 hover:brightness-0 hover:invert hover:scale-110 transition-all duration-300"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/zaneyong/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-200 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1 p-2"
              title="LinkedIn"
            >
              <img 
                src="/icons/linkedin-icon.svg" 
                alt="LinkedIn" 
                className="w-6 h-6 filter brightness-0 hover:brightness-0 hover:invert hover:scale-110 transition-all duration-300"
              />
            </a>
          </div>
        </div>
        
        <nav className="hidden lg:flex">
          <ul className="flex space-x-6">
            <li><a href="#background" className="syntax-variable hover:text-vscode-function transition-colors duration-300">Background</a></li>
            <li><a href="#experience" className="syntax-variable hover:text-vscode-function transition-colors duration-300">Experience</a></li>
            <li><a href="#publications" className="syntax-variable hover:text-vscode-function transition-colors duration-300">Publications</a></li>
            <li><a href="#projects" className="syntax-variable hover:text-vscode-function transition-colors duration-300">Projects</a></li>
            <li><a href="#technologies" className="syntax-variable hover:text-vscode-function transition-colors duration-300">Technologies</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}