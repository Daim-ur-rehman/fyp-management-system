import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUserGraduate, FaProjectDiagram, FaClipboardCheck, FaCalendar, FaFileAlt, FaComments, FaBell, FaQuestionCircle, FaSearch, FaPlus, FaCheck, FaDownload, FaEye, FaEdit, FaStar, FaExclamationCircle, FaFilePdf, FaCode, FaClock } from 'react-icons/fa';

import '../../styles/main.css';
import '../../styles/dashboard.css';

const reviews = [
  {
    student: 'John Smith',
    project: 'AI-Powered Analytics',
    status: 'pending',
    avatar: '/assets/avatar-placeholder.png',
    details: [
      { icon: <FaFileAlt />, text: 'Progress Report v2' },
      { icon: <FaCalendar />, text: 'Submitted: 2 days ago' },
      { icon: <FaClock />, text: 'Due: Today' },
    ],
    actions: [
      { icon: <FaCheck />, text: 'Review', type: 'primary' },
      { icon: <FaDownload />, text: 'Download', type: 'secondary' },
    ],
  },
  {
    student: 'Emma Johnson',
    project: 'Blockchain Security',
    status: 'completed',
    avatar: '/assets/avatar-placeholder.png',
    details: [
      { icon: <FaCode />, text: 'Source Code Update' },
      { icon: <FaCalendar />, text: 'Reviewed: Yesterday' },
      { icon: <FaStar />, text: 'Score: 85/100' },
    ],
    actions: [
      { icon: <FaEye />, text: 'View Details', type: 'primary' },
      { icon: <FaEdit />, text: 'Edit Review', type: 'secondary' },
    ],
  },
  {
    student: 'Michael Brown',
    project: 'IoT Smart Home',
    status: 'overdue',
    avatar: '/assets/avatar-placeholder.png',
    details: [
      { icon: <FaFilePdf />, text: 'Project Documentation' },
      { icon: <FaCalendar />, text: 'Submitted: 1 week ago' },
      { icon: <FaExclamationCircle />, text: '3 days overdue' },
    ],
    actions: [
      { icon: <FaCheck />, text: 'Review Now', type: 'primary' },
      { icon: <FaDownload />, text: 'Download', type: 'secondary' },
    ],
  },
];

function Reviews() {
  return (
    <div className="app-container">
      <nav className="sidebar">
        <div className="sidebar-header">
          <img src="/assets/logo.svg" alt="Logo" className="logo" />
          <h1>FYP Records</h1>
        </div>
        <ul className="nav-links">
          <li><Link to="/supervisor/dashboard"><FaHome /> Dashboard</Link></li>
          <li><Link to="/supervisor/students"><FaUserGraduate /> My Students</Link></li>
          <li><span className="nav-link-disabled"><FaProjectDiagram /> Projects</span></li>
          <li><Link to="/supervisor/reviews" className="active"><FaClipboardCheck /> Reviews</Link></li>
          <li><Link to="/supervisor/meetings"><FaCalendar /> Meetings</Link></li>
          <li><span className="nav-link-disabled"><FaFileAlt /> Documents</span></li>
          <li><span className="nav-link-disabled"><FaComments /> Messages</span></li>
        </ul>
        <div className="sidebar-footer">
          <Link to="/profile" className="profile-link">
            <div className="profile-info">
              <img src="/assets/avatar-placeholder.png" alt="Supervisor" className="avatar" />
              <div className="profile-text">
                <span className="name">Dr. Sarah Wilson</span>
                <span className="role">Supervisor</span>
              </div>
            </div>
          </Link>
        </div>
      </nav>
      <main className="main-content">
        <header className="top-bar">
          <div className="search-bar">
            <FaSearch />
            <input type="text" placeholder="Search reviews..." />
          </div>
          <div className="top-bar-actions">
            <button className="notification-btn">
              <FaBell />
              <span className="notification-badge">4</span>
            </button>
            <button className="help-btn">
              <FaQuestionCircle />
            </button>
          </div>
        </header>
        <div className="content-area">
          <div className="page-header">
            <h1>Project Reviews</h1>
            <div className="header-actions">
              <button className="btn btn-primary">
                <FaPlus /> New Review
              </button>
            </div>
          </div>
          <div className="filters-bar">
            <div className="filter-group">
              <label>Status</label>
              <select>
                <option value="all">All Reviews</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            <div className="filter-group">
              <label>Sort By</label>
              <select>
                <option value="date">Date</option>
                <option value="student">Student</option>
                <option value="project">Project</option>
              </select>
            </div>
          </div>
          <div className="reviews-grid">
            {reviews.map((review, idx) => (
              <div className="review-card" key={idx}>
                <div className="review-header">
                  <div className="student-info">
                    <img src={review.avatar} alt="Student" className="student-avatar" />
                    <div>
                      <h3>{review.student}</h3>
                      <span className="project-title">{review.project}</span>
                    </div>
                  </div>
                  <div className={`review-status ${review.status}`}>{review.status.charAt(0).toUpperCase() + review.status.slice(1)}</div>
                </div>
                <div className="review-details">
                  {review.details.map((d, i) => (
                    <div className="detail-item" key={i}>
                      {d.icon}
                      <span>{d.text}</span>
                    </div>
                  ))}
                </div>
                <div className="review-actions">
                  {review.actions.map((a, i) => (
                    <button className={`btn btn-${a.type} btn-sm`} key={i}>
                      {a.icon} {a.text}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Reviews; 