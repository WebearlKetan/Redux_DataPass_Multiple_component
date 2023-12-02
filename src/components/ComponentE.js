// src/components/ComponentE.js
import React from 'react';
import { useSelector } from 'react-redux';

const ComponentE = () => {
  const productList = useSelector((state) => state.productList);

  return (
    <div>
      <h2>Component E</h2>
      <ul>
        {productList.map((product) => (
          <li key={product.id}>
            <p>{product.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ComponentE;
