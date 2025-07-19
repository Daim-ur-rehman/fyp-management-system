import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUserGraduate, FaProjectDiagram, FaClipboardCheck, FaCalendar, FaFileAlt, FaComments, FaBell, FaQuestionCircle, FaSearch, FaPlus, FaChevronLeft, FaChevronRight, FaVideo, FaEdit, FaEllipsisV } from 'react-icons/fa';

import '../../styles/main.css';
import '../../styles/dashboard.css';

const todaysMeetings = [
  {
    time: '10:00 AM',
    duration: '1 hour',
    title: "Weekly Progress Review",
    student: 'John Smith',
    project: 'AI-Powered Analytics',
    description: "Review of last week's progress and discussion of next steps."
  },
  {
    time: '2:00 PM',
    duration: '45 mins',
    title: "Project Discussion",
    student: 'Emma Johnson',
    project: 'Blockchain Security',
    description: "Discussion of recent code updates and architecture decisions."
  }
];

const upcomingMeetings = [
  {
    day: '16',
    month: 'Mar',
    title: 'Code Review Session',
    student: 'Michael Brown',
    time: '11:00 AM'
  },
  {
    day: '18',
    month: 'Mar',
    title: 'Project Milestone Review',
    student: 'John Smith',
    time: '3:00 PM'
  }
];

function Meetings() {
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
          <li><Link to="/supervisor/projects"><FaProjectDiagram /> Projects</Link></li>
          <li><Link to="/supervisor/reviews"><FaClipboardCheck /> Reviews</Link></li>
          <li><Link to="/supervisor/meetings" className="active"><FaCalendar /> Meetings</Link></li>
          <li><Link to="/supervisor/documents"><FaFileAlt /> Documents</Link></li>
          <li><Link to="/supervisor/messages"><FaComments /> Messages</Link></li>
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
            <input type="text" placeholder="Search meetings..." />
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
            <h1>Meetings</h1>
            <div className="header-actions">
              <button className="btn btn-primary">
                <FaPlus /> Schedule Meeting
              </button>
            </div>
          </div>
          <div className="meetings-container">
            <div className="meetings-sidebar">
              <div className="calendar-widget">
                <div className="calendar-header">
                  <button className="btn btn-icon"><FaChevronLeft /></button>
                  <h3>March 2024</h3>
                  <button className="btn btn-icon"><FaChevronRight /></button>
                </div>
                <div className="calendar-grid">
                  {/* Calendar days will be dynamically generated */}
                </div>
              </div>
              <div className="meeting-filters">
                <h3>Filters</h3>
                <div className="filter-group">
                  <label>Status</label>
                  <select>
                    <option value="all">All Meetings</option>
                    <option value="upcoming">Upcoming</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
                <div className="filter-group">
                  <label>Student</label>
                  <select>
                    <option value="all">All Students</option>
                    <option value="john">John Smith</option>
                    <option value="emma">Emma Johnson</option>
                    <option value="michael">Michael Brown</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="meetings-content">
              <div className="meetings-timeline">
                <div className="timeline-header">
                  <h2>Today's Meetings</h2>
                  <span className="date">March 15, 2024</span>
                </div>
                {todaysMeetings.map((meeting, idx) => (
                  <div className="meeting-item" key={idx}>
                    <div className="meeting-time">
                      <span className="time">{meeting.time}</span>
                      <span className="duration">{meeting.duration}</span>
                    </div>
                    <div className="meeting-details">
                      <h3>{meeting.title}</h3>
                      <div className="meeting-meta">
                        <span className="student"><FaUserGraduate /> {meeting.student}</span>
                        <span className="project"><FaProjectDiagram /> {meeting.project}</span>
                      </div>
                      <p className="meeting-description">{meeting.description}</p>
                    </div>
                    <div className="meeting-actions">
                      <button className="btn btn-primary btn-sm"><FaVideo /> Join</button>
                      <button className="btn btn-secondary btn-sm"><FaEdit /> Reschedule</button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="upcoming-meetings">
                <h2>Upcoming Meetings</h2>
                <div className="meeting-list">
                  {upcomingMeetings.map((meeting, idx) => (
                    <div className="meeting-item" key={idx}>
                      <div className="meeting-date">
                        <span className="day">{meeting.day}</span>
                        <span className="month">{meeting.month}</span>
                      </div>
                      <div className="meeting-details">
                        <h3>{meeting.title}</h3>
                        <div className="meeting-meta">
                          <span className="student">{meeting.student}</span>
                          <span className="time">{meeting.time}</span>
                        </div>
                      </div>
                      <button className="btn btn-icon"><FaEllipsisV /></button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Meetings; 