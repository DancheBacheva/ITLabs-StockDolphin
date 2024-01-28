import "./RecentOrder.css";
import React, { useContext } from "react";
import { DataContext } from "../../App";

export const RecentOrder = () => {
  const { orders } = useContext(DataContext);
  const recentOrders = orders.slice(0, 4); //ova e samo privremeno, treba da se napravi paginacija 

  const calculateTotalPrice = (order) => {
    return order.quantity * order.pricePerUnit;
  };
  return (
    <div className="resent-order-section">
      <h3><strong>Recent order</strong></h3>
        <div className="navigation-recent-items">
          <div className='recent-item-box'>
            {recentOrders.map((order)=> (
              <div className='item'>
              <img alt='recent item' src='/images/RecentItem2img.png'/>
              <br/>
              <span className="item-name">{order.itemTitle}</span>
              <br/>
              <span clsasName="quantity-cost"><b>{order.quantity}</b> | €{calculateTotalPrice(order)}</span>
            </div>
            ))}
            <img className='expand-arrow' src='/images/ExpandArrow.png' alt='expand arrow'/>
          </div>
          <div className='elipses'>
            <div className='elipse13'></div>
            <div className='elipse14'></div>
            <div className='elipse15'></div>
          </div>
        </div>
    </div>
  )
}