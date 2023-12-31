import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { db, auth } from './firebase';

function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();

        // some fancy firebase login
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                navigate('/');
            })
            .catch(error => alert(error.message));
    }

    const register = (e) => {
        e.preventDefault();

        // do some fancy firebase register
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // User created successfully
                console.log(auth);
                if (auth) {
                    navigate('/');
                }
            })
            .catch(error => alert(error.message));
    }

  return (
    <div className='login'>
        <Link to='/'>
            <img 
                className='login_logo'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                alt='' />
        </Link>
        <div className='login_container'>
            <h1>Sign in</h1>
            <form>
                <h5>E-mail</h5>
                <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    type='email' />
                <h5>Password</h5>
                <input 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type='password' />

                <button type='submit' className='login_signInButton' onClick={signIn}>Sign In</button>
            </form>

            <p>By signing-in you agree to Amazon Fake Clone's Conditions of Use & Sale. Please see our Privacy Notice, our Cookie Notice and our Interest-Based Ads Notice.</p>

            <button className='login_registerButton' onClick={register}>Create your Amazon Account</button>
        </div>
    </div>
  )
}

export default Login
