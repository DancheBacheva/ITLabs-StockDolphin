import "./InventoryCategoryPage.css";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { Category } from "../../components/Category/Category";
import { InventoryCategoryRight } from "../../components/InventoryCategoryRight/InventoryCategoryRight";


export const InventoryCategoryPage = () => {
  const [items, setItems] = useState ([]);
  const { title } = useParams();

  useEffect(() => {
    const fetchItems = async () => {
      try{
        const res = await fetch("http://localhost:9003/api/v1/item", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        const data = await res.json();

        if(res.ok) {
          setItems(data.data.items);
        }else{
          console.log("Error fetching items");
        }
      }catch(err){
        console.log(err);
      }
    };
    fetchItems();
  }, []);

  return (
    <div className="inventory-main">
      <div className='top-section'>
        <h1 className='inventory-title-category'>Inventory {'>'} {title}</h1>
      </div>
      <Category />
      <InventoryCategoryRight title={title} items={items} />
    </div>
  )
}

