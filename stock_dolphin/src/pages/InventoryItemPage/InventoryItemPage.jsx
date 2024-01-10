import { MenuSidebarLeft } from "../../components/MenuSidebarLeft/MenuSidebarLeft"
import { Orders } from "../../components/Orders/Orders"
import "./InventoryItemPage.css"
import React from 'react';
import { useParams } from "react-router-dom";
//da se proverat klasi

export const InventoryItemPage = () => {
  const { title, itemTitle } = useParams();

  return (
    <div>
      <div className="inventory-category-page">
        <MenuSidebarLeft/>
        <div className="inventory-main">
          <div className='top-section'>
            <h1 className='inventory-title-category'>Inventory {'>'} {title} {'>'} {itemTitle}</h1>
          </div>
          <hr className='line-inventory'/>
          <Orders/>
        </div>
      </div>
    </div>
  )
}