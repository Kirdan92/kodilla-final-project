import { combineReducers } from 'redux';
import usersReducer  from './usersReducer';
import booksReducer  from './booksReducer';
import cartReducer  from './cartReducer';

const reducers = combineReducers({
    usersReducer: usersReducer,
    booksReducer: booksReducer,
    cart: cartReducer
});

export default reducers;