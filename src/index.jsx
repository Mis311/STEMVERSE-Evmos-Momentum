// Liberaries Import
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// Custom Imports
import App from "./App";
import Header from "./components/header-footer/header.jsx";
import Footer from "./components/header-footer/footer.jsx";

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

import {
  isWallectConnected,
  checkIfTransactionExist,
  connectWallet,
} from "./shared/Transaction";
import { useGlobalState } from "./store";

const [connectedAccount] = useGlobalState("connectedAccount");
useEffect(() => {
  isWallectConnected();
  checkIfTransactionExist();
}, []);

// Application
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header user={userData} friends={friendsData} />
      <App user={userData} friends={friendsData} />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
