import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-black/5 bg-white p-8 shadow-sm"
        >
          <h2 className="text-3xl font-bold tracking-tight">About</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            I’m a frontend-focused engineer who loves crafting interactive, human, and accessible products. My toolbelt includes React, animations, and thoughtful design systems. Beyond code, I’m into photography and playful visuals that inspire how I build.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
