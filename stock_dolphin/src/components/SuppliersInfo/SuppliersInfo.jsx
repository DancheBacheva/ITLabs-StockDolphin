import "./SuppliersInfo.css";

export const SuppliersInfo = ({suppliers}) => {
  
  return (
    <div>
      <div className='suppliersInfo-main-container'>
        {suppliers.map((supplier)=>{
        return(
        <div className='supplier-card' key={supplier._id}>
          <div className='supplier-title'>
            <h2>{supplier.name}</h2>
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
