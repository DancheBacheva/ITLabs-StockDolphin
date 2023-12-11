import React from 'react';

const suppliers = [
      {
          _id: "65738fdadb26b709dc099a10",
          name: "Anhoch",
          address: "Address",
          phoneNumber: "+38161202543",
          email: "anhoch@gmail.com",
      
      },
      {
          _id: "657390ccf16417250e3d9d3c",
          name: "Setec",
          address: "address",
          phoneNumber: "+38161202543",
          email: "example@gmail.com",
      },
      {
          _id: "65739a6d454c037119c9f592",
          name: "Neptun",
          address: "address",
          phoneNumber: "+38161202543",
          email: "neptun@gmail.com",
      },
      {
        _id: "65777c32c205141595911ee1",
        name: "Magroni",
        address: "address",
        phoneNumber: "+38161202543",
        email: "magroni@gmail.com",
      },
      {
        _id: "65738fdadb26b709dc099a23",
        name: "Amazon",
        address: "Address",
        phoneNumber: "+38161202543",
        email: "amazon@gmail.com",
    
    },
    {
        _id: "657390ccf16417250e3d9d67",
        name: "Apple",
        address: "address",
        phoneNumber: "+38161202543",
        email: "example@gmail.com",
    },
    {
        _id: "65739a6d454c037119c9f556",
        name: "Pope",
        address: "address",
        phoneNumber: "+38161202543",
        email: "pope@gmail.com",
    },
    {
      _id: "65777c32c205141595911e61",
      name: "City Group",
      address: "address",
      phoneNumber: "+38161202543",
      email: "example@gmail.com",
  }
    ]

export const SuppliersProba = () => {
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

