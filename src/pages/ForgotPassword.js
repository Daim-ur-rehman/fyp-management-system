import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaCheckCircle, FaSpinner } from 'react-icons/fa';

function ForgotPassword() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 2000);
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <img src="/assets/logo.svg" alt="Logo" className="auth-logo" />
            <h1>Reset Password</h1>
            <p>Enter your email address to receive password reset instructions.</p>
          </div>
          {!sent ? (
            <form className="auth-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="email">Email Address</label>
                <div className="input-group">
                  <FaEnvelope />
                  <input type="email" id="email" name="email" className="form-control" placeholder="Enter your email" required />
                </div>
              </div>
              <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
                {loading ? <><FaSpinner className="fa-spin" /> Sending...</> : 'Send Reset Link'}
              </button>
              <div className="auth-footer">
                <p>Remember your password? <Link to="/login">Back to Login</Link></p>
              </div>
            </form>
          ) : (
            <div className="success-message">
              <FaCheckCircle style={{ color: 'var(--success-color)', fontSize: '3rem', marginBottom: '1rem' }} />
              <h2>Check Your Email</h2>
              <p>We've sent password reset instructions to your email address.</p>
              <button type="button" className="btn btn-primary btn-block" onClick={() => window.location.href='/login'} style={{ marginTop: '1rem' }}>
                Back to Login
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword; 