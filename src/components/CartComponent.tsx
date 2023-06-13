"use client";

import React, { useState, useEffect, createContext } from "react";
import { motion } from "framer-motion";

interface IApi {
  id: number;
  url: string;
  title: string;
  price: number;
  star: number;
  color: string;
  category: string;
}

interface IProps {
  newProduct: IApi | undefined;
  showCart: boolean;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CartComponent({
  newProduct,
  showCart,
  setShowCart,
}: IProps) {
  const [products, setProducts] = useState<IApi[]>([]);
  const [mainTimer, setMainTimer] = useState<NodeJS.Timeout>();

  let timer: NodeJS.Timeout;

  useEffect(() => {
    // setShowCart(true);

    console.log(products);

    if (products.length > 0) {
      clearTimeout(timer);
      // mb error
      timer = setTimeout(() => {
        setShowCart(false);
        setMainTimer(undefined);
      }, 3000);

      if (mainTimer !== undefined) {
        clearTimeout(timer);
      } else {
        setMainTimer(timer);
      }
    }

    // clearTimeout(timer)

    console.log(products);
  }, [products]);

  useEffect(() => {
    let tempArrProducts: IApi[] = [...products];

    if (products !== null && newProduct !== undefined) {
      tempArrProducts.push(newProduct);

      setProducts(tempArrProducts);
    }
  }, [newProduct]);

  return (
    <>
      {(products.length > 0 || newProduct !== undefined) && showCart && (
        <motion.div className="cart fixed top-[100px] right-3 rounded-md  w-[300px] h-[400px] overflow-y-scroll z-[1]">
          {products &&
            products.map((value, index) => {
              return (
                <div
                  className="flex items-center gap-3 px-4 py-2 bg-[#ffffff] justify-between"
                  key={index}
                >
                  <img
                    className="w-[40px] h-[40px]  object-contain"
                    src={value.url}
                    alt=""
                  />
                  <p className="text-[14px]">{value.title}</p>
                  <h2>{value.price}</h2>
                </div>
              );
            })}
        </motion.div>
      )}
    </>
  );
}
