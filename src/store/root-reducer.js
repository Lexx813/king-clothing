import { combineReducers } from "redux";

import { userReducer } from "./user/user.reducer";
import { categoriesReducer } from "./categories/category.reducer";
import { cartReducer } from "./cart/cart.reducer";
import { blogsReducer } from "./blog/blog.reducer";
import { crudReducer } from "./crud/crud_reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
  blog: blogsReducer,
  crud: crudReducer,
});
