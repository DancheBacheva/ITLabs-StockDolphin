import React from "react";
import "./ModalDiscardConfirm.css";

export const ModalDiscardConfirm = ({
  closeModal,
  text,
  change,
  supplierId,
  onDelete,
}) => {
  const handleConfirmDelete = () => {
    onDelete(supplierId);
    closeModal(false);
  };

  return (
    <div className="modal-background">
      <div className="modal-container-discard-confirm">
        <p>{text}</p>
        <div className="buttons-model">
          <button
           onClick={() => closeModal(false)} className="btn-cancel">
            CANCEL
          </button>
          <button
            onClick={handleConfirmDelete} className="btn-discard-confirm">
            {change}
          </button>
        </div>
      </div>
    </div>
  );
};
