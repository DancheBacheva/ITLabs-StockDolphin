// modal for add item, add category and edit category
import React from "react";
import "./Modal.css";
import { ModalHeader } from "../ModalHeader/ModalHeader";
import { ModalButtons } from "../ModalButtons/ModalButtons";

export const Modal = ({ closeModal, title, saveChanges }) => {
  return (
    <div className="modal-background">
      <div className="modal-container">
        <ModalHeader title={title} closeModal={closeModal} />
        <form action="" method="">
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
          <div className="add-photo">
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
