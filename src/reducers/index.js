import { combineReducers } from 'redux';
import usersReducer  from './usersReducer';
import booksReducer  from './booksReducer';
import productsReducer  from './productsReducer';
import cartReducer  from './cartReducer';
import checkoutReducer  from './checkoutReducer';

const reducers = combineReducers({
    usersReducer: usersReducer,
    booksReducer: booksReducer,
    productsReducer: productsReducer,
    cart: cartReducer,
    checkout: checkoutReducer
});

export default reducers;