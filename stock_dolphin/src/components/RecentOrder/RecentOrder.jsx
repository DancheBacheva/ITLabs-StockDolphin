import "./RecentOrder.css";
import React, { useContext, useState } from "react";
import { DataContext } from "../../App";
import { Pagination } from "../Pagination/Pagination";

export const RecentOrder = () => {
  const { orders } = useContext(DataContext);
  const [currentPage, setCurrentPage] = useState(1);
  const orderPerPage = 4;
  const indexOfLastOrder = currentPage * orderPerPage;
  const indexOfFirstOrder = indexOfLastOrder - orderPerPage;
  const recentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

  const calculateTotalPrice = (order) => {
    return order.quantity * order.pricePerUnit;
  };

  const handleArrowPagination = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className="resent-order-section">
      <h3>
        <strong>Recent order</strong>
      </h3>
      <div className="navigation-recent-items">
        <div className="recent-item-box">
          {recentOrders.map((order) => (
            <div className="item">
              <img alt="recent item" src="/images/RecentItem2img.png" />
              <br />
              <span className="item-name">{order.itemTitle}</span>
              {/* Click on the order name will redirect to the item page. (EXTRA) */}
              <br />
              <span clsasName="quantity-cost">
                <b>{order.quantity}</b> | €{calculateTotalPrice(order)}
              </span>
            </div>
          ))}
          <button onClick={handleArrowPagination} className="arrow-btn">
            <img
              className="expand-arrow"
              src="/images/ExpandArrow.png"
              alt="expand arrow"
            />
          </button>
        </div>
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
};
