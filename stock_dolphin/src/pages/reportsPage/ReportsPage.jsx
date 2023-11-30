import "./ReportsPage.css";
import { MenuSidebarLeft } from "../../components/menuSidebarLeft/MenuSidebarLeft";

export const ReportsPage = () => {
  return (
    <div className="reports-main">
      <div className="background-reports">
      <MenuSidebarLeft/>
      <div className='top-section-reports'>
        <p className='reports-title'>Reports</p>
        <hr className='line-reports'/>
      </div>
      </div>
    </div>
  )
}
