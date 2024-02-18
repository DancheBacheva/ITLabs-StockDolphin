import React, { useContext } from "react";
import { DataContext } from "../../App";
import "./ModalOrder.css";
import { ModalHeader } from "../ModalHeader/ModalHeader";
import { ModalButtons } from "../ModalButtons/ModalButtons";

export const ModalOrder = ({ closeModal, modalTitle, saveChanges }) => {
  const { suppliers } = useContext(DataContext);
  return (
    <div className="modal-order-background">
      <div className="modal-order-container">
        <ModalHeader modalTitle={modalTitle} closeModal={closeModal} />
        <form>
          <select className="select-supplier" name="supplier" id="supplier">
            <option>Supplier</option>
            {suppliers.map((supplier) => (
              <option key={supplier._id} value={supplier.name}>
                {supplier.name}
              </option>
            ))}
          </select>
          <hr className="smaller-hr" />
          <input
            className="quantity"
            type="number"
            name="quantity"
            id="quantity"
            placeholder="Quantity*"
            required
          />
          <hr className="smaller-hr" />
          <input
            type="number"
            name="totalprice"
            id="totalprice"
            placeholder="Total Price*"
            required
          />
          <hr className="smaller-hr" />
          <input type="date" id="date" name="date" />
          <hr className="bigger-hr" />
          <ModalButtons closeModal={closeModal} saveChanges={saveChanges} />
        </form>
      </div>
    </div>
  );
};
