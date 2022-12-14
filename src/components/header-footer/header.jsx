import { Link, useLocation } from "react-router-dom";
import Button from "../button/button";
import { useState, useEffect } from "react";

// Icons
import { GoX } from "react-icons/go";
import { BsClipboard, BsClipboardCheck, BsChevronDown } from "react-icons/bs";

function UserCard(props) {
  const [profileVisibility, setProfileVisibility] = useState(true);
  const [copyData, setCopyData] = useState(false);
  const [userNavigaton, setUserNavigaton] = useState(false);
  return (
    <div
      className={
        "row hr-center " +
        props.className +
        " " +
        (!profileVisibility && " hidden") +
        " " +
        (userNavigaton && " active")
      }
      onClick={() => {
        props.user && setUserNavigaton(!userNavigaton);
      }}
    >
      {/* Copy Button */}
      {!props.copy && (
        <div
          className={
            "row hr-center vr-center header__user_copy " +
            (copyData && " active")
          }
          onClick={() => {
            // copy user props.data
            navigator.clipboard.writeText(props.data);
            setCopyData(true);
          }}
          onMouseLeave={() => {
            setCopyData(false);
          }}
        >
          <BsClipboard
            className={"header__user_copy_icon " + (copyData && " hidden")}
          />
          <BsClipboardCheck
            className={
              "header__user_copy_succesful_icon " + (!copyData && " hidden")
            }
          />
        </div>
      )}

      {/* Cancel Button */}
      {props.cancel && (
        <div
          className="header__user_cancel row hr-center vr-center"
          onClick={() => {
            setProfileVisibility(false);
            // removes from local storage
          }}
        >
          <GoX className="header__icon_cancel" />
        </div>
      )}

      {/* User Image */}
      <div
        className="header__profile"
        style={{
          background: `url(${props.imageURL})` || "assets/users/ley.png",
          backgroundSize: "cover",
        }}
      ></div>

      {/* User Info */}
      <div className={"column space-evenly " + props.status}>
        <span>{props.name || "Ley Hanamura"}</span>
        <span>{props.data || "Online"}</span>
      </div>

      {/* If user is logged in */}
      {props.user && (
        <div className="hr-center vr-center flex header__user_logged_in_chevron">
          <BsChevronDown height="2em" />
        </div>
      )}

      {/* Children items If user is logged in */}
      {props.user && (
        <div className="header__user_items">
          <p>
            <Link to="/profile">Profile</Link>
          </p>

          <p>
            <Link to="/settings">Settings</Link>
          </p>

          <p>
            <Link to="/settings#subscriptions">Subscriptions</Link>
          </p>

          <p>
            {/* on click, disconnect ehterim wallter */}
            <Link>Log Out</Link>
          </p>
        </div>
      )}
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
  // const [users, setUsers] = useState({
  //   online: 0,
  //   offline: 0,
  //   pending: 0,
  // });
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

  console.log(props);

  return (
    <>
      {/* Header */}
      <header
        className={
          "row hr-center vr-center space-between " +
          (props.account && "signedin")
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
        <div className={"priority-3 " + (props.navigation.sidebar && "active")}>
          {props.account ? (
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
                    {...props.user}
                  />
                  <h3 className="uppercase">Social</h3>
                  <div>
                    <h4 className="uppercase">
                      Pending {/* ??? {users.pending} */}
                    </h4>
                    <div>
                      {props.friends.map(
                        (friend, index) =>
                          friend.status == "pending" && (
                            <UserCard
                              key={index}
                              data="0x0190fqw12r12 ... e591"
                              className="header__user"
                              copy={true}
                              cancel={true}
                              name={friend.name}
                              imageURL={friend.imageURL}
                            />
                          )
                      )}
                    </div>
                  </div>

                  {/* Online */}
                  <div>
                    <h4 className="uppercase">
                      Online {/* ??? {users.pending} */}
                    </h4>
                    <div>
                      {props.friends.map(
                        (friend, index) =>
                          friend.status == "online" && (
                            <UserCard
                              key={index}
                              data="0x0190fqw12r12 ... e591"
                              className="header__user"
                              name={friend.name}
                              imageURL={friend.imageURL}
                            />
                          )
                      )}
                    </div>
                  </div>

                  {/* Offline */}
                  <div>
                    <h4 className="uppercase">
                      Online {/* ??? {users.pending} */}
                    </h4>
                    <div>
                      {props.friends.map(
                        (friend, index) =>
                          friend.status == "offline" && (
                            <UserCard
                              key={index}
                              data="0x0190fqw12r12 ... e591"
                              className="header__user"
                              name={friend.name}
                              imageURL={friend.imageURL}
                            />
                          )
                      )}
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
                style={{
                  background: `url(${props.user.imageURL})`,
                  backgroundSize: "cover",
                }}
              ></div>

              {/* Friends */}
              <div
                className="header__user-friends priority-5"
                onClick={() => {
                  props.setNavigation(true);
                }}
              >
                {props.friends.map(
                  (friend, index) =>
                    friend.status === "online" && (
                      <div
                        className="header__user-profile"
                        key={index}
                        style={{
                          background: `url(${friend.imageURL})`,
                          backgroundSize: "cover",
                        }}
                      />
                    )
                )}
              </div>

              {/* Back button */}
              <div
                className="header__back_button row hr-center vr-center"
                onClick={() => {
                  props.setNavigation(false);
                }}
              >
                <span className="row hr-center vr-center">???</span>
              </div>
            </>
          ) : (
            <Button
              className="px-5-radius priority-3"
              content="Connect Wallet"
              style={{}}
              onClick={() => {
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
