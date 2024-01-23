import "./InventoryCategoryPage.css";
import { useParams } from "react-router-dom";
import React, { useContext } from "react";
import { DataContext } from "../../App";
import { Category } from "../../components/Category/Category";
import { InventoryCategoryRight } from "../../components/InventoryCategoryRight/InventoryCategoryRight";

export const InventoryCategoryPage = () => {
  const { items } = useContext(DataContext);
  const { title } = useParams();

  return (
    <div className="inventory-main">
      <div className="top-section">
        <h1 className="inventory-title-category">
          Inventory {">"} {title}
        </h1>
      </div>
      <Category />
      <InventoryCategoryRight title={title} items={items} />
    </div>
  );
};
