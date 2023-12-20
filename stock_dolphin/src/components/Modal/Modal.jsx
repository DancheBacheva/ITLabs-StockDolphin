import React, { useState } from 'react';
import "./Modal.css";

export const Modal = ({closeModal, title}) => {
  return (
    <div>
      <div className='modal-container'>
        <div className='modal-header'>
          <h1>{title}</h1>
          <button onClick={()=> closeModal(false)}><img src="/images/Multiply.png" alt="multiply" /></button>
        </div>
      <input className='input-modal-name' type="text" name="name" id="name" placeholder='Name*' required/>
      <hr className='smaller-hr'/>
      <hr className='bigger-hr'/>
      <div className='add-photo'>
        <img src="/images/AddImage.png" alt="" />
        <p>(Add Photo, 2MB Total)</p>
      </div>
      <hr className='bigger-hr' />
      <div className='buttons-model'>
        <button className="btn-cancel" onClick={()=>closeModal(false)}>CANCEL</button>
        <button className='btn-add'>{title}</button>
      </div>
      <input type="file" />
      </div>
    </div>
  )
}
