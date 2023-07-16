import React from "react";
import Categories from "../components/Categories";
import MainShoppingPage from "../components/MainShoppingPage";

const ShopPage = () => {
  return (
    <div className="p-2">
      <Categories />
      <MainShoppingPage />
    </div>
  );
};

export default ShopPage;
