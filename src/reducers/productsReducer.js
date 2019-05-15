import { GET_PRODUCTS, GET_PRODUCT, SET_COVER, SEARCH_PRODUCTS } from '../actions/actionsProducts';
import productsData from '../data/products.json';


const searchProducts = (state, action) => {
    console.log("tekse" + action)
    const foundProducts = state.products.filter(product => product.title.toLowerCase().includes(action.toLowerCase()));
            return Object.assign({}, state, {filtered: foundProducts});
}


const initialState = {
    products: productsData.products,
    filtered: productsData.products,
    selectedProduct: {}
};


const productsReducer = (state=initialState, action) => {
    switch(action.type) {
        case GET_PRODUCT:
            const selectedProduct = state.products.find(product => product.id == action.payload);
          
            return Object.assign({}, state, {selectedProduct});
        case 'SEARCH_PRODUCTS':
            return searchProducts(state, action.payload)
        default:
            return state;
            
    }

};



export default productsReducer;
