'use client';

import React, { useState } from 'react';
import { auth } from '../firebase/firebase.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import styles from './forms.module.css';

const Register = ({ onLoginSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            onLoginSuccess();
            // Redirect or show success message
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            <div className={styles.formContainer}>
                <h2>Join Solace Today!</h2>
                {error && <p>{error}</p>}
                <form onSubmit={handleRegister} className={styles.form}>
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
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;