import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import recipesReducer from './recipesSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    recipes: recipesReducer
  },
});
