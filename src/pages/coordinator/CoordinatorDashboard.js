import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaChalkboardTeacher, FaUserGraduate, FaProjectDiagram, FaClipboardCheck, FaCalendar, FaFileAlt, FaComments, FaBell, FaQuestionCircle, FaSearch, FaSignOutAlt } from 'react-icons/fa';
import { useAuth } from '../../AuthContext';

function CoordinatorDashboard() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="app-container">
      <nav className="sidebar">
        <div className="sidebar-header">
          <img src="/assets/logo.svg" alt="Logo" className="logo" />
          <h1>FYP Records</h1>
        </div>
        <ul className="nav-links">
          <li><Link to="/coordinator/dashboard" className="active"><FaHome /> Dashboard</Link></li>
          <li><Link to="/coordinator/supervisors"><FaChalkboardTeacher /> Supervisors</Link></li>
          <li><Link to="/coordinator/students"><FaUserGraduate /> Students</Link></li>
          <li><Link to="/coordinator/projects"><FaProjectDiagram /> Projects</Link></li>
          <li><Link to="/coordinator/reviews"><FaClipboardCheck /> Reviews</Link></li>
          <li><Link to="/coordinator/meetings"><FaCalendar /> Meetings</Link></li>
          <li><Link to="/coordinator/documents"><FaFileAlt /> Documents</Link></li>
          <li><Link to="/coordinator/messages"><FaComments /> Messages</Link></li>
          <li><button className="nav-link-logout" onClick={handleLogout}><FaSignOutAlt style={{marginRight: '1rem'}} /> Logout</button></li>
        </ul>
        <div className="sidebar-footer">
          <Link to="/profile" className="profile-link">
            <div className="profile-info">
              <img src="/assets/avatar-placeholder.png" alt="Coordinator" className="avatar" />
              <div className="profile-text">
                <span className="name">Dr. James Anderson</span>
                <span className="role">FYP Coordinator</span>
              </div>
            </div>
          </Link>
        </div>
      </nav>
      <main className="main-content">
        <header className="top-bar">
          <div className="search-bar">
            <FaSearch />
            <input type="text" placeholder="Search supervisors, students, or projects..." />
          </div>
          <div className="top-bar-actions">
            <button className="notification-btn">
              <FaBell />
              <span className="notification-badge">6</span>
            </button>
            <button className="help-btn">
              <FaQuestionCircle />
            </button>
          </div>
        </header>
        <div className="content-area">
          <div className="dashboard-header">
            <h1>Welcome back, Dr. Anderson!</h1>
            <div className="date-filter">
              <select id="timeRange">
                <option value="today">Today</option>
                <option value="week">This Week</option>
                <option value="month" selected>This Month</option>
                <option value="year">This Year</option>
              </select>
            </div>
          </div>
          {/* Additional coordinator dashboard content (stats, submissions, deadlines, etc.) can be added here */}
        </div>
      </main>
    </div>
  );
}

export default CoordinatorDashboard; 