import { CategoriesCards } from "../CategoriesCards/CategoriesCards";
import { CategoriesList } from "../CategoriesList/CategoriesList";
import "./InventorySummaryMain.css";
import React, { useState } from 'react'

export const InventorySummaryMain = ({categories}) => {
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
            <p>Categories: &nbsp;<strong>{categories.length}</strong></p>
            <p>Items: &nbsp;<strong>11</strong></p>
            <p>Total Orders: &nbsp;<strong>25</strong></p>
            <p>Total Cost: &nbsp;<strong>€1.250k</strong></p>
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
      {showCards ? <CategoriesCards categories={categories}/> : <CategoriesList categories={categories}/>}
    </div>
  )
}
