import React from 'react'
import "./InventorySummaryPage.css"

export const InventorySummaryPage = () => {
  return (
    <div className="reports-main">
      <div className='top-section-r'>
        <h1 className='reports-title'>Reports {'>'} Inventory Summary</h1>
      </div>
      <hr />
      <div className='btns-container'>
        <input type="date" className='input-calendar' id="dateFrom" name="dateFrom" />
        <input type="date" className='input-calendar' id="dateTo" name="dateTo" />
        <select className='select-category' id="categoryDropdown" name="category">
          <option value="">All Categories</option>
        </select>
        <button className='btn-show-reset'>SHOW</button>
        {/* <button className='btn-show-reset'>RESET</button> */}
      </div>
    </div>
  )
}

