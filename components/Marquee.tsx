'use client'

const items = [
  { icon: '⚡', text: 'Food Photo AI' },
  { icon: '◎', text: 'Live Form Correction' },
  { icon: '⟳', text: 'Closed-Loop Coaching' },
  { icon: '↗', text: 'AI Workout Planning' },
  { icon: '◈', text: 'Calorie Tracking' },
  { icon: '★', text: 'Real-Time Adjustments' },
  { icon: '⬡', text: '100+ Cuisines' },
  { icon: '✦', text: 'Medical Condition Support' },
]

export default function Marquee() {
  const doubled = [...items, ...items]

  return (
    <div className="relative overflow-hidden border-y border-white/[0.05] py-4 bg-[#060608]">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #060608, transparent)' }} />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #060608, transparent)' }} />

      <div className="marquee-track flex gap-0 whitespace-nowrap">
        {doubled.map((item, i) => (
          <div key={i} className="inline-flex items-center gap-3 px-8 shrink-0">
            <span className="text-[#00FF87] text-xs opacity-60">{item.icon}</span>
            <span className="font-mono-vl text-xs tracking-widest text-zinc-500 uppercase">{item.text}</span>
            <span className="text-zinc-700 text-xs">·</span>
          </div>
        ))}
      </div>
    </div>
  )
}
