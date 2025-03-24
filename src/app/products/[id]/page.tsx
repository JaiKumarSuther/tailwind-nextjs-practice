"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Loading from "../loading";

export default function ProductDetail() {
  const { id } = useParams(); // get id from the url
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    const fetchProduct = async () => {
        try {
            const response = await fetch(`https://dummyjson.com/products/${id}`);
            const data = await response.json();
            setProduct(data);
        } catch(error) {
            console.log("Error fetching product details", error);
        }
    }
    console.log(product)
    fetchProduct();
  },[id]);

  if(!product) return <Loading/>


  return (
    <div className="flex flex-col p-5 max-w-5xl mx-auto">
  {/* Back Button */}
  <div className="flex items-center gap-2 text-gray-500 cursor-pointer hover:text-black transition">
    <FontAwesomeIcon icon={faAngleLeft} className="h-5 w-5" />
    <p className="text-sm font-medium">Back to products</p>
  </div>

  {/* Main Content */}
  <div className="flex flex-col md:flex-row mt-5 gap-10 p-12 rounded-xl bg-white">
    {/* Product Image */}
    <div className="md:w-1/2">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full md:h-[400px] object-cover rounded-lg flex justify-center items-center"
      />
    </div>

    {/* Product Details */}
    <div className="md:w-1/2 flex flex-col">
      <h1 className="text-3xl font-semibold">{product.title}</h1>
      <h3 className="text-gray-500 text-lg mt-1">{product.category}</h3>
      <h1 className="text-2xl font-bold mt-3">${product.price}</h1>
      <hr className="my-4 border-gray-300" />

      {/* Description */}
      <h2 className="text-lg font-semibold">Description</h2>
      <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>

      {/* Key Features */}
      <h2 className="text-lg font-semibold mt-4">Key Features</h2>
      <ul className="list-disc list-inside text-gray-600 text-sm space-y-1 mt-1">
        <li>{product.warrantyInformation}</li>
        <li>{product.shippingInformation}</li>
        <li>{product.availabilityStatus}</li>
      </ul>

      {/* Add to Cart Button */}
      <button className="mt-6 py-3 px-6 bg-black cursor-pointer text-white text-lg font-semibold rounded-lg shadow-md hover:bg-gray-900 transition">
        Add to cart
      </button>
    </div>
  </div>
</div>

  );
}
