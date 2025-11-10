import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import TokenMarkets from './components/TokenMarkets'
import NFTGallery from './components/NFTGallery'
import HowItWorks from './components/HowItWorks'
import Roadmap from './components/Roadmap'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'

export default function App() {
  return (
    <div className="app">
      <NavBar />
      <ThemeToggle />
      <main>
        <Hero />
        <Stats />
        <TokenMarkets />
        <NFTGallery />
        <HowItWorks />
        <Roadmap />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
