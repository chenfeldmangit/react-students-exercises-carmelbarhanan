const LOG_IN = 'LOG_IN';
const SIGN_UP = 'SIGN_UP';
const CHANGE_FORM = 'CHANGE_FORM';
const initialState = [{"isLoggedIn": false}];

export default function userReducer (state = initialState, action){
    switch (action.type) {
        case LOG_IN:
            //step 2
            return [...state];
        case SIGN_UP:
            return [...state];
        case CHANGE_FORM:
            return [...state];
        default:
            return state
    }
}