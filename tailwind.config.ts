import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-syne)', 'sans-serif'],
        body: ['var(--font-dm-sans)', 'sans-serif'],
      },
      colors: {
        green: {
          neon: '#00FF87',
          dim: '#00CC6A',
          glow: 'rgba(0, 255, 135, 0.15)',
        },
        cyan: {
          neon: '#00D4FF',
        },
        surface: {
          DEFAULT: '#111113',
          raised: '#18181B',
          border: '#27272A',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'scan': 'scan 3s linear infinite',
        'pulse-green': 'pulseGreen 2s ease-in-out infinite',
        'blob': 'blob 12s ease-in-out infinite',
        'blob-delay': 'blob 14s ease-in-out infinite 2s',
        'counter': 'counter 2s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        scan: {
          '0%': { top: '0%', opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { top: '100%', opacity: '0' },
        },
        pulseGreen: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0,255,135,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0,255,135,0.6)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(40px,-30px) scale(1.08)' },
          '66%': { transform: 'translate(-20px,20px) scale(0.95)' },
        },
      },
      backgroundImage: {
        'dot-grid': 'radial-gradient(circle, #2a2a2a 1px, transparent 1px)',
        'green-glow': 'radial-gradient(ellipse at center, rgba(0,255,135,0.15) 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
}
export default config
