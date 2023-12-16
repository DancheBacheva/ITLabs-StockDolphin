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
              <Link className="link-dashboard" to="/dashboard"><h1 className="dashboard-text">Dashboard</h1></Link>
              </button>
            </div>
            <div className="items-nav-btn">
              <button className="search">
                <img className="product" src="/images/ProductLayout.png" alt="product"/>
                <Link className="link-inventory" to="/inventory"><h1 className="inventory">Inventory</h1></Link>
              </button>
            </div>
            <div className="reports-nav-btn">
              <div className="reports-btn">
                <button className="reports">
                  <img className="combo-chart" src="/images/ComboChart.png" alt="combo-chart"/>
                  <Link className="link-reports" to="/reports"><h1 className="reports-text">Reports</h1></Link>
                </button>
              </div>
              <div className="suppliers-btn">
                <button className="suppliers">
                <Link className="link-suppliers" to="/suppliers"><h1 className="suppliers-text">Suppliers</h1></Link>
                </button>
              </div>
              <div className="signout-btn">
                <button className="signout">
                <img className="shutdown" src="/images/Shutdown.png" alt="shutdown"/>
                <Link className="link-signout" to="/"><h1 className="signout-text">Sign Out</h1></Link>
                </button>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
)
}