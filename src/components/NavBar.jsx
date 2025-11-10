import React from 'react'

export default function NavBar() {
  return (
    <header className="nav">
      <div className="container nav__inner">
        <div className="brand">
          <span className="logo">◎</span>
          <span>NFT & Meme</span>
        </div>
        <nav className="menu">
          <a href="#markets">Markets</a>
          <a href="#nfts">NFTs</a>
          <a href="#how">How It Works</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className="actions">
          <button className="btn btn--ghost">Sign In</button>
          <button className="btn btn--primary">Launch App</button>
        </div>
      </div>
    </header>
  )
}
