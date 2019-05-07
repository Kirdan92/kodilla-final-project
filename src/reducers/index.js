import { combineReducers } from 'redux';
import usersReducer  from './usersReducer';
import booksReducer  from './booksReducer';

const reducers = combineReducers({
    usersReducer: usersReducer,
    booksReducer: booksReducer
});

export default reducers;