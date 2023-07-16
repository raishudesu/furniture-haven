import React, { useState } from "react";
import Products from "../assets/products.json";
import { useNavigate } from "react-router-dom";
import FilterBar from "./FilterBar";

const MainShoppingPage = () => {
  const navigate = useNavigate();
  const [defaultFilter, setFilter] = useState(null);
  const toggleProductClick = (item) => {
    navigate("/productdetails", { state: { item } });
  };

  const filterByCategory = () => {
    if (defaultFilter)
      return Products.filter((item) => item.category === defaultFilter);
    return dataList.filter((item) => item.category === defaultFilter);
  };
  const showAll = () => {
    return Products;
  };
  const handleCategoryClick = (category) => {
    setFilter(category);
  };
  const renderMerch = defaultFilter ? filterByCategory() : showAll();

  return (
    <div className="w-full py-4 overflow-hidden">
      <FilterBar handleCategoryClick={handleCategoryClick} />
      <div className="flex flex-col justify-center items-center">
        <div className="text-center lg:text-start">
          <div>
            <h1>{renderMerch.length} items</h1>
          </div>
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 content-center py-4">
            {renderMerch.map(({ imageUrl, category, name, price }, index) => {
              return (
                <li
                  key={index}
                  onClick={() => {
                    toggleProductClick({ imageUrl, category, name, price });
                  }}
                  className="cursor-pointer shadow-md shadow-gray-500 rounded-sm overflow-hidden max-w-[250px]"
                >
                  <div className="overflow-hidden max-h-[310px]">
                    <img src={imageUrl} alt="" />
                  </div>

                  <div className="flex flex-col gap-3 text-start p-2 mt-2">
                    <h1 className="uppercase text-sm">{category}</h1>
                    <h1 className="font-semibold">{name}</h1>
                    <p className="">{price}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainShoppingPage;
