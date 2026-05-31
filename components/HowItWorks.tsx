'use client'

import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { Camera, Cpu, Activity } from 'lucide-react'

const steps = [
  {
    n: '01',
    Icon: Camera,
    title: 'Snap Your Food',
    body: 'Point your camera at any meal. VitLoop AI identifies every ingredient and returns precise calories and macros in under 2 seconds — for any cuisine on earth.',
    color: '#00FF87',
    tag: 'Computer Vision',
  },
  {
    n: '02',
    Icon: Cpu,
    title: 'AI Tracks & Plans',
    body: "Your coach reads today's intake, your health profile, and your goals. It rewrites your workout plan in real time — no manual input ever needed.",
    color: '#22d3ee',
    tag: 'Large Language Model',
  },
  {
    n: '03',
    Icon: Activity,
    title: 'Mira Coaches You',
    body: 'Ask your AI coach anything, anytime. Mira knows your full day — every meal, every exercise, your water, sleep, and habits — and gives you real, contextual guidance.',
    color: '#a78bfa',
    tag: 'AI Coaching',
  },
]

function SpotCard({ s, i }: { s: typeof steps[0], i: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const { Icon } = s

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const r = ref.current.getBoundingClientRect()
    ref.current.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`)
    ref.current.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: i * 0.13, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="grad-border-subtle h-full">
        <div ref={ref} onMouseMove={onMove}
          className="spotlight h-full rounded-[17px] p-7 bg-[#0c0c10] flex flex-col">

          {/* Top row: number + tag */}
          <div className="flex items-center justify-between mb-6">
            <span className="font-display font-extrabold text-5xl leading-none select-none"
              style={{ color: s.color, opacity: 0.12 }}>
              {s.n}
            </span>
            <span className="font-mono-vl text-[9px] tracking-widest px-2.5 py-1 rounded-full"
              style={{ color: s.color, background: `${s.color}12`, border: `1px solid ${s.color}25` }}>
              {s.tag}
            </span>
          </div>

          {/* Icon */}
          <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 shrink-0"
            style={{ background: `${s.color}10`, border: `1px solid ${s.color}20` }}>
            <Icon size={20} style={{ color: s.color }} />
          </div>

          <h3 className="font-display font-bold text-xl text-white mb-3">{s.title}</h3>
          <p className="font-body text-sm text-zinc-300 leading-relaxed flex-1">{s.body}</p>

          {/* Bottom accent */}
          <div className="mt-6 h-px w-12 rounded-full" style={{ background: s.color, opacity: 0.4 }} />
        </div>
      </div>
    </motion.div>
  )
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-16"
        >
          <span className="eyebrow mb-5 block">How It Works</span>
          <div className="flex flex-col lg:flex-row lg:items-end gap-6 justify-between">
            <h2 className="font-display font-extrabold tracking-tight leading-tight text-white"
              style={{ fontSize: 'clamp(36px, 4vw, 52px)' }}>
              Three steps to a<br />
              <span className="text-gradient">smarter body</span>
            </h2>
            <p className="font-body text-zinc-300 max-w-xs text-sm leading-relaxed lg:text-right">
              No spreadsheets. No guesswork.<br />Just point, plan, and perform.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-[68px] left-[calc(33.33%+8px)] right-[calc(33.33%+8px)] h-px pointer-events-none z-0"
            style={{ background: 'linear-gradient(90deg, rgba(0,255,135,0.15), rgba(34,211,238,0.1), rgba(167,139,250,0.15))' }} />

          {steps.map((s, i) => (
            <React.Fragment key={i}>
              <SpotCard s={s} i={i} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
