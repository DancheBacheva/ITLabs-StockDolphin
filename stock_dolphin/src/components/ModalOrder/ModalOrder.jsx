import React, { useContext, useState } from "react";
import { DataContext } from "../../App";
import "./ModalOrder.css";
import { ModalHeader } from "../ModalHeader/ModalHeader";
import { ModalButtons } from "../ModalButtons/ModalButtons";

export const ModalOrder = ({ closeModal, modalTitle, saveChanges }) => {
  const { suppliers, orders } = useContext(DataContext);
  const initialData = {
    supplier: "",
    quantity: "",
    totalPrice: "",
    date: "",
  };
  const [selectedSupplier, setSelectedSupplier] = useState("");
  const [date, setDate] = useState("");
  const [formValues, setFormValues] = useState(initialData);
  const [isSubmit, setIsSubmit] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const validate = (values) => {
    const errors = {};

    if (!values.quantity) errors.quantity = "Quantity is required";

    if (!values.totalPrice) {
      errors.totalPrice = "Total Price is required";
    }
    return errors;
  };

  const handleSupplierChange = (e) => {
    setSelectedSupplier(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
    setFormErrors({
      ...formErrors,
      [name]: "",
    });
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleAddOrder = (e) => {
    const errors = validate(formValues);
    if (Object.keys(errors).length === 0) {
      closeModal();
    } else {
      setFormErrors(errors);
    }
    // da se napravi fetch na orders
  };

  return (
    <div className="modal-order-background">
      <div className="modal-order-container">
        <ModalHeader modalTitle={modalTitle} closeModal={closeModal} />
        <form>
          <select
            className="select-supplier"
            name="supplier"
            id="supplier"
            value={selectedSupplier}
            onChange={handleSupplierChange}
          >
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
            value={formValues.quantity}
            onChange={handleChange}
            name="quantity"
            id="quantity"
            placeholder="Quantity*"
            required
          />
          <hr className="smaller-hr" />
          <input
            type="number"
            value={formValues.totalPrice}
            onChange={handleChange}
            name="totalPrice"
            id="totalPrice"
            placeholder="Total Price*"
            required
          />
          <hr className="smaller-hr" />
          <input
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={handleDateChange}
          />
          <hr className="bigger-hr" />
          <ModalButtons
            closeModal={closeModal}
            saveChanges={saveChanges}
            handleAddOrder={handleAddOrder}
          />
        </form>
      </div>
    </div>
  );
};
