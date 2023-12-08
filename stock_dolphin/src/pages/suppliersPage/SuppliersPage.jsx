import "./SuppliersPage.css";
import { MenuSidebarLeft } from "../../components/MenuSidebarLeft/MenuSidebarLeft";
import { TopSectionSuppliers } from "../../components/TopSectionSuppliers/TopSectionSuppliers";
import { SuppliersInfo } from "../../components/SuppliersInfo/SuppliersInfo";

export const SuppliersPage = () => {
  return (
    <div>
      <div className="suppliers-page">
          <MenuSidebarLeft/>
        <div className="supplier-main">
          <TopSectionSuppliers/>
          <SuppliersInfo/>
        </div>
      </div>
    </div>
  )
}

 