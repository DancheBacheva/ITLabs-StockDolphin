import "./ItemsList.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { ModalDiscardConfirm } from "../ModalDiscardConfirm/ModalDiscardConfirm";
import moment from "moment";

export const ItemsList = ({ title, filteredItems }) => {
  const oneCategory = filteredItems.filter(
    (item) => item.category.title === title
  );
  const [openModalDiscardConfirm, setOpenModalDiscardConfirm] = useState(false);

  return (
    <div>
      <div className="main-list-item">
        {oneCategory.length > 0 ? (
          oneCategory.map((item) => (
            <div key={item._id} className="list-container">
              <img
                className="item-image"
                src={`/img/items/${item.icon}`}
                alt={`Icon for ${item.itemTitle}`}
              />
              <div className="middle-container-list">
                <Link
                  to={`/inventory/${title}/${item.itemTitle}`}
                  className="link-list"
                >
                  <h3 className="list-item-text">
                    <strong>{item.itemTitle}</strong>
                  </h3>
                </Link>
                <p className="content-item-text-list">
                  <strong>3 Purchase records</strong> | €338.00
                </p>
              </div>
              <div className="date-remove-list">
                <hr />
                <span className="updated-date-item-list">
                  Updated At: <br />
                  <strong>
                    {moment(item.date).format("MM/DD/YYYY HH:mm")}
                  </strong>
                </span>
                <button
                  onClick={() => {
                    setOpenModalDiscardConfirm(true);
                  }}
                  className="delete-item-list"
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
                  change={"CONFIRM"}
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
