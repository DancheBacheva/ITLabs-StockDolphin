import "./RecentOrder.css"

export const RecentOrder = () => {
  return (
    <div className="resent-order-section">
      <h3><strong>Recent order</strong></h3>
        <div className="navigation-recent-items">
            <div className='recent-item-box'>
              <div className='item'>
                <img alt='recent item' src='/images/RecentItem2img.png'/>
                <br/>
                <span className="item-name">ITEM NAME</span>
                <br/>
                <span clsasName="quantity-cost"><b>QUANTITY</b> | €COST</span>
              </div>
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