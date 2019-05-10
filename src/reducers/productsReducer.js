import { GET_PRODUCTS, SET_COVER } from '../actions/actionsProducts';
import productsData from '../data/products.json';





const initialState = {
    products: productsData.products,
};


const productsReducer = (state=initialState, payload) => {
    switch(payload.type) {
        case GET_PRODUCTS:
            console.log(state);
            return state;
        case SET_COVER:
            return state;
        default: 
            return state;
            
    }
};



export default productsReducer;