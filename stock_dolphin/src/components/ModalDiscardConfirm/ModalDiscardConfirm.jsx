import React from "react";
import "./ModalDiscardConfirm.css";
import { ModalButtons } from "../ModalButtons/ModalButtons";

export const ModalDiscardConfirm = ({
  closeModal,
  text,
  supplierId,
  categoryId,
  handleDeleteSupplier,
  handleCategoryDelete,
  saveChanges
}) => {
  const handleConfirmDelete = () => {
    if(categoryId !== undefined) {
      handleCategoryDelete(categoryId);
    }else if(supplierId !== undefined){
      handleDeleteSupplier(supplierId);
    }
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
