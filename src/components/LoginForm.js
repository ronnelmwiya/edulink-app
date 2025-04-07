'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth, googleProvider } from './firebase';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { FaGoogle } from 'react-icons/fa';
import styles from './forms.module.css';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Loading state
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true); // Start loading

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/home');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const handleGoogleSignIn = async () => {
    setError('');
    setLoading(true); // Start loading
    try {
      await signInWithPopup(auth, googleProvider);
      router.push('/home');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit" disabled={loading}> {/* Disable button while loading */}
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      <p>Or</p>
      <button onClick={handleGoogleSignIn} className={styles.googleButton} disabled={loading}>
        <FaGoogle /> {loading ? 'Signing in...' : 'Sign in with Google'}
      </button>
      {error && <p className={styles.error}>{error}</p>}
      {loading && <p className={styles.loader}>Loading...</p>} {/* Loader message */}
    </div>
  );
}