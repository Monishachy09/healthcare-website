import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



const SignUpTwo = () => {

    const [user, setUser] = useState({});
    const [email, setEmail] = useState('') 
    const [password, setPassword] = useState('')


    const auth = getAuth();

    const handleEmailChange = e => {
        setEmail(e.target.value)
    }
    
    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }
    const handleUserChange = e => {
        setUser(e.target.value)
    }
    
    // // const handleSignUp = e => {
    // //     signInWithEmailAndPassword (auth, email, password)
    // //     .then((result) => {
    // //             const user = result.user;
    // //         })
    // //     e.preventDefault();
    // }
    


    return (
        <div className="login-form">
        <div className="center mt-5">
            <h1>SignUp</h1>
            <form >
                <div className="text_field">
                    <input onBlur={handleUserChange} type="email" required />
                   <span></span>
                    <label>Email Address</label>
                </div>
                <div className="text_field">
                    <input onBlur={handleEmailChange} type="Password" required />
                   <span></span>
                    <label>Password</label>
                </div>
                <div className="text_field">
                    <input onBlur={handlePasswordChange} type="password" required />
                    <span></span>
                    <label>Re-enter Password</label>
                </div>
                <input type="submit" value="SignUp" />
                <div className="signup_link">
                   Have a Account? <Link to="/login">Login</Link>
                </div>
            </form>
        </div>
        </div>
    );
    }

export default SignUpTwo;