import { ItemsCards } from "../ItemsCards/ItemsCards";
import { ItemsList } from "../ItemsList/ItemsList";
import "./InventoryCategoryRight.css";
import React, { useState } from "react";
import { Modal } from "../Modal/Modal";

export const InventoryCategoryRight = ({ title, items }) => {
  const [showCards, setShowCards] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  const handleShowCards = () => {
    setShowCards(true);
  };

  const handleShowList = () => {
    setShowCards(false);
  };

  return (
    <div>
      <div className="main-container-items">
        <div className="show-item-cards">
          {showCards ? (
            <ItemsCards title={title} items={items} />
          ) : (
            <ItemsList title={title} items={items} />
          )}
        </div>
        <div className="inventory-category-right">
          <div className="item-show">
            <button className="control-panel-btn" onClick={handleShowCards}>
              <img src="/images/ControlPanel.png" alt="Control Panel" />
            </button>
            <button className="list-btn" onClick={handleShowList}>
              <img src="/images/List.png" alt="list" />
            </button>
          </div>
          <br />
        </div>
      </div>
      <button
        className="edit-category-btn"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        <div className="rectangle78">
          <img src="/images/Edit.png" alt="edit" />
        </div>
        <h4>Edit Category</h4>
      </button>
      {openModal && (
        <Modal
          closeModal={setOpenModal}
          title={"EDIT CATEGORY"}
          saveChanges={"SAVE CHANGES"}
        />
      )}
    </div>
  );
};
