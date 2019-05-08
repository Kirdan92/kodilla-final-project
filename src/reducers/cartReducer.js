





const initialState = [];


const cartReducer = (state=initialState, action) => {
    // eslint-disable-next-line default-case
    switch(action.type) {
        case "ADD_ITEM":        
            return [...state, action.payload]
        case "REMOVE_ITEM":       
            const itemToRemove = state.indexOf(action.payload);
            return state.filter((item, index) => index !== itemToRemove);        
        default:
            return state;
    }
    
};



export default cartReducer;