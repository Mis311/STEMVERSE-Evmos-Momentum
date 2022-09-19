import Layout from "../../components/layouts/single-sided";
import PreviewCard from "../../components/cards/preview-card";

function NFTCard() {
  return (
    <div className="nft-card">
      {/* Image */}
      <div>
        {/* Wishlist */}
        <div className="nft__wishlist"></div>

        {/* Image */}
        <div className="nft__image"></div>
      </div>

      {/* User Profile */}
      <div className="row nft__profle">
        <div className="nft__user_profile"></div>
        <div>
          <h3>Marcella Jacobs</h3>
          <p>@marcella</p>
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="uppercase">Current Bid</h4>
        <div className="row space-between">
          <span>0.4ETH</span>
          <span>752.98 USD</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="row hr-center space-between">
        <button>View NFT</button>
        <button>Purchase</button>
      </div>
    </div>
  );
}

export default function Marketplace() {
  return (
    <Layout>
      <div className="marketplace">
        <h1 className="hidden">Marketplace</h1>
        {/* Top two images */}
        <div className="marketplace__section_1 row flex-wrap space-between">
          <div></div>
          <div></div>
        </div>

        {/* Trending */}
        <div className="marketplace__trending">
          <h2 className="light_heading">Trending</h2>
          <h3>#Fight With Plasma</h3>
          <div className="row flex-wrap hr-center space-between">
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="no-desktop no-tablet">Hello</div>
          </div>
        </div>

        {/* Categories */}
        <div className="marketplace__categories">
          <h2 className="light_heading">Categories</h2>
          <h3>#Chilling With the Breeze</h3>
          <div className="column">
            <div className="row">
              <PreviewCard />
              <PreviewCard className="full-width" />
            </div>
            <div className="row">
              <PreviewCard className="full-width" />
              <PreviewCard />
            </div>
          </div>
        </div>

        {/* Updates */}
        <div className="marketplace__updates">
          <h2 className="light_heading">Updates</h2>
          <h3>#Just Dropped</h3>
          <div className="row flex-wrap hr-center">
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
          <h2 className="light_heading">NFTs</h2>
          <h3>#Take Hold of Your Collections</h3>
          <div className="row flex-wrap hr-center">
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
          <h2 className="light_heading">Backgrounds</h2>
          <h3>#Get Your Own Cool Background</h3>
          <div className="row flex-wrap hr-center">
            <NFTCard />
            <NFTCard />
            <NFTCard />
            <NFTCard />
            <NFTCard />
            <NFTCard />
          </div>
        </div>
      </div>
    </Layout>
  );
}
