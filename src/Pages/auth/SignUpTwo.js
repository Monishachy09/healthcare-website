import { useState } from 'react';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, getAuth } from '@firebase/auth';
           

const SignUpTwo = () => {
    const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

 const auth = getAuth();

const handleSignup = e => {
    createUserWithEmailAndPassword(auth, email, password)

.then(result =>{
    const user = result.user;
})};

    return (
        <div className="login-form">
        <div className="center mt-5">
            <h1>SignUp</h1>
            <form onSubmit={handleSignup}>
                <div className="text_field">
                    <input   type="email" value={email}  onChange={(e) => setEmail(e.target.value)} required />
                   <span></span>
                    <label>Email Address</label>
                </div>
                <div className="text_field">
                    <input type="Password" value={password}  onChange={(e) => setPassword(e.target.value)}  required />
                   <span></span>
                    <label>Password</label>
                </div>
                <input type="submit" value="SignUp" />
                <div className="signup_link">
                   Have a Account? <Link to="/login">Login</Link>
                </div>
            </form>
        </div>
        </div>
    );
    };
export default SignUpTwo;