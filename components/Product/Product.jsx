"use client";

import { useContext } from "react";
import { ProductsContext } from "@/contexts/productContext";

export default function Product({ product }) {
  const { _id, name, price, picture, description, category } = product;

  const { setSelectedProducts } = useContext(ProductsContext);

  function addProduct() {
    setSelectedProducts((prev) => {
      return [...prev, _id];
      // const isProductInCart = prev.find((item) => item._id === id);
      // return [
      //   ...prev,
      //   { ...product, quantity: isProductInCart ? item.quantity + 1 : 1 },
      // ];
    });
  }

  const bg_color = {
    mobiles: "bg-purple-100 hover:bg-purple-200",
    audio: "bg-blue-100 hover:bg-blue-200",
    laptops: "bg-slate-100 hover:bg-slate-200",
  };
  return (
    <div className="py-4">
      <div className="w-64">
        <div className={`${bg_color[category]} p-5 rounded-xl cursor-pointer`}>
          <img src={picture} alt="iphone" />
        </div>
        <div className="mt-2">
          <h3 className="font-bold text-lg">{name}</h3>
        </div>
        <p className="mt-2 text-sm leading-4 text-gray-500">{description}</p>
        <div className="mt-2 flex items-center">
          <div className="text-2xl font-bold grow">${price}</div>
          <button
            onClick={addProduct}
            className="bg-violet-400 text-white py-1 px-3 rounded-xl hover:bg-violet-500 hover:scale-125"
          >
            +add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
