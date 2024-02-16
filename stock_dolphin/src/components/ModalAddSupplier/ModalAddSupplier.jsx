import React, { useState, useEffect } from "react";
import "./ModalAddSupplier.css";
import { ModalHeader } from "../ModalHeader/ModalHeader";
import { ModalButtons } from "../ModalButtons/ModalButtons";

export const ModalAddSupplier = ({ closeModal, title, saveChanges }) => {
  const initialData = {
    name: "",
    address: "",
    phoneNumber: "",
    email: "",
  };
  const [formValues, setFormValues] = useState(initialData);
  const [isSubmit, setIsSubmit] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const validate = (values) => {
    const regexPhone = /^\+\d{1,3}\d{6,14}$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const errors = {};

    if (!values.name) errors.name = "Name is required";

    if (!values.address) errors.address = "Address is required";

    if (!values.phoneNumber) {
      errors.phoneNumber = "Phone number is required";
    } else if (!regexPhone.test(values.phoneNumber)) {
      errors.phoneNumber = "This is not a valid phone format";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regexEmail.test(values.email)) {
      errors.email = "This is not a valid email format";
    }
    return errors;
  };

  useEffect(() => {
    
  }, []); 

  const handleAddSupplier = async () => {
    const errors = validate(formValues);
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      try {
        let res = await fetch("http://127.0.0.1:9007/api/v1/supplier", {
          method: "POST",
          body: JSON.stringify(formValues),
          headers: {
            "Content-Type": "application/json",
          },
        });
        let jsonToObject = await res.json();
        
        if (!res.ok) {
          setFormValues(initialData);
          setIsSubmit(true);
          saveChanges(formValues);
        }
      } catch (err) {
        console.log(err);
      }
    }
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

  return (
    <div className="modal-order-background">
      <div className="modal-order-container">
        <ModalHeader title={title} closeModal={closeModal} />
        {isSubmit ? (
          <h1>New supplier added</h1>
        ) : (
          <form>
            <div className="form-field">
              <input
                type="text"
                value={formValues.name}
                onChange={handleChange}
                name="name"
                id="name"
                placeholder="Name*"
                required
              />
              {formErrors?.name && <p>{formErrors.name}</p>}
            </div>
            <hr className="smaller-hr" />
            <div className="form-field">
              <input
                type="text"
                value={formValues.address}
                onChange={handleChange}
                name="address"
                id="address"
                placeholder="Address*"
                required
              />
              {formErrors?.address && <p>{formErrors.address}</p>}
            </div>
            <hr className="smaller-hr" />
            <div className="form-field">
              <input
                type="tel"
                value={formValues.phoneNumber}
                onChange={handleChange}
                name="phoneNumber"
                id="phoneNumber"
                placeholder="Phone Number*"
                required
              />
              {formErrors?.phoneNumber && <p>{formErrors.phoneNumber}</p>}
            </div>
            <hr className="smaller-hr" />
            <div className="form-field">
              <input
                type="email"
                value={formValues.email}
                onChange={handleChange}
                name="email"
                id="email"
                placeholder="Email*"
                required
              />
              {formErrors?.email && <p>{formErrors?.email}</p>}
            </div>
            <hr className="smaller-hr" />
            <ModalButtons
              closeModal={closeModal}
              saveChanges={saveChanges}
              handleAddSupplier={handleAddSupplier}
            />
          </form>
        )}
      </div>
    </div>
  );
};