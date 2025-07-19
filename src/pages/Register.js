import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaUser, FaUserTag, FaIdCard } from 'react-icons/fa';

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [role, setRole] = useState('');

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <img src="/assets/logo.svg" alt="Logo" className="auth-logo" />
            <h1>Create Account</h1>
            <p>Join FYP Records Management System</p>
          </div>
          <form className="auth-form" action="/register" method="POST">
            <div className="form-group">
              <label className="form-label" htmlFor="fullname">Full Name</label>
              <div className="input-group">
                <FaUser />
                <input type="text" id="fullname" name="fullname" className="form-control" placeholder="Enter your full name" required />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">Email Address</label>
              <div className="input-group">
                <FaEnvelope />
                <input type="email" id="email" name="email" className="form-control" placeholder="Enter your email" required />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="role">Role</label>
              <div className="input-group">
                <FaUserTag />
                <select id="role" name="role" className="form-control" required value={role} onChange={e => setRole(e.target.value)}>
                  <option value="">Select your role</option>
                  <option value="student">Student</option>
                  <option value="supervisor">Supervisor</option>
                  <option value="examiner">External Examiner</option>
                </select>
              </div>
            </div>
            {role === 'student' && (
              <div className="form-group student-fields">
                <label className="form-label" htmlFor="student_id">Student ID</label>
                <div className="input-group">
                  <FaIdCard />
                  <input type="text" id="student_id" name="student_id" className="form-control" placeholder="Enter your student ID" required />
                </div>
              </div>
            )}
            <div className="form-group">
              <label className="form-label" htmlFor="password">Password</label>
              <div className="input-group">
                <FaLock />
                <input type={showPassword ? 'text' : 'password'} id="password" name="password" className="form-control" placeholder="Create a password" required />
                <button type="button" className="password-toggle" onClick={() => setShowPassword(s => !s)}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="confirm_password">Confirm Password</label>
              <div className="input-group">
                <FaLock />
                <input type={showConfirmPassword ? 'text' : 'password'} id="confirm_password" name="confirm_password" className="form-control" placeholder="Confirm your password" required />
                <button type="button" className="password-toggle" onClick={() => setShowConfirmPassword(s => !s)}>
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            <div className="form-options">
              <label className="checkbox-container">
                <input type="checkbox" name="terms" required />
                <span className="checkmark"></span>
                I agree to the <a href="#" className="terms-link">Terms & Conditions</a>
              </label>
            </div>
            <button type="submit" className="btn btn-primary btn-block">Create Account</button>
            <div className="auth-footer">
              <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register; 