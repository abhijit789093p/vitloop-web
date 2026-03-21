'use client'

import { motion } from 'framer-motion'
import { Check, Minus, X } from 'lucide-react'

type Val = true | false | 'partial'

const rows: { feature: string; icon: string; vl: Val; hm: Val; mfp: Val; fb: Val }[] = [
  { feature: 'Food Photo → Calories',         icon: '📸', vl: true,      hm: true,      mfp: true,      fb: false },
  { feature: 'AI Workout Planning',            icon: '🧠', vl: true,      hm: 'partial', mfp: false,     fb: true  },
  { feature: 'Live Form Correction',           icon: '🎯', vl: true,      hm: false,     mfp: false,     fb: false },
  { feature: 'Closed-Loop AI (Meal→Workout)',  icon: '🔁', vl: true,      hm: false,     mfp: false,     fb: false },
  { feature: 'Medical Condition Support',      icon: '🩺', vl: true,      hm: 'partial', mfp: false,     fb: false },
  { feature: 'Real-time Plan Adjustments',     icon: '⚡', vl: true,      hm: false,     mfp: false,     fb: false },
  { feature: 'Global Food Database',           icon: '🌍', vl: true,      hm: 'partial', mfp: true,      fb: false },
]

const competitors = [
  { key: 'hm',  label: 'Nutrition Apps',  dot: '#f97316', abbr: 'NA' },
  { key: 'mfp', label: 'Calorie Trackers', dot: '#3b82f6', abbr: 'CT' },
  { key: 'fb',  label: 'Workout Apps',    dot: '#ef4444', abbr: 'WA' },
]

function Cell({ v, highlight }: { v: Val; highlight?: boolean }) {
  if (v === true)
    return (
      <div className="flex justify-center items-center">
        <div
          className="w-6 h-6 rounded-full flex items-center justify-center"
          style={highlight
            ? { background: 'rgba(0,255,135,0.12)', border: '1px solid rgba(0,255,135,0.3)' }
            : { background: 'rgba(255,255,255,0.04)' }}
        >
          <Check size={12} strokeWidth={2.5} className={highlight ? 'text-[#00FF87]' : 'text-zinc-300'} />
        </div>
      </div>
    )
  if (v === false)
    return (
      <div className="flex justify-center items-center">
        <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.02)' }}>
          <X size={11} strokeWidth={2} className="text-zinc-500" />
        </div>
      </div>
    )
  return (
    <div className="flex justify-center items-center">
      <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.03)' }}>
        <Minus size={11} strokeWidth={2} className="text-zinc-500" />
      </div>
    </div>
  )
}

