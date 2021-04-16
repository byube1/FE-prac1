import { createStore, combineReducers, applyMiddleware } from "redux";
import productReducer from '../redux/reducers/productReducer';
import customerReducer from '../redux/reducers/customerReducer';
import shoppingCartReducer from '../redux/reducers/shoppingCartReducer';
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({
  productReducer,
  customerReducer,
  shoppingCartReducer,
});

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
   ,
);