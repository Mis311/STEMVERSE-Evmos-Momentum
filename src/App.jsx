import "./css/predefined.css";
import "./css/styles.css";
import "./css/styles-query.css";
import "./css/predefined-query.css";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/index";
import HelpCenter from "./pages/support/help-center";
import Marketplace from "./pages/support/marketplace";
import Profile from "./pages/profile/profile";
import Settings from "./pages/profile/settings";
import GhostNFTSlot from "./pages/support/ghostnft-slot";

export default function App(props) {
  return (
    <div>
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
    </div>
  );
}
