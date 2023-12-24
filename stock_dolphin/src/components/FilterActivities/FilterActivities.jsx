import React from 'react';
import "./FilterActivities.css";

export const FilterActivities = () => {
  return (
    <div>
      <div className='activity-sidebar-right'>
        <h1>Filter Activities</h1>
        <hr />        
        <input type="radio" name="all" id="all" /><label>All activity</label><br />
        <input type="radio" name="moved" id="moved" /><label>Moved</label><br />
        <input type="radio" name="edited" id="edited" /><label>Edited</label><br />
        <input type="radio" name="deleted" id="deleted" /><label>Deleted</label><br />
        <input type="radio" name="created" id="created" /><label>Created</label><br />
        <input type="radio" name="ordered" id="ordered" /><label>Ordered</label>
      </div>
    </div>
  )
}

