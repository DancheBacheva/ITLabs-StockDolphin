import "./App.css";
import { Route, Routes } from "react-router-dom";
import { DashboardPage } from './pages/dashboardPage/DashboardPage';
import { Default } from "./pages/defaultPage/Default";
import { InventoryPage } from "./pages/inventoryPage/InventoryPage";
import { ReportsPage } from "./pages/reportsPage/ReportsPage";
import { SuppliersPage } from "./pages/suppliersPage/SuppliersPage";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Default/>}/>
          <Route path="/dashboard" element={<DashboardPage/>}/>
          <Route path="/inventory" element={<InventoryPage/>}/>
          <Route path="/reports" element={<ReportsPage/>}/>
          <Route path="/suppliers" element={<SuppliersPage/>}/>
        </Routes>
    </div>
  );
}

export default App;
