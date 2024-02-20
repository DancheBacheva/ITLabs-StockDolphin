import React, { useState } from "react";
import { ModalDiscardConfirm } from "../ModalDiscardConfirm/ModalDiscardConfirm";
import "./ItemsCards.css";
import { Link } from "react-router-dom";

export const ItemsCards = ({ title, filteredItems, setFilteredItems }) => {
  const oneCategory = filteredItems.filter((item) => item.category.title === title);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [openModalDiscardConfirm, setOpenModalDiscardConfirm] = useState(false);

  const handleDeleteItem = async (itemId) => {
    try{
      const res = await fetch(
        `http://localhost:9003/api/v1/item/${itemId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if(res.ok) {
        const updatedItems = filteredItems.filter((item) => item._id !== itemId);
        setFilteredItems(updatedItems);
      } 
    }catch(err){
      console.log("Error deleting item", err);
    }
    setOpenModalDiscardConfirm(false);
    setSelectedItemId(null);
  }

  return (
    <div>
      <div className="main-card-item">
        {oneCategory.length > 0 ? (
          oneCategory.slice(0, 8).map((item) => (
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
                    setSelectedItemId(item._id);
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
                  itemId={selectedItemId}
                  handleDeleteItem={handleDeleteItem}
                  text={`Do you want to delete ${filteredItems.find((item) => item._id === selectedItemId)?.itemTitle}`}
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
