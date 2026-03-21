import type { Metadata } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-syne',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'VitLoop — Your AI Fitness Coach',
  description:
    'Snap your food. AI adjusts your workout. Close the loop. VitLoop is the AI fitness coach that connects what you eat to how you train — in real time.',
  keywords: ['fitness app', 'AI coach', 'calorie tracker', 'workout planner', 'food scanner'],
  openGraph: {
    title: 'VitLoop — Your AI Fitness Coach',
    description: 'Eat Smart. Move Better. Loop.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#060608] text-white antialiased">{children}</body>
    </html>
  )
}
