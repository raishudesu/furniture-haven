import React from "react";
import Products from "../assets/products.json";
import { useNavigate } from "react-router-dom";

const ProductsPage = () => {
  const filterByTrending = () => {
    return Products.filter((item) => item.trending === true);
  };
  const navigate = useNavigate();
  const toggleProductClick = (item) => {
    navigate("/productdetails", { state: { item } });
  };

  const renderProducts = filterByTrending();
  return (
    <div
      id="productspage"
      className="w-full max-h-fit flex justify-center items-center overflow-hidden"
    >
      <div className="w-full flex flex-col justify-center text-center lg:text-start p-4">
        <div className="text-center">
          <h1 className="text-xl font-semibold p-4">Our Trending Products</h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:gap-6 lg:grid-cols-4">
            {renderProducts.map(
              ({ imageUrl, name, price, category }, index) => {
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
              }
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
