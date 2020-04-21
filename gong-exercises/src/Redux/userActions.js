const LOG_IN = 'LOG_IN';
const SIGN_UP = 'SIGN_UP';
const CHANGE_FORM = 'CHANGE_FORM';

export function loginAction(userName, password) {
    // step 1
    return {
        type: LOG_IN,
        user: {
            userName: userName,
            password: password
        }
    }
}

export function signUpAction(userName, password) {
    return {
        type: SIGN_UP,
        user: {
            userName: userName,
            password: password
        }
    }
}

export function changeForm(fieldName, fieldValue) {
    return {
        type: CHANGE_FORM,
        user: {
            userName: fieldName,
            password: fieldValue
        }
    }
}