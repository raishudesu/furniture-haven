import React, { useState } from "react";

const FilterBar = ({ handleCategoryClick }) => {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (category) => {
    setActiveButton(category);
    handleCategoryClick(category);
  };
  return (
    <div className="w-full overflow-hidden flex justify-center">
      <div className="flex justify-center">
        <div className="flex font-semibold lg:text-xl">
          <button
            className={`${
              activeButton === null ? "bg-gray-200" : ""
            } p-2 rounded`}
            onClick={() => handleClick(null)}
          >
            All
          </button>
          <button
            className={`${
              activeButton === "beds" ? "bg-gray-200" : ""
            } p-2 rounded`}
            onClick={() => handleClick("beds")}
          >
            Beds
          </button>
          <button
            className={`${
              activeButton === "chairs" ? "bg-gray-200" : ""
            } p-2 rounded`}
            onClick={() => handleClick("chairs")}
          >
            Chairs
          </button>
          <button
            className={`${
              activeButton === "sofas" ? "bg-gray-200" : ""
            } p-2 rounded`}
            onClick={() => handleClick("sofas")}
          >
            Sofas
          </button>
          <button
            className={`${
              activeButton === "tables" ? "bg-gray-200" : ""
            } p-4 rounded`}
            onClick={() => handleClick("tables")}
          >
            Tables
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
