import "./InventorySummaryMain.css";
import React, { useState, useEffect } from 'react'

export const InventorySummaryMain = () => {
  //   const [showList, setShowList] = useState(false);

  // const handleShowList = () => {
  //   setShowList(!showList);
  // }; //da se proveri pak i da se dovrsi so kopcinja namesto linkovi
  return (
    <div>
        <div className='inventory-summary-main'>
        <div className='inventory-summary-container'>
          <div className='box'>
            <p className="text-is">Categories:</p>
            <p className="num-is">4</p>
          </div>
          <div className='box'>
            <p className="text-is">Items:</p>
            <p className="num-is">11</p>
          </div>
          <div className='box'>
            <p className="text-is">Total Orders:</p>
            <p className="num-is">25</p>
          </div>
          <div className='box'>
            <p className="text-is">Total Cost:</p>
            <p className="num-is">€1.250k</p>
          </div>
        </div>
        <div className='item-order'>
          <div className='cards'>
            <button className='control-panel-btn'>
              <img src="/images/ControlPanel.png" alt="Control Panel" />
            </button>
          </div>
          <div className='list'>
            <button className='list-btn'>
              <img src='/images/List.png' alt='list'/>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
