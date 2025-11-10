import React from 'react'

const local = [
  { id: 1, name: 'Meme Punk #1', price: '0.12 ETH', img: '/images/nfts/nft1.svg' },
  { id: 2, name: 'Rare Pepe #42', price: '0.24 ETH', img: '/images/nfts/nft2.svg' },
  { id: 3, name: 'Wojak #7', price: '0.18 ETH', img: '/images/nfts/nft3.svg' },
]

const nfts = [
  ...local,
  ...Array.from({ length: 3 }).map((_, i) => ({
    id: i + 4,
    name: `Meme Punk #${i + 4}`,
    price: (0.16 + i * 0.03).toFixed(2) + ' ETH',
    img: `https://picsum.photos/seed/meme${i+4}/600/600`,
  }))
]

export default function NFTGallery() {
  return (
    <section id="nfts" className="section">
      <div className="container">
        <div className="section__head">
          <h2>Hot NFT Collections</h2>
          <p>Discover and mint limited-edition meme art.</p>
        </div>
        <div className="grid">
          {nfts.map((n) => (
            <article key={n.id} className="card nft">
              <img src={n.img} alt={n.name} loading="lazy" />
              <div className="nft__body">
                <h3>{n.name}</h3>
                <div className="nft__row">
                  <span className="price">{n.price}</span>
                  <button className="btn btn--small">Mint</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
