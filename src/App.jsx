import "./css/predefined.css";
import "./css/styles.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/index";
import HelpCenter from "./pages/support/help-center";
import Marketplace from "./pages/support/marketplace";
import Profile from "./pages/profile/profile";
import Settings from "./pages/profile/settings";
import GhostNFTSlot from "./pages/support/ghostnft-slot";

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
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />

        {/* Error Rendering */}
        {/* <Route path="/404" element={<Error404 />} /> */}
      </Routes>
    </div>
  );
}
