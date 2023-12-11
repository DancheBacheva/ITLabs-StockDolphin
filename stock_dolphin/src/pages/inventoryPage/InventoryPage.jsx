import { CardsCategories } from "../../components/CardsCategories/CardsCategories";
import { InventorySummaryMain } from "../../components/InventorySummaryMain/InventorySummaryMain";
import { MenuSidebarLeft } from "../../components/MenuSidebarLeft/MenuSidebarLeft";
import { TopSectionInventory } from "../../components/TopSectionInventory/TopSectionInventory";
import "./InventoryPage.css"


export const InventoryPage = () => {
  return (
    <div>
      <div className="inventory-page">
        <MenuSidebarLeft/>
        <div className="inventory-main">
        <TopSectionInventory/>
        <InventorySummaryMain/>
        <CardsCategories/>
        </div>
      </div>
    </div>
  )
}

