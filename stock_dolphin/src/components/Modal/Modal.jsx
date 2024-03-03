// modal for add item, add category and edit category
import React, { useState } from "react";
import "./Modal.css";
import { ModalHeader } from "../ModalHeader/ModalHeader";
import { ModalButtons } from "../ModalButtons/ModalButtons";

export const Modal = ({ closeModal, modalTitle, saveChanges, modalFor }) => {
  const initialData = {
    title: "",
    // itemTitle: "",
  };
  
  const [formValues, setFormValues] = useState(initialData);
  const [file, setFile] = useState();
  const [isSubmit, setIsSubmit] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    // const { name, value } = e.target;
  //   if (modalFor === "category" || modalFor === "item") {
  //     setFormValues({
  //       ...formValues,
  //       [name]: value,
  //     });

  //     setFormErrors({
  //       ...formErrors,
  //       [name]: "",
  //     });
  //   }
  // };
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

  const validate = (values) => {
    let errors = {};

    if (!values.title) errors.title = "Name is required";
    // if (!values.itemTitle) errors.itemTitle = "Name is required";
    // da se napravi validate za format na slika
    return errors;
  };

  const handleAddCategory = async () => {
    const errors = validate(formValues);
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      try {
        const res = await fetch("http://localhost:9001/api/v1/category", {
          method: "POST",
          body: JSON.stringify(formValues),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const resData = await res.json();

        console.log("resdata", resData);

        if (res.ok) {
          setFormValues(formValues);
          setIsSubmit(true);
          formValues(resData);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  // const handleAddItem = async () => {
  //   const errors = validate(formValues);
  //   setFormErrors(errors);
  //   if (Object.keys(errors).length === 0) {
  //     try {
  //       let res = await fetch("http://localhost:9003/api/v1/item", {
  //         method: "POST",
  //         body: JSON.stringify(formValues),
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       });
  //       let resData = await res.json();

  //       if (res.ok) {
  //         setFormValues(initialData);
  //         setIsSubmit(true);
  //         saveChanges(resData);
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  // };

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
                value={formValues.title}
                // value={
                //   modalFor === "category"
                //     ? formValues.title
                //     : formValues.itemTitle
                // }
                onChange={handleChange}
                name="title"
                // name={modalFor === "category" ? "title" : "itemTitle"}
                id="name"
                placeholder="Name*"
                required
              />
              {formErrors?.title && <p>{formErrors.title}</p>}
            </div>
            <hr className="smaller-hr" />
            <hr className="bigger-hr" />
            <div className="add-photo">
              <img src="/images/AddImage.png" alt="addImage" />
              <label htmlFor="file-input">(Add Photo, 2MB Total)</label>
              <input type="file" id="file-input" style={{ display: "none" }} onChange={(e)=>setFile(e.target.files[0])}/>
            </div>
            <hr className="bigger-hr" />
            <ModalButtons
              closeModal={closeModal}
              saveChanges={saveChanges}
              handleAddCategory={handleAddCategory}
              // handleAddItem={handleAddItem}
              // handleAction={modalFor === "category" ? handleAddCategory : handleAddItem}
            />
          </form>
        )}
      </div>
    </div>
  );
};
