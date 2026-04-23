import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';
import EmployerDashboard from './pages/EmployerDashboard';
import ApplicantDashboard from './pages/ApplicantDashboard';
import JobListingPage from './pages/JobListingPage';
import { ROUTES } from './constants/routes';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="page-container">
        <Routes>
          <Route path={ROUTES.landing} element={<LandingPage />} />
          <Route path={ROUTES.auth} element={<AuthPage />} />
          <Route path={ROUTES.employerDashboard} element={<EmployerDashboard />} />
          <Route path={ROUTES.applicantDashboard} element={<ApplicantDashboard />} />
          <Route path={ROUTES.jobs} element={<JobListingPage />} />
          {/* Future routes will go here (Auth, Dashboard, etc.) */}
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
