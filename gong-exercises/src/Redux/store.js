import { createStore } from "redux";
import userReducer from './loginReducers'

const store = createStore(
    userReducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;