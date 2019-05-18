const makeOrder = (state, data) => {
    return [...state, {...data}]
}

const initialState = [];

const cartReducer = (state=initialState, action) => {
    // eslint-disable-next-line default-case
    switch(action.type) {
        case "MAKE_ORDER":        
            return makeOrder(state, action.payload);
        default:
            return state;
    }
    
};



export default cartReducer;