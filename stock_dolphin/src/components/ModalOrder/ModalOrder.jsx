import React, { useContext } from "react";
import { DataContext } from "../../App";
import "./ModalOrder.css";

export const ModalOrder = ({ closeModal }) => {
  const { suppliers } = useContext(DataContext);
  return (
    <div className="modal-order-background">
      <div className="modal-order-container">
        <div className="modal-order-header">
          <h1>Add Order</h1>
          <button onClick={() => closeModal(false)}>
            <img src="/images/Multiply.png" alt="multiply" />
          </button>
        </div>
        <select className="select-supplier" name="supplier" id="supplier">
          {suppliers.map((supplier) => (
            <option key={supplier._id} value={supplier.name}>
              {supplier.name}
            </option>
          ))}
        </select>
        <hr className="smaller-hr" />
        <input
          className="quantity"
          type="text"
          name="quantity"
          id="quantity"
          placeholder="Quantity*"
          required
        />
        <hr className="smaller-hr" />
        <input
          type="text"
          name="totalprice"
          id="totalprice"
          placeholder="Total Price*"
          required
        />
        <hr className="smaller-hr" />
        <input type="date" id="date" name="date" />
        <hr className="bigger-hr" />
        <div className="buttons-model">
          <button className="btn-cancel" onClick={() => closeModal(false)}>
            CANCEL
          </button>
          <button className="btn-add">ADD ORDER</button>
        </div>
      </div>
    </div>
  );
};
