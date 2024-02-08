import React, { useContext } from "react";
import "./InventorySummaryPage.css";
import { ReportsChart } from "../../components/ReportsChart/ReportsChart";
import { DataContext } from "../../App";
import { Header } from "../../components/Header/Header";

export const InventorySummaryPage = () => {
  const { categories } = useContext(DataContext);
  
  return (
    <div className="reports-main">
      <Header headerTitle={"Reports"} headerSubtitle={"Inventory Summary"} />
      <div className="btns-container">
        <input
          type="date"
          className="input-calendar"
          id="dateFrom"
          name="dateFrom"
          placeholder="Date From"
        />
        <input
          type="date"
          className="input-calendar"
          id="dateTo"
          name="dateTo"
        />
        <select
          className="select-category"
          id="categoryDropdown"
          name="category"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category._id} value={category.title}>
              {category.title}
            </option>
          ))}
        </select>
        <button className="btn-show-reset">SHOW</button>
        {/* <button className='btn-show-reset'>RESET</button> */}
      </div>

        <ReportsChart />
      
    </div>
  );
};
