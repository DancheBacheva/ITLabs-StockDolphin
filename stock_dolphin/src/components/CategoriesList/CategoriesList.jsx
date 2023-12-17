import React, { useState, useEffect } from 'react';
import "./CategoriesList.css";
import { Link } from "react-router-dom";

export const CategoriesList = () => {
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
      <div className='main-list-category'>
      {categories.map((category) => (
        <div key={category._id} className='list-container'>
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
        <Link to={`/inventory/${category._id}`} className='link-cards'>
          <h3 className='list-category-text'><strong>{category.title}</strong></h3>
        </Link>
          <p className='content-category-text-list'><strong>{category.items.length} Items</strong> | €338.00</p>
        </div>
        <div className='date-remove-list'>
        <hr/>
          <span className='updated-date-category-list'>Updated At: <br /><strong>{category.date}</strong></span>
          <div className='delete-category-list'>
            <img className='delete-img-list' src='/images/Delete.png' alt='delete supplier'/>
          </div>
        </div>
        </div>
        ))}
      </div>
    </div>
  );
};

