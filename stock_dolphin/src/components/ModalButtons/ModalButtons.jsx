import React from "react";
import "./ModalButtons.css";

export const ModalButtons = ({ closeModal, saveChanges }) => {
  return (
    <div>
      <div className="buttons-model">
        <button className="btn-cancel" onClick={() => closeModal(false)}>
          CANCEL
        </button>
        <button className="btn-add">{saveChanges}</button>
      </div>
    </div>
  );
};
