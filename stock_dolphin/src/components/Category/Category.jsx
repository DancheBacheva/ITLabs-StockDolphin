import { Add } from "../Add/Add";
import "./Category.css";
import React, { useState } from "react";
import { Modal } from "../Modal/Modal";
import { SearchBar } from "../SearchBar/SearchBar";

export const Category = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="top-section-inventory">
      <div className="search-add-main">
        <div className="search-item">
          <SearchBar placeholderText={"Search Items"} />
        </div>
        <div className="add-item">
          <button
            className="add-item-btn"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            <Add addText={"ADD ITEM"} />
          </button>
        </div>
      </div>
      {openModal && (
        <Modal
          closeModal={setOpenModal}
          title={"ADD ITEM"}
          saveChanges={"ADD ITEM"}
        />
      )}
    </div>
  );
};
