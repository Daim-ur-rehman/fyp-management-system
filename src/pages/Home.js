import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaChartLine, FaProjectDiagram, FaComments, FaFileAlt, FaStar, FaCopy, FaRobot, FaCog, FaBell, FaQuestionCircle, FaSearch } from 'react-icons/fa';

function Home() {
  return (
    <div className="app-container">
      <nav className="sidebar">
        <div className="sidebar-header">
          <img src="/assets/logo.svg" alt="Logo" className="logo" />
          <h1>FYP Records</h1>
        </div>
        <ul className="nav-links">
          <li><Link to="/" className="active"><FaHome /> Home</Link></li>
          <li><Link to="/dashboard"><FaChartLine /> Dashboard</Link></li>
          <li><Link to="/projects"><FaProjectDiagram /> Projects</Link></li>
          <li><Link to="/communication"><FaComments /> Communication</Link></li>
          <li><Link to="/documents"><FaFileAlt /> Documents</Link></li>
          <li><Link to="/evaluation"><FaStar /> Evaluation</Link></li>
          <li><Link to="/similarity"><FaCopy /> Similarity Check</Link></li>
          <li><Link to="/ai-tools"><FaRobot /> AI Tools</Link></li>
          <li><Link to="/settings"><FaCog /> Settings</Link></li>
        </ul>
        <div className="sidebar-footer">
          <Link to="/profile" className="profile-link">
            <div className="profile-info">
              <img src="/assets/avatar-placeholder.png" alt="Profile" className="avatar" />
              <div className="profile-text">
                <span className="name">John Doe</span>
                <span className="role">Student</span>
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
              <span className="notification-badge">3</span>
            </button>
            <button className="help-btn">
              <FaQuestionCircle />
            </button>
          </div>
        </header>
        <div className="content-area">
          <div className="welcome-section">
            <h1>Welcome to FYP Records Management System</h1>
            <p>Manage your final year projects efficiently and effectively.</p>
            <div className="quick-stats">
              <div className="stat-card">
                <h3>24</h3>
                <p>Total Projects</p>
              </div>
              <div className="stat-card">
                <h3>12</h3>
                <p>Active Projects</p>
              </div>
              <div className="stat-card">
                <h3>8</h3>
                <p>Completed</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home; 