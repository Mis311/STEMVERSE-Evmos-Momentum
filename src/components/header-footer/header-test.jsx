import { Link } from "react-router-dom";
import Button from "../button/button";

export default function Header(props) {
  return (
    <header
      className={
        "row hr-center vr-center space-between " + (props.user && "signedin")
      }
    >
      <div className="row">
        {/* Logo */}
        <Link
          to="/"
          className="flex hr-center vr-center"
          style={{ width: "100px" }}
        >
          <img className="logo" src="assets/logo.svg" alt="logo" />
        </Link>

        {/* Content */}
        <nav className="flex hr-center">
          <a href="#" className="language-options">
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
      <div
        style={{ margin: 0, width: "100px" }}
        className="hr-center vr-center flex"
      >
        {props.user ? (
          <>
            <div
              className={"header__user-profile"}
              onMouseEnter={() => {
                props.setNavigation(true);
                console.log("On");
              }}
            ></div>

            <div
              className={
                "header__navigation_hover2 " +
                (props.navigation.sidebar && "active")
              }
              onClick={() => {
                props.setNavigation(false);
                console.log("Off");
              }}
            ></div>
            <div
              className={
                "header__navigation_hover " +
                (props.navigation.sidebar && "active")
              }
            ></div>
            <div className="header__user-friends">
              <div className="header__user-profile"></div>
              <div className="header__user-profile"></div>
              <div className="header__user-profile"></div>
              <div className="header__user-profile"></div>
            </div>
          </>
        ) : (
          <Button
            className="px-5-radius"
            content="Connect Wallet"
            onClick={() => {
              props.connectWallet();
              console.log(props.account);
            }}
          />
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
