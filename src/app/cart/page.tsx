"use client";
import {
  faArrowLeft,
  faCreditCard,
  faTrash,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function Cart() {
    const [cart, setCart] = useState([]);
  useEffect(() => {
    try {
        const cartData = Cookies.get("cart");
        setCart(cartData? JSON.parse(cartData): []);
    } catch(error) {
        console.error("Error parsing cart data from cookies:", error);
        setCart([]);
    }
  },[]);

  return (
    <div className="flex flex-col p-10">
      <div className="flex justify-between">
        <h1 className="font-bold text-3xl">Shopping Cart</h1>
        <div className="flex cursor-pointer gap-2">
          <FontAwesomeIcon icon={faArrowLeft} className="h-5 w-3" />
          <p className="text-sm font-medium">Continue to Shopping</p>
        </div>
      </div>

      <div
        className="flex justify-between py-4 gap-2 rounded-2xl 
       "
      >
        <div className="flex items-end flex-col gap-6 px-5 rounded-2xl shadow-[0px_10px_20px_rgba(0,0,0,0.3)] justify-around">
          <div className="flex justify-between gap-100">
            <div className="flex">
              <img
                src="https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                className="w-[80px] object-cover aspect-square rounded-3xl"
                alt=""
              />
              <div className="flex flex-col justify-between p-2 px-4">
                <div className="font-bold">Ceramic Coffee Hug</div>
                <div className="flex items-center border-gray-200 border-1 justify-around rounded-2xl w-[50%]">
                  <button className="cursor-pointer">-</button>
                  <p className="text-[12px]">20</p>
                  <button className="cursor-pointer">+</button>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between items-end p-2">
              <FontAwesomeIcon icon={faXmark} className="w-[12px]"/>
              <h2>$599.80</h2>
            </div>
          </div>
          <button className="flex justify-between w-[15%] cursor-pointer border-1 rounded-2xl p-2 px-4  ">
            <FontAwesomeIcon icon={faTrash} className="w-[12px] cursor-pointer" />
            <div className="text-[12px]">Clear Cart</div>
          </button>
        </div>

        <div
          className="flex h-[280px] flex-col justify-between rounded-2xl shadow-[0px_10px_20px_rgba(0,0,0,0.3)]
        p-6"
        >
          <h1 className="font-bold text-[20px] text-center">Order Summary</h1>
          <div className="flex justify-between gap-50">
            <p>Subtotal</p>
            <p>$1089.66</p>
          </div>
          <div className="flex justify-between gap-50">
            <p>Shipping</p>
            <p>Free</p>
          </div>
          <div className="flex justify-between gap-50">
            <p className="font-bold">Total</p>
            <p className="font-bold">$1089.66</p> 
          </div>
          <button className="flex justify-center gap-2 cursor-pointer w-full p-3 rounded-4xl bg-[#2c65ba] text-white hover:bg-[#2c65bae6]">
            <FontAwesomeIcon icon={faCreditCard} className="w-[16px]" />
            <p>Checkout</p>
          </button>
        </div>
      </div>
    </div>
  );
}
