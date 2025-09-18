import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar/index";
import HeroBanner from "./components/heroBanner/index";
import ItemListContainer from "./pages/ItemListContainer";
import ItemDetailContainer from "./pages/ItemDetailContainer";
import CartWidget from "./components/cartWidget/index";
import Checkout from "./components/cartWidget/checkout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./components/NotFound/NotFound";

function Layout() {
  const location = useLocation();

  // Hide HeroBanner if route starts with /product/
  const hideHero = location.pathname.startsWith("/product/");

  return (
    <>
      <NavBar />
      {!hideHero && <HeroBanner />}
      <Routes basename="/">
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:category" element={<ItemListContainer />} />
        <Route path="/product/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<CartWidget />} />
          <Route path="/checkout" element={<Checkout />} />
  <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer position="top-center" autoClose={3000} />
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
