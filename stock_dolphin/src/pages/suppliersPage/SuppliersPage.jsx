import React, { useEffect, useState} from "react";
import "./SuppliersPage.css";
import { MenuSidebarLeft } from "../../components/MenuSidebarLeft/MenuSidebarLeft";
import { TopSectionSuppliers } from "../../components/TopSectionSuppliers/TopSectionSuppliers";
import { SuppliersInfo } from "../../components/SuppliersInfo/SuppliersInfo";

export const SuppliersPage = () => {
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    const fetchSuppliers = async () => {
      try {
        const res = await fetch("http://127.0.0.1:9007/api/v1/supplier", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        console.log("Response:", res);

        const data = await res.json();

        if (res.ok) {
          console.log('API response:', data);
          setSuppliers(data.data.suppliers);
        } else {
          console.log("Error fetching suppliers");
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchSuppliers();
  }, []);

  return (
    <div>
      <div className="suppliers-page">
          <MenuSidebarLeft/>
        <div className="supplier-main">
          <TopSectionSuppliers/>
          <SuppliersInfo suppliers={suppliers}/>
        </div>
      </div>
    </div>
  )
}

 