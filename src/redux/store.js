import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Initial state
const initialState = {
  productList: [],
};

// Reducer
const reducer = (state = initialState, action) => {
  
  switch (action.type) {
     // Handle the action to set the product list
    case 'SET_PRODUCT_LIST':
      return { ...state, productList: action.payload };
    default:
      return state;
  }
};

// Create store
// Create the Redux store with the reducer and thunk middleware
const store = createStore(reducer, applyMiddleware(thunk));

export default store;


