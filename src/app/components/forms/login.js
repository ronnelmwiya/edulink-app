'use client';

import React, { useState } from 'react';
import { auth } from '../firebase/firebase.js';
import { signInWithEmailAndPassword } from 'firebase/auth';
import styles from './forms.module.css';

const Login = ({ onLoginSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            onLoginSuccess();
            // Redirect or show success message
        } catch (error)  {
            setError(error.message);
        }
    };

    return (
        <div>
            <div className={styles.formContainer}>
                <h2>Welcome Back!</h2>
                {error && <p>{error}</p>}
                <form onSubmit={handleLogin} className={styles.form}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <input 
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;