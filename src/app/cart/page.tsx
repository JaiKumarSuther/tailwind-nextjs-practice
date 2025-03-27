"use client";
import {
  faArrowLeft,
  faCreditCard,
  faTrash,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCart } from "react-use-cart"; // Import useCart hook
import { useRouter } from "next/navigation";

export default function Cart() {
  const router = useRouter();
  const { items, updateItemQuantity, removeItem, emptyCart } = useCart();

  // Calculate subtotal
  const subtotal = items.reduce(
    (total: any, item: any) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="flex flex-col p-6 md:p-14">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-[20px] sm:text-2xl md:text-3xl">Shopping Cart</h1>
        <div
          className="flex cursor-pointer gap-2"
          onClick={() => router.push("/products")}
        >
          <FontAwesomeIcon icon={faArrowLeft} className="h-5 w-3" />
          <p className="text-[12px] md:text-sm font-medium ">Continue Shopping</p>
        </div>
      </div>

      {items.length === 0 ? (
        <p className="text-gray-500 text-center mt-5">Your cart is empty</p>
      ) : (
        <div className="flex flex-col lg:flex-row gap-10 py-8 justify-between">
          <div className="flex w-full items-end gap-8 flex-col p-8 rounded-4xl  md:rounded-2xl shadow-[0px_10px_20px_rgba(0,0,0,0.3)] justify-around">
            {items.map((item: any) => (
              <div
                className="flex w-full items-center relative justify-between  h-[90px]"
                key={item.id}
              >
                <div className="flex  w-full overflow-hidden">
                  <img
                    src={item.thumbnail}
                    className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] overflow-hidden rounded-3xl object-contain"
                    alt={item.title}
                  />
                  <div className="flex flex-col w-full justify-between p-3">
                    <div className="font-bold text-[12px] md:text-[16px]">{item.title}</div>
                    <div className="flex w-full justify-between">
                      <div className="flex items-center border-1 border-gray-200 justify-around rounded-2xl w-[80px]">
                        <button
                          className="cursor-pointer"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                        >
                          -
                        </button>
                        <p className="text-[12px]">{item.quantity}</p>
                        <button
                          className="cursor-pointer"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>
                      <h2 className="text-[12px] md:text-[16px]">${(item.price * item.quantity).toFixed(2)}</h2>
                    </div>
                  </div>
                </div>

                <FontAwesomeIcon
                  icon={faXmark}
                  className="w-[12px] cursor-pointer absolute top-3 right-3"
                  onClick={() => removeItem(item.id)}
                />
                <hr className="absolute top-25 w-full border-t border-gray-200 mt-2 " />
              </div>
            ))}

            <button
              className="flex justify-between w-[110px] cursor-pointer border-1 rounded-2xl p-2 px-4"
              onClick={emptyCart}
            >
              <FontAwesomeIcon icon={faTrash} className="w-[12px]" />
              <div className="text-[12px]">Clear Cart</div>
            </button>
          </div>

          <div className="flex w-auto lg:w-[400px] h-[290px] flex-col justify-between rounded-4xl md:rounded-2xl shadow-[0px_10px_20px_rgba(0,0,0,0.3)] p-6">
            <h1 className="font-bold text-[18px] md:text-[20px] text-center">Order Summary</h1>
            <div className="flex text-[14px] md:text-[16px] justify-between">
              <p>Subtotal</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <div className="flex text-[14px] md:text-[16px] justify-between">
              <p>Shipping</p>
              <p>Free</p>
            </div>
            <div className="flex text-[14px] md:text-[16px] justify-between">
              <p className="font-bold">Total</p>
              <p className="font-bold">${subtotal.toFixed(2)}</p>
            </div>
            <button className="flex text-[14px] md:text-[16px] justify-center items-center gap-2 cursor-pointer w-full p-3 rounded-4xl md:rounded-2xl bg-[#2c65ba] text-white hover:bg-[#2c65bae6]">
              <FontAwesomeIcon icon={faCreditCard} className="w-[16px]" />
              <p>Checkout</p>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
