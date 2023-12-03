import React from 'react';
import "./RecentOrder.css"

export const RecentOrder = () => {
  return (
    <div className="resent-order-section">
      <p className="recent-order-text"><strong>Recent order</strong></p>
        <div className="navigation-recent-items">
            <div className="recent-item">
              <div className='recent-item-box'>
                <div className='items'>
                  <div className='item'>
                    <img className='recent-item-img' alt='recent item' src='/images/RecentItem2img.png'/>
                    <br/>
                    <span className="item-name">ITEM NAME</span>
                    <br/>
                    <span clsasName="quantity-cost"><b>QUANTITY</b> | €COST</span>
                  </div>
                </div>
                <img className='expand-arrow' src='/images/ExpandArrow.png' alt='expand arrow'/>
              </div>
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