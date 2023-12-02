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
    // Retrieve dispatch function and productList from Redux store
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);


  // Fetch product data from an API using useEffect hook
  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);

  // Render the main structure of the application with child components

  return (
    <div>
      <div>
        <h1>Component</h1>
         {/* Pass productList as a prop to each child component */}
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
