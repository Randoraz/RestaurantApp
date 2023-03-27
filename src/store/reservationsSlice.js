import { createSlice } from "@reduxjs/toolkit";

export const reservationsSlice = createSlice({
    name: 'reservationsSlice',
    initialState: {
        tables: {
            tablesForTwoPeople: 10,
            tablesForFourPeople: 5,
            balconSeats: 10,
        },
        freeTables: {
            tablesForTwoPeople: 10,
            tablesForFourPeople: 5,
            balconSeats: 10,
        },
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

export const selectFreeTables = (state) => state.reservations.freeTables;