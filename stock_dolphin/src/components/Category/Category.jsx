import { Add } from "../Add/Add";
import "./Category.css";
import React, { useState, useContext } from "react";
import { Modal } from "../Modal/Modal";
import { SearchBar } from "../SearchBar/SearchBar";
import { DataContext } from "../../App";
import { ItemsCards } from "../ItemsCards/ItemsCards";
import { ItemsList } from "../ItemsList/ItemsList";
import { ModalAddItem } from "../ModalAddItem/ModalAddItem";
import { useLocation } from "react-router-dom";

export const Category = ({ title }) => {
  let location = useLocation();
  console.log(location.pathname);
  const lastPart = location.pathname.split("/").pop();
  let formatedString = lastPart.replace(/[%0-9]/g, "/");
  const finalFormattedString = formatedString.replace("///", " ");
  console.log(formatedString);
  console.log(finalFormattedString);

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
    <>
      <div className="search-add-main">
        <div className="search-item">
          <SearchBar
            placeholderText={"Search Items"}
            name="itemTitle"
            data={filteredItems}
            setData={updateFilteredItems}
            originalData={items}
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
          categoryName={finalFormattedString}
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
                originalData={items}
              />
            ) : (
              <ItemsList
                title={title}
                filteredItems={filteredItems}
                setFilteredItems={setFilteredItems}
                originalData={items}
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
    </>
  );
};
