import React, { useState } from "react";
import "./ModalAddItem.css";
import { ModalHeader } from "../ModalHeader/ModalHeader";
import { ModalButtons } from "../ModalButtons/ModalButtons";

export const ModalAddItem = ({ closeModal, modalTitle, saveChanges }) => {
  const initialData = {
    itemTitle: "",
  };
  const [formValues, setFormValues] = useState(initialData);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setFormErrors({ ...formErrors, [name]: ""})
  };

  const validate = (values) => {
    let errors = {};
    if (!values.itemTitle) errors.itemTitle = "Name is required";
    // da se napravi validate za format na slika
    return errors;
  };

    const handleAddItem = async () => {
    const errors = validate(formValues);
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      try {
        let res = await fetch("http://localhost:9003/api/v1/item", {
          method: "POST",
          body: JSON.stringify(formValues),
          headers: {
            "Content-Type": "application/json",
          },
        });
        let resData = await res.json();
  console.log("res", res)
        if (res.ok) {
          setFormValues(formValues);
          setIsSubmit(true);
        }
        console.log()
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="modal-background">
      <div className="modal-container">
        <ModalHeader modalTitle={modalTitle} closeModal={closeModal} />
        {isSubmit ? (
          <h1>Successfully added</h1>
        ) : (
          <form>
            <div className="form-field">
              <input
                className="input-modal-name"
                type="text"
                value={formValues.itemTitle}
                onChange={handleChange}
                name="itemTitle"
                id="name"
                placeholder="Name*"
                required
              />
              {formErrors?.itemTitle && <p>{formErrors.itemTitle}</p>}
            </div>
            <hr className="smaller-hr" />
            <hr className="bigger-hr" />
            <div className="add-photo">
              <img src="/images/AddImage.png" alt="addImage" />
              <label for="file-input">(Add Photo, 2MB Total)</label>
              <input type="file" id="file-input" style={{ display: "none" }} />
            </div>
            <hr className="bigger-hr" />
            <ModalButtons
              closeModal={closeModal}
              saveChanges={saveChanges}
              handleAddItem={handleAddItem}
            />
          </form>
        )}
      </div>
    </div>
  );
};

export default ModalAddItem;
