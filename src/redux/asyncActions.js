// src/redux/asyncActions.js
import { setProductList } from './actions';

// Define an asynchronous action to fetch product data
export const fetchProductData = () => {
  return async (dispatch) => {
    try {
      // Fetch data from a dummy API
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
       // Dispatch the setProductList action with the fetched data
      dispatch(setProductList(data.products));
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  };
};
