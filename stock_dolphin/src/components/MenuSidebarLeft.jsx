import "../css/MenuSidebarLeft.css";

export const MenuSidebarLeft = () => {
return(
  <div>
    <div className="menu-sidebar-left2">
      
      <div className="menu-panel">
      <img className="logo" src="/images/logo1.png" alt="logoItLabs"/>
          <div className="sidebar-navigation-btn">
            <div className="dashboard-nav-btn">
              <button className="dashboard">
                <img className="dashboard-layout" src="/images/DashboardLayout.png" alt="dashboard-layout"/>
                <p className="dashboard-text">Dashboard</p>
              </button>
            </div>
            <div className="items-nav-btn">
              <button className="search">
                <img className="product" src="/images/ProductLayout.png" alt="product"/>
                <p className="inventory">Inventory</p>
              </button>
            </div>
            <div className="reports-nav-btn">
              <div className="reports-btn">
                <button className="reports">
                  <img className="combo-chart" src="/images/ComboChart.png" alt="combo-chart"/>
                  <p className="reports-text">Reports</p>
                </button>
              </div>
              <div className="suppliers-btn">
                <button className="suppliers">
                <p className="suppliers-text">Suppliers</p>
                </button>
              </div>
              <div className="signout-btn">
                <button className="signout">
                <img className="shutdown" src="/images/Shutdown.png" alt="shutdown"/>
                <p className="signout-text">Sign Out</p>
                </button>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
)
}