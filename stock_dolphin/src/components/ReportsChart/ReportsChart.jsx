import "./ReportsChart.css";
import React, { useContext } from "react";
import { DataContext } from "../../App";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import moment from "moment";

export const ReportsChart = ({dateFrom, dateTo, selectedCategory, showResults}) => {
  const { categories, orders } = useContext(DataContext);

  const filteredOrders = orders.filter((order) => {
   
  });
  
  return (
    <div>
      <div className="chart-main-container">
        <Line
          data={{
            labels: filteredOrders.map((order) =>
              moment(order.ordered).format("MM/DD/YYYY HH:mm")
            ),
            datasets: [
              {
                label: "Total Cost",
                data: filteredOrders.map((order)=> order.pricePerUnit * order.quantity),
                cubicInterpolationMode: 'monotone'
              },
            
            ],
          }}
        />
      </div>
    </div>
  );
};
