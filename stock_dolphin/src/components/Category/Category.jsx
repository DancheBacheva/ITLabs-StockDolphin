import { Add } from "../Add/Add";
import "./Category.css";
import React, { useState, useContext } from "react";
import { Modal } from "../Modal/Modal";
import { SearchBar } from "../SearchBar/SearchBar";
import { DataContext } from "../../App";
import { ItemsCards } from "../ItemsCards/ItemsCards";
import { ItemsList } from "../ItemsList/ItemsList";
import ModalAddItem from "../ModalAddItem/ModalAddItem";

export const Category = ({ title }) => {
  const { items } = useContext(DataContext);
  const [filteredItems, setFilteredItems] = useState(items);
  const [openModal, setOpenModal] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [showCards, setShowCards] = useState(true);

  const updateFilteredItems = (filteredData) => {
    setFilteredItems(filteredData);
  };

  const handleShowCards = () => {
    setShowCards(true);
  };

  const handleShowList = () => {
    setShowCards(false);
  };

  return (
    <div className="top-section-inventory">
      <div className="search-add-main">
        <div className="search-item">
          <SearchBar
            placeholderText={"Search Items"}
            name="itemTitle"
            data={filteredItems}
            setData={updateFilteredItems}
          />
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
        // <Modal
        //   closeModal={setOpenModal}
        //   modalTitle={"Add Item"}
        //   saveChanges={"ADD ITEM"}
        //   modalFor={"item"}
        // />
        <ModalAddItem
          closeModal={setOpenModal}
          modalTitle={"Add Item"}
          saveChanges={"ADD ITEM"}
        />
      )}
      <div>
        <div className="main-container-items">
          <div className="show-item-cards">
            {showCards ? (
              <ItemsCards
                title={title}
                filteredItems={filteredItems}
                setFilteredItems={setFilteredItems}
              />
            ) : (
              <ItemsList
                title={title}
                filteredItems={filteredItems}
                setFilteredItems={setFilteredItems}
              />
            )}
          </div>
          <div className="inventory-category-right">
            <div className="item-show">
              <button onClick={handleShowCards}>
                <img src="/images/ControlPanel.png" alt="Control Panel" />
              </button>
              <button onClick={handleShowList}>
                <img src="/images/List.png" alt="list" />
              </button>
            </div>
            <br />
          </div>
        </div>
        <button
          className="edit-category-btn"
          onClick={() => {
            setOpenModalEdit(true);
          }}
        >
          <div className="rectangle78">
            <img src="/images/Edit.png" alt="edit" />
          </div>
          <h4>Edit Category</h4>
        </button>
        {openModalEdit && (
          <Modal
            closeModal={setOpenModalEdit}
            modalTitle={"Edit Category"}
            saveChanges={"SAVE CHANGES"}
          />
        )}
      </div>
    </div>
  );
};
