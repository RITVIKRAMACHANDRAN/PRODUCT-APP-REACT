// src/Product.js
import React from 'react';

function Product({ product, formatPrice }) {
  return (
    <div className="product">
      <h2>{product.name}</h2>
      <p>Price: {formatPrice(product.price)}</p>
    </div>
  );
}

export default Product;
