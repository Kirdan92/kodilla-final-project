import { ADD_BOOK, GET_BOOKS } from '../actions/actionsBooks';
import booksData from '../data/books.json'





const initialState = {
    books: booksData,
};


const booksReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_BOOK:        
            return {...state, books:[...state.books, action.newBook]}
            
        case GET_BOOKS:
            console.log(state);
            return Object.assign({}, state, {books: state.books});
            
    }
    return state;
};



export default booksReducer;