// import React, { useEffect, useState } from 'react';
import "./ItemsCards.css";
import { Link } from "react-router-dom";

export const ItemsCards = () => {
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
  //         setItems(data.data.categories.items);
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
      <div className='main-card-item'>
        {/* {items.map((item) => ( */}
      <div key={''} className='cards-container'>
        <div className='item-image-container'>
          <img className='item-image' src="/images/RecentItem2img.png" alt="img1"/>
        </div>
        <Link to={``} className='link-cards'>
        <h3 className='card-item-text'><strong>MOUSE</strong></h3></Link>
        <p className='content-item-text'><strong>3 Purchase records</strong> | €338.00</p>
        <div className='remove-item'>
          <div className='delete-item'>
            <img className='delete-img' src='/images/Delete.png' alt='delete supplier'/>
          </div>
        </div>   
        </div>
        {/* ))} */}
      </div>
    </div>
  );
};
