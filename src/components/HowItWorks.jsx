import React from 'react'

const steps = [
  { title: 'Connect Wallet', text: 'Use MetaMask, Phantom, or WalletConnect to link your wallet securely.' },
  { title: 'Fund & Discover', text: 'Deposit crypto or bridge assets; explore trending Meme coins & NFTs.' },
  { title: 'Trade & Mint', text: 'Swap tokens instantly and mint NFTs with a single click.' },
  { title: 'Track & Share', text: 'Monitor performance, set alerts, and share achievements.' },
]

export default function HowItWorks() {
  return (
    <section id="how" className="section">
      <div className="container">
        <div className="section__head">
          <h2>How It Works</h2>
          <p>From wallet connect to profits in four simple steps.</p>
        </div>
        <ol className="steps">
          {steps.map((s, i) => (
            <li key={s.title} className="step glass">
              <div className="step__index">{i + 1}</div>
              <div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
