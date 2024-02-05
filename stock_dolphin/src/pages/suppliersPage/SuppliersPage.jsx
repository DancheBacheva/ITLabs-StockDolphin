import React from "react";
import "./SuppliersPage.css";
import { Header } from "../../components/Header/Header";
import { SuppliersInfo } from "../../components/SuppliersInfo/SuppliersInfo";


export const SuppliersPage = () => {
  return (
    <div className="supplier-main">
      <Header headerTitle={"Suppliers"}/>
      <SuppliersInfo/>
    </div>
  )
}

 