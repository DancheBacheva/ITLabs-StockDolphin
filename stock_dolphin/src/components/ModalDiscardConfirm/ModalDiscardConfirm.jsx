import React from "react";
import "./ModalDiscardConfirm.css";
import { ModalButtons } from "../ModalButtons/ModalButtons";

export const ModalDiscardConfirm = ({
  closeModal,
  text,
  supplierId,
  onDelete,
  saveChanges
}) => {
  const handleConfirmDelete = () => {
    onDelete(supplierId);
    closeModal(false);
  };

  return (
    <div className="modal-background">
      <div className="modal-container-discard-confirm">
        <p>{text}</p>
        <ModalButtons closeModal={closeModal} saveChanges={saveChanges} handleConfirmDelete={handleConfirmDelete}/>
      </div>
    </div>
  );
};
