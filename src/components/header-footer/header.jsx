import { Link, useLocation } from "react-router-dom";
import Button from "../button/button";
import { useState, useEffect } from "react";

function UserCard(props) {
  return (
    <div className={"row hr-center " + props.className}>
      {/* Copy Button */}
      {!props.copy && (
        <div
          className="header__user_copy"
          onClick={() => {
            // copy user props.data
          }}
        ></div>
      )}

      {/* Cancel Button */}
      {props.cancel && (
        <div
          className="header__user_cancel"
          onClick={() => {
            // Removes user from database
            // should hide user first while performing query
          }}
        ></div>
      )}

      {/* User Image */}
      <div className="header__profile"></div>

      {/* User Info */}
      <div className={"column space-evenly " + props.status}>
        <span>{props.name || "Ley Hanamura"}</span>
        <span>{props.data || "Online"}</span>
      </div>

      {/* If user is logged in */}
      {props.user && <div className="hr-center vr-center flex">▽</div>}
    </div>
  );
}
function AddFriends() {
  return (
    <div className="header__add_friends_container row hr-center vr-center min-screen-height full-width">
      <div>Hello</div>
    </div>
  );
}
export default function Header(props) {
  const [addFriends, setAddFriends] = useState(false);
  const { pathname, hash, key } = useLocation();

  // Moving page to path efffect
  useEffect(() => {
    // else scroll to id
    if (hash) {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          // creates a smooth scroll to element
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);
    }
  }, [pathname, hash, key]);

  return (
    <>
      {/* Header */}
      <header
        className={
          "row hr-center vr-center space-between " + (props.user && "signedin")
        }
      >
        {/* Navigation Items */}
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
              <Link to="/#about">
                <li>About</li>
              </Link>
              <Link to="/#story">
                <li>Story</li>
              </Link>
              <Link to="/#games-and-features">
                <li>Game & Features</li>
              </Link>
              <Link to="/ghost-nft-shell">
                <li>Ghost NFT Slot</li>
              </Link>
              <Link to="/stemverse-land">
                <li>Stemverse Land</li>
              </Link>
            </ul>
          </nav>
        </div>

        {/* Connected User + Friends */}
        <div className={"" + (props.navigation.sidebar && "active")}>
          {props.user ? (
            <>
              {/* Backgrounds */}
              <div className="header__navigation_hover priority-4">
                <div>
                  {/* User */}
                  <UserCard
                    user={true}
                    status="online"
                    className="header__loggedin_user"
                    copy={true}
                  />
                  <h3 className="uppercase">Social</h3>

                  {/* Pending */}
                  <div>
                    <h4 className="uppercase">Pending • 3</h4>
                    <div>
                      <UserCard
                        data="0x0190fqw12r12 ... e591"
                        className="header__user"
                        copy={true}
                        cancel={true}
                      />
                      <UserCard
                        data="0x0190fqw12r12 ... e591"
                        className="header__user"
                        copy={true}
                        cancel={true}
                      />
                      <UserCard
                        data="0x0190fqw12r12 ... e591"
                        className="header__user"
                        copy={true}
                        cancel={true}
                      />
                    </div>
                  </div>

                  {/* Online */}
                  <div>
                    <h4 className="uppercase">Online • 3</h4>
                    <div>
                      <UserCard
                        data="0x0190fqw12r12 ... e591"
                        className="header__user"
                      />
                      <UserCard
                        data="0x0190fqw12r12 ... e591"
                        className="header__user"
                      />
                      <UserCard
                        data="0x0190fqw12r12 ... e591"
                        className="header__user"
                      />
                    </div>
                  </div>

                  {/* Offline */}
                  <div>
                    <h4 className="uppercase">Offline • 3</h4>
                    <div>
                      <UserCard
                        data="0x0190fqw12r12 ... e591"
                        className="header__user"
                      />
                      <UserCard
                        data="0x0190fqw12r12 ... e591"
                        className="header__user"
                      />
                      <UserCard
                        data="0x0190fqw12r12 ... e591"
                        className="header__user"
                      />
                    </div>
                  </div>

                  {/* Add Friends */}
                  <div
                    className="header__add_friends row hr-center"
                    onClick={() => {
                      setAddFriends(true);
                    }}
                  >
                    {/* margin-top: 20px; */}
                    <div className="row hr-center vr-center">
                      <span>+</span>
                    </div>
                    <p>Add Friends</p>
                  </div>
                </div>
              </div>
              <div
                className="header__navigation_hover2"
                onClick={() => {
                  props.setNavigation(false);
                }}
              ></div>

              {/* Header Profile */}
              <div
                className="header__user-profile"
                onClick={() => {
                  props.setNavigation(true);
                }}
              ></div>

              {/* Friends */}
              <div
                className="header__user-friends priority-5"
                onClick={() => {
                  props.setNavigation(true);
                }}
              >
                <div className="header__user-profile"></div>
                <div className="header__user-profile"></div>
                <div className="header__user-profile"></div>
                <div className="header__user-profile"></div>
              </div>

              {/* Back button */}
              <div
                className="header__back_button row hr-center vr-center"
                onClick={() => {
                  props.setNavigation(false);
                }}
              >
                <span className="row hr-center vr-center">→</span>
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

      {/* Add Friends */}
      {addFriends && <AddFriends />}
    </>
  );
}

export function Mobile_Header(props) {
  return;
}

export function Header_Content(props) {
  return;
}
