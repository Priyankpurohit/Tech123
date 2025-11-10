import React from 'react'

const logos = {
  DOGE: '/images/tokens/doge.svg',
  PEPE: '/images/tokens/pepe.svg',
  SHIB: '/images/tokens/shib.svg',
  BONK: '/images/tokens/bonk.svg',
}

const sample = [
  { symbol: 'DOGE', name: 'Dogecoin', price: 0.1284, change: 3.21, mcap: 18420000000 },
  { symbol: 'PEPE', name: 'Pepe', price: 0.0000018, change: -1.2, mcap: 740000000 },
  { symbol: 'SHIB', name: 'Shiba Inu', price: 0.000023, change: 1.02, mcap: 13500000000 },
  { symbol: 'BONK', name: 'BONK', price: 0.000018, change: 8.44, mcap: 680000000 },
]

function formatUSD(n) {
  if (n < 1) return `$${n}`
  return `$${n.toLocaleString()}`
}

export default function TokenMarkets() {
  return (
    <section id="markets" className="section">
      <div className="container">
        <div className="section__head">
          <h2>Trending Meme Coins</h2>
          <p>Real-time markets with price, change and market cap.</p>
        </div>
        <div className="table glass">
          <div className="table__row table__row--head">
            <div>Token</div>
            <div>Price</div>
            <div>24h</div>
            <div>Market Cap</div>
            <div></div>
          </div>
          {sample.map((t) => (
            <div className="table__row" key={t.symbol}>
              <div className="token">
                <div className="avatar">
                  {logos[t.symbol] ? (
                    <img src={logos[t.symbol]} alt={t.symbol + ' logo'} />
                  ) : (
                    <span>{t.symbol[0]}</span>
                  )}
                </div>
                <div className="token__meta">
                  <div className="token__name">{t.name}</div>
                  <div className="token__symbol">{t.symbol}</div>
                </div>
              </div>
              <div>{formatUSD(t.price)}</div>
              <div className={t.change >= 0 ? 'up': 'down'}>{t.change}%</div>
              <div>{formatUSD(t.mcap)}</div>
              <div><button className="btn btn--small">Trade</button></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
