import "./DashboardPage.css";
import { InventorySummDashboard } from "../../components/InventorySumDashboard/InventorySummDashboard";
import { TopSectonDashboard } from "../../components/TopSectionDashboard/TopSectonDashboard";
import { RecentActivity } from "../../components/RecentActivity/RecentActivity";
import { RecentOrder } from "../../components/RecentOrder/RecentOrder";

export const DashboardPage = () => {
  return (
    <div className="dashboard">
      <TopSectonDashboard />
      <div className="dashboard-main">
        <InventorySummDashboard />
        <RecentActivity />
        <RecentOrder />
      </div>
    </div>
  );
};
