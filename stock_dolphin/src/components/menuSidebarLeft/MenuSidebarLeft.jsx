import "./MenuSidebarLeft.css";
import { Link } from "react-router-dom";

export const MenuSidebarLeft = () => {
return(
  <div>
    <div className="menu-panel">
      <Link to="/dashboard"><img className="logo" src="/images/logo1.png" alt="logoItLabs"/></Link>
      <div className="sidebar-navigation-btn">
        <button className="dashboard-btn">
          <img className="dashboard-img" src="/images/DashboardLayout.png" alt="dashboard-layout"/>
          <Link className="link-dashboard" to="/dashboard"><h1>Dashboard</h1></Link> 
        </button>
        <button className="items-nav-btn">
            <img className="product" src="/images/ProductLayout.png" alt="product"/>
            <Link className="link-inventory" to="/inventory"><h1>Inventory</h1></Link>
        </button>
        <div className="reports-nav-btn">
          <button className="reports-btn">
              <img className="combo-chart" src="/images/ComboChart.png" alt="combo-chart"/>
              <Link className="link-reports" to="/reports"><h1>Reports</h1></Link>
          </button>
          <button className="suppliers-btn">
            <Link className="link-suppliers" to="/suppliers"><h1>Suppliers</h1></Link>
          </button>
          <button className="signout-btn">
            <img className="shutdown" src="/images/Shutdown.png" alt="shutdown"/>
            <Link className="link-signout" to="/"><h1>Sign Out</h1></Link>
          </button>
        </div>
      </div>
    </div>
  </div>
)
}