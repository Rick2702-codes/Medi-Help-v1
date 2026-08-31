import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './LoginPage.module.css';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    document.title = 'Login | Medi-Help';
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Logging in with:', { email, password, rememberMe });
    // TODO: call backend API here
  };

  return (
    <div className={styles.pageShell}>
      <div className={styles.authCard}>
        <div className={styles.brandPanel}>
          <div className={styles.badge}>Your health, on time</div>
          <h1>Medi-Help</h1>
          <p className={styles.brandText}>
            Stay consistent with your medicines, stock levels, and doctor reminders in one simple place.
          </p>

          <ul className={styles.benefitsList}>
            <li>Medication reminders</li>
            <li>Low-stock alerts</li>
            <li>Doctor visit tracking</li>
          </ul>
        </div>

        <div className={styles.formPanel}>
          <div className={styles.headerBlock}>
            <p className={styles.eyebrow}>Welcome back</p>
            <h2>Sign in</h2>
          </div>

          <form className={styles.form} onSubmit={handleLogin}>
            <label className={styles.field}>
              <span>Email address</span>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
              />
            </label>

            <label className={styles.field}>
              <span>Password</span>
              <div className={styles.passwordField}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  className={styles.togglePassword}
                  onClick={() => setShowPassword(current => !current)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  title={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </label>

            <div className={styles.metaRow}>
              <label className={styles.checkboxRow}>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={e => setRememberMe(e.target.checked)}
                />
                <span>Remember me</span>
              </label>

              <Link to="/forgot-password" className={styles.linkButton}>
                Forgot password?
              </Link>
            </div>

            <button type="submit" className={styles.primaryButton}>
              Login
            </button>
          </form>

          <p className={styles.signupText}>
            New here?
            <Link to="/signup" className={styles.signUpLink}>
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;