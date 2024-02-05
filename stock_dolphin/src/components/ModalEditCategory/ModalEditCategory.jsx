import React from "react";
import "./ModalEditCategory.css";
/*da se proverat klasi */
export const ModalEditCategory = ({ closeModal, title, saveChanges }) => {
  return (
    <div className="modal-background">
      <div className="modal-container-edit">
        <div className="modal-header-edit">
          <h1>{title}</h1>
          <button onClick={() => closeModal(false)}>
            <img src="/images/Multiply.png" alt="multiply" />
          </button>
        </div>
        <form>
          <input
            className="input-modal-name"
            type="text"
            name="name"
            id="name"
            placeholder="Name*"
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
          <div className="buttons-model">
            <button className="btn-cancel" onClick={() => closeModal(false)}>
              CANCEL
            </button>
            <button className="btn-add">{saveChanges}</button>
          </div>
        </form>
      </div>
    </div>
  );
};
