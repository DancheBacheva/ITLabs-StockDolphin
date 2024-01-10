import React from 'react';
import "./Orders.css"
// da se proverat klasi
export const Orders = () => {
  return (
    <div>
      <div className='main-container-up'>
        <div className='total-container'>
          <p>Total Orders: &nbsp;<strong>22</strong></p>
          <p>Total Cost: &nbsp;<strong>€180.00</strong></p>
          <p>Total Invoices: &nbsp;<strong>12</strong></p>
        </div>
        <button
          className='add-order-btn'
          onClick={()=>{}}>
            <div className='inside-btn'>
              <div className='rectangle37'>
                <img className='add-new' src="/images/AddNew.png" alt="Add new" />
                </div>
                <p className='text-btn'>ADD ORDER</p>
            </div>
        </button>
      </div>
      <div className='orders-invoice'>
        <h1>Orders</h1>
        <button>Generate invoice</button>
      </div>
      <hr className='hr-orders' />
      <div className='table-item-container'>
        <div className='table-container'>
          <button><img className="descending-sorting" src="/images/DescendingSorting.png" alt="Descending Sorting" /></button>
          <br />
          <table>
            <thead>
              <tr>
                <th>Quantity</th>
                <th>Total price</th>
                <th>Price per unit</th>
                <th>Ordered at</th>
                <th>Supplier</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1292 units</td>
                <td>€1999</td>
                <td>€1.99</td>
                <td>10/10/2023</td>
                <td>Amazon Ltd Electronics</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='item-details-container'>
            <div className='item-image-container'>
              <div>
              <img src="/images/Rectangle70.png" alt="item" />
              </div>
              <div className='epipse21'>
              <img className="editgreen" src="/images/EditGreen.png" alt="edit" />
              </div>
            </div>
            <div className='name-container'>Name: <strong>Mouse</strong></div>
            <div className='folder-save-container'>
              <button className='add-folder'><img className="add-folder-img" src="/images/AddFolder.png" alt="" /></button>
              <button className='save-item'>SAVE</button>
            </div>
        </div>
      </div>
    </div>
  )
}
