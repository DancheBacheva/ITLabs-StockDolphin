import React, { useContext } from "react";
import { DataContext } from "../../App";
import "./ModalInvoice.css";

export const ModalInvoice = ({ closeModal }) => {
  const { suppliers, orders } = useContext(DataContext);

  return (
    <div className="modal-invoice-background">
      <div className="modal-invoice-container">
        <div className="modal-invoice-header">
          <h1>Add invoice</h1>
          <button onClick={() => closeModal(false)}>
            <img src="/images/Multiply.png" alt="multiply" />
          </button>
        </div>
        <form>
          <input
            className="invoice-name"
            type="text"
            name="invoicename"
            id="invoicename"
            placeholder="Invoice Name"
            required
          />
          <hr className="smaller-hr-invoice" />
          <select className="select-supplier" name="supplier" id="supplier">
            <option>Supplier</option>
            {suppliers.map((supplier) => (
              <option key={supplier._id} value={supplier.name}>
                {supplier.name}
              </option>
            ))}
          </select>
          <hr className="smaller-hr-invoice" />
          <input
            type="date"
            className="calendar-invoice"
            id="date"
            name="date"
          />
          <select className="select" name="selectorders" id="selectorders">
            <option value="">Select Orders</option>
            {orders.map((order)=> (
              <option key={order._id} value={order.name}>{order.itemTitle + " " + order.quantity}</option>
            ))}
          </select>
          <hr className="smaller-hr-invoice" />
          <hr className="bigger-hr-invoice" />
          <div className="buttons-model">
            <button className="btn-cancel" onClick={() => closeModal(false)}>
              CANCEL
            </button>
            <button className="btn-add">Add Invoice</button>
          </div>
        </form>
      </div>
    </div>
  );
};
