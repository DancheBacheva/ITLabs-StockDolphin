import React from 'react'
import { MenuSidebarLeft } from '../../components/MenuSidebarLeft/MenuSidebarLeft'

export const InventorySummaryPage = () => {
  return (
    <div>
      <div className="reports-page">
          <MenuSidebarLeft/>
        <div className="reports-main">
          <div className='top-section-r'>
          <h1 className='reports-title'>Reports {'>'} Inventory Summary</h1>
          </div>
          <hr className='line-reports'/>
        </div>
      </div>
    </div>
  )
}

