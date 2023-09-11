// src/App.js
import React from 'react';
import Product from './components/Product';

const products = [
  { id: 1, name: 'Product 1', price: 19.99 },
  { id: 2, name: 'Product 2', price: 29.99 },
  { id: 3, name: 'Product 3', price: 39.99 },
  // Add more products as needed
];

function formatPrice(price) {
  return `$${price.toFixed(2)}`;
}

function App() {
  return (
    <div className="App">
      <h1>Product Listing</h1>
      <div className="product-list">
        {products.map((product) => (
          <Product key={product.id} product={product} formatPrice={formatPrice} />
        ))}
      </div>
    </div>
  );
}

export default App;
