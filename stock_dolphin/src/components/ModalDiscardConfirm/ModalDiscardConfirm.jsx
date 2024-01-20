import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "../../App";
import "./ModalDiscardConfirm.css";

export const ModalDiscardConfirm = ({closeModal, text, change}) => {
  const { suppliers } = useContext(DataContext);
  const [suppliersList, setSuppliersList] = useState(suppliers);

  const deleteSupplier = async (_id) => {
    try{
      const res = await fetch(`http://localhost:9007/api/v1/supplier/${_id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      
      if(res.ok){
        setSuppliersList([...suppliersList].filter((supplier) => supplier._id !== _id));
      }
    }catch(error){
      console.log("Error deleting supplier", error);
    }
  }

  useEffect(()=>{
    console.log("Updated suppliersList:", suppliersList);
  }, [suppliersList]);   //da se proveri zosto ne raboti
  
  return (
    <div className='modal-background'> 
      <div className='modal-container-discard-confirm'>
        <p>{text}</p>
        <div className='buttons-model'>
          <button
          onClick={()=>closeModal(false)}
          className="btn-cancel">CANCEL</button>
          <button
          onClick={() => deleteSupplier(suppliers._id)}
          className='btn-discard-confirm'>{change}</button>
        </div>
      </div>
    </div>
  )
}
