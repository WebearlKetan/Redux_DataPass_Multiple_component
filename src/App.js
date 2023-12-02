// src/App.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductData } from './redux/asyncActions';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';
import ComponentD from './components/ComponentD';
import ComponentE from './components/ComponentE';

const App = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);

  return (
    <div>
      <div>
        <h1>Component</h1>
        <ComponentA productList={productList} />
        <ComponentB productList={productList} />
        <ComponentC productList={productList} />
        <ComponentD productList={productList} />
        <ComponentE productList={productList} />
      </div>
    </div>
  );
};

export default App;
