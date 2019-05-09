



const emptyCart = (cart, item) => cart.filter(cartItem => cartItem.id !== item.id)
const itemInCart = (cart, item) => cart.filter(cartItem => cartItem.id === item.id)[0]

const addToCart = (cart, item) => {
    const cartItem = itemInCart(cart, item)
    return cartItem === undefined 
    ? [...emptyCart(cart, item), {...item, quantity: 1}] 
    : [...emptyCart(cart, item), { ...cartItem, quantity: cartItem.quantity + 1 }]
}

const removeFromCart = (cart, item) => {
    return item.quantity === 1 ? [...emptyCart(cart, item)] : [...emptyCart(cart, item), {...item, quantity: item.quantity - 1}]
}

const removeAllFromCart = (cart, item) => {
    return [...emptyCart(cart, item)]
}


const initialState = [];

const cartReducer = (state=initialState, action) => {
    // eslint-disable-next-line default-case
    switch(action.type) {
        case "ADD_ITEM":        
            return addToCart(state, action.payload);
        case "REMOVE_ITEM":       
            return removeFromCart(state, action.payload);     
            case "REMOVE_ALL":       
            return removeAllFromCart(state, action.payload);    
        default:
            return state;
    }
    
};



export default cartReducer;