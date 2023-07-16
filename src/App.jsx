import React from "react";
import MainPage from "./pages/MainPage";
import ShopPage from "./pages/ShopPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TrendingProd from "./components/TrendingProd";
import ScrollToTop from "./components/ScrollToTop";
import ProductClick from "./components/ProductClick";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div id="top" className="font-poppins">
        <ScrollToTop />
        <Routes>
          <Route element={<MainPage />}>
            <Route path="/" element={<TrendingProd />} />
            <Route path="/shoppage" element={<ShopPage />} />
            <Route path="/productdetails" element={<ProductClick />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
