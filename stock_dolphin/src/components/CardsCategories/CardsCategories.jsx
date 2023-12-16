import React, { useEffect, useState } from 'react';
import "./CardsCategories.css";

export const CardsCategories = () => {
  const [categories, setCategories] = useState ([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try{
        const res = await fetch("http://localhost:9001/api/v1/category", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        const data = await res.json();

        if(res.ok) {
          setCategories(data.data.categories);
        }else{
          console.log("Error fetching categories");
        }
      }catch(err){
        console.log(err);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div>
      <div className='main-card-category'>
        {categories.map((category) => (
      <div key={category.id} className='cards-containter'>
        <div className='images3-container'>
          <div>
          <img className='image1' src="/images/img1mouse.png" alt="img1"/>
          </div>
          <div className='image2-3'>
            <img className='image2' src="/images/img2paper.png" alt="img2" />
            <img className='image3' src="/images/img3pens.png" alt="img3" />
          </div>
        </div>
        <h3 className='card-category-text'><strong>{category.title}</strong></h3>
        <p className='content-category-text'><strong>{category.items.length} Items</strong> | €338.00</p>
        <div className='date-remove'>
          <div>
          <span className='updated-date-category'>Updated At: <br /><strong>{category.date}</strong></span>
          </div>
          <div className='delete-category'>
            <img className='delete-img' src='/images/Delete.png' alt='delete supplier'/>
          </div>
        </div>
        </div>
        ))}
      </div>
    </div>
  );
};

