import React from "react";
import "./ModalAddSupplier.css";
import { ModalHeader } from "../ModalHeader/ModalHeader";
import { ModalButtons } from "../ModalButtons/ModalButtons";

export const ModalAddSupplier = ({ closeModal, title, saveChanges }) => {
  return (
    <div className="modal-order-background">
      <div className="modal-order-container">
        <ModalHeader title={title} closeModal={closeModal} />
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
          <ModalButtons closeModal={closeModal} saveChanges={saveChanges} />
        </form>
      </div>
    </div>
  );
};
