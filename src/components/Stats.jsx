import React from 'react'

const items = [
  { label: '24h Volume', value: '$128.4M' },
  { label: 'Active Traders', value: '84,921' },
  { label: 'NFT Floor Index', value: '+12.8%' },
  { label: 'Chains', value: 'ETH · SOL · BASE' },
]

export default function Stats() {
  return (
    <section className="stats">
      <div className="container stats__grid">
        {items.map((i) => (
          <div key={i.label} className="stat glass">
            <div className="stat__value">{i.value}</div>
            <div className="stat__label">{i.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
