import React from 'react';
import "./ModalInvoice.css"

export const ModalInvoice = ({closeModal}) => {
  return (
    <div className='modal-invoice-background'>
      <div className='modal-invoice-container'>
        <div className='modal-invoice-header'>
          <h1>Add invoice</h1>
          <button onClick={()=> closeModal(false)}><img src="/images/Multiply.png" alt="multiply" /></button>
        </div>
      <input type="text" name="invoicename" id="invoicename" placeholder='Invoice Name' required/>
      <hr className='smaller-hr-invoice'/>
      <select className='select' name="supplier" id="supplier">
        <option value="">Supplier</option>
      </select>
      <hr className='smaller-hr-invoice'/>
      <input type="date" className='calendar-invoice' id="date" name="date" />
      <select className='select' name="selectorders" id="selectorders">
        <option value="">Select Orders</option>
      </select>
      <hr className='smaller-hr-invoice'/>
      <hr className='bigger-hr-invoice'/>
      <div className='buttons-model'>
        <button className="btn-cancel" onClick={()=>closeModal(false)}>CANCEL</button>
        <button className='btn-add'>Add Invoice</button>
      </div>
      </div>
    </div>
  )
}
