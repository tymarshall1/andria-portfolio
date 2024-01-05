import { Routes, Route, HashRouter } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import Portfolio from "./pages/portfolio";
function App() {
  return (
    <main className="grid min-h-screen">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />
      </HashRouter>
    </main>
  );
}

export default App;
