import { CategoriesCards } from "../CategoriesCards/CategoriesCards";
import { CategoriesList } from "../CategoriesList/CategoriesList";
import "./InventorySummaryMain.css";
import React, { useState } from 'react'

export const InventorySummaryMain = () => {
    const [showCards, setShowCards] = useState(true);

    const handleShowCards = () => {
      setShowCards(true);
    }; 

    const handleShowList = () => {
      setShowCards(false);
    }

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
        <div className='item-show'>
            <button className='control-panel-btn' onClick={handleShowCards}>
              <img src="/images/ControlPanel.png" alt="Control Panel" />
            </button>
            <button className='list-btn' onClick={handleShowList}>
              <img src='/images/List.png' alt='list'/>
            </button>
        </div>
      </div>
      {showCards ? <CategoriesCards /> : <CategoriesList />}
    </div>
  )
}
