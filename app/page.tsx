import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import HowItWorks from '@/components/HowItWorks'
import Features from '@/components/Features'
import WhyVitLoop from '@/components/WhyVitLoop'
import Waitlist from '@/components/Waitlist'
import Donation from '@/components/Donation'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#060608] overflow-hidden">
      <Navbar />
      <Hero />
      <Marquee />
      <HowItWorks />
      <Features />
      <WhyVitLoop />
      <Waitlist />
      <Donation />
      <Footer />
    </main>
  )
}
