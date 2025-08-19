import Button from './components/Button'
import Counter from './components/counter';
import NavBar from "./components/NavBar";
import ItemListContainer from "./pages/ItemListContainer";
import HeroBanner from './components/heroBanner';
import ProductList from './components/SearchBar/ProductList';
import products from './data/products';


function App() {
  
  const navLinks = [
    { name: "Link 1", path: "/" },
    { name: "Link 2", path: "/about" },
    { name: "Link 3", path: "/contact" },
  ];

  return (
    

    <div className="App">

      <NavBar logoText="App Logo" navLinks={navLinks} />
      <HeroBanner />
      <ProductList products={products} />
      <ItemListContainer greetingMessage="Welcome to our store!" />

    </div>
  );
}

export default App;
