'use client'

import { motion } from 'framer-motion'

const socials = [
  {
    name: 'Instagram', href: '#',
    icon: <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
  },
  {
    name: 'TikTok', href: '#',
    icon: <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.84 1.56V6.81a4.85 4.85 0 01-1.07-.12z"/></svg>
  },
  {
    name: 'YouTube', href: '#',
    icon: <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>
  },
  {
    name: 'X', href: '#',
    icon: <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
  },
]

const links = [
  ['How It Works', '#how-it-works'],
  ['Features', '#features'],
  ['Why VitLoop', '#why'],
  ['Join Waitlist', '#waitlist'],
  ['Privacy Policy', '#'],
  ['Terms', '#'],
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.04] pt-16 pb-10 overflow-hidden">
      {/* Bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[150px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(0,255,135,0.04), transparent 70%)', filter: 'blur(30px)' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-14">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a href="#" className="flex items-center gap-2.5 mb-5">
              <img src="/vl-icon.png" alt="VitLoop" className="w-8 h-8 rounded-xl" />
              <span className="font-display font-bold text-base text-white">
                Vit<span style={{ color: '#00FF87' }}>Loop</span>
              </span>
            </a>
            <p className="font-body text-xs text-zinc-400 leading-relaxed max-w-[220px] mb-6">
              Eat Smart. Move Better. Loop.<br />
              The AI coach that connects what you eat to how you train.
            </p>
            <div className="flex items-center gap-2">
              {socials.map(s => (
                <a key={s.name} href={s.href} aria-label={s.name}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-zinc-400 hover:text-[#00FF87] transition-colors"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <p className="font-mono-vl text-[10px] tracking-widest text-zinc-400 uppercase mb-5">Navigation</p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {links.map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="font-body text-xs text-zinc-300 hover:text-[#00FF87] transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* App download */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.14 }}
          >
            <p className="font-mono-vl text-[10px] tracking-widest text-zinc-400 uppercase mb-5">Get The App</p>
            <div className="flex flex-col gap-3">
              {[
                { store: 'App Store', sub: 'iOS · Coming 2026' },
                { store: 'Google Play', sub: 'Android · Coming 2026' },
              ].map(({ store, sub }) => (
                <a key={store} href="#waitlist"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl hover:border-[#00FF87]/20 transition-all group"
                  style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <span className="font-body text-xs text-zinc-300 group-hover:text-zinc-300 transition-colors">{store}</span>
                  <span className="font-mono-vl text-[9px] text-zinc-500 ml-auto tracking-wider">{sub}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono-vl text-[10px] tracking-wider text-zinc-500">© 2026 VITLOOP · ALL RIGHTS RESERVED</p>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00FF87]" style={{ animation: 'pulse 2s ease-in-out infinite' }} />
            <span className="font-mono-vl text-[10px] tracking-wider text-zinc-500">LAUNCHING 2026</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
