// src/components/ComponentA.js
import React from 'react';
import { useSelector } from 'react-redux';

const ComponentA = () => {
  const productList = useSelector((state) => state.productList);

  return (
    <div>
      <h2>Component A</h2>
      <ul>
        {productList.map((product) => (
          <li key={product.id}>
            <p>{product.title}</p>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ComponentA;
