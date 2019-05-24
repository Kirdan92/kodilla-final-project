import { combineReducers } from 'redux';
import usersReducer  from './usersReducer';
import productsReducer  from './productsReducer';
import cartReducer  from './cartReducer';
import checkoutReducer  from './checkoutReducer';

const reducers = combineReducers({
    usersReducer: usersReducer,
    productsReducer: productsReducer,
    cart: cartReducer,
    checkout: checkoutReducer
});

export default reducers;