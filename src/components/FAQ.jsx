import React, { useState } from 'react'

const qs = [
  { q: 'Is this non-custodial?', a: 'Yes, you maintain control of your funds. Trades are executed via decentralized protocols.' },
  { q: 'Which chains are supported?', a: 'Ethereum, Solana, and Base at launch, with more to come.' },
  { q: 'Are there fees?', a: '0% maker fees. Taker fees and network gas may apply depending on the route.' },
  { q: 'Can I mint NFTs?', a: 'Yes. You can mint directly from verified collections when enabled by creators.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="section">
      <div className="container">
        <div className="section__head">
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="accordion">
          {qs.map((item, i) => (
            <div className="accordion__item glass" key={item.q}>
              <button className="accordion__q" onClick={() => setOpen(i === open ? -1 : i)}>
                {item.q}
                <span>{open === i ? '−' : '+'}</span>
              </button>
              {open === i && <div className="accordion__a">{item.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
