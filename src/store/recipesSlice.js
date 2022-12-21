import { createSlice } from '@reduxjs/toolkit';

export const recipesSlice = createSlice({
    name: 'recipesSlice',
    initialState: {
        recipes: []
    },
    reducers: {
        setRecipes(state, action) {
            state.recipes = action.payload;
        }
    }
});

export const {
    setRecipes
} = recipesSlice.actions;

export default recipesSlice.reducer;

export const selectRecipes = (state) => state.recipes.recipes;