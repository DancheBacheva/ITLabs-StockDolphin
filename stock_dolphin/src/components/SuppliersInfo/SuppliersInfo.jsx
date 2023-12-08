import React from 'react';
import "./SuppliersInfo.css";

export const SuppliersInfo = () => {
  return (
    <div>
      <div className='suppliersInfo-main-container'>
        <div className='supplier-card'>
          <div className='supplier-title'>
            <h2 className='supplier-name'>NAME</h2>
          </div>
          <div className='supplier-details'>
            <div className='supplier-address-box'>
              <span className='address-text'>Address:</span>
              <span className='address-info-text'>ADDRESS</span>
            </div>
            <hr className='supplier-line'/>
            <div className='supplier-phoneNumber-box'>
              <span className='phoneNumber-num'>Phone <br /> Number:</span>
              <span className='phoneNumber-info-num'>PHONE NUMBER</span>
            </div>
            <hr className='supplier-line'/>
            <div className='supplier-email-box'>
              <span className='email-text'>Email:</span>
              <span className='email-info-text'>EMAIL</span>
            </div>
            <hr className='supplier-line'/>
          </div>
          <div className='edit-delete-container'>
            <div className='edit-supplier'>
              <img className='edit-supplier-img' src='/images/icone-crayon-vert1.png' alt='edit supplier'/>
            </div>
            <div className='delete-supplier'>
              <img className='delete-supplier-img' src='/images/Delete.png' alt='delete supplier'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

