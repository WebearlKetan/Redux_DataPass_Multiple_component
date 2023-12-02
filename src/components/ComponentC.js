// src/components/ComponentC.js
import React from 'react';
import { useSelector } from 'react-redux';

const ComponentC = () => {
  const productList = useSelector((state) => state.productList);

  return (
    <div>
      <h2>Component C</h2>
      <ul>
        {productList.map((product) => (
          <li key={product.id}>
            <p>{product.price}</p>
            <p>{product.discountPercentage}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ComponentC;
