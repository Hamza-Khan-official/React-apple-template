import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Sign_UP_.module.css';
import image from '../../../../public/login_apple_pic.png';

const Sign_UP_ = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formCard}>
        {/* Apple Logo Image */}
        <div className={styles.logoContainer}>
          <img src={image} alt="Apple Logo" className={styles.appleLogo} />
        </div>

        {/* Title */}
        <h1 className={styles.title}>Create Apple Account</h1>

        {/* Form Fields */}
        <div className={styles.form}>
          <div className={styles.nameRow}>
            <input
              type="text"
              placeholder="First Name"
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Last Name"
              className={styles.input}
            />
          </div>

          <input
            type="email"
            placeholder="Email or Phone Number"
            className={styles.input}
          />

          <input
            type="password"
            placeholder="Password"
            className={styles.input}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className={styles.input}
          />

          {/* Privacy Notice */}
          <div className={styles.privacyNotice}>
            <div className={styles.privacyIcon}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L4 6v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6l-8-4zm0 18c-3.86-.94-7-5.15-7-10V7.3l7-3.11 7 3.11V10c0 4.85-3.14 9.06-7 10z"/>
                <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
              </svg>
            </div>
            <p className={styles.privacyText}>
              Your Apple Account information is used to allow you to sign in securely and access your data. 
              Apple records certain data for security, support, and reporting purposes.
              <a href="#" className={styles.privacyLink}> See how your data is managed...</a>
            </p>
          </div>

          {/* Buttons */}
          <button className={styles.continueBtn}>Continue</button>
          <button className={styles.iphoneBtn}>Sign up With iPhone</button>

          {/* Sign In Link */}
          <p className={styles.signinText}>
            Already have an account? <Link to="/signin" className={styles.signinLink}>Sign in</Link>
          </p>
        </div>

        {/* Home Link */}
        <Link to="/React-apple-template/" className={styles.homeLink}>
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Sign_UP_;