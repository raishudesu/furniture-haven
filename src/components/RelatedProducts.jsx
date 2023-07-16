import React from "react";
import Products from "../assets/products.json";
import { useNavigate } from "react-router-dom";

const RelatedProducts = ({ category }) => {
  const filterRelatedProducts = () => {
    return Products.filter((item) => item.category === category);
  };
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const toggleProductClick = (item) => {
    navigate("/productdetails", { state: { item } });
    scrollToTop();
  };
  const items = filterRelatedProducts();
  return (
    <div className="w-full max-h-fit px-2 py-4 overflow-hidden">
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-2xl font-semibold">Related Products</h1>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {items.map(({ imageUrl, category, name, price }, index) => {
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
  );
};

export default RelatedProducts;
