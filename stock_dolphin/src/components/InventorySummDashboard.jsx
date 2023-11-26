import "../css/InventorySummDashboard.css"

export const InventorySummDashboard = () => {
  return (
    <div>
      <div className="inventory-summary">
        <p className="inventory-summary-text">Inventory Summary</p>
        <div className="rectangles"> 
          <div className="rectangle">
            <div className="elipse1">
            <img classname="img-folder" src="/images/Folder.png" alt="folder"/>
            </div>
            <p className="num">13</p>
            <p className="text">Categories</p>
          </div>
          <div className="rectangle">
            <div className="elipse2"> 
            <img classname="img-documents" src="/images/Documents.png" alt="documents"/>
            </div>
            <p className="num">123</p>
            <p className="text">Items</p>
          </div>
          <div className="rectangle">
            <div className="elipse3">
            <img classname="img-paper" src="/images/Paper.png" alt="paper"/>
            </div>
            <p className="num">378</p>
            <p className="text">Total Orders</p>
          </div>
          <div className="rectangle">
            <div className="elipse4">
            <img classname="img-coins" src="/images/Coins.png" alt="coins"/>
            </div>
            <p className="num">€1.250K</p>
            <p className="text">Total Cost</p>
          </div>
        </div> 
      </div>
    </div>
  )
}
