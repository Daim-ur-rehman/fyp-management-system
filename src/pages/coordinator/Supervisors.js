import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaChalkboardTeacher, FaUserGraduate, FaProjectDiagram, FaClipboardCheck, FaCalendar, FaFileAlt, FaComments, FaBell, FaQuestionCircle, FaSearch, FaPlus, FaEye, FaComment, FaClock, FaSignOutAlt } from 'react-icons/fa';

import '../../styles/main.css';
import '../../styles/dashboard.css';
import { useAuth } from '../../AuthContext';

const supervisors = [
  {
    name: 'Dr. Sarah Wilson',
    id: 'SUP001',
    status: 'Active',
    statusClass: 'success',
    students: 8,
    projects: 6,
    lastUpdate: '2 days ago',
    workload: 75,
    avatar: '/assets/avatar-placeholder.png',
  },
  {
    name: 'Dr. Michael Chen',
    id: 'SUP002',
    status: 'Active',
    statusClass: 'success',
    students: 6,
    projects: 5,
    lastUpdate: '1 day ago',
    workload: 60,
    avatar: '/assets/avatar-placeholder.png',
  },
  {
    name: 'Dr. Emily Brown',
    id: 'SUP003',
    status: 'At Capacity',
    statusClass: 'warning',
    students: 10,
    projects: 8,
    lastUpdate: '3 days ago',
    workload: 90,
    avatar: '/assets/avatar-placeholder.png',
  },
];

function Supervisors() {
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
          <h1>FYP RECORDS</h1>
        </div>
        <ul className="nav-links">
          <li><Link to="/coordinator/dashboard"><FaHome /> Dashboard</Link></li>
          <li><Link to="/coordinator/supervisors" className="active"><FaChalkboardTeacher /> Supervisors</Link></li>
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
                <span className="name">Ayesha Amjad</span>
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
            <input type="text" placeholder="Search supervisors..." />
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
          <div className="page-header">
            <h1>Supervisors</h1>
            <div className="header-actions">
              <button className="btn btn-primary">
                <FaPlus /> Add Supervisor
              </button>
            </div>
          </div>
          <div className="filters-bar">
            <div className="filter-group">
              <label>Status</label>
              <select>
                <option value="all">All Supervisors</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
            <div className="filter-group">
              <label>Sort By</label>
              <select>
                <option value="name">Name</option>
                <option value="students">Number of Students</option>
                <option value="workload">Workload</option>
              </select>
            </div>
          </div>
          <div className="supervisors-grid">
            {supervisors.map((sup, idx) => (
              <div className="supervisor-card" key={sup.id}>
                <div className="supervisor-header">
                  <img src={sup.avatar} alt="Supervisor" className="supervisor-avatar" />
                  <div className="supervisor-info">
                    <h3>{sup.name}</h3>
                    <span className="supervisor-id">ID: {sup.id}</span>
                  </div>
                  <div className={`supervisor-status ${sup.statusClass}`}>{sup.status}</div>
                </div>
                <div className="supervisor-details">
                  <div className="detail-item">
                    <FaUserGraduate />
                    <span>{sup.students} Students</span>
                  </div>
                  <div className="detail-item">
                    <FaProjectDiagram />
                    <span>{sup.projects} Active Projects</span>
                  </div>
                  <div className="detail-item">
                    <FaClock />
                    <span>Last Update: {sup.lastUpdate}</span>
                  </div>
                </div>
                <div className="workload-section">
                  <div className="workload-header">
                    <span>Current Workload</span>
                    <span>{sup.workload}%</span>
                  </div>
                  <div className="progress-bar">
                    <div className={`progress-fill${sup.statusClass === 'warning' ? ' warning' : ''}`} style={{ width: `${sup.workload}%` }}></div>
                  </div>
                </div>
                <div className="supervisor-actions">
                  <button className="btn btn-primary btn-sm">
                    <FaEye /> View Details
                  </button>
                  <button className="btn btn-secondary btn-sm">
                    <FaComment /> Message
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Supervisors; 