// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import JobsPage from './pages/JobsPage';
import ManageMembership from './pages/ManageMembership';
import JobDetails from './pages/JobDetails';
import OwnerPage from './pages/OwnerPage';
import AdminConfig from './pages/AdminConfig';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      {/* App layout with nested routes */}
      <Route path="/" element={<App />}>
        <Route path="JobsPage" element={<JobsPage />} />
        <Route path="ManageMembership" element={<ManageMembership />} />
        <Route path="JobDetails" element={<JobDetails />} />
        <Route path="OwnerPage" element={<OwnerPage />} />
        <Route path="AdminConfig" element={<AdminConfig />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
