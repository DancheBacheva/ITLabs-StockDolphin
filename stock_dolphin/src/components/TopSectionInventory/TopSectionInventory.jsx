import React, { useState } from "react";
import { Modal } from "../Modal/Modal";
import "./TopSectionInventory.css";
import { Header } from "../Header/Header";
import { SearchBar } from "../SearchBar/SearchBar";
import { Add } from "../Add/Add";

export const TopSectionInventory = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="top-section-inventory-page">
      <Header headerTitle={"Inventory"} />
      <div className="search-add-main">
        <div className="search-category">
          <SearchBar placeholderText={"Search Categories"} />
        </div>
        <div className="add-category">
          <button
            className="add-category-btn"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            <Add addText={"ADD CATEGORY"} />
          </button>
        </div>
      </div>
      {openModal && (
        <Modal
          closeModal={setOpenModal}
          title={"ADD CATEGORY"}
          saveChanges={"ADD CATEGORY"}
        />
      )}
    </div>
  );
};
