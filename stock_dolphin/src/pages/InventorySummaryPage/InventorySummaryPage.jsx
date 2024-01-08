import React from 'react'
import { MenuSidebarLeft } from '../../components/MenuSidebarLeft/MenuSidebarLeft'
import "./InventorySummaryPage.css"
//da se smenat klasite
export const InventorySummaryPage = () => {
  return (
    <div>
      <div className="reports-page">
          <MenuSidebarLeft/>
        <div className="reports-main">
          <div className='top-section-r'>
          <h1 className='reports-title'>Reports {'>'} Inventory Summary</h1>
          </div>
          <hr className='line-inventory-summary'/>
        </div>
      </div>
    </div>
  )
}

