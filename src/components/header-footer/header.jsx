import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <div className='row space-evenly hr-center'>
      <div>Logo</div>
      <nav>
        <ul className='row no-bullets'>
          <a href='#about'><li>About</li></a>
          <a href='#story'><li>Story</li></a>
          <a href='#games-and-features'><li>Game & Features</li></a>
          <Link to='/ghost-nft-shell'><li>Ghost NFT Slot</li></Link>
          <Link to='/stemverse-land'><li>Stemverse Land</li></Link>
        </ul>
      </nav>
      <button>Connect Wallet</button>
    </div>
  )
}

export function Mobile_Header(props) {
  return;
}

export function Header_Content(props) {
  return;
}