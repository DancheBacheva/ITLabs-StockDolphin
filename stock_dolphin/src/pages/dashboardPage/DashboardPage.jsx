import "./DashboardPage.css";
import { InventorySummDashboard } from "../../components/inventorySumDashboard/InventorySummDashboard";
import { MenuSidebarLeft } from "../../components/menuSidebarLeft/MenuSidebarLeft";
import { TopSectonDashboard } from "../../components/topSectionDashboard/TopSectonDashboard";

export const DashboardPage = () =>{
  return(
    <div className="dashboard-page">
      <div className="frame9">
        <MenuSidebarLeft/>
        <div className="dashboard-main">
          <TopSectonDashboard/>
          <InventorySummDashboard/>
        </div>
      </div>
    </div>
  )
}