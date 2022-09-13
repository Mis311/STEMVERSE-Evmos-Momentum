import { Link } from "react-router-dom";
import Button from "../button/button";
export default function Header(props) {
  return (
    <header className="row hr-center vr-center space-between">
      <div className="row">
        {/* Logo */}
        <img className="logo" src="assets/logo.svg" alt="logo" />

        {/* Content */}
        <nav className="flex hr-center">
          <a href="!#" className="language-options">
            En
          </a>
          <ul className="no-bullets row space-evenly hr-center no-padding">
            <a href="#about">
              <li>About</li>
            </a>
            <a href="#story">
              <li>Story</li>
            </a>
            <a href="#games-and-features">
              <li>Game & Features</li>
            </a>
            <Link to="/ghost-nft-shell">
              <li>Ghost NFT Slot</li>
            </Link>
            <Link to="/stemverse-land">
              <li>Stemverse Land</li>
            </Link>
          </ul>
        </nav>
      </div>

      {/* Connect */}
      <div>
        {props.user ? (
          ""
        ) : (
          <Button className="px-5-radius" content="Connect Wallet" />
        )}
      </div>
    </header>
  );
}

export function Mobile_Header(props) {
  return;
}

export function Header_Content(props) {
  return;
}
