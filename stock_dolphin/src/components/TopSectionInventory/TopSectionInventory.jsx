import React, { useState } from 'react'
import { Modal } from "../Modal/Modal";
import "./TopSectionInventory.css";

export const TopSectionInventory = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className='top-section-inventor-page'>
      <div className='top-section-inventory'>
        <h1 className='inventory-title'>Inventory</h1>
      </div>
      <hr className='line-inventory'/>
      <div className='search-add-main'>
        <div className='search-category'>
          <label className="search-label" for="search">
          <img className='search-img' src="/images/Search.png" alt="Search" />  
          <input className='input-search' type="text" id="category-search" name="category-search" placeholder='Search categories'/></label>
        </div>
        <div className='add-category'>
          <button className='add-category-btn' onClick={()=>{setOpenModal(true)}}>
            <div className='inside-btn'>
              <div className='rectangle37'>
                <img className='add-new' src="/images/AddNew.png" alt="Add new" />
                </div>
                <p className='text-btn'>ADD CATEGORY</p>
            </div>
          </button>
        </div>
      </div>
      {openModal && <Modal closeModal={setOpenModal} title={"ADD CATEGORY"} saveChanges={"ADD CATEGORY"}/>}
    </div>
  )
}

