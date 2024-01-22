import React, { useState, useContext } from "react";
import { DataContext } from "../../App";
import "./SuppliersInfo.css";
import { ModalDiscardConfirm } from "../ModalDiscardConfirm/ModalDiscardConfirm";

export const SuppliersInfo = () => {
  const { suppliers } = useContext(DataContext);
  const [openModalDiscardConfirm, setOpenModalDiscardConfirm] = useState(false);

  return (
    <div>
      <div className="suppliersInfo-main-container">
        {suppliers.map((supplier) => {
          return (
            <div className="supplier-card" key={supplier._id}>
              <div className="supplier-title">
                <h2>{supplier.name}</h2>
              </div>
              <div className="supplier-details">
                <div className="supplier-address-box">
                  <span className="address-text">Address:</span>
                  <span className="address-info-text">{supplier.address}</span>
                </div>
                <hr className="supplier-line" />
                <div className="supplier-phoneNumber-box">
                  <span className="phoneNumber-num">
                    Phone <br /> Number:
                  </span>
                  <span className="phoneNumber-info-num">
                    {supplier.phoneNumber}
                  </span>
                </div>
                <hr className="supplier-line" />
                <div className="supplier-email-box">
                  <span className="email-text">Email:</span>
                  <span className="email-info-text">{supplier.email}</span>
                </div>
                <hr className="supplier-line" />
              </div>
              <div className="edit-delete-container">
                <div className="edit-supplier">
                  <img
                    className="edit-supplier-img"
                    src="/images/icone-crayon-vert1.png"
                    alt="edit supplier"
                  />
                </div>
                <button
                  onClick={() => {
                    setOpenModalDiscardConfirm(true);
                  }}
                  className="delete-supplier"
                >
                  <img
                    className="delete-supplier-img"
                    src="/images/Delete.png"
                    alt="delete supplier"
                  />
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {openModalDiscardConfirm && (
        <ModalDiscardConfirm
          closeModal={setOpenModalDiscardConfirm}
          text={"Do you want to delete this supplier"}
          change={"CONFIRM"}
        />
      )}
    </div>
  );
};
