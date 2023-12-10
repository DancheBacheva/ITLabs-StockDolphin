import "./TopSectionInventory.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export const TopSectionInventory = () => {
  // const [showList, setShowList] = useState(false);

  // const handleShowList = () => {
  //   setShowList(!showList);
  // }; //da se proveri pak i da se dovrsi so kopcinja namesto linkovi

  return (
    <div className='top-section-inventory'>
      <div className='top-section'>
        <p className='inventory-title'>Inventory</p>
      </div>
      <hr className='line-inventory'/>
      <div className='search-add-main'>
        <div className='search-category'>
          <label className="search-label" for="search">
          <img className='search-img' src="/images/Search.png" alt="Search" />  
          <input className='input-search' type="text" id="category-search" name="category-search" placeholder='Search categories'/></label>
        </div>
        <div className='add-category'>
          <button className='add-category-btn'>
            <div className='inside-btn'>
              <div className='rectangle37'>
                <img className='add-new' src="/images/AddNew.png" alt="Add new" />
                </div>
                <p className='text-btn'>ADD CATEGORY</p>
            </div>
          </button>
        </div>
      </div>
      <div className='inventory-summary-main'>
        <div className='inventory-summary-container'>
          <div className='box'>
            <p className="text-is">Categories:</p>
            <p className="num-is">4</p>
          </div>
          <div className='box'>
            <p className="text-is">Items:</p>
            <p className="num-is">11</p>
          </div>
          <div className='box'>
            <p className="text-is">Total Orders:</p>
            <p className="num-is">25</p>
          </div>
          <div className='box'>
            <p className="text-is">Total Cost:</p>
            <p className="num-is">€1.250k</p>
          </div>
        </div>
        <div className='item-order'>
          <div className='control-panel'>
            <button className='control-panel-btn'>
              <img src="/images/ControlPanel.png" alt="Control Panel" />
            </button>
          </div>
          <div className='list'>
            <button className='list-btn'>
              <img src='/images/List.png' alt='list'/>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

