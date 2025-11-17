import { Menu, Github, Linkedin, Mail } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#work', label: 'Work' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/60 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="font-semibold text-xl tracking-tight">My Portfolio</a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-md hover:bg-black/5">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-md hover:bg-black/5">
              <Linkedin size={18} />
            </a>
            <a href="mailto:you@example.com" aria-label="Email" className="p-2 rounded-md hover:bg-black/5">
              <Mail size={18} />
            </a>
          </div>

          <button className="md:hidden p-2 rounded-md hover:bg-black/5" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <Menu size={20} />
          </button>
        </div>

        {open && (
          <div className="md:hidden py-3 border-t border-black/5">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-gray-700 hover:text-gray-900" onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-3 pt-2">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-black/5"><Github size={18} /></a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-black/5"><Linkedin size={18} /></a>
                <a href="mailto:you@example.com" className="p-2 rounded-md hover:bg-black/5"><Mail size={18} /></a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
