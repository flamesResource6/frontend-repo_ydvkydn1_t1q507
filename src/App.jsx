import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-black/5 py-10 text-center text-sm text-gray-600">
        <div className="mx-auto max-w-7xl px-6">© {new Date().getFullYear()} Your Name — Built with love.</div>
      </footer>
    </div>
  )
}

export default App
