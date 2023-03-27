import { configureStore } from '@reduxjs/toolkit';
import recipesReducer from './recipesSlice';
import orderSlice from './orderSlice';
import reservationsSlice from './reservationsSlice';

export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    order: orderSlice,
    reservations: reservationsSlice
  },
});
