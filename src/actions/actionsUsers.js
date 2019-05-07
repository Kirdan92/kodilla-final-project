export const GET_USERS = 'GET_USERS';
export const ADD_USER = 'ADD_USER';



export function addUser(newUser) {
    return {
        type: ADD_USER,
        newUser
    }
}


export function getUsers() {
    return {
        type: GET_USERS
    }
}
