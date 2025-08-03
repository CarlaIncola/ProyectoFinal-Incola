// src/data/products.js
const products = [
    {
      id: 1,
      name: "Product 1",
      price: 99.99,
      image: "/images/headphones.jpg",
      description: "Description product 1",
      category: "electronics",
      stock: 15
    },
    {
      id: 2,
      name: "Product 2",
      price: 24.99,
      image: "/images/tshirt.jpg",
      description: "Description product 2",
      category: "clothing",
      stock: 42,
      sizes: ["S", "M", "L", "XL"]
    },
    {
      id: 3,
      name: "Product 3",
      price: 19.95,
      image: "/images/bottle.jpg",
      description: "Description product 3",
      category: "accessories",
      stock: 30,
      colors: ["Black", "Silver", "Blue"]
    }
  ];
  
  export default products;