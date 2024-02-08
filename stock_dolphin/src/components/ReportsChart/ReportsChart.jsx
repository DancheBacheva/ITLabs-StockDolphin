import "./ReportsChart.css";
import React, { useContext } from "react";
import { DataContext } from "../../App";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import moment from "moment";

export const ReportsChart = () => {
  const { categories } = useContext(DataContext);
  return (
    <div>
      <div className="chart-main-container">
        <Line
          data={{
            labels: categories.map((category) =>
              moment(category.date).format("MM/DD/YYYY HH:mm")
            ),
            datasets: [
              {
                label: "Total Cost",
                data: [0, 10, 20, 30, 40, 50], //ova e samo za primer, inaku treba da se mapiraat orders i da se dojde do total costs
              },
            ],
          }}
        />
      </div>
    </div>
  );
};
