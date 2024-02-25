import React, { useState, useContext } from "react";
import { DataContext } from "../../App";
import "./SuppliersInfo.css";
import { SearchBar } from "../SearchBar/SearchBar";
import { Add } from "../Add/Add";
import { ModalAddSupplier } from "../ModalAddSupplier/ModalAddSupplier";
import { ModalDiscardConfirm } from "../ModalDiscardConfirm/ModalDiscardConfirm";
// import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

export const SuppliersInfo = () => {
  const { suppliers, setSuppliers } = useContext(DataContext);
  const [selectedSupplierId, setSelectedSupplierId] = useState(null);
  const [filteredSuppliers, setFilteredSuppliers] = useState(suppliers);
  const [openModalAddSupplier, setOpenModalAddSupplier] = useState(false);
  const [openModalDiscardConfirm, setOpenModalDiscardConfirm] = useState(false);
  const [editSupplier, setEditSupplier] = useState(null);

  const handleEditSupplier = async (supplierId) => {
     try {
       const res = await fetch(
        `http://127.0.0.1:9007/api/v1/supplier/${supplierId}`,
        {
          method: "PATCH",
           body: JSON.stringify(editSupplier), 
          headers: {
             Authorization: `Bearer ${localStorage.getItem("token")}`,
           },
         }
       );
       const resData = await res.json();

      if (res.ok) {
        setEditSupplier(supplierId);
        setOpenModalAddSupplier(true);
        setSuppliers(resData);
      }
    } catch (error) {
      console.log("Error editing supplier", error);
    }
  };

  const handleDeleteSupplier = async (supplierId) => {
    try {
      const res = await fetch(
        `http://127.0.0.1:9007/api/v1/supplier/${supplierId}`,
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
      <div className="search-add-main">
        <SearchBar
          placeholderText="Search Suppliers"
          name="name"
          data={suppliers}
          setData={updateFilteredSuppliers}
        />
        <button
          className="add-supplier-btn"
          onClick={() => {
            setOpenModalAddSupplier(true);
          }}
        >
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
                  <button
                    className="edit-supplier"
                    onClick={() => {
                      handleEditSupplier(supplier._id);
                    }}
                  >
                    <img
                      className="edit-btn"
                      src="/images/icone-crayon-vert1.png"
                      alt="edit supplier"
                    />
                    {/* <span className="actions">
                      <BsFillPencilFill className="edit-btn" />
                    </span> */}
                  </button>
                  <button
                    onClick={() => {
                      setOpenModalDiscardConfirm(true);
                      setSelectedSupplierId(supplier._id);
                    }}
                    className="delete-supplier"
                  >
                    <img
                      className="delete-btn"
                      src="/images/Delete.png"
                      alt="delete supplier"
                    />
                    {/* <BsFillTrashFill className="delete-btn" /> */}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <h1>Loading suppliers...</h1>
      )}
      {openModalAddSupplier && (
        <ModalAddSupplier
          modalTitle={editSupplier !== null ? "Edit Supplier" : "Add Supplier"}
          closeModal={() => {
            setOpenModalAddSupplier(false);
            setEditSupplier(null);
          }}
          saveChanges={editSupplier !== null ? "SAVE CHANGES" : "ADD SUPPLIER"}
          defaultValues={
            editSupplier !== null
              ? suppliers.find((supplier) => supplier._id === editSupplier)
              : null
          }
          handleEditSupplier={handleEditSupplier}
        />
      )}
      {openModalDiscardConfirm && (
        <ModalDiscardConfirm
          closeModal={setOpenModalDiscardConfirm}
          supplierId={selectedSupplierId}
          handleDeleteSupplier={handleDeleteSupplier}
          text={"Do you want to delete this supplier"}
          saveChanges={"CONFIRM"}
        />
      )}
    </div>
  );
};
