import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './SignUpPage.module.css';

const SignUpPage: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    document.title = 'Create account | Medi-Help';
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();

    if (form.password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    await fetch("http://localhost:5000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    navigate('/');
  };

  return (
    <div className={styles.pageShell}>
      <div className={styles.authCard}>
        <div className={styles.brandPanel}>
          <div className={styles.badge}>Stay on track</div>
          <h1>Medi-Help</h1>
          <p className={styles.brandText}>
            Join to manage your medicines, reminders, and doctor visits in one secure place.
          </p>

          <ul className={styles.benefitsList}>
            <li>Create a personal medication schedule</li>
            <li>Track stock and refill reminders</li>
            <li>Stay prepared for appointments</li>
          </ul>
        </div>

        <div className={styles.formPanel}>
          <div className={styles.headerBlock}>
            <p className={styles.eyebrow}>Create account</p>
            <h2>Sign up</h2>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.nameRow}>
              <label className={styles.field}>
                <span>First name</span>
                <input
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  required
                />
              </label>

              <label className={styles.field}>
                <span>Last name</span>
                <input
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  required
                />
              </label>
            </div>

            <label className={styles.field}>
              <span>Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />
            </label>

            <label className={styles.field}>
              <span>Mobile number</span>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+country code and number"
                autoComplete="tel"
                inputMode="tel"
                pattern="^\\+?[1-9][\\d\s()-]{7,18}$"
                aria-describedby="phone-help"
                required
              />
              <small id="phone-help" className={styles.fieldHint}>
                Include your country code so we can send SMS reminders.
              </small>
            </label>

            <label className={styles.field}>
              <span>Password</span>
              <div className={styles.passwordField}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Create password"
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

            <label className={styles.field}>
              <span>Confirm password</span>
              <div className={styles.passwordField}>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  placeholder="Re-enter password"
                  required
                />
                <button
                  type="button"
                  className={styles.togglePassword}
                  onClick={() => setShowConfirmPassword(current => !current)}
                  aria-label={showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'}
                  title={showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'}
                >
                  {showConfirmPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </label>

            {error && <p className={styles.errorText}>{error}</p>}

            <button type="submit" className={styles.primaryButton}>
              Create account
            </button>
          </form>

          <p className={styles.loginText}>
            Already have an account?
            <Link to="/" className={styles.loginLink}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;