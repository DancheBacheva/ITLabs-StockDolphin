import React, { useState } from "react";
import "./CategoriesList.css";
import { Link } from "react-router-dom";
import { ModalDiscardConfirm } from "../ModalDiscardConfirm/ModalDiscardConfirm";
import moment from "moment";

export const CategoriesList = ({ categories }) => {
  const [openModalDiscardConfirm, setOpenModalDiscardConfirm] = useState(false);

  return (
    <div>
      {categories.length > 0 ? (
        <div className="main-list-category">
          {categories.map((category) => (
            <div key={category._id} className="list-container">
              <div className="images3-container-list">
                <div>
                  <img
                    className="image1-list"
                    src="/images/img1mouse.png"
                    alt="img1"
                  />
                </div>
                <div className="image2-3-list">
                  <img
                    className="image2-list"
                    src="/images/img2paper.png"
                    alt="img2"
                  />
                  <img
                    className="image3-list"
                    src="/images/img3pens.png"
                    alt="img3"
                  />
                </div>
              </div>
              <div className="middle-container-list">
                <Link
                  to={`/inventory/${category.title}`}
                  className="link-cards"
                >
                  <h3 className="list-category-text">
                    <strong>{category.title}</strong>
                  </h3>
                </Link>
                <p className="content-category-text-list">
                  <strong>{category.items.length} Items</strong> | €338.00
                </p>
              </div>
              <div className="date-remove-list">
                <hr />
                <span className="updated-date-category-list">
                  Updated At: <br />
                  <strong>{moment(category.date).format("MM/DD/YYYY HH:mm")}</strong>
                </span>
                <button
                  onClick={() => {
                    setOpenModalDiscardConfirm(true);
                  }}
                  className="delete-category-list"
                >
                  <img
                    className="delete-img-list"
                    src="/images/Delete.png"
                    alt="delete supplier"
                  />
                </button>
                {openModalDiscardConfirm && (
                  <ModalDiscardConfirm
                    closeModal={setOpenModalDiscardConfirm}
                    text={
                      "Are you sure that you want to delete? All the items in the category will be deleted."
                    }
                    change={"CONFIRM"}
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
