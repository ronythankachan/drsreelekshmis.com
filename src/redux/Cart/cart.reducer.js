import { INCREMENT, DECREMENT, SETCARTCOUNT } from './cart.types';

const INITIAL_STATE = {
    cartCount: 0,
};
const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INCREMENT:
           return {
             ...state, cartCount: state.cartCount + 1,
           };
        case DECREMENT:
           return {
              ...state, cartCount: state.cartCount - 1,
            };
        case SETCARTCOUNT:
            return {
                ...state, cartCount: state.cartCount,
            };
         default: return state;
    }
};
export default reducer;