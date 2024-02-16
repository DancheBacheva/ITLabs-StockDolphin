import React from "react";
import "./ModalButtons.css";

export const ModalButtons = ({
  closeModal,
  saveChanges,
  handleAddSupplier,
  handleConfirmDelete,
  handleAddCategory,
  handleAddItem,
}) => {
  return (
    <div>
      <div className="buttons-model">
        <button className="btn-cancel" onClick={() => closeModal(false)}>
          CANCEL
        </button>
        <button
          type="submit"
          className="btn-add"
          onClick={
            handleAddSupplier ||
            handleConfirmDelete ||
            handleAddCategory ||
            handleAddItem
          }
        >
          {saveChanges}
        </button>
      </div>
    </div>
  );
};
