export const GET_PRODUCTS = 'GET_PRODUCTS';
export const SET_COVER = 'SET_COVER';




export function getBooks() {
    return {
        type: GET_PRODUCTS
    }
}

export function setCover(cover) {
    return {
        type: SET_COVER,
        cover
    }
}
