'use client'

export default function Footer() {
  return (
    <footer className="bg-vscode-sidebar border-t border-vscode-border py-12">
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center space-x-4">
            <span className="syntax-comment text-sm">Connect with me:</span>
            <div className="flex space-x-4">
              <a
                href="https://scholar.google.com/citations?user=QQkv7XUAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-200 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1 border border-gray-300 hover:border-blue-600 p-3"
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
                className="w-12 h-12 bg-gray-200 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1 border border-gray-300 hover:border-blue-600 p-3"
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
                className="w-12 h-12 bg-gray-200 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1 border border-gray-300 hover:border-blue-600 p-3"
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
        </div>
      </div>
    </footer>
  )
}