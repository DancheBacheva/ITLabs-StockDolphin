import React, { useState } from "react";
import { ModalDiscardConfirm } from "../ModalDiscardConfirm/ModalDiscardConfirm";
import "./ItemsCards.css";
import { Link } from "react-router-dom";

export const ItemsCards = ({ title, filteredItems }) => {
  const oneCategory = filteredItems.filter((item) => item.category.title === title);
  const [openModalDiscardConfirm, setOpenModalDiscardConfirm] = useState(false);

  return (
    <div>
      <div className="main-card-item">
        {oneCategory.length > 0 ? (
          oneCategory.map((item) => (
            <div key={item._id} className="cards-container">
              <div className="item-image-container">
                <img className="item-image" src={`/img/items/${item.icon}`} alt={`Icon for ${item.itemTitle}`}/>
              </div>
              <Link
                to={`/inventory/${title}/${item.itemTitle}`}
                className="link-cards"
              >
                <h3 className="card-item-text">
                  <strong>{item.itemTitle}</strong>
                </h3>
              </Link>
              <p className="content-item-text">
                <strong>3 Purchase records</strong> | €338.00
              </p>
              <div className="remove-item">
                <button
                  onClick={() => {
                    setOpenModalDiscardConfirm(true);
                  }}
                  className="delete-item"
                >
                  <img
                    className="delete-img"
                    src="/images/Delete.png"
                    alt="delete supplier"
                  />
                </button>
              </div>
              {openModalDiscardConfirm && (
                <ModalDiscardConfirm
                  closeModal={setOpenModalDiscardConfirm}
                  text={"Do you want to delete this item"}
                  saveChanges={"CONFIRM"}
                />
              )}
            </div>
          ))
        ) : (
          <p>No items for the selected category</p>
        )}
      </div>
    </div>
  );
};
