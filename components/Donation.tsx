'use client'

import { motion } from 'framer-motion'
import { Heart, Zap, Star, Coffee } from 'lucide-react'

const RAZORPAY_LINK = 'https://rzp.io/rzp/SnCyzeh'

const perks = [
  { icon: <Star size={14} />,   label: 'Founding Supporter badge' },
  { icon: <Zap size={14} />,    label: 'Priority early access' },
  { icon: <Heart size={14} />,  label: 'Help build something real' },
]

export default function Donation() {
  return (
    <section id="support" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] opacity-[0.06] pointer-events-none rounded-full"
        style={{ background: 'radial-gradient(ellipse, #a78bfa, transparent 70%)', filter: 'blur(60px)' }} />

      {/* Top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(167,139,250,0.4), transparent)' }} />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="rounded-[24px] p-8 md:p-12 text-center"
          style={{
            background: 'rgba(12,12,16,0.8)',
            border: '1px solid rgba(167,139,250,0.15)',
            backdropFilter: 'blur(12px)',
          }}
        >
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{ background: 'rgba(167,139,250,0.1)', border: '1px solid rgba(167,139,250,0.2)' }}>
              <Coffee size={24} style={{ color: '#a78bfa' }} />
            </div>
          </div>

          {/* Heading */}
          <span className="font-mono-vl text-[9px] tracking-widest px-3 py-1 rounded-full mb-4 inline-block"
            style={{ color: '#a78bfa', background: 'rgba(167,139,250,0.08)', border: '1px solid rgba(167,139,250,0.15)' }}>
            SUPPORT THE BUILD
          </span>

          <h2 className="font-display font-extrabold text-white mt-4 mb-4 leading-tight"
            style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}>
            Like what we&apos;re building?
            <br />
            <span style={{ color: '#a78bfa' }}>Help us ship faster.</span>
          </h2>

          <p className="font-body text-zinc-400 text-sm leading-relaxed mb-8 max-w-md mx-auto">
            VitLoop is built by one person. No VC funding, no big team.
            Every contribution goes directly into development — servers, APIs, and building new features.
          </p>

          {/* Perks */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {perks.map((p, i) => (
              <div key={i} className="flex items-center gap-2 px-3 py-2 rounded-full"
                style={{ background: 'rgba(167,139,250,0.06)', border: '1px solid rgba(167,139,250,0.12)' }}>
                <span style={{ color: '#a78bfa' }}>{p.icon}</span>
                <span className="font-body text-xs text-zinc-300">{p.label}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href={RAZORPAY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-display font-bold text-sm transition-all hover:scale-105 hover:opacity-90"
            style={{
              background: 'linear-gradient(135deg, #a78bfa, #7c3aed)',
              color: '#ffffff',
              boxShadow: '0 8px 32px rgba(167,139,250,0.25)',
            }}
          >
            <Heart size={15} />
            Support VitLoop
          </a>

          <p className="mt-4 font-mono-vl text-[9px] tracking-widest text-zinc-600">
            POWERED BY RAZORPAY · SECURE PAYMENT · ANY AMOUNT
          </p>
        </motion.div>
      </div>
    </section>
  )
}
