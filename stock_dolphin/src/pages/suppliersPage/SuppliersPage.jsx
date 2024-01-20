import React from "react";
import "./SuppliersPage.css";
import { TopSectionSuppliers } from "../../components/TopSectionSuppliers/TopSectionSuppliers";
import { SuppliersInfo } from "../../components/SuppliersInfo/SuppliersInfo";

export const SuppliersPage = () => {
  return (
    <div className="supplier-main">
      <TopSectionSuppliers/>
      <SuppliersInfo/>
    </div>
  )
}

 