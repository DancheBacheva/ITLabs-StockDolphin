import "./css/App.css";
import { Route, Routes, Link } from "react-router-dom";
import { DashboardPage } from './components/DashboardPage';
import { Default } from "./components/Default";


function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/"></Link>
      </nav>

      <Routes>
        <Route path="/" element={<Default/>}/>
        <Route path="/dashboard" element={<DashboardPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
