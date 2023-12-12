import React from 'react';
import "./CardsCategories.css";

export const CardsCategories = () => {
  return (
    <div>
      <div className='main-card-category'>
        <div className='images3-container'>
          <div>
          <img className='image1' src="/images/img1mouse.png" alt="img1"/>
          </div>
          <div className='image2-3'>
            <img className='image2' src="/images/img2paper.png" alt="img2" />
            <img className='image3' src="/images/img3pens.png" alt="img3" />
          </div>
        </div>
        <h1 className='card-category-text'><strong>Office Supply</strong></h1>
        <p className='content-category-text'><strong>3 Items</strong> | €338.00</p>
        <div className='date-remove'>
          <div>
          <span className='updated-date-category'>Updated At: <br /><strong>10/10/2023 20:10</strong></span>
          </div>
          <div className='delete-category'>
            <img className='delete-img' src='/images/Delete.png' alt='delete supplier'/>
          </div>
        </div>
      </div>
    </div>
  )
}

