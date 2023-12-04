import "./ReportsPage.css";
import { MenuSidebarLeft } from "../../components/MenuSidebarLeft/MenuSidebarLeft";
import { TopSectionReports } from "../../components/TopSectionReports/TopSectionReports";

export const ReportsPage = () => {
  return (
    <div>
      <div className="reports-page">
          <MenuSidebarLeft/>
        <div className="reports-main">
          <TopSectionReports/>
        </div>
      </div>
    </div>
  )
}
