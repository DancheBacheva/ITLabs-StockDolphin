import React from 'react';
import "./FilterActivities.css";

export const FilterActivities = () => {
  return (
    <div>
      <div className='activity-sidebar-right'>
        <h1>Filter Activities</h1>
        <hr id='filter-hr'/>
        <input type="radio" name="select-activity" id="all" /><label>All activity</label><br />
        <input type="radio" name="select-activity" id="moved" /><label>Moved</label><br />
        <input type="radio" name="select-activity" id="edited" /><label>Edited</label><br />
        <input type="radio" name="select-activity" id="deleted" /><label>Deleted</label><br />
        <input type="radio" name="select-activity" id="created" /><label>Created</label><br />
        <input type="radio" name="select-activity" id="ordered" /><label>Ordered</label>
      </div>
    </div>
  )
}

