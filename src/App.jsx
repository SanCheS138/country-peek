// 1. import BrowserRouter, Routes, Route from react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// 2. import Header, Home, NotFound
import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import "./styles/index.css";
function App() {
  return (
    // 3. wrap everything in BrowserRouter
    <BrowserRouter>
      {/* render Header above main — it must appear on every page */}
      <Header />

      <main>
        {/* 4. inside main, set up Routes with 4 Route entries */}
        <Routes>
          {/* "/" → Home */}
          <Route path="/" element={<Home />} />

          {/* "/country/:name" → placeholder div */}
          <Route path="/country/:name" element={<div>Country Detail Page</div>} />

          {/* "/favourites" → placeholder div */}
          <Route path="/favourites" element={<div>Favourites Page</div>} />

          {/* "*" → NotFound */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
