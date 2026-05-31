'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Home, Camera, Dumbbell, BarChart2, Droplets, Beef } from 'lucide-react'

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

function PhoneUI() {
  return (
    <div className="float-phone relative w-[260px] lg:w-[290px]">
      {/* Glow pool */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-52 h-10 rounded-full"
        style={{ background: 'radial-gradient(ellipse, rgba(0,255,135,0.3), transparent 70%)', filter: 'blur(12px)' }} />

      {/* Phone shell */}
      <div className="relative rounded-[44px] overflow-hidden"
        style={{
          background: 'linear-gradient(145deg, #1a1a22, #0d0d12)',
          boxShadow: '0 0 0 1px rgba(255,255,255,0.08), 0 40px 80px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.1)',
          padding: '10px',
        }}>

        {/* Screen */}
        <div className="rounded-[36px] overflow-hidden bg-[#080810]"
          style={{ height: 570 }}>

          {/* Status bar */}
          <div className="flex items-center justify-between px-6 pt-4 pb-2">
            <span className="font-mono-vl text-[10px] text-white/40">9:41</span>
            {/* Dynamic island */}
            <div className="w-24 h-6 rounded-full bg-black flex items-center justify-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#00FF87]/80 animate-pulse" />
              <span className="font-mono-vl text-[8px] text-white/40">SCANNING</span>
            </div>
            <div className="flex gap-1 items-center">
              <div className="w-3.5 h-2.5 rounded-sm border border-white/30 relative">
                <div className="absolute inset-0.5 right-auto w-2/3 bg-white/50 rounded-sm" />
              </div>
            </div>
          </div>

          {/* App header */}
          <div className="flex items-center justify-between px-5 py-2">
            <div>
              <p className="font-mono-vl text-[9px] text-white/30 tracking-widest">TODAY</p>
              <p className="font-display font-bold text-white text-base leading-tight">
                Vit<span style={{ color: '#00FF87' }}>Loop</span>
              </p>
            </div>
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-black"
              style={{ background: 'linear-gradient(135deg, #00FF87, #22d3ee)' }}>
              AP
            </div>
          </div>

          {/* Camera viewport */}
          <div className="relative mx-4 rounded-2xl overflow-hidden" style={{ height: 170 }}>
            {/* Real food photo */}
            <img
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80&auto=format&fit=crop"
              alt="Margherita Pizza"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Dark overlay to keep UI elements readable */}
            <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.25)' }} />

            {/* Corner guides */}
            {[
              'top-3 left-3 border-t-2 border-l-2',
              'top-3 right-3 border-t-2 border-r-2',
              'bottom-3 left-3 border-b-2 border-l-2',
              'bottom-3 right-3 border-b-2 border-r-2',
            ].map((cls, i) => (
              <div key={i} className={`absolute w-5 h-5 border-[#00FF87] opacity-80 ${cls}`} />
            ))}

            {/* Scan line */}
            <div className="scan-line absolute left-3 right-3 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, #00FF87, transparent)' }} />

            {/* Confidence badge */}
            <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2 py-1 rounded-full"
              style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)', border: '1px solid rgba(0,255,135,0.2)' }}>
              <div className="w-1 h-1 rounded-full bg-[#00FF87]" />
              <span className="font-mono-vl text-[9px] text-[#00FF87]">AI DETECTED</span>
            </div>
          </div>

          {/* Detection card */}
          <div className="mx-4 mt-3 rounded-2xl p-4"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="font-mono-vl text-[9px] text-white/30 tracking-wider mb-0.5">DETECTED MEAL</p>
                <p className="font-display font-bold text-white text-sm">Margherita Pizza</p>
              </div>
              <div className="text-right">
                <p className="font-mono-vl text-[9px] text-white/30 tracking-wider mb-0.5">TOTAL</p>
                <p className="font-display font-bold text-[#00FF87] text-base">642 kcal</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[['Protein', '28g', '#00FF87'], ['Carbs', '78g', '#22d3ee'], ['Fat', '22g', '#a78bfa']].map(([l, v, c]) => (
                <div key={l} className="rounded-xl p-2 text-center"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <p className="font-mono-vl text-[8px] mb-1" style={{ color: c, opacity: 0.7 }}>{l.toUpperCase()}</p>
                  <p className="font-display font-bold text-white text-xs">{v}</p>
                </div>
              ))}
            </div>
          </div>

          {/* AI notification */}
          <div className="mx-4 mt-2 rounded-2xl p-3 flex items-center gap-3"
            style={{ background: 'rgba(0,255,135,0.06)', border: '1px solid rgba(0,255,135,0.15)' }}>
            <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: '#00FF87' }}>
              <span className="text-black text-xs font-bold">↑</span>
            </div>
            <div>
              <p className="font-display font-semibold text-[11px] text-[#00FF87]">Workout Updated</p>
              <p className="font-body text-[10px] text-white/40 mt-0.5">+15 min cardio added for today</p>
            </div>
          </div>

          {/* Bottom nav */}
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-around px-6 py-3"
            style={{ background: 'rgba(8,8,16,0.9)', backdropFilter: 'blur(20px)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            {[
              { icon: <Home size={16} />, active: false },
              { icon: <Camera size={16} />, active: true },
              { icon: <Dumbbell size={16} />, active: false },
              { icon: <BarChart2 size={16} />, active: false },
            ].map(({ icon, active }, i) => (
              <button key={i} className={`transition-all ${active ? 'text-[#00FF87] scale-110' : 'text-white/25'}`}>{icon}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center pt-16 overflow-hidden noise">
      {/* Background blobs */}
      <div className="blob w-[700px] h-[700px] -top-40 -left-40 opacity-[0.12]"
        style={{ background: 'radial-gradient(ellipse, #00FF87, transparent 65%)' }} />
      <div className="blob blob-2 w-[500px] h-[500px] -bottom-20 -right-20 opacity-[0.08]"
        style={{ background: 'radial-gradient(ellipse, #22d3ee, transparent 65%)' }} />
      <div className="blob w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 opacity-[0.04]"
        style={{ background: 'radial-gradient(ellipse, #a78bfa, transparent 65%)' }} />

      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-100 pointer-events-none" />

      {/* Horizontal lines for depth */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'repeating-linear-gradient(0deg, transparent, transparent 79px, rgba(255,255,255,0.015) 80px)' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left content */}
          <motion.div variants={stagger} initial="hidden" animate="show">

            {/* Eyebrow badge */}
            <motion.div variants={item} className="mb-8">
              <span className="eyebrow">AI-Powered Fitness — Launching 2026</span>
            </motion.div>

            {/* Main headline */}
            <motion.h1 variants={item}
              className="font-display font-extrabold tracking-tight leading-[0.9] mb-6"
              style={{ fontSize: 'clamp(56px, 7vw, 88px)' }}>
              <span className="block text-white">Your AI</span>
              <span className="block text-white">Fitness</span>
              <span className="block text-gradient">Coach.</span>
            </motion.h1>

            {/* Sub */}
            <motion.p variants={item}
              className="text-zinc-400 font-body leading-relaxed mb-10 max-w-[400px]"
              style={{ fontSize: 16 }}>
              Tired of apps that forget what you ate?{' '}
              <span className="text-zinc-200">VitLoop connects every meal to every workout — automatically. One coach. Zero guesswork.</span>
            </motion.p>

            {/* CTA row */}
            <motion.div variants={item} className="flex flex-wrap items-center gap-3 mb-12">
              <a href="#waitlist" className="btn-primary">
                Join Waitlist
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M2.5 10.5L10.5 2.5M10.5 2.5H4.5M10.5 2.5V8.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                </svg>
              </a>
              <a href="#how-it-works" className="btn-secondary">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="currentColor">
                  <path d="M6.5 0C2.91 0 0 2.91 0 6.5S2.91 13 6.5 13 13 10.09 13 6.5 10.09 0 6.5 0zm-1 9.5V3.5l5 3-5 3z"/>
                </svg>
                See How It Works
              </a>
            </motion.div>

            {/* Social proof */}
            <motion.div variants={item} className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {['#10b981', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6'].map((c, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-[#060608] flex items-center justify-center text-[10px] font-bold text-white"
                    style={{ background: c, zIndex: 5 - i }}>
                    {['AK', 'SR', 'MJ', 'PP', 'LR'][i]}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-body">
                  <span className="text-white font-semibold">Early access</span>
                  <span className="text-zinc-300"> — join the waitlist now</span>
                </p>
                <p className="text-[10px] text-zinc-400 mt-0.5 font-body">Be among the first to try VitLoop</p>
              </div>
            </motion.div>

          </motion.div>

          {/* Right: phone + Mira cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end items-start gap-8"
          >
            <PhoneUI />

            {/* Mira floating cards */}
            <div className="hidden lg:flex flex-col gap-3 pt-16 w-[190px] flex-shrink-0">

              {/* Mira header card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="rounded-2xl p-3.5"
                style={{
                  background: 'rgba(12,12,16,0.9)',
                  border: '1px solid rgba(0,255,135,0.2)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #00FF87, #22d3ee)', boxShadow: '0 0 10px rgba(0,255,135,0.4)' }}>
                    <span className="text-black text-[10px] font-black">M</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-display font-bold text-white text-xs">Mira</span>
                    <div className="w-1 h-1 rounded-full bg-[#00FF87]" style={{ boxShadow: '0 0 4px #00FF87' }} />
                  </div>
                </div>
                <p className="font-body text-[11px] text-zinc-400 leading-relaxed">
                  Based on your lunch (642 kcal), here&apos;s your updated plan:
                </p>
              </motion.div>

              {/* Workout suggestion card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="rounded-2xl p-3"
                style={{
                  background: 'rgba(12,12,16,0.85)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                }}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="text-[#00FF87]"><Dumbbell size={15} /></div>
                  <div>
                    <p className="font-display font-bold text-white text-xs">Evening HIIT</p>
                    <p className="font-mono-vl text-[8px] text-[#00FF87] tracking-wider">35 MIN · +15 MIN ADDED</p>
                  </div>
                </div>
                <div className="h-1 rounded-full bg-white/5">
                  <div className="h-full w-[72%] rounded-full" style={{ background: 'linear-gradient(90deg, #00FF87, #22d3ee)' }} />
                </div>
              </motion.div>

              {/* Hydration card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.25 }}
                className="rounded-2xl p-3"
                style={{
                  background: 'rgba(12,12,16,0.85)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="text-[#22d3ee]"><Droplets size={15} /></div>
                  <div>
                    <p className="font-display font-bold text-white text-xs">Hydration</p>
                    <p className="font-body text-[10px] text-zinc-300">Drink 500ml before workout</p>
                  </div>
                </div>
              </motion.div>

              {/* Protein tip */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="rounded-2xl p-3"
                style={{
                  background: 'rgba(12,12,16,0.85)',
                  border: '1px solid rgba(167,139,250,0.15)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="text-[#a78bfa]"><Beef size={15} /></div>
                  <div>
                    <p className="font-display font-bold text-white text-xs">Protein goal</p>
                    <p className="font-body text-[10px] text-zinc-300">Need 42g more today</p>
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>

        {/* Bottom stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 pt-8 border-t border-white/[0.05] grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '$45B+', label: 'Fitness app market by 2035' },
            { value: 'Real-time', label: 'Food recognition speed' },
            { value: 'Any meal', label: 'Cuisine, anywhere in the world' },
            { value: '4-in-1', label: 'AI systems in one app' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center lg:text-left">
              <p className="font-display font-extrabold text-2xl text-white mb-1">{value}</p>
              <p className="font-body text-xs text-zinc-300 leading-snug">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #060608, transparent)' }} />
    </section>
  )
}
