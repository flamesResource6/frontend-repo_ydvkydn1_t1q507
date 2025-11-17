import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/hello`)
      const data = await res.json()
      setStatus(`Message sent! (${data.message})`)
    } catch (e) {
      setStatus('Something went wrong. Try again later.')
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-2xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-black/5 bg-white p-8 shadow-sm"
        >
          <h2 className="text-3xl font-bold tracking-tight">Let’s build something</h2>
          <p className="mt-2 text-gray-700">Send a quick note and I’ll get back soon.</p>

          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input className="w-full rounded-md border border-black/10 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10" placeholder="Your name" required />
              <input type="email" className="w-full rounded-md border border-black/10 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10" placeholder="Email" required />
            </div>
            <textarea rows="5" className="w-full rounded-md border border-black/10 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10" placeholder="Message" required />
            <div className="flex items-center gap-3">
              <button type="submit" className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-5 py-2.5 text-sm font-semibold hover:bg-black transition-colors">Send</button>
              <span className="text-sm text-gray-600">{status}</span>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
