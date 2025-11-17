import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-24 sm:pt-36 sm:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1.5 text-xs font-medium text-gray-700 shadow-sm ring-1 ring-black/5 backdrop-blur">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
            Available for freelance projects
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight leading-tight">
            Building modern, playful web experiences.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-xl">
            I craft interactive apps with React, animations, and 3D touches. Check out selected work and say hi!
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#work" className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-5 py-2.5 text-sm font-semibold hover:bg-black transition-colors">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-white/70 ring-1 ring-black/10 px-5 py-2.5 text-sm font-semibold hover:bg-white transition-colors">
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
