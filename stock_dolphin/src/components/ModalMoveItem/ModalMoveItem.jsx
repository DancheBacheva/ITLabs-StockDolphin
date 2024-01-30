import React, { useContext } from "react";
import { DataContext } from "../../App";
import "./ModalMoveItem.css";

export const ModalMoveItem = ({ closeModal }) => {
  const { categories } = useContext(DataContext);
  return (
    <div className="modal-move-background">
      <div className="modal-container-move">
        <div className="modal-header-move">
          <h1>Move Item</h1>
          <button onClick={() => closeModal(false)}>
            <img src="/images/Multiply.png" alt="multiply" />
          </button>
        </div>
        <div className="modal-move-main">
          <hr />
          <div>
            {categories.map((category) => (
              <div className="move-container">
                <img src="/images/Folder1.png" alt="addImage" />
                <h2>{category.title}</h2>
              </div>
            ))}
          </div>
        </div>
        <button className="btn-move">Move Item</button>
      </div>
    </div>
  );
};
