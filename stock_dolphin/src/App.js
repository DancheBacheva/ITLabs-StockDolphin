import "./App.css";
import { Route, Routes } from "react-router-dom";
import { DashboardPage } from './pages/DashboardPage/DashboardPage';
import { Default } from "./pages/DefaultPage/Default";
import { InventoryPage } from "./pages/InventoryPage/InventoryPage";
import { ReportsPage } from "./pages/ReportsPage/ReportsPage";
import { SuppliersPage } from "./pages/SuppliersPage/SuppliersPage";
import { InventoryCategoryPage } from "./pages/InventoryCategoryPage/InventoryCategoryPage";
import { ActivityHistoryPage } from "./pages/ActivityHistoryPage/ActivityHistoryPage";
import { InventorySummaryPage } from "./pages/InventorySummaryPage/InventorySummaryPage";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Default/>}/>
          <Route path="/dashboard" element={<DashboardPage/>}/>
          <Route path="/inventory" element={<InventoryPage/>}/>
          <Route path="/inventory/:id" element={<InventoryCategoryPage/>}/>
          <Route path="/reports/activityhistory" element={<ActivityHistoryPage/>}/>
          <Route path="/reports/inventorysummary" element={<InventorySummaryPage/>}/>
          <Route path="/reports" element={<ReportsPage/>}/>
          <Route path="/suppliers" element={<SuppliersPage/>}/>
        </Routes>
    </div>
  );
}

export default App;
