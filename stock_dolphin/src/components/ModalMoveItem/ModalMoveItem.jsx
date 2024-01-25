import React from 'react'
import "./ModalMoveItem.css";

export const ModalMoveItem = ({closeModal}) => {
  return (
    <div className='modal-move-background'>
      <div className='modal-container-move'>
        <div className='modal-header-move'>
          <h1>Move Item</h1>
          <button onClick={()=> closeModal(false)}><img src="/images/Multiply.png" alt="multiply" /></button>
        </div>
        <div className='modal-move-main'>
          <hr />
          <div>
            <div className='move-container'>
              <img src="/images/Folder1.png" alt="addImage" />
              <h2>Office Supplies</h2>
            </div>
            <div className='move-container'>
              <img src="/images/Folder1.png" alt="addImage" />
              <h2>Kitchen Supplies</h2>
            </div>
            <div className='move-container'>
              <img src="/images/Folder1.png" alt="addImage" />
              <h2>Sanitary Supplies</h2>
            </div>
            <div className='move-container'>
              <img src="/images/Folder1.png" alt="addImage" />
              <h2>Hardware Supplies</h2>
            </div>
          </div>
        </div>
        <button className='btn-move'>Move Item</button>
      </div>
    </div>
  )
}
