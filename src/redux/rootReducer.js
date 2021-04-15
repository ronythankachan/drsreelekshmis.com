import { combineReducers } from 'redux';
import counterReducer from './Cart/cart.reducer';

const rootReducer = combineReducers({
    counter: counterReducer,
});
export default rootReducer;