import React from 'react'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__copy">
          <h1>Trade Meme Coins & NFTs in One Place</h1>
          <p>Discover trending tokens, mint spicy memes, and build your portfolio with real-time insights.</p>
          <div className="hero__cta">
            <a className="btn btn--primary" href="#markets">Start Trading</a>
            <a className="btn btn--ghost" href="#nfts">Explore NFTs</a>
          </div>
          <ul className="hero__badges">
            <li>0% Maker Fees</li>
            <li>Non-custodial</li>
            <li>Cross-chain Ready</li>
          </ul>
        </div>
        <div className="hero__media">
          <img className="hero__img" src="/images/hero-illustration.svg" alt="Crypto trading dashboard illustration"/>
          <div className="glass card hero__card--floating">
            <div className="card__header">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
            </div>
            <div className="card__body">
              <div className="ticker">
                {['DOGE','PEPE','SHIB','WOJAK','FLOKI','BONK'].map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
              <div className="chart skeleton"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
