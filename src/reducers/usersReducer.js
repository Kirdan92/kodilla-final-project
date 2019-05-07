import { ADD_USER, GET_USERS } from '../actions/actionsUsers';


const usersArray = [
    {
        id: 1,
        name: "Paweł",
        role: "admin"
    },
    {
        id: 2,
        name: "Marek",
        role: "user"
    },
]

const initialState = {
    users: usersArray,
};


const usersReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_USER:        
            return {...state, users:[...state.users, action.newUser]}
            
        case GET_USERS:
            return Object.assign({}, state, {users: state.users});
            
    }
    return state;
};



export default usersReducer;