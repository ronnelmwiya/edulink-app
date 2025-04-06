'use client';

import React, { useState } from 'react';
import Register from './register.js';
import Login from './login.js';
import styles from './forms.module.css';

const AuthForm = ({ onLoginSuccess }) => {
    const [ isLogin, setIsLogin ] = useState(true);

    const handleLoginSuccess = () => {
        onLoginSuccess();
    };

    return (
        <div>
            <div className={styles.authFormContainer}>
                <img src="logo.png" alt="Logo" />
                {isLogin ? (
                    <>
                        <Login onLoginSuccess={handleLoginSuccess} />
                        <p>
                            Don't have an account?
                            <button className={styles.authFormButton} onClick={() => setIsLogin(false)}>Register</button>
                        </p>
                    </>
                ) : (
                    <>
                        <Register onLoginSuccess={handleLoginSuccess} />
                        <p>
                            Already have an account?
                            <button className={styles.authFormButton} onClick={() => setIsLogin(true)}> Sign In</button>
                        </p>
                    </>
                )}
            </div>
        </div>
    )
}

export default AuthForm;