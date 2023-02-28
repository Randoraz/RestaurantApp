import { configureStore } from '@reduxjs/toolkit';
import recipesReducer from './recipesSlice';
import orderSlice from './orderSlice';

export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    order: orderSlice
  },
});
