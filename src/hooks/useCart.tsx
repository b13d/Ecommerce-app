"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { IApi } from "@/components/CartComponent";
import { motion, useScroll } from "framer-motion";

export default function UseCart() {
  let localProducts: string | null = "";

  if (typeof window !== "undefined") {
    localProducts = localStorage.getItem("products" || "");
  }

  const refInput = useRef<HTMLInputElement>(null);
  const [discount, setDiscount] = useState(0);

  const [products, setProducts] = useState<IApi[]>([]);
  const [currentWidthScreen, setCurrentWidthScreen] = useState<number>(
    0
    // document.getElementsByTagName("body")[0].clientWidth
  );
  useEffect(() => {
    if (localProducts !== null) {
      setProducts(JSON.parse(localProducts));
    }
  }, []);

  // localProducts !== null ? JSON.parse(localProducts) : []
  const handleDelete = (
    element: React.MouseEvent<HTMLDivElement, MouseEvent>,
    currentIndex: number
  ) => {
    let tempArr: IApi[] = [];

    products.map((value, index) => {
      if (index !== currentIndex) {
        tempArr.push(value);
      }
    });

    setProducts(tempArr);
    localStorage.setItem("products", JSON.stringify(tempArr));
  };

  const handleDeleteAll = () => {
    let tempArr: IApi[] = [];

    setProducts(tempArr);
    localStorage.setItem("products", JSON.stringify(tempArr));
  };

  const [countQuantity, setCountQuantity] = useState<number[]>([]);

  useEffect(() => {
    let arr: number[] = [];

    products.map((value) => {
      arr.push(1);
    });

    setCountQuantity(arr);
  }, [products]);

  const { scrollYProgress, scrollY } = useScroll();
  let sum: number = 0;

  const handleSubtract = (currentIndex: number) => {
    let tempArr: number[] = [];

    countQuantity.map((value, index) => {
      if (index === currentIndex) {
        if (value - 1 > 0) {
          return tempArr.push(value - 1);
        } else return tempArr.push(value);
      } else return tempArr.push(value);
    });

    setCountQuantity(tempArr);
  };

  const handleApply = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    let tempRef = refInput.current;

    if (tempRef !== null) {
      if (tempRef.value === "danila") {
        setDiscount(5);
      } else if (tempRef.value === "frontend") {
        setDiscount(10);
      }
    }
  };

  const handleAdd = (currentIndex: number) => {
    let tempArr: number[] = [];

    countQuantity.map((value, index) => {
      if (index === currentIndex) {
        tempArr.push(value + 1);
      } else return tempArr.push(value);
    });

    setCountQuantity(tempArr);
  };

  let widthScreen: number = 0;
  // document.getElementsByTagName("body")[0].clientWidth;

  useEffect(() => {
    widthScreen = document.getElementsByTagName("body")[0].clientWidth;

    if (widthScreen > 1000 && currentWidthScreen < 1000) {
      setCurrentWidthScreen(widthScreen);
    } else if (widthScreen < 1000 && currentWidthScreen > 1000) {
      setCurrentWidthScreen(widthScreen);
    }
  }, [scrollY]);

  useEffect(() => {
    console.log(scrollY.getPrevious());
  }, [scrollY]);

  return (
    <section className="max-w-[1300px] min-h-[100vh] bg-white rounded-md lg:p-10 mb-10 m-auto flex max-sm:flex-col gap-2 items-start justify-between">
      <div className="sm:w-[100%] ">
        <div className="list-products grid mb-6">
          <div className="grid gridCol grid-cols-4 bg-[#ffffff] shadow-lg  rounded-xl max-sm:p-2 sm:px-[30px] sm:py-[15px] ">
            <h1>Product</h1>
            <h1 className="text-center">Price</h1>
            <h1 className="text-center">Quantity</h1>
            <h1 className="text-center">Subtotal</h1>
          </div>
          {products.map((value, index) => {
            if (countQuantity.length > 0) {
              sum +=
                countQuantity.length > 0
                  ? value.price * countQuantity[index]
                  : 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 * index }}
                  viewport={{ once: true }}
                  className="grid gridCol grid-cols-4 shadow-md items-center max-sm:p-2 sm:px-[30px] sm:py-[15px] relative border-b-2 border-gray-300"
                >
                  <Link href={`/products/${value.id}`}>
                    <div className="flex max-lg:flex-col gap-2 items-center justify-center text-center">
                      <Image
                        className="max-lg:w-[100px] max-h-[100px]"
                        width={135}
                        height={120}
                        src={value.url[0]}
                        alt="img"
                      />

                      <div>
                        <p className="max-sm:text-[10px] max-lg:text-[14px]">
                          {value.title}
                        </p>
                        <p className="max-sm:hidden">Color: {value.color}</p>
                      </div>
                    </div>
                  </Link>

                  <div>
                    <h1 className="max-sm:text-[12px] text-center">
                      {value.price}₽
                    </h1>
                  </div>

                  <div className="flex gap-1 max-lg:flex-col  justify-center items-center">
                    <button
                      onClick={() => handleSubtract(index)}
                      className="w-[40px] h-[40px] hover:bg-[#2e2e2e] hover:text-white bg-[#f0f0f0] duration-300 ease-in-out text-black  "
                    >
                      -
                    </button>
                    <button className="w-[40px] h-[40px] text-white bg-[#2c2c2c]">
                      {countQuantity[index]}
                    </button>
                    <button
                      onClick={() => handleAdd(index)}
                      className="w-[40px] h-[40px] hover:bg-[#2e2e2e] hover:text-white  bg-[#f0f0f0] duration-300 ease-in-out text-black "
                    >
                      +
                    </button>
                  </div>

                  <div>
                    <h1 className="max-sm:text-[12px] text-center">
                      {countQuantity.length > 0
                        ? value.price * countQuantity[index]
                        : 0}
                      ₽
                    </h1>
                  </div>

                  <div
                    onClick={(e) => handleDelete(e, index)}
                    className="max-sm:top-2 cursor-pointer absolute right-0 border text-white bg-red-500  px-2  rounded-full"
                  >
                    x
                  </div>
                </motion.div>
              );
            }
          })}
        </div>

        <div className="flex gap-3 mb-6">
          <Link
            href="/products"
            className="max-sm:text-[14px] max-sm:p-2 max-sm:text-center font-semibold sm:py-3 sm:px-3 hover:text-[#EDA415] hover:bg-white hover:border hover:border-[#EDA415] duration-300 bg-[#EDA415] m-auto text-white rounded-2xl"
          >
            Continue shopping
          </Link>

          {products.length > 0 && (
            <button
              onClick={() => handleDeleteAll()}
              className="font-semibold sm:py-3 sm:px-9 w-[50%] m-auto hover:text-white hover:bg-[#C33131] hover:border  duration-300 border-[#C33131] max-sm:text-[14px] max-sm:p-2 max-sm:text-center border text-[#C33131] rounded-2xl"
            >
              Clear cart
            </button>
          )}
        </div>
      </div>

      <motion.div
        style={{
          y: currentWidthScreen > 1000 ? scrollY : 0,
        }}
        className="grid max-sm:rounded-md shadow-md relative mb-6 max-sm:w-full  max-sm:p-1"
      >
        <div className="bg-[#ffffff] shadow-lg rounded-xl max-sm:p-2 max-sm:mb-2 sm:px-[30px] sm:py-[15px]">
          <h1>Cart total</h1>
        </div>
        <div className=" sm:p-6">
          <div className="flex flex-col gap-3">
            <div className="flex justify-between border-b-2 border-gray-300 pb-3 mb-3">
              <h1>Subtotal</h1>
              <h1>{sum}₽</h1>
            </div>

            <div className="relative  flex items-center max-sm:gap-2  pb-3 mb-3">
              <input
                ref={refInput}
                type="text"
                className="border rounded-2xl py-4 px-4"
                placeholder="Enter coupon code"
              />
              <span
                onClick={(e) => handleApply(e)}
                className="hover:underline  cursor-pointer sm:absolute sm:right-0 mr-[10px]"
              >
                Apply
              </span>
            </div>

            <div className="flex justify-between">
              <h1>Total amount</h1>
              <h1>{discount !== 0 ? sum - (sum / 100) * discount : sum}₽</h1>
            </div>

            <button className="py-3 px-9 w-[80%] bg-[#EDA415] m-auto text-white rounded-3xl">
              Proceed to ckeckout
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
