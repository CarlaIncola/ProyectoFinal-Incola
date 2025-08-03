import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CartProvider from './components/cartWidget';

const rootDom = document.getElementById("root")
const root = ReactDOM.createRoot(rootDom);

root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);