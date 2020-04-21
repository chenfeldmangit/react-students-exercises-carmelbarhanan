import React, {useState} from "react";
import {connect} from "react-redux";
import {changeForm, loginAction} from "./Redux/userActions";

function Login(props) {
    // const [formState, setFormState] = useState({userName: null, password: null});

    // const submitFormAndLogin = () => {
    //     var userName = formState.userName;
    //     var pass = formState.password;
    //     var registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') ) || {};
    //
    //     registeredUsers.map(user => {
    //         if (user.userName === userName && user.password === pass) {
    //             alert("Enable Login!")
    //         }
    //     });
    // };

    // const handleChange = ({ target }) => {
    //     setFormState({... formState, [target.name]: target.value});
    // };

    return (
        <>
        <h2>Login Form</h2>
        <form>
            <div className="container">
                <label htmlFor="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="userName" required onChange={props.handleFormChange}/>
                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="password" required onChange={props.handleFormChange}/>
                <button onClick={props.loginToApp} type="submit">Login</button>
            </div>
        </form>
        </>);
}

export default connect(
    (state) => ({
        loginData: state
    }),
    (dispatch) => ({
        loginToApp: () => dispatch(loginAction("1", "2")),
        handleFormChange: () => dispatch(changeForm("1","2"))
    })
)(Login);

