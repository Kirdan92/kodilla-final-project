import { combineReducers } from 'redux';
import usersReducer  from './usersReducer';
import booksReducer  from './booksReducer';
import productsReducer  from './productsReducer';
import cartReducer  from './cartReducer';

const reducers = combineReducers({
    usersReducer: usersReducer,
    booksReducer: booksReducer,
    productsReducer: productsReducer,
    cart: cartReducer
});

export default reducers;