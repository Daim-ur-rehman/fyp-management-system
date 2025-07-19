import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaProjectDiagram, FaTasks, FaCalendar, FaFileAlt, FaComments, FaBell, FaQuestionCircle, FaSearch } from 'react-icons/fa';

function StudentDashboard() {
  return (
    <div className="app-container">
      <nav className="sidebar">
        <div className="sidebar-header">
          <img src="/assets/logo.svg" alt="Logo" className="logo" />
          <h1>FYP Records</h1>
        </div>
        <ul className="nav-links">
          <li><Link to="/student/dashboard" className="active"><FaHome /> Dashboard</Link></li>
          <li><Link to="/student/project"><FaProjectDiagram /> My Project</Link></li>
          <li><Link to="/student/tasks"><FaTasks /> Tasks</Link></li>
          <li><Link to="/student/meetings"><FaCalendar /> Meetings</Link></li>
          <li><Link to="/student/documents"><FaFileAlt /> Documents</Link></li>
          <li><Link to="/student/messages"><FaComments /> Messages</Link></li>
        </ul>
        <div className="sidebar-footer">
          <Link to="/profile" className="profile-link">
            <div className="profile-info">
              <img src="/assets/avatar-placeholder.png" alt="Student" className="avatar" />
              <div className="profile-text">
                <span className="name">John Smith</span>
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
              <span className="notification-badge">2</span>
            </button>
            <button className="help-btn">
              <FaQuestionCircle />
            </button>
          </div>
        </header>
        <div className="content-area">
          <div className="dashboard-header">
            <h1>Welcome back, John!</h1>
            <div className="project-status">
              <span className="status-badge success">On Track</span>
            </div>
          </div>
          {/* Additional student dashboard content (progress, tasks, meetings, etc.) can be added here */}
        </div>
      </main>
    </div>
  );
}

export default StudentDashboard; 