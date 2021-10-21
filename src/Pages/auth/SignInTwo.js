import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import './SignInTwo.css';
import useAuth from '../../Hooks/useAuth';
import { getAuth } from '@firebase/auth';





 function SignInTwo  ()  {
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();

    const redirect_uri = location.state?.from || '/home'


    const handleGoogleLogin = () => {
        signInUsingGoogle()
         history.push(redirect_uri);
        
    }

    
   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

    return (
        <div className="login-form">
        <div className="center mt-5">
            <h1>Login</h1>
            <form>
                <div className="text_field">
                    <input type="text" value={email}  onChange={(e) => setEmail(e.target.value)}  required />
                    <span></span>
                    <label>Enter Email</label>
                </div>
                <div className="text_field">
                    <input type="password" value={password}  onChange={(e) => setPassword(e.target.value)} required />
                    <span></span>
                    <label>Password</label>
                </div>
                <div className="pass">Forgot Password?</div>
                <input  type="submit" value="Login" />

                <div className="signup_link">
                    Not a member? <Link to="/signUpTwo">Signup</Link>
                    <h6>Login With </h6>
                    <i onClick={handleGoogleLogin} style={{ fontSize: '25px', color: '#3B86E8', cursor: 'pointer' }} className="fab fa-google me-3"></i>
                </div>
            </form>
        </div>
    </div>
    );
    };




export default SignInTwo;