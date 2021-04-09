import { createStore, combineReducers, applyMiddleware } from "redux";
import productReducer from '../redux/reducers/productReducer';
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({
    productReducer,
  });

export const store = createStore(
    reducer,
    composeWithDevTools( applyMiddleware(thunk))
   ,   
  ); 