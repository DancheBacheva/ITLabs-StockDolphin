import "../css/DashboardPage.css";
import { InventorySummDashboard } from "./InventorySummDashboard";
import { MenuSidebarLeft } from "./MenuSidebarLeft";
import { TopSectonDashboard } from "./TopSectonDashboard";

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