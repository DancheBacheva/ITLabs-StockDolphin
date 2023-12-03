import React from 'react';
import "./TopSectionInventory.css";
import { Link } from "react-router-dom";

export const TopSectionInventory = () => {
  return (
    <div className='top-section-inventory'>
      <div className='top-section'>
        <p className='inventory-title'><strong>Inventory</strong></p>
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
            <Link className='control-panel-link'>
              <img src="/images/ControlPanel.png" alt="Control Panel" />
            </Link>
          </div>
          <div className='list'>
            <Link className='list-link'>
              <img src='/images/List.png' alt='list'/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

