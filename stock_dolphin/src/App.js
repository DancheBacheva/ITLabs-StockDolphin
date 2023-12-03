import "./App.css";
import { Route, Routes } from "react-router-dom";
import { DashboardPage } from './pages/DashboardPage/DashboardPage';
import { Default } from "./pages/DefaultPage/Default";
import { InventoryPage } from "./pages/InventoryPage/InventoryPage";
import { ReportsPage } from "./pages/ReportsPage/ReportsPage";
import { SuppliersPage } from "./pages/SuppliersPage/SuppliersPage";

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
