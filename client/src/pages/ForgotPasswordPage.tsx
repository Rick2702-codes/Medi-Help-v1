import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './ForgotPasswordPage.module.css';

const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = 'Forgot Password | Medi-Help';
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Reset password request for:', email);
    setSubmitted(true);
  };

  return (
    <div className={styles.pageShell}>
      <div className={styles.authCard}>
        <div className={styles.brandPanel}>
          <div className={styles.badge}>Secure access</div>
          <h1>Medi-Help</h1>
          <p className={styles.brandText}>
            Need a quick reset? We’ll help you regain access to your care plan in just a few steps.
          </p>

          <ul className={styles.benefitsList}>
            <li>Fast account recovery</li>
            <li>Protected access</li>
            <li>Simple password reset</li>
          </ul>
        </div>

        <div className={styles.formPanel}>
          <div className={styles.headerBlock}>
            <p className={styles.eyebrow}>Reset password</p>
            <h2>Forgot your password?</h2>
          </div>

          <p className={styles.message}>
            Enter the email address associated with your account and we’ll send instructions to reset it.
          </p>

          <form className={styles.form} onSubmit={handleSubmit}>
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

            {submitted && (
              <p className={styles.successText}>
                Reset instructions have been sent to {email || 'your email address'}.
              </p>
            )}

            <button type="submit" className={styles.primaryButton}>
              Send reset link
            </button>
          </form>

          <p className={styles.loginText}>
            Remembered your password?
            <Link to="/" className={styles.loginLink}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;