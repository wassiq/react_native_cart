const {configureStore} = require('@reduxjs/toolkit');

import ProductReduer from './slices/ProductsSlice';
import WishlistReducer from './slices/WishlistSlice';
import CartReducer from './slices/CartSlice';
export const store = configureStore({
  reducer: {
    product: ProductReduer,
    wishlist: WishlistReducer,
    cart: CartReducer,
  },
});
