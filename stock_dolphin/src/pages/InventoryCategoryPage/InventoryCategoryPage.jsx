import "./InventoryCategoryPage.css";
import { useParams } from "react-router-dom";
import React, { useContext } from "react";
import { DataContext } from "../../App";
import { Category } from "../../components/Category/Category";
import { InventoryCategoryRight } from "../../components/InventoryCategoryRight/InventoryCategoryRight";
import { Header } from "../../components/Header/Header";

export const InventoryCategoryPage = () => {
  const { items } = useContext(DataContext);
  const { title } = useParams();

  return (
    <div className="inventory-main">
      <Header headerTitle={"Inventory"} headerSubtitle={title} />
      <Category />
      <InventoryCategoryRight title={title} items={items} />
    </div>
  );
};
