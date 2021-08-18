import { combineReducers } from 'redux';
import loginReducer from './login';
import categoryReducer from './category';
import productReducer from './products';
import sliderReducer from './slider';
import searchProductReducer from './searchProducts';
import cartReducer from './cart';
import orderReducer from './order';

export default combineReducers({
  login: loginReducer,
  category: categoryReducer,
  product: productReducer,
  slider: sliderReducer,
  searchProducts: searchProductReducer,
  cart: cartReducer,
  order: orderReducer,
});
