import { Category } from "../../components/Category/Category";
import { InventoryCategoryRight } from "../../components/InventoryCategoryRight/InventoryCategoryRight";
import { MenuSidebarLeft } from "../../components/MenuSidebarLeft/MenuSidebarLeft";
import "./InventoryCategoryPage.css";


export const InventoryCategoryPage = () => {
  return (
    <div>
      <div className="inventory-category-page">
        <MenuSidebarLeft/>
        <div className="inventory-main">
        <Category/>
        <InventoryCategoryRight/>
        </div>
      </div>
    </div>
  )
}