export default function WhyVitLoop() {
  return (
    <section id="why" className="relative py-28 overflow-hidden">
      {/* Background accents */}
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] opacity-[0.07] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #00FF87, transparent 65%)', filter: 'blur(80px)' }} />
      <div className="absolute left-0 bottom-0 w-80 h-80 opacity-[0.04] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #22d3ee, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-14"
        >
          <span className="eyebrow mb-5 block">Comparison</span>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2 className="font-display font-extrabold tracking-tight text-white leading-tight"
              style={{ fontSize: 'clamp(36px, 4vw, 52px)' }}>
              The only app that<br />
              <span className="text-gradient">closes the loop</span>
            </h2>
            <p className="font-body text-zinc-300 text-sm max-w-xs leading-relaxed">
              Most apps handle nutrition <em>or</em> fitness. VitLoop is the first to connect both in real time.
            </p>
          </div>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-x-auto"
        >
          <div className="min-w-[600px]">
            {/* Outer glow wrapper for VitLoop column effect */}
            <div className="relative rounded-[18px] overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.04)', padding: '1px' }}>
              <div className="rounded-[17px] overflow-hidden bg-[#0c0c10]">

                {/* Header row */}
                <div className="grid grid-cols-[2fr_1.1fr_1fr_1fr_1fr]">
                  {/* Feature col header */}
                  <div className="px-6 py-5 font-mono-vl text-[10px] tracking-widest text-zinc-500 uppercase border-b border-white/[0.04]">
                    Feature
                  </div>

                  {/* VitLoop header — highlighted */}
                  <div className="relative px-4 py-5 text-center border-b border-[#00FF87]/20"
                    style={{ background: 'linear-gradient(180deg, rgba(0,255,135,0.07) 0%, rgba(0,255,135,0.03) 100%)' }}>
                    {/* Top beam */}
                    <div className="absolute top-0 left-4 right-4 h-px"
                      style={{ background: 'linear-gradient(90deg, transparent, #00FF87, transparent)' }} />
                    <div className="flex flex-col items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-[#00FF87]" style={{ boxShadow: '0 0 8px #00FF87' }} />
                      <span className="font-display font-bold text-[13px] text-[#00FF87]">VitLoop</span>
                      <span className="font-mono-vl text-[8px] text-[#00FF87]/50 tracking-widest">YOU&apos;RE HERE</span>
                    </div>
                  </div>

                  {/* Competitor headers */}
                  {competitors.map((c) => (
                    <div key={c.key} className="px-3 py-5 text-center border-b border-white/[0.04]">
                      <div className="flex flex-col items-center gap-1.5">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center"
                          style={{ background: `${c.dot}18`, border: `1px solid ${c.dot}30` }}>
                          <span className="font-mono-vl text-[7px] font-bold" style={{ color: c.dot }}>{c.abbr}</span>
                        </div>
                        <span className="font-display font-semibold text-[11px] text-zinc-300">{c.label}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Data rows */}
                {rows.map((row, ri) => (
                  <motion.div
                    key={ri}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: ri * 0.06 }}
                    className={`grid grid-cols-[2fr_1.1fr_1fr_1fr_1fr] transition-colors hover:bg-white/[0.015] ${ri < rows.length - 1 ? 'border-b border-white/[0.03]' : ''}`}
                  >
                    {/* Feature name */}
                    <div className="px-6 py-4 flex items-center gap-3">
                      <span className="text-base leading-none">{row.icon}</span>
                      <span className="font-body text-sm text-zinc-400">{row.feature}</span>
                    </div>

                    {/* VitLoop cell */}
                    <div className="px-4 py-4"
                      style={{ background: 'rgba(0,255,135,0.025)' }}>
                      <Cell v={row.vl} highlight />
                    </div>

                    {/* Competitor cells */}
                    <div className="px-3 py-4"><Cell v={row.hm} /></div>
                    <div className="px-3 py-4"><Cell v={row.mfp} /></div>
                    <div className="px-3 py-4"><Cell v={row.fb} /></div>
                  </motion.div>
                ))}

                {/* Bottom summary bar */}
                <div className="grid grid-cols-[2fr_1.1fr_1fr_1fr_1fr] border-t border-white/[0.04]"
                  style={{ background: 'rgba(0,255,135,0.02)' }}>
                  <div className="px-6 py-4">
                    <span className="font-mono-vl text-[9px] tracking-widest text-zinc-400 uppercase">Score</span>
                  </div>
                  <div className="px-4 py-4 text-center" style={{ background: 'rgba(0,255,135,0.04)' }}>
                    <span className="font-display font-extrabold text-base text-[#00FF87]">7 / 7</span>
                  </div>
                  {[
                    { score: '3 / 7', color: '#f97316' },
                    { score: '3 / 7', color: '#3b82f6' },
                    { score: '2 / 7', color: '#ef4444' },
                  ].map((s, i) => (
                    <div key={i} className="px-3 py-4 text-center">
                      <span className="font-display font-bold text-sm" style={{ color: s.color, opacity: 0.7 }}>{s.score}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Legend + CTA */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-5">
            {[
              { icon: <Check size={11} strokeWidth={2.5} />, color: '#00FF87', label: 'Full support' },
              { icon: <Minus size={11} strokeWidth={2} />, color: '#555', label: 'Partial' },
              { icon: <X size={11} strokeWidth={2} />, color: '#333', label: 'None' },
            ].map((l, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <span style={{ color: l.color }}>{l.icon}</span>
                <span className="font-mono-vl text-[9px] text-zinc-400 tracking-wider">{l.label}</span>
              </div>
            ))}
          </div>
          <a href="#waitlist"
            className="font-mono-vl text-[10px] tracking-widest text-[#00FF87] hover:opacity-80 transition-opacity flex items-center gap-2">
            JOIN THE WAITLIST <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
