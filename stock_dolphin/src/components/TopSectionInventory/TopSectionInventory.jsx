import "./TopSectionInventory.css";

export const TopSectionInventory = () => {
  return (
    <div className='top-section-inventory'>
      <div className='top-section'>
        <p className='inventory-title'>Inventory</p>
      </div>
      <hr className='line-inventory'/>
      <div className='search-add-main'>
        <div className='search-category'>
          <label className="search-label" for="search">
          <img className='search-img' src="/images/Search.png" alt="Search" />  
          <input className='input-search' type="text" id="category-search" name="category-search" placeholder='Search categories'/></label>
        </div>
        <div className='add-category'>
          <button className='add-category-btn'>
            <div className='inside-btn'>
              <div className='rectangle37'>
                <img className='add-new' src="/images/AddNew.png" alt="Add new" />
                </div>
                <p className='text-btn'>ADD CATEGORY</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

