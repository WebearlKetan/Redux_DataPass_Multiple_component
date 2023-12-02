// src/components/ComponentB.js
import React from 'react';
import { useSelector } from 'react-redux';

const ComponentB = () => {
  const productList = useSelector((state) => state.productList);

  return (
    <div>
      <h2>Component B</h2>
      <ul>
        {productList.map((product) => (
          <li key={product.id}>
            <p>{product.rating}</p>
            <p>{product.stock}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ComponentB;
