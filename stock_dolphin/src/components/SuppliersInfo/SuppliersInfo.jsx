import React, { useState, useContext } from "react";
import { DataContext } from "../../App";
import "./SuppliersInfo.css";
import { ModalDiscardConfirm } from "../ModalDiscardConfirm/ModalDiscardConfirm";
import { SearchBar } from "../SearchBar/SearchBar";
import { Add } from "../Add/Add";

export const SuppliersInfo = () => {
  const { suppliers, setSuppliers } = useContext(DataContext);
  const [openModalDiscardConfirm, setOpenModalDiscardConfirm] = useState(false);
  const [selectedSupplierId, setSelectedSupplierId] = useState(null);
  const [filteredSuppliers, setFilteredSuppliers] = useState(suppliers);
 
  const handleDelete = async (supplierId) => {
    try {
      const res = await fetch(
        `http://localhost:9007/api/v1/supplier/${supplierId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (res.ok) {
        setSuppliers((prevSuppliers) =>
          prevSuppliers.filter((supplier) => supplier._id !== supplierId)
        );
      }
    } catch (error) {
      console.log("Error deleting supplier", error);
    }
    setOpenModalDiscardConfirm(false);
    setSelectedSupplierId(null);
  };

  const updateFilteredSuppliers = (filteredData) => {
    setFilteredSuppliers(filteredData);
  };

  return (
    <div>
      <div className="search-add-suppliers">
        <SearchBar placeholderText="Search Suppliers"
        data={suppliers}
        setData={updateFilteredSuppliers}/>
        <button className="add-supplier-btn">
          <Add addText={"ADD SUPPLIER"} />
        </button>
      </div>
      {filteredSuppliers.length > 0 ? (
        <div className="suppliersInfo-main-container">
          {filteredSuppliers.map((supplier) => {
            return (
              <div className="supplier-card" key={supplier._id}>
                <div className="supplier-title">
                  <h2>{supplier.name}</h2>
                </div>
                <div className="supplier-details">
                  <div className="supplier-address-box">
                    <span className="address-text">Address:</span>
                    <span className="address-info-text">
                      {supplier.address}
                    </span>
                  </div>
                  <hr className="supplier-line" />
                  <div className="supplier-phoneNumber-box">
                    <span className="phoneNumber-num">
                      Phone <br /> Number:
                    </span>
                    <span className="phoneNumber-info-num">
                      {supplier.phoneNumber}
                    </span>
                  </div>
                  <hr className="supplier-line" />
                  <div className="supplier-email-box">
                    <span className="email-text">Email:</span>
                    <span className="email-info-text">{supplier.email}</span>
                  </div>
                  <hr className="supplier-line" />
                </div>
                <div className="edit-delete-container">
                  <div className="edit-supplier">
                    <img
                      className="edit-supplier-img"
                      src="/images/icone-crayon-vert1.png"
                      alt="edit supplier"
                    />
                  </div>
                  <button
                    onClick={() => {
                      setOpenModalDiscardConfirm(true);
                      setSelectedSupplierId(supplier._id);
                    }}
                    className="delete-supplier"
                  >
                    <img
                      className="delete-supplier-img"
                      src="/images/Delete.png"
                      alt="delete supplier"
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <h1>Loading suppliers...</h1>
      )}
      {openModalDiscardConfirm && (
        <ModalDiscardConfirm
          closeModal={() => setOpenModalDiscardConfirm(false)}
          supplierId={selectedSupplierId}
          onDelete={handleDelete}
          text={"Do you want to delete this supplier"}
          change={"CONFIRM"}
        />
      )}
    </div>
  );
};
