import "./MenuSidebarLeft.css";
import { Link } from "react-router-dom";

export const MenuSidebarLeft = () => {
return(
  <div>
    <div className="menu-sidebar-left2">
      <div className="menu-panel">
      <Link to="/dashboard"><img className="logo" src="/images/logo1.png" alt="logoItLabs"/></Link>
          <div className="sidebar-navigation-btn">
            <div className="dashboard-nav-btn">
              <button className="dashboard">
              <img className="dashboard-img" src="/images/DashboardLayout.png" alt="dashboard-layout"/>
              <Link className="link-dashboard" to="/dashboard"><p className="dashboard-text">Dashboard</p></Link>
              </button>
            </div>
            <div className="items-nav-btn">
              <button className="search">
                <img className="product" src="/images/ProductLayout.png" alt="product"/>
                <Link className="link-inventory" to="/inventory"><p className="inventory">Inventory</p></Link>
              </button>
            </div>
            <div className="reports-nav-btn">
              <div className="reports-btn">
                <button className="reports">
                  <img className="combo-chart" src="/images/ComboChart.png" alt="combo-chart"/>
                  <Link className="link-reports" to="/reports"><p className="reports-text">Reports</p></Link>
                </button>
              </div>
              <div className="suppliers-btn">
                <button className="suppliers">
                <Link className="link-suppliers" to="/suppliers"><p className="suppliers-text">Suppliers</p></Link>
                </button>
              </div>
              <div className="signout-btn">
                <button className="signout">
                <img className="shutdown" src="/images/Shutdown.png" alt="shutdown"/>
                <Link className="link-signout" to="/"><p className="signout-text">Sign Out</p></Link>
                </button>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
)
}