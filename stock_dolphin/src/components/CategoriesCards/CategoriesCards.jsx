import "./CategoriesCards.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { ModalDiscardConfirm } from "../ModalDiscardConfirm/ModalDiscardConfirm";
import moment from "moment";

export const CategoriesCards = ({ filteredCategories, setFilteredCategories }) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [openModalDiscardConfirm, setOpenModalDiscardConfirm] = useState(false);

  const handleCategoryDelete = async (categoryId) => {
    try{
      const res = await fetch (`http://localhost:9001/api/v1/category/${categoryId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (res.ok) {
        const updatedCategories = filteredCategories.filter(
          (category) => category._id !== categoryId
        );
        setFilteredCategories(updatedCategories);
      }
      
    }catch(err){
      console.log("Error deleting category", err)
    }
    setOpenModalDiscardConfirm(false);
    setSelectedCategoryId(null);
  };

  return (
    <div>
      {filteredCategories.length > 0 ? (
        <div className="main-card-category">
          {filteredCategories.map((category) => (
            <div key={category._id} className="category-cards-container">
              <div className="images3-container">
                <div>
                  <img
                    className="image1"
                    src="/images/img1mouse.png"
                    alt="img1"
                  />
                </div>
                <div className="image2-3">
                  <img
                    className="image2"
                    src="/images/img2paper.png"
                    alt="img2"
                  />
                  <img
                    className="image3"
                    src="/images/img3pens.png"
                    alt="img3"
                  />
                </div>
              </div>
              <div className="card-bottom">
                <Link
                  to={`/inventory/${category.title}`}
                  className="link-cards"
                >
                  <h3 className="card-category-text">
                    <strong>{category.title}</strong>
                  </h3>
                </Link>
                <p className="content-category-text">
                  <strong>{category.items.length} Items</strong> | €338.00
                </p>
                <div className="date-remove">
                  <span className="updated-category">
                    Updated At:{" "}
                    <strong>
                      {moment(category.date).format("MM/DD/YYYY HH:mm")}
                    </strong>
                  </span>
                  <button
                    onClick={() => {
                      setOpenModalDiscardConfirm(true);
                      setSelectedCategoryId(category._id)
                    }}
                    className="delete-category"
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
                    categoryId={selectedCategoryId}
                    handleCategoryDelete={handleCategoryDelete}
                    text={
                      "Are you sure that you want to delete? All the items in the category will be deleted."
                    }
                    saveChanges={"CONFIRM"}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h1>Loading categories...</h1>
      )}
    </div>
  );
};
