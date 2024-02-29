import React, { useState, useContext } from "react";
import { DataContext } from "../../App";
import "./Orders.css";
import { useParams } from "react-router-dom";
import { ModalOrder } from "../ModalOrder/ModalOrder";
import { ModalInvoice } from "../ModalInvoice/ModalInvoice";
import { ModalEditItem } from "../ModalEditItem/ModalEditItem";
import { ModalMoveItem } from "../ModalMoveItem/ModalMoveItem";
import { Add } from "../Add/Add";
import moment from "moment";

export const Orders = () => {
  const { orders, items } = useContext(DataContext);
  const { itemTitle } = useParams();
  const [openModal, setOpenModal] = useState(false);
  const [openModalInvoice, setOpenModalInvoice] = useState(false);
  const [openModalEditCategory, setOpenModalEditCategory] = useState(false);
  const [openModalMoveItem, setOpenModalMoveItem] = useState(false);

  const oneItem = orders.filter((order) => order.itemTitle === itemTitle);
  const itemImg = items.find((item) => item.itemTitle === itemTitle)?.icon;

  const calculateTotalPrice = (order) => {
    return order.quantity * order.pricePerUnit;
  };

  // const totalCost = Math.round(
  //   orders.reduce((acc, order) => {
  //     const orderCost = order.quantity * order.pricePerUnit;
  //     return acc + orderCost;
  //   }, 0)
  // );

  const totalCostOneItem = Math.round(
    oneItem.reduce((acc, order)=> {
    const oneOrderCost = order.quantity * order.pricePerUnit;
    return acc + oneOrderCost
  }, 0)
  )

  return (
    <div>
      <div className="main-container-up">
        <div className="total-container">
          <p>
            Total Orders: &nbsp;<strong>{oneItem.length}</strong>
          </p>
          <p>
            Total Cost: &nbsp;<strong>€{totalCostOneItem}</strong>
          </p>
          <p>
            Total Invoices: &nbsp;<strong>0</strong>
          </p>
        </div>
        <button
          className="add-order-btn"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          <Add addText={"ADD ORDER"} />
        </button>
      </div>
      <div className="orders-invoice">
        <h1>Orders</h1>
        <button
          onClick={() => {
            setOpenModalInvoice(true);
          }}
        >
          Generate invoice
        </button>
      </div>
      <hr className="hr-orders" />
      <div className="table-item-container">
        <div className="table-container">
          <button>
            <img
              className="descending-sorting"
              src="/images/DescendingSorting.png"
              alt="Descending Sorting"
            />
          </button>
          <br />
          <table>
            <thead>
              <tr>
                <th>Quantity</th>
                <th>Total price</th>
                <th>Price per unit</th>
                <th>Ordered at</th>
                <th>Supplier</th>
              </tr>
            </thead>
            {oneItem.length > 0 ? (
              oneItem.map((order) => (
                <tbody key={order._id}>
                  <tr>
                    <td>{order.quantity} units</td>
                    <td>€{calculateTotalPrice(order)}</td>
                    <td>€{order.pricePerUnit}</td>
                    <td>{moment(order.ordered).format("MM/DD/YYYY")}</td>
                    <td>{order.supplierName}</td>
                  </tr>
                </tbody>
              ))
            ) : (
              <p>No orders for this item</p>
            )}
          </table>
        </div>
        <div className="item-details-container">
          <div className="item-img-container">
            <img
              className="img-edit"
              src={`/img/items/${itemImg}`}
              alt={`Icon for ${itemTitle}`}
            />
            <button
              onClick={() => {
                setOpenModalEditCategory(true);
              }}
              className="epipse21"
            >
              <img
                className="editgreen"
                src="/images/EditGreen.png"
                alt="edit"
              />
            </button>
          </div>
          <div className="name-container">
            <span>
              Name: &nbsp; <strong>{itemTitle}</strong>
            </span>
          </div>
          <div className="folder-save-container">
            <button
              onClick={() => {
                setOpenModalMoveItem(true);
              }}
              className="add-folder"
            >
              <img
                className="add-folder-img"
                src="/images/AddFolder.png"
                alt=""
              />
            </button>
            <button className="save-item">SAVE</button>
          </div>
        </div>
      </div>
      {openModal && (
        <ModalOrder
          modalTitle={"Add Order"}
          closeModal={setOpenModal}
          saveChanges={"ADD ORDER"}
          itemName={itemTitle}
        />
      )}
      {openModalInvoice && (
        <ModalInvoice
          modalTitle={"Add Invoice"}
          closeModal={setOpenModalInvoice}
          saveChanges={"Add Invoice"}
        />
      )}
      {openModalEditCategory && (
        <ModalEditItem
          closeModal={setOpenModalEditCategory}
          modalTitle={"Edit Item"}
          saveChanges={"SAVE CHANGES"}
          itemTitle={itemTitle}
        />
      )}
      {openModalMoveItem && (
        <ModalMoveItem
          modalTitle={"Move Item"}
          closeModal={setOpenModalMoveItem}
        />
      )}
    </div>
  );
};   