import React from 'react';
import { FaChartLine, FaUsers, FaProjectDiagram, FaStar, FaFileAlt, FaCog, FaBell, FaQuestionCircle, FaSearch, FaPlus, FaCheck, FaClock, FaCheckCircle, FaFileExport } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function AdminDashboard() {
  return (
    <div className="app-container">
      <nav className="sidebar">
        <div className="sidebar-header">
          <img src="/assets/logo.svg" alt="Logo" className="logo" />
          <h1>FYP Records</h1>
        </div>
        <ul className="nav-links">
          <li><Link to="/admin/dashboard" className="active"><FaChartLine /> Dashboard</Link></li>
          <li><Link to="/admin/users"><FaUsers /> Users</Link></li>
          <li><Link to="/admin/projects"><FaProjectDiagram /> Projects</Link></li>
          <li><Link to="/admin/evaluations"><FaStar /> Evaluations</Link></li>
          <li><Link to="/admin/reports"><FaFileAlt /> Reports</Link></li>
          <li><Link to="/admin/settings"><FaCog /> Settings</Link></li>
        </ul>
        <div className="sidebar-footer">
          <Link to="/profile" className="profile-link">
            <div className="profile-info">
              <img src="/assets/avatar-placeholder.png" alt="Admin" className="avatar" />
              <div className="profile-text">
                <span className="name">Admin User</span>
                <span className="role">Administrator</span>
              </div>
            </div>
          </Link>
        </div>
      </nav>
      <main className="main-content">
        <header className="top-bar">
          <div className="search-bar">
            <FaSearch />
            <input type="text" placeholder="Search..." />
          </div>
          <div className="top-bar-actions">
            <button className="notification-btn">
              <FaBell />
              <span className="notification-badge">5</span>
            </button>
            <button className="help-btn">
              <FaQuestionCircle />
            </button>
          </div>
        </header>
        <div className="content-area">
          <div className="dashboard-header">
            <h1>Admin Dashboard</h1>
            <div className="date-filter">
              <select id="timeRange">
                <option value="today">Today</option>
                <option value="week">This Week</option>
                <option value="month" selected>This Month</option>
                <option value="year">This Year</option>
              </select>
            </div>
          </div>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon" style={{ backgroundColor: 'rgba(0, 200, 83, 0.1)' }}><FaUsers style={{ color: 'var(--primary-color)' }} /></div>
              <div className="stat-info">
                <h3>Total Users</h3>
                <p className="stat-number">248</p>
                <span className="stat-change positive">+12% <FaArrowUp /></span>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon" style={{ backgroundColor: 'rgba(33, 150, 243, 0.1)' }}><FaProjectDiagram style={{ color: '#2196F3' }} /></div>
              <div className="stat-info">
                <h3>Active Projects</h3>
                <p className="stat-number">45</p>
                <span className="stat-change positive">+5% <FaArrowUp /></span>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon" style={{ backgroundColor: 'rgba(255, 152, 0, 0.1)' }}><FaClock style={{ color: '#FF9800' }} /></div>
              <div className="stat-info">
                <h3>Pending Reviews</h3>
                <p className="stat-number">12</p>
                <span className="stat-change negative">-3% <FaArrowDown /></span>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon" style={{ backgroundColor: 'rgba(233, 30, 99, 0.1)' }}><FaCheckCircle style={{ color: '#E91E63' }} /></div>
              <div className="stat-info">
                <h3>Completed</h3>
                <p className="stat-number">156</p>
                <span className="stat-change positive">+8% <FaArrowUp /></span>
              </div>
            </div>
          </div>
          {/* Additional dashboard content (charts, activities, etc.) can be added here */}
        </div>
      </main>
    </div>
  );
}

// Helper icons
function FaArrowUp() { return <span style={{ display: 'inline-block', transform: 'translateY(2px)' }}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 15 12 9 18 15"></polyline></svg></span>; }
function FaArrowDown() { return <span style={{ display: 'inline-block', transform: 'translateY(2px)' }}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></span>; }

export default AdminDashboard; 