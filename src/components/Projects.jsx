import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Interactive Dashboard',
    description: 'A modern analytics dashboard with smooth micro-interactions and responsive charts.',
    tags: ['React', 'Framer Motion', 'Tailwind'],
    link: '#',
  },
  {
    title: '3D Landing Page',
    description: 'Playful hero with 3D Spline scene, crisp typography, and scroll-triggered animations.',
    tags: ['React', 'Spline', 'Design'],
    link: '#',
  },
  {
    title: 'Portfolio CMS',
    description: 'Lightweight CMS powering blogs and case studies with MDX and a clean editor.',
    tags: ['FastAPI', 'MongoDB', 'MDX'],
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="work" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Selected Work</h2>
          <p className="mt-3 text-gray-700">A few projects that show my focus on delightful UX and solid engineering.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.a
              key={p.title}
              href={p.link}
              target={p.link.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="group rounded-2xl border border-black/5 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
              whileHover={{ y: -4 }}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
                <ExternalLink className="h-4 w-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="mt-2 text-sm text-gray-700">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-gray-100 text-gray-700 text-xs px-2.5 py-1 ring-1 ring-black/5">
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -z-0 top-0 h-48 bg-gradient-to-b from-white to-transparent" />
    </section>
  )
}
