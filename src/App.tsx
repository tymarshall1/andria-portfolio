import { Routes, Route, HashRouter } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
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
