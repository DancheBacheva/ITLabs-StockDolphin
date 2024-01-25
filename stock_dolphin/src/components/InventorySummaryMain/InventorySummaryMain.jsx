import React, { useState, useContext } from 'react'
import { DataContext } from "../../App";
import { CategoriesCards } from "../CategoriesCards/CategoriesCards";
import { CategoriesList } from "../CategoriesList/CategoriesList";
import "./InventorySummaryMain.css";

export const InventorySummaryMain = () => {
    const { categories, items, orders } = useContext(DataContext);
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
          <p>Items: &nbsp;<strong>{items.length}</strong></p>
          <p>Total Orders: &nbsp;<strong>{orders.length}</strong></p>
          <p>Total Cost: &nbsp;<strong>€1.250k</strong></p>
        </div>
        <div className='item-show'>
          <button onClick={handleShowCards}>
            <img src="/images/ControlPanel.png" alt="Control Panel" />
          </button>
          <button onClick={handleShowList}>
            <img src='/images/List.png' alt='list'/>
          </button>
        </div>
      </div>
      {showCards ? <CategoriesCards categories={categories}/> : <CategoriesList categories={categories}/>}
    </div>
  )
}
