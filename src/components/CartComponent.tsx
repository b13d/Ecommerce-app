"use client";

import React, { useState, useEffect, createContext } from "react";
import { motion } from "framer-motion";

export interface IApi {
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
  let localProducts: string | null = "";

  if (typeof window !== "undefined") {
    localProducts =
      localStorage.getItem("products") !== null
        ? localStorage.getItem("products")
        : "";
  }

  useEffect(() => {
    if (localProducts !== null) {
      setProducts(JSON.parse(localProducts));
    }
  }, []);

  const [products, setProducts] = useState<IApi[]>([]);
  const [mainTimer, setMainTimer] = useState<number>(0);
  const [timer, setTimer] = useState<number[]>();

  useEffect(() => {
    // setShowCart(true);

    // console.log(mainTimer);

    if (products.length > 0) {
      // mb error

      let list: number[] = timer !== undefined ? timer : [];

      let temp = window.setTimeout(() => {
        setShowCart(false);
        setMainTimer(0);
      }, 3000);

      list.push(temp);

      setTimer(list);

      // console.log(timer);
      // console.log(mainTimer);

      if (mainTimer !== undefined && timer !== undefined) {
        window.clearTimeout(timer[timer.length - 2]);
        setMainTimer(temp);
      }
    }

    // clearTimeout(timer)

    // console.log(products);
  }, [products]);

  useEffect(() => {
    let tempArrProducts: IApi[] = [...products];

    if (products !== null && newProduct !== undefined) {
      tempArrProducts.push(newProduct);

      setProducts(tempArrProducts);

      localStorage.setItem("products", JSON.stringify(tempArrProducts));
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
