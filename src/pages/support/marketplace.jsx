function NFTCard() {
  return <div className="nft-card"></div>;
}

export default function Marketplace() {
  return (
    <div>
      <h1 className="hidden">Marketplace</h1>
      {/* Top two images */}
      <div>
        <div></div>
        <div></div>
      </div>

      {/* Trending */}
      <div className="marketplace__trending">
        <h2>Trending</h2>
        <h3>#Fight With Plasma</h3>
        <div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="no-desktop no-tablet">Hello</div>
        </div>
      </div>

      {/* Categories */}
      <div className="marketplace__categories">
        <h2>Categories</h2>
        <h3>#Chilling With the Breeze</h3>
        <div className="row">
          <div className="row">
            <div></div>
            <div></div>
          </div>
          <div className="row">
            <div></div>
            <div></div>
          </div>
        </div>
      </div>

      {/* Updates */}
      <div className="marketplace__updates">
        <h2>Updates</h2>
        <h3>#Just Dropped</h3>
        <div className="row wrap hr-center">
          <NFTCard />
          <NFTCard />
          <NFTCard />
          <NFTCard />
          <NFTCard />
          <NFTCard />
        </div>
        <button>View More</button>
      </div>

      {/* NFTs */}
      <div className="marketplace__nfts">
        <h2>NFTs</h2>
        <h3>#Take Hold of Your Collections</h3>
        <div className="row wrap hr-center">
          <NFTCard />
          <NFTCard />
          <NFTCard />
          <NFTCard />
          <NFTCard />
          <NFTCard />
        </div>
      </div>

      {/* Backgrounds */}
      <div className="marketplace__backgrounds">
        <h2>Backgrounds</h2>
        <h3>#Get Your Own Cool Background</h3>
        <div className="row wrap hr-center">
          <NFTCard />
          <NFTCard />
          <NFTCard />
          <NFTCard />
          <NFTCard />
          <NFTCard />
        </div>
      </div>
    </div>
  );
}
