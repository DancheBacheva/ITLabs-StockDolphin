import React from "react";
import "./ModalEditItem.css";
import { ModalHeader } from "../ModalHeader/ModalHeader";
import { ModalButtons } from "../ModalButtons/ModalButtons";

export const ModalEditItem = ({ closeModal, modalTitle, saveChanges, itemTitle }) => {
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
          <ModalButtons closeModal={closeModal} saveChanges={saveChanges} />
        </form>
      </div>
    </div>
  );
};
