import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'));
const ResetPassword = lazy(() => import('./pages/ResetPassword'));
const CoordinatorDashboard = lazy(() => import('./pages/coordinator/CoordinatorDashboard'));
const SimilarityChecker = lazy(() => import('./pages/coordinator/SimilarityChecker'));
const Supervisors = lazy(() => import('./pages/coordinator/Supervisors'));
const SupervisorDashboard = lazy(() => import('./pages/supervisor/SupervisorDashboard'));
const Students = lazy(() => import('./pages/supervisor/Students'));
const Meetings = lazy(() => import('./pages/supervisor/Meetings'));
const Reviews = lazy(() => import('./pages/supervisor/Reviews'));

function ProtectedRoute({ children, allowedRoles }) {
  const { user } = useAuth();
  if (!user) {
    // Not logged in
    return <Navigate to="/login" replace />;
  }
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    // Not authorized for this role
    return <Navigate to="/login" replace />;
  }
  return children;
}

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/coordinator/dashboard" element={<ProtectedRoute allowedRoles={['coordinator']}><CoordinatorDashboard /></ProtectedRoute>} />
        <Route path="/coordinator/similarity-checker" element={<ProtectedRoute allowedRoles={['coordinator']}><SimilarityChecker /></ProtectedRoute>} />
        <Route path="/coordinator/supervisors" element={<ProtectedRoute allowedRoles={['coordinator']}><Supervisors /></ProtectedRoute>} />
        <Route path="/supervisor/dashboard" element={<ProtectedRoute allowedRoles={['supervisor']}><SupervisorDashboard /></ProtectedRoute>} />
        <Route path="/supervisor/students" element={<ProtectedRoute allowedRoles={['supervisor']}><Students /></ProtectedRoute>} />
        <Route path="/supervisor/meetings" element={<ProtectedRoute allowedRoles={['supervisor']}><Meetings /></ProtectedRoute>} />
        <Route path="/supervisor/reviews" element={<ProtectedRoute allowedRoles={['supervisor']}><Reviews /></ProtectedRoute>} />
        {/* Add similar protected routes for student and admin dashboards */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}

export default App; 