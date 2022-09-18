import { Link } from "react-router-dom";
import Button from "../button/button";

function UserCard(props) {
  return (
    <div className={"row hr-center " + props.className}>
      <div className="header__profile"></div>
      <div className={"column space-evenly " + props.status}>
        <span>{props.name || "Ley Hanamura"}</span>
        <span>{props.data || "Online"}</span>
      </div>
      {props.user && <div className="hr-center vr-center flex">▽</div>}
    </div>
  );
}

export default function Header(props) {
  return (
    <header
      className={
        "row hr-center vr-center space-between " + (props.user && "signedin")
      }
    >
      <div className="row priority-4">
        {/* Logo */}
        <Link to="/" className="flex hr-center vr-center">
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
        style={{ margin: 0 }}
        className={props.navigation.sidebar && "active"}
      >
        {props.user ? (
          <>
            {/* Backgrounds */}
            <div className="header__navigation_hover priority-4">
              <div>
                <UserCard user={true} status="online" />
                <h3>Social</h3>
                {/* Pending */}
                <div>
                  <h4>Pending</h4>
                  <div>
                    <UserCard data="0x0190fqw12r12 ... e591" />
                    <UserCard data="0x0190fqw12r12 ... e591" />
                    <UserCard data="0x0190fqw12r12 ... e591" />
                  </div>
                </div>

                {/* Online */}
                <div>
                  <h4>Online</h4>
                  <div>
                    <UserCard data="0x0190fqw12r12 ... e591" />
                    <UserCard data="0x0190fqw12r12 ... e591" />
                    <UserCard data="0x0190fqw12r12 ... e591" />
                  </div>
                </div>

                {/* Offline */}
                <div>
                  <h4>Offline</h4>
                  <div>
                    <UserCard data="0x0190fqw12r12 ... e591" />
                    <UserCard data="0x0190fqw12r12 ... e591" />
                    <UserCard data="0x0190fqw12r12 ... e591" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className={"header__navigation_hover2"}
              onClick={() => {
                props.setNavigation(false);
              }}
            ></div>

            {/* Header Profile */}
            <div
              className={"header__user-profile"}
              onClick={() => {
                props.setNavigation(true);
              }}
            ></div>

            {/* Friends */}
            <div className="header__user-friends priority-5">
              <div className="header__user-profile"></div>
              <div className="header__user-profile"></div>
              <div className="header__user-profile"></div>
              <div className="header__user-profile"></div>
            </div>

            {/* Back button */}
            <div
              className="header__back_button"
              onClick={() => {
                props.setNavigation(false);
              }}
            ></div>
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
