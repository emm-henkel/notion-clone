
import React from 'react';
import '../styles/dashboard.css';
import CalendarComponent from '../components/CalendarComponent';
import Notes from './Notes';
import Tasks from './Tasks';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-column">
        <CalendarComponent />
      </div>
      <div className="dashboard-column">
        <CalendarComponent />
      </div>
      <div className="dashboard-column">
        <CalendarComponent />
      </div>
    </div>
  );
};

export default Dashboard;