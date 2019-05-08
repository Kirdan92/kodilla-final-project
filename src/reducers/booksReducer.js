import { ADD_BOOK, GET_BOOKS } from '../actions/actionsBooks';
import booksData from '../data/books.json';





const initialState = {
    booksArray: booksData.books,
};


const booksReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_BOOK:        
            return {...state, books:[...state.booksArray, action.newBook]}
            
        case GET_BOOKS:
            console.log(state);
            return state;
            
    }
    return state;
};



export default booksReducer;