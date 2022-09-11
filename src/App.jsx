import "./css/predefined.css"
import "./css/styles.css"
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/index";
import HelpCenter from "./pages/support/help-center";
import Marketplace from "./pages/support/marketplace";

export default function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="marketplace" element={<Marketplace />} />
        <Route path="help-center" element={<HelpCenter />} />
      </Routes>
    </div>
  )
}
