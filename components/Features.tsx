'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Camera, Brain, Dumbbell, RefreshCw } from 'lucide-react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Spot({ children, className }: { children: any; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  function onMove(e: { clientX: number; clientY: number }) {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`)
    el.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`)
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={`spotlight ${className ?? ''}`}
    >
      {children}
    </div>
  )
}

export default function Features() {
  return (
    <section id="features" className="relative py-28">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-14"
        >
          <span className="eyebrow mb-5 block">Features</span>
          <h2
            className="font-display font-extrabold tracking-tight text-white"
            style={{ fontSize: 'clamp(36px, 4vw, 52px)' }}
          >
            One app. Four AI systems.
            <br />
            <span className="text-gradient">Working as one.</span>
          </h2>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-4"
        >
          {/* HERO CARD: Closed Loop */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0 }}
            className="md:col-span-7 md:row-span-2"
          >
            <div className="grad-border h-full">
              <Spot className="h-full rounded-[17px] bg-[#0c0c10] p-8 flex flex-col min-h-[340px]">
                <div className="flex items-center justify-between mb-8">
                  <span
                    className="font-mono-vl text-[9px] tracking-widest text-[#00FF87] px-2.5 py-1 rounded-full"
                    style={{ background: 'rgba(0,255,135,0.08)', border: '1px solid rgba(0,255,135,0.2)' }}
                  >
                    THE LOOP &middot; SIGNATURE FEATURE
                  </span>
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-[#00FF87] text-xl"
                    style={{ background: 'rgba(0,255,135,0.08)', border: '1px solid rgba(0,255,135,0.15)' }}
                  >
                    &#8635;
                  </div>
                </div>

                <div className="flex-1">
                  <p
                    className="font-display font-extrabold text-white leading-tight mb-4"
                    style={{ fontSize: 'clamp(32px, 4vw, 44px)' }}
                  >
                    Closed-Loop
                    <br />
                    <span className="text-gradient">Intelligence</span>
                  </p>
                  <p className="font-body text-zinc-400 text-sm leading-relaxed max-w-sm">
                    No other app does this. What you eat changes what you do today.
                    VitLoop connects your nutrition data to your workout in real time
                    — snap lunch, your evening session is already updated.
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-3 flex-wrap">
                  {[
                    { icon: <Camera size={16} />, label: 'Snap Food', divider: false },
                    { icon: '→', label: '', divider: true },
                    { icon: <Brain size={16} />, label: 'AI Reads', divider: false },
                    { icon: '→', label: '', divider: true },
                    { icon: <Dumbbell size={16} />, label: 'Plan Updates', divider: false },
                    { icon: '→', label: '', divider: true },
                    { icon: <RefreshCw size={16} />, label: 'Loop', divider: false },
                  ].map((x, i) =>
                    x.divider ? (
                      <span key={i} className="text-zinc-400 text-sm">{x.icon}</span>
                    ) : (
                      <div key={i} className="flex flex-col items-center gap-1">
                        <div
                          className="w-9 h-9 rounded-xl flex items-center justify-center text-[#00FF87]"
                          style={{ background: 'rgba(0,255,135,0.07)', border: '1px solid rgba(0,255,135,0.12)' }}
                        >
                          {x.icon}
                        </div>
                        <span className="font-mono-vl text-[8px] text-zinc-400 tracking-wider whitespace-nowrap">
                          {x.label}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </Spot>
            </div>
          </motion.div>

          {/* Food Photo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-5"
          >
            <div className="grad-border-subtle h-full">
              <Spot className="h-full rounded-[17px] bg-[#0c0c10] p-6 flex flex-col min-h-[160px]">
                <div className="flex items-start justify-between mb-4">
                  <span
                    className="font-mono-vl text-[9px] tracking-widest text-[#22d3ee] px-2.5 py-1 rounded-full"
                    style={{ background: 'rgba(34,211,238,0.07)', border: '1px solid rgba(34,211,238,0.15)' }}
                  >
                    SNAP &amp; KNOW
                  </span>
                </div>
                <h3 className="font-display font-bold text-white text-lg mb-2">Food Photo Recognition</h3>
                <p className="font-body text-zinc-300 text-xs leading-relaxed flex-1">
                  Point. Snap. Done. Instant calories and macros for any meal, anywhere in the world.
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="h-1 flex-1 rounded-full bg-white/5">
                    <div
                      className="h-full w-[97%] rounded-full"
                      style={{ background: 'linear-gradient(90deg, #22d3ee, #00FF87)' }}
                    />
                  </div>
                  <span className="font-mono-vl text-[9px] text-[#22d3ee]">97% accuracy</span>
                </div>
              </Spot>
            </div>
          </motion.div>

          {/* AI Workout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-5"
          >
            <div className="grad-border-subtle h-full">
              <Spot className="h-full rounded-[17px] bg-[#0c0c10] p-6 flex flex-col min-h-[160px]">
                <div className="flex items-start justify-between mb-4">
                  <span
                    className="font-mono-vl text-[9px] tracking-widest text-[#a78bfa] px-2.5 py-1 rounded-full"
                    style={{ background: 'rgba(167,139,250,0.07)', border: '1px solid rgba(167,139,250,0.15)' }}
                  >
                    PERSONALISED AI
                  </span>
                </div>
                <h3 className="font-display font-bold text-white text-lg mb-2">AI Workout Planner</h3>
                <p className="font-body text-zinc-300 text-xs leading-relaxed flex-1">
                  Built from your body stats, goals, medical history, and today&apos;s food intake. Adapts every single day.
                </p>
                <div className="mt-4 flex gap-2 flex-wrap">
                  {['Home', 'Gym', 'PCOS', 'Diabetes', 'Recovery'].map((t) => (
                    <span
                      key={t}
                      className="font-mono-vl text-[8px] tracking-wider px-2 py-0.5 rounded-full text-zinc-300"
                      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Spot>
            </div>
          </motion.div>

          {/* Form Correction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-6"
          >
            <div className="grad-border-subtle h-full">
              <Spot className="h-full rounded-[17px] bg-[#0c0c10] p-6 flex flex-col min-h-[160px]">
                <div className="flex items-start justify-between mb-4">
                  <span
                    className="font-mono-vl text-[9px] tracking-widest text-[#f59e0b] px-2.5 py-1 rounded-full"
                    style={{ background: 'rgba(245,158,11,0.07)', border: '1px solid rgba(245,158,11,0.15)' }}
                  >
                    CAMERA AI
                  </span>
                </div>
                <h3 className="font-display font-bold text-white text-lg mb-2">Live Form Correction</h3>
                <p className="font-body text-zinc-300 text-xs leading-relaxed flex-1">
                  Your phone camera watches you work out. Pose AI catches bad form before injury happens and counts every rep.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] animate-pulse" />
                  <span className="font-mono-vl text-[9px] text-[#f59e0b]">LIVE &middot; 30fps detection</span>
                </div>
              </Spot>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="md:col-span-6"
          >
            <div className="grad-border-subtle h-full">
              <Spot className="h-full rounded-[17px] bg-[#0c0c10] p-6 flex flex-col min-h-[160px]">
                <p className="font-mono-vl text-[9px] tracking-widest text-zinc-400 mb-5">MARKET OPPORTUNITY</p>
                <div className="grid grid-cols-2 gap-4 flex-1">
                  {[
                    { v: '$45B+', l: 'Market by 2035', c: '#00FF87' },
                    { v: '14%', l: 'Annual growth', c: '#22d3ee' },
                    { v: '200M+', l: 'Fitness app users', c: '#a78bfa' },
                    { v: '2,847', l: 'Waitlist members', c: '#f59e0b' },
                  ].map(({ v, l, c }) => (
                    <div key={l}>
                      <p className="font-display font-extrabold text-2xl" style={{ color: c }}>
                        {v}
                      </p>
                      <p className="font-body text-[10px] text-zinc-400 mt-0.5 leading-snug">{l}</p>
                    </div>
                  ))}
                </div>
              </Spot>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
