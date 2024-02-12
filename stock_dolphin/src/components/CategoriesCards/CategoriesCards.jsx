import "./CategoriesCards.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { ModalDiscardConfirm } from "../ModalDiscardConfirm/ModalDiscardConfirm";
import moment from "moment";

export const CategoriesCards = ({ filteredCategories }) => {
  const [openModalDiscardConfirm, setOpenModalDiscardConfirm] = useState(false);
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
