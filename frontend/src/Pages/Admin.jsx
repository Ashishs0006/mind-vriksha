// src/Pages/Admin.jsx

import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import AdminLayout from '../Admin/AdminLayout';
import Dashboard from '../Admin/Dashboard';
import Login from '../Admin/Login';
import ProtectedRoute from '../Admin/ProtectedRoute';

const Admin = () => {
  // User state to manage login status
  const [user, setUser] = useState(null);

  // Initialize user from localStorage once on mount (optional persistence)
  useEffect(() => {
    const savedUser = localStorage.getItem('adminUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // Login handler
  const onLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('adminUser', JSON.stringify(userData));
  };

  // Logout handler
  const onLogout = () => {
    setUser(null);
    localStorage.removeItem('adminUser');
  };

  return (
    <Routes>
  <Route path="login" element={<Login onLogin={setUser} />} />
  <Route 
    path="dashboard" 
    element={
      <ProtectedRoute user={user}>
        <AdminLayout>
          <Dashboard />
        </AdminLayout>
      </ProtectedRoute>
    } 
  />
  <Route path="*" element={<Navigate to={user ? 'dashboard' : 'login'} />} />
</Routes>

  );
};

export default Admin;
