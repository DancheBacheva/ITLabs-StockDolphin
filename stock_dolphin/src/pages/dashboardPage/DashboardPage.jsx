import "./DashboardPage.css";
import { InventorySummDashboard } from "../../components/InventorySumDashboard/InventorySummDashboard";
import { MenuSidebarLeft } from "../../components/MenuSidebarLeft/MenuSidebarLeft";
import { TopSectonDashboard } from "../../components/TopSectionDashboard/TopSectonDashboard";
import { RecentActivity } from "../../components/RecentActivity/RecentActivity";
import { RecentOrder } from "../../components/RecentOrder/RecentOrder";

export const DashboardPage = () =>{
  return(
    <div>
      <div className="dashboard-page">
        <MenuSidebarLeft/>
        <div className="dashboard-main">
          <TopSectonDashboard/>
          <InventorySummDashboard/>
          <RecentActivity/>
          <RecentOrder/>
        </div>
      </div>
    </div>
  )
}