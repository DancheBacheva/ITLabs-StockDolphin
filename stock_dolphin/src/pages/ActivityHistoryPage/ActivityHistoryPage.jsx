import React from 'react'
import { Activities } from '../../components/Activities/Activities'
import { FilterActivities } from '../../components/FilterActivities/FilterActivities'
import "./ActivityHistoryPage.css";
//da se smenat i usoglasat klasite
export const ActivityHistoryPage = () => {
  return (
    <div className="reports-main">
      <div className='top-section-r'>
        <h1 className='reports-title'>Reports {'>'} Activity History</h1>
      </div>
      <hr className='line-activity'/>
      <div className='main-container-activities'>
        <Activities/>
        <FilterActivities/>
      </div>
    </div>
  )
}

