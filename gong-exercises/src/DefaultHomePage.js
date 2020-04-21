import React, {component, useState} from 'react';
import './style/style.scss'
import Login from './Login'
import SignUp from "./SignUp";

const registeredUsersList = [
    {
        userName: "CarmelBarHanan",
        password: '1234567',
    },
    {
        userName: "ShibelCarmiMansur",
        password: '5678923',
    },
    {
        userName: "Beyonce",
        password: '345654',
    }
];

const DefaultHomePage = () => {
    const [formState, setFormState] = useState({showLoginForm: false, showSignUpForm: false});
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsersList));

    const showLoginForm = () => {
        if (formState.showLoginForm === false) {
            setFormState({...formState, showLoginForm: true})
        }
    };

    const showSignUpForm = () => {
        if (formState.showSignUpForm === false) {
            setFormState({...formState, showSignUpForm: true})
        }
    };

    return (
        <div id='defaultHomePageContainer'>
            {!formState.showLoginForm && !formState.showSignUpForm &&
                <>
                    <button onClick={showLoginForm}>Log in</button>
                    <button onClick={showSignUpForm}>Sign up</button>
                </>
            }
            {formState.showLoginForm &&
                <Login/>
            }
            {formState.showSignUpForm &&
                <SignUp/>
            }
        </div>
    );
};

 export default DefaultHomePage;