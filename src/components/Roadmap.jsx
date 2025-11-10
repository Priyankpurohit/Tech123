import React from 'react'

const phases = [
  { q: 'Q1', items: ['MVP launch', 'Token listings', 'NFT minting beta'] },
  { q: 'Q2', items: ['Mobile PWA', 'Cross-chain swaps', 'DAO governance'] },
  { q: 'Q3', items: ['Staking & rewards', 'NFT lending', 'Pro charts'] },
  { q: 'Q4', items: ['Fiat on-ramp', 'Launchpad', 'Open API'] },
]

export default function Roadmap() {
  return (
    <section id="roadmap" className="section">
      <div className="container">
        <div className="section__head">
          <h2>Roadmap</h2>
          <p>Clear milestones to deliver the best crypto discovery & trading experience.</p>
        </div>
        <div className="timeline">
          {phases.map((p) => (
            <div key={p.q} className="phase glass">
              <div className="phase__q">{p.q}</div>
              <ul>
                {p.items.map((it) => <li key={it}>{it}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
