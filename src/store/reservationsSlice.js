import { createSlice } from "@reduxjs/toolkit";

export const reservationsSlice = createSlice({
    name: 'reservationsSlice',
    initialState: {
        reservations: []
    },
    reducers: {
        addReservation(state, action) {
            state.reservations.push(action.payload);
        },
    }
});

export const {
    addReservation
} = reservationsSlice.actions;

export default reservationsSlice.reducer;