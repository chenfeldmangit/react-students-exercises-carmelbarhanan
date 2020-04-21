import React from "react";
import {connect} from "react-redux";
import {changeForm, signUpAction} from "./Redux/userActions";

function SignUp(props) {
    return (
        <>
        <h2>Create An Account</h2>
        <form>
            <div className="container">
                <label htmlFor="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required onChange={props.handleFormChange}/>
                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required onChange={props.handleFormChange}/>
                <button type="submit" onClick={props.signUpToApp}>Sign up</button>
            </div>
        </form>
        </>);
}

export default connect(
    (state) => ({
        loginData: state
    }),
    (dispatch) => ({
        signUpToApp: () => dispatch(signUpAction("1", "2")),
        handleFormChange: () => dispatch(changeForm("1", "2"))

    })
)(SignUp);

