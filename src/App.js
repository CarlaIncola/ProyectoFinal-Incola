import Button from './components/Button'
import Counter from './components/counter';
import TextField from './components/textField';
import NavBar from "./components/NavBar";
import ProductsPage from "./pages/itemListContainer"
import HeroBanner from './components/heroBanner';


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
      <Counter />
      <ProductsPage />

    </div>
  );
}

export default App;
