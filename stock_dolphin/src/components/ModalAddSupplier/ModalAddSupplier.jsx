import React from "react";
import "./ModalAddSupplier.css";

export const ModalAddSupplier = ({ closeModal }) => {
  return (
    <div className="modal-order-background">
      <div className="modal-order-container">
        <div className="modal-order-header">
          <h1>Add Supplier</h1>
          <button onClick={() => closeModal(false)}>
            <img src="/images/Multiply.png" alt="multiply" />
          </button>
        </div>
        <form>
          <input
            className="nameSupplier"
            type="text"
            name="name"
            id="name"
            placeholder="Name*"
            required
          />
          <hr className="smaller-hr" />
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Address*"
            required
          />
          <hr className="smaller-hr" />
          <input
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="Phone Number*"
            required
          />
          <hr className="smaller-hr" />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email*"
            required
          />
          <hr className="smaller-hr" />
          <div className="buttons-model">
            <button className="btn-cancel" onClick={() => closeModal(false)}>
              CANCEL
            </button>
            <button className="btn-add">ADD SUPPLIER</button>
          </div>
        </form>
      </div>
    </div>
  );
};
