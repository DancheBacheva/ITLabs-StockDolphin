import React from 'react';
import "./TopSectionDashboard.css";

export const TopSectonDashboard = () => {
  return (
    <div className='top-section-dashboard'>
      <header>
        <div className="top-section">
          <p className='dashboard-title'>Dashboard</p>
          <div className='user-section'>
          <p className='welcome'>Welcome back NAME SURNAME!</p>
          <img className='user-img' src="/images/User.png" alt="user" />
          </div>
        </div>
        <hr className='line'/>
      </header>
    </div>
  )
}
