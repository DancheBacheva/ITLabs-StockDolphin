import "./Category.css";
import React, { useState } from 'react'
import { Modal } from "../Modal/Modal";
//da se proverat site klasi//

export const Category = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className='top-section-inventory'>
      <hr className='line-inventory'/>
      <div className='search-add-main'>
        <div className='search-item'>
          <label className="search-label" for="search">
          <img className='search-img' src="/images/Search.png" alt="Search" />  
          <input className='input-search' type="text" id="item-search" name="item-search" placeholder='Search items'/></label>
        </div>
        <div className='add-item'>
          <button
          className='add-item-btn'
          onClick={()=>{setOpenModal(true)}}>
            <div className='inside-btn'>
              <div className='rectangle37'>
                <img className='add-new' src="/images/AddNew.png" alt="Add new" />
                </div>
                <p className='text-btn'>ADD ITEM</p>
            </div>
          </button>
        </div>
      </div>
      {openModal && <Modal closeModal={setOpenModal} title={"ADD ITEM"} saveChanges={"ADD ITEM"}/>}
    </div>
  )
}

