import { INCREMENT, DECREMENT } from './cart.types';
export const increaseCartCounter = () => {
    return {
        type: INCREMENT,
    };
};
export const decreaseCartCounter = () => {
    return {
       type: DECREMENT,
    };
};
export const setCartCounter = () => {
    return {
       type: SETCARTCOUNT,
    };
};