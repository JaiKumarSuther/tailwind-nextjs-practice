'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faCartShopping, faStar } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState(0);
  const [mount, setMount] = useState(false);
  const limit = 30;

  useEffect(() => {
    setMount(true);
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
        const data = await response.json();
        setProducts(data.products);
        setTotal(data.total);
      } catch(error) {
        console.log("Error fetching products", error);
      }
    }

    fetchProducts();
  }, [skip]); // Runs when skip changes
 



  const nextProductsPage = () => {
    setSkip(skip + limit);
  }

  const previousProductPage =() => {
    if (skip) {
      setSkip(skip - limit);
      console.log("Previous")
    }
  }

  if(!mount) {

    return
  } 

  return (
    <div className="p-8 flex flex-col gap-8">
        <div className="flex items-center justify-between">
            <h1 className="font-bold text-2xl">Products</h1>
            <div className="flex font-bold text-2xl gap-3 p-1">
                <FontAwesomeIcon icon={faAngleLeft} className={`h-[35px] w-[11px]
                ${skip === 0 ? "opacity-30 cursor-auto" : "cursor-pointer"}  `}
                onClick={previousProductPage}  />
                <FontAwesomeIcon icon={faAngleRight} className={`h-[35px] w-[11px]
                ${skip + limit >= total ? "opacity-30 cursor-auto" : "cursor-pointer"} `}
                onClick={skip + limit < total ? nextProductsPage : undefined}/>
            </div>
        </div>
    
    <div className=" grid grid-cols-1 sm-grid-cols-2 md:grid-cols-3 lg:grid-cols-4
    gap-6">
      {products.map((product: any) => (
        <div key={product.id} className=" rounded-2xl bg-white flex flex-col items-center
        shadow-[0px_10px_20px_rgba(0,0,0,0.1)] cursor-pointer">
          <div className="w-[100%] h-[200px] bg-amber-100 rounded-t-2xl"></div>
          <div className="p-4">
            <div className="flex justify-between h-[60px]">
              <h1 className="font-bold text-[18px] w-[90%]">{product.title}</h1>
              <div className="flex gap-1 items-center justify-between h-[25px] text-[12px] w-[50px] p-1  text-amber-400">
                <FontAwesomeIcon icon={faStar} className="w-[12px]"/> 
                <p className="">{product.rating}</p>
              </div>
            </div>
            <h3 className="text-gray-500 text-[14px]">{product.category}</h3>
            <p className="text-gray-500 text-[12px]">
              {product.description.length > 85
                ? product.description.substring(
                    0,
                    product.description.lastIndexOf(" ", 80)
                  ) + "..."
                : product.description}
            </p>

            <div className="flex gap-2 py-2 pt-4">
              {product.tags.map((tag: any, index: number) => (
                <button key={index} className="bg-gray-200 text-black rounded-xl text-[12px] px-3 py-0.5">
                  {tag}
                </button>
              ))}
            </div>
          </div>
          <hr className="w-[90%] text-gray-200 font-bold border-1 "/>
          <div className="flex justify-between p-6 w-[100%]">
            <h1>${product.price}</h1>
            <FontAwesomeIcon icon={faCartShopping} className="w-[20px]" />
          </div>
        </div>
      ))}
      </div>
    </div>
    
  );
}
