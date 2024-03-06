import React, { useContext, useState, useEffect } from "react";
import "./ModalEditItem.css";
import { ModalHeader } from "../ModalHeader/ModalHeader";
import { ModalButtons } from "../ModalButtons/ModalButtons";
import { DataContext } from "../../App";

export const ModalEditItem = ({
  closeModal,
  modalTitle,
  saveChanges,
  itemTitle,
}) => {
  const { items, setItems } = useContext(DataContext);
  const initialData = {
    itemTitle: itemTitle,
  };

  const [formValues, setFormValues] = useState(initialData);
  const [isEdited, setIsEdited] = useState(false);

  useEffect(() => {
    console.log(formValues);
  }, [formValues]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleEditItem = async (e) => {
    const item = items.find((item) => item.itemTitle === itemTitle);
    const itemId = item._id;
    console.log("item", item);
    console.log("itemId", itemId);
    try {
      e.preventDefault();
      const res = await fetch(`http://localhost:9003/api/v1/item/${itemId}`, {
        method: "PATCH",
        body: JSON.stringify(formValues),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (res.ok) {
        setIsEdited(true);
        closeModal(false);
        const updatedItems = items.map((it) => {
          if (it._id === item._id) {
            return { ...it, ...formValues };
          }
          return it;
        });
        setItems(updatedItems);
      } else {
        e.preventDefault();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="modal-background">
      <div className="modal-container-edit">
        <ModalHeader modalTitle={modalTitle} closeModal={closeModal} />
        <form>
          <input
            className="input-modal-name"
            type="text"
            name="name"
            id="name"
            value={formValues.itemTitle}
            onChange={handleChange}
            placeholder={itemTitle}
            required
          />
          <hr className="smaller-hr" />
          <hr className="bigger-hr" />
          <div className="photo-container">
            <img src="/images/AddImage.png" alt="addImage" />
            <label for="file-input">(Add Photo, 2MB Total)</label>
            <input type="file" id="file-input" style={{ display: "none" }} />
          </div>
          <hr className="bigger-hr" />
          {/* <ModalButtons closeModal={closeModal} saveChanges={saveChanges} /> */}
          <div className="buttons-model">
              <button className="btn-cancel" onClick={() => closeModal(false)}>
                CANCEL
              </button>
              <button
                type="submit"
                className="btn-add"
                onClick={handleEditItem}
              >
                {saveChanges}
              </button>
            </div>
        </form>
      </div>
    </div>
  );
};
