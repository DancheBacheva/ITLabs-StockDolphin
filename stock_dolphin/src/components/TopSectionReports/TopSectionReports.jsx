import "./TopSectionReports.css";

export const TopSectionReports = () => {
  return (
    <div className='section-reports'>
      <div className='top-section-r'>
        <h1 className='reports-title'>Reports</h1>
      </div>
      <hr className='line-reports'/>
      <div className='activity-history'>
        <div className='img-title-activity'>
          <img className="time-mashine-img" src="/images/TimeMachine.png" alt="" />
          <h1 className='activity-title-r'>Activity History</h1>
        </div>
        <p className='activity-txt'>Activity history helps keep track of the things you do with your items, categories, tags, etc., such as creating, editing or deleting</p>
      </div>
      <hr className='line9'/>
      <div className='inventory-summary-reports'>
        <div className='img-title-inventory'>
          <img className="product-img-r" src="/images/product.png" alt="product" />
          <h1 className='inventory-title-r'>Inventory Summary</h1>
        </div>
        <p className='inSum-text'>Inventory Summary provides detailed visualizations about the total cost of the categories over a period of time.</p>
      </div>
      <hr className='line10'/>
    </div>
  )
}

