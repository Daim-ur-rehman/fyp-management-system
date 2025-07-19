import React, { useState } from 'react';
import { FaHome, FaUserGraduate, FaProjectDiagram, FaClipboardCheck, FaCalendar, FaFileAlt, FaComments, FaBell, FaQuestionCircle, FaSearch, FaPlus, FaEye, FaComment, FaClock } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/main.css';
import '../../styles/dashboard.css';

const studentsData = [
  {
    name: 'Daim ur rehman',
    id: 'BSE213073',
    status: 'Active',
    statusClass: 'success',
    project: 'fyp project',
    due: 'Mar 15, 2024',
    lastUpdate: '2 days ago',
    progress: 75,
    avatar: '/assets/avatar-placeholder.png',
  },
  {
    name: 'Eman Sehgal',
    id: 'BSE213052',
    status: 'Active',
    statusClass: 'success',
    project: 'FYP project ',
    due: 'Mar 20, 2024',
    lastUpdate: '5 days ago',
    progress: 60,
    avatar: '/assets/avatar-placeholder.png',
  },
  {
    name: 'Omar malik',
    id: 'BSE 213049',
    status: 'At Risk',
    statusClass: 'warning',
    project: 'IoT Smart Home',
    due: 'Mar 10, 2024',
    lastUpdate: '1 week ago',
    progress: 45,
    avatar: '/assets/avatar-placeholder.png',
  },
];

const Students = () => {
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const filteredStudents = studentsData
    .filter(student => {
      if (statusFilter === 'all') return true;
      if (statusFilter === 'active') return student.status === 'Active';
      if (statusFilter === 'completed') return student.status === 'Completed';
      return true;
    })
    .filter(student =>
      student.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'progress') return b.progress - a.progress;
      if (sortBy === 'deadline') return new Date(a.due) - new Date(b.due);
      return 0;
    });

  return (
    <div className="app-container">
      <nav className="sidebar">
        <div className="sidebar-header">
          <img src="/assets/logo.svg" alt="Logo" className="logo" />
          <h1>FYP Records</h1>
        </div>
        <ul className="nav-links">
          <li><Link to="/supervisor/dashboard"><FaHome /> Dashboard</Link></li>
          <li><Link to="/supervisor/students" className="active"><FaUserGraduate /> My Students</Link></li>
          <li><Link to="/supervisor/projects"><FaProjectDiagram /> Projects</Link></li>
          <li><Link to="/supervisor/reviews"><FaClipboardCheck /> Reviews</Link></li>
          <li><Link to="/supervisor/meetings"><FaCalendar /> Meetings</Link></li>
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
            <input
              type="text"
              placeholder="Search students..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
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
            <h1>My Students</h1>
            <div className="header-actions">
              <button className="btn btn-primary">
                <FaPlus /> Add Student
              </button>
            </div>
          </div>

          <div className="filters-bar">
            <div className="filter-group">
              <label>Status</label>
              <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
                <option value="all">All Students</option>
                <option value="active">Active</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            <div className="filter-group">
              <label>Sort By</label>
              <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
                <option value="name">Name</option>
                <option value="progress">Progress</option>
                <option value="deadline">Deadline</option>
              </select>
            </div>
          </div>

          <div className="students-grid">
            {filteredStudents.map((student, idx) => (
              <div className="student-card" key={student.id}>
                <div className="student-header">
                  <img src={student.avatar} alt="Student" className="student-avatar" />
                  <div className="student-info">
                    <h3>{student.name}</h3>
                    <span className="student-id">ID: {student.id}</span>
                  </div>
                  <div className={`student-status ${student.statusClass}`}>{student.status}</div>
                </div>
                <div className="student-details">
                  <div className="detail-item">
                    <FaProjectDiagram />
                    <span>{student.project}</span>
                  </div>
                  <div className="detail-item">
                    <FaCalendar />
                    <span>Due: {student.due}</span>
                  </div>
                  <div className="detail-item">
                    <FaClock />
                    <span>Last Update: {student.lastUpdate}</span>
                  </div>
                </div>
                <div className="progress-section">
                  <div className="progress-header">
                    <span>Overall Progress</span>
                    <span>{student.progress}%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className={`progress-fill${student.statusClass === 'warning' ? ' warning' : ''}`}
                      style={{ width: `${student.progress}%` }}
                    ></div>
                  </div>
                </div>
                <div className="student-actions">
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
};

export default Students; 