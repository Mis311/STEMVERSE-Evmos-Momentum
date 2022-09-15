import "./css/predefined.css";
import "./css/styles.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/index";
import HelpCenter from "./pages/support/help-center";
import Marketplace from "./pages/support/marketplace";
import Profile from "./pages/profile/profile";
import Settings from "./pages/profile/settings";
import GhostNFTSlot from "./pages/support/ghostnft-slot";

// Generated Data
let userData = {
    name: "Ley Hanamura",
    title: "UI Designer",
    following: "11",
    followers: "132k",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    imageURL: "assets/users/ley.png",
  },
  friendsData = [
    // Online
    {
      name: "Violet Sparks",
      imageURL: "assets/users/friends/user-1.png",
      status: "online",
    },
    {
      name: "Johnny Pena",
      imageURL: "assets/users/friends/user-2.png",
      status: "online",
    },
    {
      name: "Horace Mccarthy",
      imageURL: "assets/users/friends/user-1.png",
      status: "online",
    },

    // Offline
    {
      name: "Karen May",
      imageURL: "assets/users/friends/user-2.png",
      status: "offline",
    },
    {
      name: "Percy Hunter",
      imageURL: "assets/users/friends/user-1.png",
      status: "offline",
    },

    // Pending
    {
      name: "Rodolfo Lawson",
      imageURL: "assets/users/friends/user-2.png",
      status: "pending",
    },
    {
      name: "Anne Barnett",
      imageURL: "assets/users/friends/user-1.png",
      status: "pending",
    },
  ];

export default function App() {
  return (
    <div>
      <Routes>
        {/* Needs */}
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/ghost-nft-slot" element={<GhostNFTSlot />} />

        {/* User Related */}
        <Route
          path="/profile"
          element={<Profile {...userData} {...friendsData} />}
        />
        <Route path="/settings" element={<Settings />} />

        {/* Error Rendering */}
        {/* <Route path="/404" element={<Error404 />} /> */}
      </Routes>
    </div>
  );
}
