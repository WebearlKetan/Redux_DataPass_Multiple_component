// src/redux/asyncActions.js
import { setProductList } from './actions';

export const fetchProductData = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      dispatch(setProductList(data.products));
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  };
};
