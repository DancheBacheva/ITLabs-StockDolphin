import React from 'react';
import "./RecentActivity.css"

export const RecentActivity = () => {
  return (
    <div className="resent-activity-section">
      <p className="recent-activity-text"><strong>Recent Activity</strong></p>
        <div className="activity-box">
          <div className="rectangle7">
            <p className="activity-box-text">Admin has ACTIVITY item <b>NAME OF ITEM</b> in <b>TYPE OF CATEGORY(NAME OF CATEGORY)</b></p>
          </div>
        </div>
    </div>
  )
}

