import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaUserGraduate, FaProjectDiagram, FaClipboardCheck, FaCalendar, FaFileAlt, FaComments, FaBell, FaQuestionCircle, FaSearch, FaSignOutAlt, FaClock, FaCode, FaStar } from 'react-icons/fa';
import { useAuth } from '../../AuthContext';

function SupervisorDashboard() {
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
          <li><Link to="/supervisor/dashboard" className="active"><FaHome /> Dashboard</Link></li>
          <li><Link to="/supervisor/students"><FaUserGraduate /> My Students</Link></li>
          <li><span className="nav-link-disabled"><FaProjectDiagram /> Projects</span></li>
          <li><Link to="/supervisor/reviews"><FaClipboardCheck /> Reviews</Link></li>
          <li><Link to="/supervisor/meetings"><FaCalendar /> Meetings</Link></li>
          <li><span className="nav-link-disabled"><FaFileAlt /> Documents</span></li>
          <li><span className="nav-link-disabled"><FaComments /> Messages</span></li>
          <li><button className="nav-link-logout" onClick={handleLogout}><FaSignOutAlt style={{marginRight: '1rem'}} /> Logout</button></li>
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
            <input type="text" placeholder="Search students or projects..." />
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
          <div className="dashboard-header">
            <h1>Welcome back, Dr. Wilson!</h1>
            <div className="date-filter">
              <select id="timeRange">
                <option value="today">Today</option>
                <option value="week">This Week</option>
                <option value="month" selected>This Month</option>
                <option value="year">This Year</option>
              </select>
            </div>
          </div>
          {/* Additional supervisor dashboard content (stats, progress, meetings, etc.) can be added here */}
          <div className="dashboard-stats-grid">
            <div className="stat-card">
              <div className="stat-icon" style={{ backgroundColor: 'rgba(0, 200, 83, 0.1)' }}><FaUserGraduate style={{ color: 'var(--primary-color)' }} /></div>
              <div className="stat-info">
                <h3>Active Students</h3>
                <p className="stat-number">2</p>
                <span className="stat-change positive">+1 this month</span>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon" style={{ backgroundColor: 'rgba(33, 150, 243, 0.1)' }}><FaProjectDiagram style={{ color: '#2196F3' }} /></div>
              <div className="stat-info">
                <h3>Active Projects</h3>
                <p className="stat-number">3</p>
                <span className="stat-change positive">+1 new</span>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon" style={{ backgroundColor: 'rgba(255, 152, 0, 0.1)' }}><FaClipboardCheck style={{ color: '#FF9800' }} /></div>
              <div className="stat-info">
                <h3>Pending Reviews</h3>
                <p className="stat-number">1</p>
                <span className="stat-change negative">-1 overdue</span>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon" style={{ backgroundColor: 'rgba(233, 30, 99, 0.1)' }}><FaCalendar style={{ color: '#E91E63' }} /></div>
              <div className="stat-info">
                <h3>Upcoming Meetings</h3>
                <p className="stat-number">2</p>
                <span className="stat-change">This week</span>
              </div>
            </div>
          </div>

          <div className="dashboard-section">
            <h2>Student Progress</h2>
            <div className="dashboard-students-list">
              {/* Example: show top 2 students by progress */}
              {[{
                name: 'John Smith', id: '2023001', progress: 75, status: 'Active', statusClass: 'success', avatar: '/assets/avatar-placeholder.png', project: 'AI-Powered Analytics'
              }, {
                name: 'Emma Johnson', id: '2023002', progress: 60, status: 'Active', statusClass: 'success', avatar: '/assets/avatar-placeholder.png', project: 'Blockchain Security'
              }].map((student, idx) => (
                <div className="dashboard-student-card" key={student.id}>
                  <img src={student.avatar} alt="Student" className="student-avatar" />
                  <div className="student-info">
                    <h3>{student.name}</h3>
                    <span className="student-id">ID: {student.id}</span>
                    <span className={`student-status ${student.statusClass}`}>{student.status}</span>
                  </div>
                  <div className="student-progress">
                    <span>Progress: {student.progress}%</span>
                    <div className="progress-bar"><div className={`progress-fill${student.statusClass === 'warning' ? ' warning' : ''}`} style={{ width: `${student.progress}%` }}></div></div>
                  </div>
                  <div className="student-project">
                    <span><FaProjectDiagram /> {student.project}</span>
                  </div>
                </div>
              ))}
              <Link to="/supervisor/students" className="dashboard-link">View All Students</Link>
            </div>
          </div>

          <div className="dashboard-section">
            <h2>Recent Meetings</h2>
            <div className="dashboard-meetings-list">
              {/* Example: show top 2 meetings */}
              {[{
                time: '10:00 AM', duration: '1 hour', title: "Weekly Progress Review", student: 'John Smith', project: 'AI-Powered Analytics', description: "Review of last week's progress and discussion of next steps."
              }, {
                time: '2:00 PM', duration: '45 mins', title: "Project Discussion", student: 'Emma Johnson', project: 'Blockchain Security', description: "Discussion of recent code updates and architecture decisions."
              }].map((meeting, idx) => (
                <div className="dashboard-meeting-card" key={idx}>
                  <div className="meeting-time">{meeting.time} ({meeting.duration})</div>
                  <div className="meeting-details">
                    <h3>{meeting.title}</h3>
                    <div className="meeting-meta">
                      <span className="student"><FaUserGraduate /> {meeting.student}</span>
                      <span className="project"><FaProjectDiagram /> {meeting.project}</span>
                    </div>
                    <p className="meeting-description">{meeting.description}</p>
                  </div>
                </div>
              ))}
              <Link to="/supervisor/meetings" className="dashboard-link">View All Meetings</Link>
            </div>
          </div>

          <div className="dashboard-section">
            <h2>Review Status</h2>
            <div className="dashboard-reviews-list">
              {/* Example: show top 2 reviews */}
              {[{
                student: 'John Smith', project: 'AI-Powered Analytics', status: 'pending', avatar: '/assets/avatar-placeholder.png',
                details: [
                  { icon: <FaFileAlt />, text: 'Progress Report v2' },
                  { icon: <FaCalendar />, text: 'Submitted: 2 days ago' },
                  { icon: <FaClock />, text: 'Due: Today' },
                ]
              }, {
                student: 'Emma Johnson', project: 'Blockchain Security', status: 'completed', avatar: '/assets/avatar-placeholder.png',
                details: [
                  { icon: <FaCode />, text: 'Source Code Update' },
                  { icon: <FaCalendar />, text: 'Reviewed: Yesterday' },
                  { icon: <FaStar />, text: 'Score: 85/100' },
                ]
              }].map((review, idx) => (
                <div className="dashboard-review-card" key={idx}>
                  <div className="review-header">
                    <img src={review.avatar} alt="Student" className="student-avatar" />
                    <div>
                      <h3>{review.student}</h3>
                      <span className="project-title">{review.project}</span>
                    </div>
                    <div className={`review-status ${review.status}`}>{review.status.charAt(0).toUpperCase() + review.status.slice(1)}</div>
                  </div>
                  <div className="review-details">
                    {review.details.map((d, i) => (
                      <div className="detail-item" key={i}>{d.icon}<span>{d.text}</span></div>
                    ))}
                  </div>
                </div>
              ))}
              <Link to="/supervisor/reviews" className="dashboard-link">View All Reviews</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SupervisorDashboard; 