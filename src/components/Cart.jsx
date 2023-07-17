import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiTrash } from "react-icons/bi";

const Cart = ({ handleCart }) => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(null);

  useEffect(() => {
    const updateCart = () => {
      const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
      setCartItems(storedCartItems);
    };

    updateCart(); // Update cart initially

    // Listen to the custom event for cart updates
    window.addEventListener("cartUpdated", updateCart);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("cartUpdated", updateCart);
    };
  }, []);

  const removeItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
  };
  useEffect(() => {
    const calculateTotal = () => {
      let sum = 0;
      cartItems.forEach((item) => {
        sum += item.subTotal;
      });
      setTotal(sum);
    };
    calculateTotal();
  }, [cartItems]);
  return (
    <div className="w-full max-h-fit lg:h-screen overflow-y-scroll overscroll-contain">
      <div className="sticky top-0 bg-white flex justify-between items-center p-2 border-b-2">
        <h1 className="text-2xl font-bold">Your Cart</h1>
        <button onClick={handleCart}>
          <AiOutlineClose size={25} />
        </button>
      </div>
      <div className="h-full">
        {cartItems.length === 0 ? (
          <div className="">
            <p>No items in the cart.</p>
          </div>
        ) : (
          <ul className="w-full p-2">
            {cartItems.map(
              ({ imageUrl, name, price, quantity, subTotal }, index) => (
                <li
                  key={index}
                  className="cursor-pointer rounded-md overflow-hidden "
                >
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex gap-2 items-center justify-between">
                      <div className="w-[70px] rounded-md overflow-hidden border-2">
                        <img src={imageUrl} alt="/" />
                      </div>
                      <div className="flex flex-col max-w-fit">
                        <h1 className="font-semibold flex flex-wrap">{name}</h1>
                        <p>${price}</p>
                        <p>{quantity}x</p>
                        <p className="font-semibold">Subtotal: ${subTotal}</p>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        removeItem(index);
                      }}
                      className="justify-self-end px-2"
                    >
                      <BiTrash size={25} />
                    </button>
                  </div>
                </li>
              )
            )}
          </ul>
        )}
        <div className="w-full p-4 bg-white border-t-2">
          <h1 className="font-semibold text-lg">Items: {cartItems.length}</h1>
          <h1 className="font-semibold text-lg">Total: ${total}</h1>
          <button className="w-full bg-black text-white p-2 rounded-md uppercase font-medium">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
