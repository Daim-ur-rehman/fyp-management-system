import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { FaLock, FaEye, FaEyeSlash, FaCheck, FaTimes, FaSpinner } from 'react-icons/fa';

const requirements = {
  length: /.{8,}/,
  uppercase: /[A-Z]/,
  lowercase: /[a-z]/,
  number: /[0-9]/,
  special: /[@$!%*?&]/
};

function ResetPassword() {
  const [searchParams] = useSearchParams();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const token = searchParams.get('token') || '';

  const handleSubmit = e => {
    e.preventDefault();
    if (!isValid() || password !== confirmPassword) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 2000);
  };

  const isValid = () => Object.values(requirements).every(regex => regex.test(password));

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <img src="/assets/logo.svg" alt="Logo" className="auth-logo" />
            <h1>Set New Password</h1>
            <p>Please create a strong password for your account.</p>
          </div>
          {!success ? (
            <form className="auth-form" onSubmit={handleSubmit}>
              <input type="hidden" name="token" value={token} />
              <div className="form-group">
                <label className="form-label" htmlFor="password">New Password</label>
                <div className="input-group">
                  <FaLock />
                  <input type={showPassword ? 'text' : 'password'} id="password" name="password" className="form-control" placeholder="Enter new password" required value={password} onChange={e => setPassword(e.target.value)} pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$" />
                  <button type="button" className="password-toggle" onClick={() => setShowPassword(s => !s)}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                <div className="password-requirements">
                  <p>Password must contain:</p>
                  <ul>
                    <li id="length" className={requirements.length.test(password) ? 'valid' : ''}><span>{requirements.length.test(password) ? <FaCheck /> : <FaTimes />}</span> At least 8 characters</li>
                    <li id="uppercase" className={requirements.uppercase.test(password) ? 'valid' : ''}><span>{requirements.uppercase.test(password) ? <FaCheck /> : <FaTimes />}</span> One uppercase letter</li>
                    <li id="lowercase" className={requirements.lowercase.test(password) ? 'valid' : ''}><span>{requirements.lowercase.test(password) ? <FaCheck /> : <FaTimes />}</span> One lowercase letter</li>
                    <li id="number" className={requirements.number.test(password) ? 'valid' : ''}><span>{requirements.number.test(password) ? <FaCheck /> : <FaTimes />}</span> One number</li>
                    <li id="special" className={requirements.special.test(password) ? 'valid' : ''}><span>{requirements.special.test(password) ? <FaCheck /> : <FaTimes />}</span> One special character</li>
                  </ul>
                </div>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="confirm_password">Confirm New Password</label>
                <div className="input-group">
                  <FaLock />
                  <input type={showConfirmPassword ? 'text' : 'password'} id="confirm_password" name="confirm_password" className="form-control" placeholder="Confirm new password" required value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                  <button type="button" className="password-toggle" onClick={() => setShowConfirmPassword(s => !s)}>
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
              <button type="submit" className="btn btn-primary btn-block" disabled={loading || !isValid() || password !== confirmPassword}>
                {loading ? <><FaSpinner className="fa-spin" /> Resetting Password...</> : 'Reset Password'}
              </button>
              <div className="auth-footer">
                <p>Remember your password? <Link to="/login">Back to Login</Link></p>
              </div>
            </form>
          ) : (
            <div className="success-message">
              <FaCheck style={{ color: 'var(--success-color)', fontSize: '3rem', marginBottom: '1rem' }} />
              <h2>Password Reset Successful</h2>
              <p>Your password has been updated. You can now log in with your new password.</p>
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

export default ResetPassword; 