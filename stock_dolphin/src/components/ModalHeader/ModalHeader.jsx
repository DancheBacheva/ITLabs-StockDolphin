import React from 'react';
import "./ModalHeader.css"

export const ModalHeader = ({title, closeModal}) => {
  return (
    <div>
        <div className="modal-header">
          <h1>{title}</h1>
          <button onClick={() => closeModal(false)}>
            <img src="/images/Multiply.png" alt="multiply" />
          </button>
        </div>
    </div>
  )
}
