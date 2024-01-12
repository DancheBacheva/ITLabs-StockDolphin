import React from 'react';
import "./ModalOrder.css"

export const ModalOrder = ({closeModal}) => {
  return (
    <div className='modal-order-background'>
      <div className='modal-order-container'>
        <div className='modal-order-header'>
          <h1>Add Order</h1>
          <button onClick={()=> closeModal(false)}><img src="/images/Multiply.png" alt="multiply" /></button>
        </div>
      <select className='select-supplier' name="supplier" id="supplier">
        <option value="">Supplier</option>
      </select>
      <hr className='smaller-hr'/>
      <input type="text" name="quantity" id="quantity" placeholder='Quantity*' required/>
      <hr className='smaller-hr'/>
      <input type="text" name="totalprice" id="totalprice" placeholder='Total Price*' required/>
      <hr className='smaller-hr'/>
      <input type="date" className='calendar-order' id="date" name="date" />
      <hr className='bigger-hr'/>
      <div className='buttons-model'>
        <button className="btn-cancel" onClick={()=>closeModal(false)}>CANCEL</button>
        <button className='btn-add'>ADD ORDER</button>
      </div>
      </div>
    </div>
  )
}
