import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    count:0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        incrementCart: (state,action) =>{
            state.count = action.payload
        }
    }
});

export const {
    incrementCart
} = cartSlice.actions
export default cartSlice.reducer