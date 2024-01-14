import "./InventoryPage.css"
import React, { useEffect, useState } from 'react';
import { InventorySummaryMain } from "../../components/InventorySummaryMain/InventorySummaryMain";
import { TopSectionInventory } from "../../components/TopSectionInventory/TopSectionInventory";

export const InventoryPage = () => {
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
    <div className="inventory-main">
      <TopSectionInventory/>
      <InventorySummaryMain categories={categories}/>
    </div>
   
  )
}

