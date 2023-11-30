import { MenuSidebarLeft } from "../../components/menuSidebarLeft/MenuSidebarLeft";
import "./InventoryPage.css"


export const InventoryPage = () => {
  return (
    <div className="inventory-main">
      <div className="background-items">
      <MenuSidebarLeft/>
      <div className='top-section-inventory'>
        <p className='inventory-title'>Inventory</p>
        <hr className='line-inventory'/>
      </div>
      </div>
    </div>
  )
}

