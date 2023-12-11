import "./SuppliersInfo.css";
import React, { useEffect, useState} from "react";

export const SuppliersInfo = () => {
  const [data, setData] = useState([]);

  const fetchSuppliers = async () => {
    try {
      const res = await fetch('http://localhost:9010/api/v1/supplier',
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      const data = await res.json();

      if (res.ok) {
        setData(data.data.suppliers);
      } else {
        console.log('Error', data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchSuppliers();
  }, []);
  
  return (
    <div>
      <div className='suppliersInfo-main-container'>
        {data.map((supplier)=>{
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
