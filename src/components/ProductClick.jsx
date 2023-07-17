import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import RelatedProducts from "./RelatedProducts";

const ProductClick = () => {
  const [itemCount, setItemCount] = useState(1);

  const location = useLocation();
  const { item } = location.state || {};
  if (!item) {
    return <div>No item data found.</div>;
  }

  const { imageUrl, category, name, price } = item;

  const addItem = () => {
    setItemCount(itemCount + 1);
  };
  const removeItem = () => {
    if (itemCount > 1) setItemCount(itemCount - 1);
  };

  const priceToInt = () => {
    const amount = parseInt(price.slice(1), 10);
    return amount;
  };

  const addToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const newItem = {
      imageUrl,
      category,
      name,
      price: priceToInt(),
      quantity: itemCount,
      subTotal: priceToInt() * itemCount,
    };
    cartItems.push(newItem);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    setItemCount(1);
    window.dispatchEvent(new Event("cartUpdated"));
  };

  return (
    <div className="w-full max-h-fit overflow-hidden">
      <div className="">
        <div className="flex flex-col lg:flex-row justify-center gap-6 items-center">
          <img
            src={imageUrl}
            alt="/"
            className="w-full lg:w-[30%] xl:w-[25%]"
          />
          <div className="p-2 flex flex-col gap-2 w-full lg:w-[50%] xl:w-[30%]">
            <div className="flex flex-col justify-center items-start gap-2 ">
              <h1 className="uppercase text-2xl font-semibold">{category}</h1>
              <h1 className="text-lg lg:text-6xl font-bold">{name}</h1>
              <h1 className="text-lg lg:text-3xl">{price}</h1>
            </div>
            <div className="my-2 gap-3 flex justify-start items-center">
              <button
                onClick={() => {
                  removeItem();
                }}
              >
                <AiFillMinusCircle size={30} />
              </button>
              <h1 className="text-lg">{itemCount}</h1>
              <button
                onClick={() => {
                  addItem();
                }}
              >
                <AiFillPlusCircle size={30} />
              </button>
            </div>
            <div className="text-lg w-full flex justify-between">
              <h1>{itemCount} item/s</h1>
              <h1 className="font-semibold">
                Total: ${priceToInt() * itemCount}
              </h1>
            </div>
            <div className="flex flex-col text-white font-semibold gap-2 ">
              <button
                onClick={addToCart}
                className="bg-[#242424] py-4 rounded-lg"
              >
                Add To Cart
              </button>
              <button className="bg-white text-black border-2 border-[#242424] py-4 rounded-lg">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <RelatedProducts category={category} />
      </div>
    </div>
  );
};

export default ProductClick;
