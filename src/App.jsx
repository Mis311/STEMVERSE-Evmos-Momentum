import "./css/predefined.css";
import "./css/styles.css";
import "./css/styles-query.css";
import "./css/predefined-query.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/home/index";
import HelpCenter from "./pages/support/help-center";
import Marketplace from "./pages/support/marketplace";
import Profile from "./pages/profile/profile";
import Settings from "./pages/profile/settings";
import GhostNFTSlot from "./pages/support/ghostnft-slot";

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
  const [connectedAccount] = useGlobalState("connectedAccount");
  useEffect(() => {
    isWallectConnected();
    checkIfTransactionExist();
  }, []);

  return (
    <BrowserRouter>
      <Header {...props} />

      <Routes>
        {/* Needs */}
        <Route path="/" element={<Home {...props} />} />
        <Route path="/stemverse-land" element={<Marketplace {...props} />} />
        <Route path="/help-center" element={<HelpCenter {...props} />} />
        <Route path="/ghost-nft-slot" element={<GhostNFTSlot {...props} />} />

        {/* User Related */}
        <Route path="/profile" element={<Profile {...props} />} />
        <Route path="/settings" element={<Settings {...props} />} />

        {/* Error Rendering */}
        {/* <Route path="/404" element={<Error404 />} /> */}
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
