import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Initial state
const initialState = {
  productList: [],
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRODUCT_LIST':
      return { ...state, productList: action.payload };
    default:
      return state;
  }
};

// Create store
const store = createStore(reducer, applyMiddleware(thunk));

export default store;


