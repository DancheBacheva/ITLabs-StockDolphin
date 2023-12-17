// import React, { useState, useEffect } from 'react';
import "./ItemsList.css";
import { Link } from "react-router-dom";

export const ItemsList = () => {
  // const [items, setItems] = useState ([]);

  // useEffect(() => {
  //   const fetchItems = async () => {
  //     try{
  //       const res = await fetch("http://localhost:9003/api/v1/items", {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("token")}`,
  //         },
  //       });

  //       const data = await res.json();

  //       if(res.ok) {
  //         setItems(data.data.items);
  //       }else{
  //         console.log("Error fetching items");
  //       }
  //     }catch(err){
  //       console.log(err);
  //     }
  //   };
  //   fetchItems();
  // }, []);

  return (
    <div>
      <div className='main-list-item'>
  
        <div key='' className='list-container'>
        <div className='item-image-container'>
          <img className='item-image' src="/images/RecentItem2img.png" alt="img1"/>
        </div>
        <div className='middle-container-list'>
        <Link to={""} className='link-list'>
          <h3 className='list-item-text'><strong>MOUSE</strong></h3>
        </Link>
          <p className='content-item-text-list'><strong>3 Purchase records</strong> | €338.00</p>
        </div>
        <div className='date-remove-list'>
        <hr/>
          <span className='updated-date-item-list'>Updated At: <br /><strong>DATE</strong></span>
          <div className='delete-item-list'>
            <img className='delete-img-list' src='/images/Delete.png' alt='delete supplier'/>
          </div>
        </div>
        </div>
  
      </div>
    </div>
  );
};

