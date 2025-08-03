import Button from './components/Button'
import Counter from './components/counter';
import TextField from './components/textField';
import NavBar from "./components/NavBar";
import ProductsPage from "./pages/itemListContainer"
import HeroBanner from './components/heroBanner';


function App() {
  
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    

    <div className="App">

      <NavBar logoText="MyApp" navLinks={navLinks} />
      <HeroBanner />
      <Counter />
      <ProductsPage />

    </div>
  );
}

export default App;
