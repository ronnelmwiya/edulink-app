// app/page.js or your landing page file
'use client';

import { useState } from 'react';
import LoginForm from '../components/LoginForm.js';
import RegisterForm from '../components/RegisterForm.js';
import styles from '../styles/home.module.css';

export default function Home() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className={styles.container}>
      <h1>Welcome to Edulink</h1>
      {isLogin ? <LoginForm /> : <RegisterForm />}
      <button className={styles.homeButton} onClick={toggleForm}>
        {isLogin ? 'Switch to Register' : 'Switch to Login'}
      </button>
    </div>
  );
}