import React from 'react';
import "./ListCategories.css";

export const ListCategories = () => {
  return (
    <div>
      <div className='main-list-category'>
        <div className='images3-container-list'>
          <div>
          <img className='image1-list' src="/images/img1mouse.png" alt="img1"/>
          </div>
          <div className='image2-3-list'>
            <img className='image2-list' src="/images/img2paper.png" alt="img2" />
            <img className='image3-list' src="/images/img3pens.png" alt="img3" />
          </div>
        </div>
        <div className='middle-container-list'>
          <h1 className='list-category-text'><strong>Office Supply</strong></h1>
          <p className='content-category-text-list'><strong>3 Items</strong> | €338.00</p>
        </div>
        
        <div className='date-remove-list'>
        <hr/>
          <div>
          <span className='updated-date-category-list'>Updated At: <br /><strong>10/10/2023 20:10</strong></span>
          </div>
          <div className='delete-category-list'>
            <img className='delete-img-list' src='/images/Delete.png' alt='delete supplier'/>
          </div>
        </div>
      </div>
    </div>
  )
}

