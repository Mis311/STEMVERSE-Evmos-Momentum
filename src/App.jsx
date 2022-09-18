//
import "./css/predefined.css";
import "./css/styles.css";
import "./css/styles-query.css";
import "./css/predefined-query.css";

//
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";

//
import Home from "./pages/home/index";
import HelpCenter from "./pages/support/help-center";
import Marketplace from "./pages/support/marketplace";
import Profile from "./pages/profile/profile";
import Settings from "./pages/profile/settings";
import GhostNFTSlot from "./pages/support/ghost-nft-slot";
import Error404 from "./pages/404";

import {
  isWallectConnected,
  checkIfTransactionExist,
  connectWallet,
} from "./shared/Transaction";
import { useGlobalState } from "./store";

//
import Header from "./components/header-footer/header.jsx";
import Footer from "./components/header-footer/footer.jsx";

export default function App(props) {
  // States
  const [connectedAccount] = useGlobalState("connectedAccount");
  const [navigation, setNavigation] = useState({
    sidebar: false,
    account: false,
  });

  // Functions
  function updateNavigation(bool1, bool2) {
    setNavigation({
      sidebar: bool1 || false,
      accout: bool2 || false,
    });
  }

  // Reders
  useEffect(() => {
    isWallectConnected();
    checkIfTransactionExist();
  }, []);

  return (
    <BrowserRouter>
      <div className={props.user && "signedin"}>
        <Header
          {...props}
          connectWallet={connectWallet}
          account={connectedAccount}
          navigation={navigation}
          setNavigation={updateNavigation}
        />

        <Routes>
          {/* Needs */}
          <Route
            path="/"
            element={<Home {...props} navigation={navigation} />}
          />
          <Route
            path="/stemverse-land"
            element={<Marketplace {...props} navigation={navigation} />}
          />
          <Route
            path="/help-center"
            element={<HelpCenter {...props} navigation={navigation} />}
          />
          <Route
            path="/ghost-nft-slot"
            element={<GhostNFTSlot {...props} navigation={navigation} />}
          />

          {/* User Related */}
          <Route
            path="/profile"
            element={<Profile {...props} navigation={navigation} />}
          />
          <Route
            path="/settings"
            element={<Settings {...props} navigation={navigation} />}
          />

          {/* Error Rendering */}
          <Route path="/404" element={<Error404 />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
