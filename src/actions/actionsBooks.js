export const GET_BOOKS = 'GET_BOOKS';
export const GET_BOOK = 'GET_BOOK';
export const ADD_BOOK = 'ADD_BOOK';



export function addBook(newBook) {
    return {
        type: ADD_BOOK,
        newBook
    }
}


export function getBooks() {
    return {
        type: GET_BOOKS
    }
}
