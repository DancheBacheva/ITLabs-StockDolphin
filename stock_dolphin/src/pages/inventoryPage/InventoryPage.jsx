import "./InventoryPage.css"
import React from 'react';
import { InventorySummaryMain } from "../../components/InventorySummaryMain/InventorySummaryMain";
import { TopSectionInventory } from "../../components/TopSectionInventory/TopSectionInventory";

export const InventoryPage = () => {
  return (
    <div className="inventory-main">
      <TopSectionInventory/>
      <InventorySummaryMain/>
    </div>
   
  )
}

