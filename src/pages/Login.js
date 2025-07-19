import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = e => {
    e.preventDefault();
    if (email !== 'user@gmail.com' || password !== 'password') {
      setError('Invalid email or password.');
      return;
    }
    setError('');
    login(email, userType);
    if (userType === 'admin') navigate('/admin/dashboard');
    else if (userType === 'student') navigate('/student/dashboard');
    else if (userType === 'supervisor') navigate('/supervisor/dashboard');
    else if (userType === 'coordinator') navigate('/coordinator/dashboard');
  };

  return (
    <div className="auth-page" style={{
      minHeight: '100vh',
      background: 'url(/assets/cust.png) center center/cover no-repeat',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <img src="/assets/logo.svg" alt="Logo" className="auth-logo" />
            <h1>FYP Records</h1>
            <p>Please login to your account.</p>
          </div>
          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                <img src="/assets/email.svg" alt="Email" style={{width: 20, height: 20, marginRight: 8, verticalAlign: 'middle'}} />
                Email Address
              </label>
              <div className="input-group">
                <input type="email" id="email" name="email" className="form-control" placeholder="Enter your email" required value={email} onChange={e => setEmail(e.target.value)} />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="password">
                <img src="/assets/lock.svg" alt="Password" style={{width: 20, height: 20, marginRight: 8, verticalAlign: 'middle'}} />
                Password
              </label>
              <div className="input-group">
                <input type={showPassword ? 'text' : 'password'} id="password" name="password" className="form-control" placeholder="Enter your password" required value={password} onChange={e => setPassword(e.target.value)} />
                <button type="button" className="password-toggle" onClick={() => setShowPassword(s => !s)}>
                  <img src={showPassword ? "/assets/eye-slash.svg" : "/assets/eye.svg"} alt="Toggle" style={{width: 20, height: 20}} />
                </button>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="userType">Login as</label>
              <select id="userType" name="userType" className="form-control" value={userType} onChange={e => setUserType(e.target.value)}>
                <option value="student">Student</option>
                <option value="supervisor">Supervisor</option>
                <option value="coordinator">Coordinator</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            {error && <div style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>}
            <label className="checkbox-container">
              <input type="checkbox" name="remember" />
              <span className="checkmark"></span>
              Remember me
            </label>
            <Link to="/forgot-password" className="forgot-password">Forgot Password?</Link>
            <button type="submit" className="btn btn-primary btn-block">Login</button>
            <div className="auth-footer">
              <p>Don't have an account? <Link to="/register">Register</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login; 