
import React from 'react';
import '../styles/dashboard.css';
import Calendar from './Calendar';
import Notes from './Notes';
import Tasks from './Tasks';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-column">
        <Calendar />
      </div>
      <div className="dashboard-column">
        <Notes />
      </div>
      <div className="dashboard-column">
        <Tasks />
      </div>
    </div>
  );
};

export default Dashboard;