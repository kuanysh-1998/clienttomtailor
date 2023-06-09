import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import MainLayouts from "./Layouts/MainLayouts";
import Favourites from "./pages/Favourites/Favourites";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayouts />}>
        <Route path="" element={<Home />} />
        <Route path="/products/:id" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/favourites" element={<Favourites />} />
      </Route>
    </Routes>
  );
}

export default App;
