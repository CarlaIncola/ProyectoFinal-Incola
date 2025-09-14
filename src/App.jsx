import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar/index";
import HeroBanner from "./components/heroBanner/index";
import ItemListContainer from "./pages/ItemListContainer";
import ItemDetailContainer from "./pages/ItemDetailContainer";
import CartWidget from "./components/cartWidget/index";
import Checkout from "./components/cartWidget";

function Layout() {
  const location = useLocation();

  // Hide HeroBanner if route starts with /product/
  const hideHero = location.pathname.startsWith("/product/");

  return (
    <>
      <NavBar />
      {!hideHero && <HeroBanner />}
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:category" element={<ItemListContainer />} />
        <Route path="/product/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<CartWidget />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
