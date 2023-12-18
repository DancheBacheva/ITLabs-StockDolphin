import React from 'react';
import "./FilterActivities.css";

export const FilterActivities = () => {
  return (
    <div>
      <div className='activity-sidebar-right'>
        <h1>Filter Activities</h1>
        <hr />        
        <input type="radio" name="" id="" /><label>All activity</label><br />
        <input type="radio" name="" id="" /><label>Moved</label><br />
        <input type="radio" name="" id="" /><label>Edited</label><br />
        <input type="radio" name="" id="" /><label>Deleted</label><br />
        <input type="radio" name="" id="" /><label>Created</label><br />
        <input type="radio" name="" id="" /><label>Ordered</label>
      </div>
    </div>
  )
}

