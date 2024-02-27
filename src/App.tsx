import { Routes, Route, HashRouter } from "react-router-dom";
import Navbar from "./components/ui/navbar";
import Footer from "./components/ui/footer";
import { routes } from "./routes";
function App() {
  return (
    <main className="grid min-h-screen bg-primary">
      <HashRouter>
        <Navbar />
        <Routes>
          {routes.map((route) => {
            return (
              <Route
                path={route.path}
                element={route.element}
                key={route.path}
              />
            );
          })}
        </Routes>
        <Footer />
      </HashRouter>
    </main>
  );
}

export default App;
