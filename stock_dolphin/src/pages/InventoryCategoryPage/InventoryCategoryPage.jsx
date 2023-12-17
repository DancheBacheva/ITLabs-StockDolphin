import { Category } from "../../components/Category/Category";
import { MenuSidebarLeft } from "../../components/MenuSidebarLeft/MenuSidebarLeft";


export const InventoryCategoryPage = () => {
  return (
    <div>
      <div className="inventory-page">
        <MenuSidebarLeft/>
        <div className="inventory-main">
        <Category/>
        </div>
      </div>
    </div>
  )
}

