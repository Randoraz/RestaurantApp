import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
    name: 'orderSlice',
    initialState: {
        orders: [],
        currentOrder: {}
    },
    reducers: {
        addOrder(state, action) {
            state.orders.push(state.currentOrder);
            state.currentOrder = {};
        },

        addDish(state, action) {
            if(action.payload in state.currentOrder)
                state.currentOrder[action.payload] = state.currentOrder[action.payload] + 1;
            else
                state.currentOrder[action.payload] = 1;
        },

        removeDish(state, action) {
            if(action.payload in state.currentOrder && state.currentOrder[action.payload] > 0) {
                state.currentOrder[action.payload] = state.currentOrder[action.payload] - 1;

                if(state.currentOrder[action.payload] <= 0)
                    delete state.currentOrder[action.payload];
            }
        }
    }
});

export const {
    addOrder,
    addDish,
    removeDish
} = orderSlice.actions;

export default orderSlice.reducer;

export const selectCurrentOrder = (state) => state.order.currentOrder;