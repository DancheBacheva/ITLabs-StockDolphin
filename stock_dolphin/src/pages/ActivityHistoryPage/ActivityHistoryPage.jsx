import React from "react";
import { Activities } from "../../components/Activities/Activities";
import { FilterActivities } from "../../components/FilterActivities/FilterActivities";
import "./ActivityHistoryPage.css";
import { Header } from "../../components/Header/Header";

export const ActivityHistoryPage = () => {
  return (
    <div className="reports-main">
      <Header headerTitle={"Reports"} headerSubtitle={"Activity History"} />
      <div className="main-container-activities">
        <Activities />
        <FilterActivities />
      </div>
    </div>
  );
};
