import "./InventoryCategoryPage.css";
import { useParams } from "react-router-dom";
import { Category } from "../../components/Category/Category";
import { InventoryCategoryRight } from "../../components/InventoryCategoryRight/InventoryCategoryRight";
import { MenuSidebarLeft } from "../../components/MenuSidebarLeft/MenuSidebarLeft";


export const InventoryCategoryPage = () => {
  const { title, items } = useParams();

  return (
    <div>
      <div className="inventory-category-page">
        <MenuSidebarLeft/>
        <div className="inventory-main">
          <div className='top-section'>
            <h1 className='inventory-title-category'>Inventory {'>'} {title}</h1>
          </div>
          <Category />
          <InventoryCategoryRight title={title} items={items} />
        </div>
      </div>
    </div>
  )
}

