import { GET_PRODUCTS } from '../actions/actionsProducts';
import productsData from '../data/products.json';





const initialState = {
    products: productsData.products,
};


const productsReducer = (state=initialState, action) => {
    switch(action.type) {
        case GET_PRODUCTS:
            console.log(state);
            return state;
        default: 
            return state;
            
    }
};



export default productsReducer;