import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
// Local storage as default storage
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

// Define a new persist config
const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['cart'] // Reducers to persist
}

const rootReducer = combineReducers({ 
  user: userReducer,
  cart: cartReducer
});

export default persistReducer(persistConfig, rootReducer);