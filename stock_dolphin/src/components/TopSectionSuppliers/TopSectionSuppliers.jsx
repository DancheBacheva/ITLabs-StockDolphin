import { Add } from "../Add/Add";
import { Header } from "../Header/Header";
import { SearchBar } from "../SearchBar/SearchBar";
import "./TopSectionSuppliers.css";

export const TopSectionSuppliers = () => {
  return (
    <div className="top-section-suppliers">
      <Header headerTitle={"Suppliers"} />
      {/* <div className="search-add-suppliers">
        <SearchBar placeholderText={"Search Suppliers"} />
        <button className="add-supplier-btn">
          <Add addText={"ADD SUPPLIER"} />
        </button>
      </div> */}
    </div>
  );
};
