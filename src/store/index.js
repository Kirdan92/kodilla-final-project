import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from '../reducers'



const middleware = applyMiddleware(thunk, logger);
export const store = createStore(reducers, middleware);


store.dispatch({type: "ADD_USER", newUser: {id: 3, name: "Czesiu", role: "user"}})
store.dispatch({type: "ADD_USER", newUser: {id: 4, name: "Ola", role: "user"}})
store.dispatch({type: "GET_USERS"})


export default store;



