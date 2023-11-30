import "./SuppliersPage.css";
import { MenuSidebarLeft } from "../../components/menuSidebarLeft/MenuSidebarLeft";

export const SuppliersPage = () => {
  return (
    <div className="suppliers-main">
      <div className="suppliers-right">
      <MenuSidebarLeft/>
      <div className='top-section-suppliers'>
        <p className='suppliers-title'>Suppliers</p>
        <hr className='line-suppliers'/>
      </div>
      </div>
    </div>
  )
}

 