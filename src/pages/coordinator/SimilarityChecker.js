import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaChalkboardTeacher, FaUserGraduate, FaProjectDiagram, FaClipboardCheck, FaCalendar, FaFileAlt, FaComments, FaBell, FaQuestionCircle, FaSearch, FaCloudUploadAlt, FaFilePdf, FaFileAlt as FaFileAltIcon, FaFileWord, FaCheckCircle, FaExclamationTriangle, FaTimesCircle, FaHistory, FaSignOutAlt } from 'react-icons/fa';

import '../../styles/main.css';
import '../../styles/dashboard.css';
import { useAuth } from '../../AuthContext';

function SimilarityChecker() {
  const fileInputRef = useRef();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleDropZoneClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    // Handle file upload logic here
    console.log('Files to upload:', e.target.files);
  };

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
          <li><Link to="/coordinator/dashboard"><FaHome /> Dashboard</Link></li>
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
            <input type="text" placeholder="Search similarity reports..." />
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
            <h1>Similarity Checker</h1>
            <div className="header-actions">
              <button className="btn btn-primary">
                <FaHistory /> View History
              </button>
            </div>
          </div>
          <div className="similarity-checker-grid">
            {/* Upload Document Card */}
            <div className="checker-card">
              <div className="card-header">
                <h2>Upload Document</h2>
              </div>
              <div className="upload-section">
                <div className="upload-area" id="dropZone" onClick={handleDropZoneClick}>
                  <FaCloudUploadAlt style={{ fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '1rem' }} />
                  <p>Drag and drop your document here</p>
                  <span>or</span>
                  <button className="btn btn-primary" type="button" onClick={handleDropZoneClick}>Browse Files</button>
                  <input type="file" id="fileInput" ref={fileInputRef} hidden accept=".pdf,.doc,.docx" onChange={handleFileChange} />
                </div>
                <div className="upload-options">
                  <div className="option-group">
                    <label>Document Type</label>
                    <select>
                      <option value="proposal">Project Proposal</option>
                      <option value="report">Progress Report</option>
                      <option value="thesis">Final Thesis</option>
                    </select>
                  </div>
                  <div className="option-group">
                    <label>Check Against</label>
                    <div className="checkbox-group">
                      <label className="checkbox">
                        <input type="checkbox" defaultChecked />
                        <span>Previous Submissions</span>
                      </label>
                      <label className="checkbox">
                        <input type="checkbox" defaultChecked />
                        <span>Online Sources</span>
                      </label>
                      <label className="checkbox">
                        <input type="checkbox" />
                        <span>Custom Database</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Recent Checks Card */}
            <div className="checker-card">
              <div className="card-header">
                <h2>Recent Checks</h2>
              </div>
              <div className="recent-checks">
                <div className="check-item">
                  <div className="check-icon" style={{ backgroundColor: 'rgba(0, 200, 83, 0.1)' }}>
                    <FaFilePdf style={{ color: 'var(--primary-color)' }} />
                  </div>
                  <div className="check-details">
                    <h3>Project Proposal - Sarah Davis</h3>
                    <p>Checked 2 hours ago</p>
                    <div className="similarity-score success">15% Similarity</div>
                  </div>
                  <button className="btn btn-secondary btn-sm">View Report</button>
                </div>
                <div className="check-item">
                  <div className="check-icon" style={{ backgroundColor: 'rgba(255, 152, 0, 0.1)' }}>
                    <FaFileAltIcon style={{ color: '#FF9800' }} />
                  </div>
                  <div className="check-details">
                    <h3>Progress Report - David Wilson</h3>
                    <p>Checked 5 hours ago</p>
                    <div className="similarity-score warning">35% Similarity</div>
                  </div>
                  <button className="btn btn-secondary btn-sm">View Report</button>
                </div>
                <div className="check-item">
                  <div className="check-icon" style={{ backgroundColor: 'rgba(233, 30, 99, 0.1)' }}>
                    <FaFileWord style={{ color: '#E91E63' }} />
                  </div>
                  <div className="check-details">
                    <h3>Final Thesis - Michael Brown</h3>
                    <p>Checked 1 day ago</p>
                    <div className="similarity-score danger">65% Similarity</div>
                  </div>
                  <button className="btn btn-secondary btn-sm">View Report</button>
                </div>
              </div>
            </div>
            {/* Similarity Statistics Card */}
            <div className="checker-card">
              <div className="card-header">
                <h2>Similarity Statistics</h2>
              </div>
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-icon" style={{ backgroundColor: 'rgba(0, 200, 83, 0.1)' }}>
                    <FaCheckCircle style={{ color: 'var(--primary-color)' }} />
                  </div>
                  <div className="stat-info">
                    <h3>Passing Rate</h3>
                    <p className="stat-number">85%</p>
                    <span className="stat-change positive">+5% this semester</span>
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon" style={{ backgroundColor: 'rgba(255, 152, 0, 0.1)' }}>
                    <FaExclamationTriangle style={{ color: '#FF9800' }} />
                  </div>
                  <div className="stat-info">
                    <h3>Warning Rate</h3>
                    <p className="stat-number">12%</p>
                    <span className="stat-change">-2% this semester</span>
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon" style={{ backgroundColor: 'rgba(233, 30, 99, 0.1)' }}>
                    <FaTimesCircle style={{ color: '#E91E63' }} />
                  </div>
                  <div className="stat-info">
                    <h3>Failed Rate</h3>
                    <p className="stat-number">3%</p>
                    <span className="stat-change negative">+1% this semester</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SimilarityChecker; 