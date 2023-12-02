// src/components/ComponentD.js
import React from 'react';
import { useSelector } from 'react-redux';

const ComponentD = () => {
  const productList = useSelector((state) => state.productList);

  return (
    <div>
      <h2>Component D</h2>
      <ul>
        {productList.map((product) => (
          <li key={product.id}>
            <p>{product.brand}</p>
            <p>{product.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ComponentD;
