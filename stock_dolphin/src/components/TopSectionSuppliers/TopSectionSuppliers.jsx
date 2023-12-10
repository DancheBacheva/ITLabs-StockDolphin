import './TopSectionSuppliers.css';

export const TopSectionSuppliers = () => {
  return (
    <div className='top-section-suppliers'>
      <div className='top-section-s'>
        <p className='suppliers-title'>Suppliers</p>
      </div>
      <hr className='line-suppliers'/>
      <div className='search-main'>
        <div className='search-suppliers'>
          <label className="search-label-s" for="search">
          <img className='search-img-s' src="/images/Search.png" alt="Search" />  
          <input className='input-search-s' type="text" id="supplier-search" name="supplier-search" placeholder='Search Suppliers'/></label>
        </div>
        <div className='add-supplier'>
          <button className='add-supplier-btn'>
            <div className='inside-btn'>
              <div className='rectangle37'>
                <img className='add-new' src="/images/AddNew.png" alt="Add new" />
                </div>
                <p className='text-btn'>ADD SUPPLIER</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
