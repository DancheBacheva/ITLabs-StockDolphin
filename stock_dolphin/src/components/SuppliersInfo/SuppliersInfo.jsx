import "./SuppliersInfo.css";
import React, { useEffect, useState} from "react";

export const SuppliersInfo = () => {
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    const fetchSuppliers = async () => {
      try {
        const res = await fetch("http://127.0.0.1:9007/api/v1/supplier", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        console.log("Response:", res);

        const data = await res.json();

        if (res.ok) {
          console.log('API response:', data);
          setSuppliers(data.data.suppliers);
        } else {
          console.log("Error fetching suppliers");
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchSuppliers();
  }, []);
  
  return (
    <div>
      <div className='suppliersInfo-main-container'>
        {suppliers.map((supplier)=>{
        return(
        <div className='supplier-card' key={supplier._id}>
          <div className='supplier-title'>
            <h2 className='supplier-name'>{supplier.name}</h2>
          </div>
          <div className='supplier-details'>
            <div className='supplier-address-box'>
              <span className='address-text'>Address:</span>
              <span className='address-info-text'>{supplier.address}</span>
            </div>
            <hr className='supplier-line'/>
            <div className='supplier-phoneNumber-box'>
              <span className='phoneNumber-num'>Phone <br /> Number:</span>
              <span className='phoneNumber-info-num'>{supplier.phoneNumber}</span>
            </div>
            <hr className='supplier-line'/>
            <div className='supplier-email-box'>
              <span className='email-text'>Email:</span>
              <span className='email-info-text'>{supplier.email}</span>
            </div>
            <hr className='supplier-line'/>
          </div>
          <div className='edit-delete-container'>
            <div className='edit-supplier'>
              <img className='edit-supplier-img' src='/images/icone-crayon-vert1.png' alt='edit supplier'/>
            </div>
            <div className='delete-supplier'>
              <img className='delete-supplier-img' src='/images/Delete.png' alt='delete supplier'/>
            </div>
          </div>
        </div>
        )})}
      </div>
    </div>
  )
}
