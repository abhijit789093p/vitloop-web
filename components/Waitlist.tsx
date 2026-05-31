'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Loader2, Check } from 'lucide-react'

const DISPOSABLE_DOMAINS = new Set([
  'mailinator.com', 'guerrillamail.com', 'guerrillamail.net', 'guerrillamail.org',
  'guerrillamail.biz', 'guerrillamail.de', 'guerrillamail.info', 'grr.la',
  'sharklasers.com', 'spam4.me', 'trashmail.com', 'trashmail.me', 'trashmail.net',
  'trashmail.at', 'trashmail.io', 'dispostable.com', 'maildrop.cc', 'mailnull.com',
  'spamgourmet.com', 'yopmail.com', 'yopmail.fr', 'cool.fr.nf', 'jetable.fr.nf',
  'nospam.ze.tc', 'nomail.xl.cx', 'mega.zik.dj', 'speed.1s.fr', 'courriel.fr.nf',
  'moncourrier.fr.nf', 'monemail.fr.nf', 'monmail.fr.nf', 'tempmail.com',
  'temp-mail.org', 'tempinbox.com', 'throwaway.email', 'throwam.com',
  'emailondeck.com', 'getairmail.com', 'mailnesia.com', 'mytrashmail.com',
  'spambox.us', 'discard.email', 'fake-box.com', 'filzmail.com', 'spamfree24.org',
  'mailnull.com', 'spamgourmet.net', 'spamgourmet.org', '10minutemail.com',
  '10minutemail.net', 'tempr.email', 'burnermail.io', 'getnada.com',
  'inboxbear.com', 'tempail.com', 'spamgrap.com', 'trashmail.live',
])

function isDisposable(email: string): boolean {
  const domain = email.split('@')[1]?.toLowerCase()
  return domain ? DISPOSABLE_DOMAINS.has(domain) : false
}

export default function Waitlist() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'done'>('idle')
  const [error, setError] = useState('')

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email.includes('@') || !email.includes('.')) {
      setError('Enter a valid email.')
      return
    }

    if (isDisposable(email)) {
      setError('Please use a real email address.')
      return
    }

    setError('')
    setStatus('loading')

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/waitlist`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'apikey': process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
            'Prefer': 'return=minimal',
          },
          body: JSON.stringify({ email }),
        }
      )

      if (res.status === 409) {
        setError('This email is already on the waitlist.')
        setStatus('idle')
        return
      }

      if (!res.ok) {
        setError('Something went wrong. Please try again.')
        setStatus('idle')
        return
      }

      setStatus('done')
    } catch {
      setError('Something went wrong. Please try again.')
      setStatus('idle')
    }
  }

  return (
    <section id="waitlist" className="relative py-28 overflow-hidden">
      {/* Full-width gradient backdrop */}
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 80% 70% at 50% 50%, rgba(0,255,135,0.07) 0%, rgba(0,212,255,0.03) 40%, transparent 70%)' }} />
      <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" />
      {/* Corner glows */}
      <div className="absolute -left-20 -bottom-20 w-64 h-64 opacity-10 pointer-events-none rounded-full"
        style={{ background: '#00FF87', filter: 'blur(80px)' }} />
      <div className="absolute -right-20 top-10 w-48 h-48 opacity-[0.06] pointer-events-none rounded-full"
        style={{ background: '#22d3ee', filter: 'blur(60px)' }} />

      {/* Top border beam */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #00FF87, transparent)' }} />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="eyebrow justify-center mb-6 flex">Early Access</span>

          <h2 className="font-display font-extrabold tracking-tight text-white leading-[0.92] mb-6"
            style={{ fontSize: 'clamp(44px, 6vw, 72px)' }}>
            Be First.{' '}
            <span className="text-gradient">Train Smarter.</span>
          </h2>

          <p className="font-body text-zinc-300 text-base leading-relaxed mb-12 max-w-md mx-auto">
            VitLoop launches in 2026. Join the waitlist for early access, founding member pricing, and zero spam.
          </p>

          {/* Form */}
          <AnimatePresence mode="wait">
            {status === 'done' ? (
              <motion.div
                key="done"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-4"
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ background: 'rgba(0,255,135,0.1)', border: '1px solid rgba(0,255,135,0.25)' }}>
                  <Check size={28} className="text-[#00FF87]" />
                </div>
                <p className="font-display font-bold text-xl text-white">You&apos;re in.</p>
                <p className="font-body text-zinc-300 text-sm">
                  We&apos;ll reach you at <span className="text-[#00FF87]">{email}</span>
                </p>
              </motion.div>
            ) : (
              <motion.form key="form" onSubmit={submit}
                className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-5 py-3.5 rounded-full font-body text-sm text-white placeholder-zinc-500 focus:outline-none transition-all"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                    onFocus={e => { e.currentTarget.style.borderColor = 'rgba(0,255,135,0.4)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0,255,135,0.06)' }}
                    onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.boxShadow = 'none' }}
                  />
                  {error && <p className="mt-2 text-xs text-red-400 font-body text-left pl-4">{error}</p>}
                </div>
                <button type="submit" disabled={status === 'loading'}
                  className="btn-primary py-3.5 px-6 disabled:opacity-60">
                  {status === 'loading'
                    ? <Loader2 size={15} className="animate-spin mx-auto" />
                    : 'Join Waitlist'}
                </button>
              </motion.form>
            )}
          </AnimatePresence>

          {/* Perks */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            {[
              'Free early access',
              'Founding member pricing',
              'No spam — ever',
            ].map(p => (
              <div key={p} className="flex items-center gap-2">
                <Check size={12} className="text-[#00FF87]" />
                <span className="font-body text-xs text-zinc-300">{p}</span>
              </div>
            ))}
          </div>

          {/* Counter */}
          <p className="mt-6 font-mono-vl text-[11px] tracking-widest text-zinc-500">
            BE AMONG THE FIRST
          </p>
        </motion.div>
      </div>
    </section>
  )
}
