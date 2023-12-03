import React from 'react';
import "./TopSectionDashboard.css";

export const TopSectonDashboard = () => {
  return (
    <div className='top-section-dashboard'>
      <header>
        <div className="top-section">
          <p className='dashboard-title'><strong>Dashboard</strong></p>
          <div className='user-section'>
          <p className='welcome'><strong>Welcome back NAME SURNAME!</strong></p>
          <img className='user-img' src="/images/User.png" alt="user" />
          </div>
        </div>
        <hr className='line'/>
      </header>
    </div>
  )
}
