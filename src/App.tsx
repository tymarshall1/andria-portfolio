import { Routes, Route, HashRouter } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/homepage/home";
import Portfolio from "./pages/portfolio/portfolio";
import Keystone from "./pages/projectPages/keyStone";
import RachaelsBakery from "./pages/projectPages/rachaelsBakery";
import RockNRolls from "./pages/projectPages/rockNRolls";
import JrProm from "./pages/projectPages/jrProm";
import SrProm from "./pages/projectPages/srProm";
import LumsPond from "./pages/projectPages/lumsPond";
import RehobethBeach from "./pages/projectPages/rehobethBeach";
import PhotoManipulation from "./pages/projectPages/photoManipulation";
import BookCovers from "./pages/projectPages/bookCovers";
import LogoDesigns from "./pages/projectPages/logoDesigns";
import SocialMediaAdvertisements from "./pages/projectPages/socialMediaAdvertisements";
import Advertisements from "./pages/projectPages/advertisements";
import Contact from "./pages/contact/contact";
function App() {
  return (
    <main className="grid min-h-screen bg-primary">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/keystone-condominiums" element={<Keystone />} />
          <Route path="/rachaels-bakery" element={<RachaelsBakery />} />
          <Route path="/rock-n-rolls" element={<RockNRolls />} />
          <Route path="/jr-prom" element={<JrProm />} />
          <Route path="/sr-prom" element={<SrProm />} />
          <Route path="/lums-pond" element={<LumsPond />} />
          <Route path="/rehobeth-beach" element={<RehobethBeach />} />
          <Route path="/photo-manipulation" element={<PhotoManipulation />} />
          <Route path="/book-covers" element={<BookCovers />} />
          <Route path="/logo-designs" element={<LogoDesigns />} />
          <Route
            path="/social-media-advertisements"
            element={<SocialMediaAdvertisements />}
          />
          <Route path="/advertisements" element={<Advertisements />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </HashRouter>
    </main>
  );
}

export default App;
