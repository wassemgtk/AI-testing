import React from 'react';
import { useAuth } from '../hooks/useAuth';
import '../styles/Dashboard.css';

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <div className="dashboard">
      <h1>Welcome, {user?.displayName}</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;