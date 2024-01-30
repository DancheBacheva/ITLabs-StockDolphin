import React from 'react';
import "./FilterActivities.css";

export const FilterActivities = () => {
  return (
    <div>
      <div className='activity-sidebar-right'>
        <h1>Filter Activities</h1>
        <hr id='filter-hr'/>
        <input type="radio" name="select-activity" id="all" /><label for="radio">All activity</label><br />
        <input type="radio" name="select-activity" id="moved" /><label for="radio">Moved</label><br />
        <input type="radio" name="select-activity" id="edited" /><label for="radio">Edited</label><br />
        <input type="radio" name="select-activity" id="deleted" /><label for="radio">Deleted</label><br />
        <input type="radio" name="select-activity" id="created" /><label for="radio">Created</label><br />
        <input type="radio" name="select-activity" id="ordered" /><label for="radio">Ordered</label>
      </div>
    </div>
  )
}

