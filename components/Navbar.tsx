'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Heart } from 'lucide-react'

const links = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'Compare', href: '#why' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#060608]/80 backdrop-blur-2xl border-b border-white/[0.05]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-[#060608]" style={{ border: '1px solid rgba(0,255,135,0.15)' }}>
            <svg width="16" height="16" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="nl" x1="100" y1="5" x2="100" y2="195" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#00FF87"/>
                  <stop offset="1" stopColor="#22d3ee"/>
                </linearGradient>
              </defs>
              <polygon points="39.2,5 69,5 111.7,169.4 81.9,169.4" fill="url(#nl)"/>
              <polygon points="146,5 175.8,5 133.1,169.4 103.2,169.4" fill="url(#nl)"/>
              <polygon points="24.2,169.4 81.9,169.4 81.9,195 24.2,195" fill="url(#nl)"/>
            </svg>
          </div>
          <span className="font-display font-bold text-[15px] tracking-tight text-white">
            Vit<span style={{ color: '#00FF87' }}>Loop</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a key={l.href} href={l.href}
              className="px-4 py-2 rounded-lg text-sm text-zinc-400 hover:text-white hover:bg-white/[0.04] transition-all duration-200 font-body">
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTAs */}
        <div className="hidden md:flex items-center gap-2">
          <a href="#support"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-body transition-all hover:opacity-80"
            style={{ background: 'rgba(167,139,250,0.1)', border: '1px solid rgba(167,139,250,0.2)', color: '#a78bfa' }}>
            <Heart size={13} />
            Support Us
          </a>
          <a href="#waitlist" className="inline-flex btn-primary text-sm py-2 px-5">
            Join Waitlist
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)}
          className="md:hidden text-zinc-400 hover:text-white transition-colors p-1">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="md:hidden border-t border-white/[0.05] bg-[#060608]/95 backdrop-blur-2xl"
          >
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-sm text-zinc-400 hover:text-white hover:bg-white/[0.04] transition-all">
                  {l.label}
                </a>
              ))}
              <a href="#support" onClick={() => setOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-body transition-all"
                style={{ background: 'rgba(167,139,250,0.1)', border: '1px solid rgba(167,139,250,0.2)', color: '#a78bfa' }}>
                <Heart size={13} />
                Support Us
              </a>
              <a href="#waitlist" onClick={() => setOpen(false)}
                className="btn-primary mt-2 justify-center text-sm py-3">
                Join Waitlist
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
