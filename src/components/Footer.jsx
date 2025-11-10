import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="brand">
          <span className="logo">◎</span>
          <span>NFT & Meme</span>
        </div>
        <div className="footer__links">
          <a href="#">Docs</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
        <div className="footer__social">
          <a href="#" aria-label="Twitter">𝕏</a>
          <a href="#" aria-label="Discord">💬</a>
          <a href="#" aria-label="GitHub">⌂</a>
        </div>
      </div>
    </footer>
  )
}
