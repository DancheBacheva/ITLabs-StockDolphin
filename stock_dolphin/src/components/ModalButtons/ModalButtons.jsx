import React from "react";
import "./ModalButtons.css";

export const ModalButtons = ({ closeModal, saveChanges, handleSubmit }) => {
  return (
    <div>
      <div className="buttons-model">
        <button className="btn-cancel" onClick={() => closeModal(false)}>
          CANCEL
        </button>
        <button type="submit" className="btn-add" onClick={handleSubmit}>
          {saveChanges}
        </button>
      </div>
    </div>
  );
};
