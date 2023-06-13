"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { IApi } from "@/components/CartComponent";
import { motion, useScroll } from "framer-motion";
import { once } from "events";

export default function UseCart() {
  let localProducts = localStorage.getItem("products");

  const refInput = useRef<HTMLInputElement>(null);
  const [discount, setDiscount] = useState(0);

  const [products, setProducts] = useState<IApi[]>(
    localProducts !== null ? JSON.parse(localProducts) : []
  );
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
  }, []);

  const { scrollYProgress, scrollY } = useScroll();
  let sum = 0;

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

  return (
    <section className="max-w-[1300px] m-auto flex gap-2 items-start justify-between">
      <div className="w-[75%]">
        <div className="grid  mb-6">
          <div className="grid gridCol grid-cols-4 bg-[#E2F4FF] px-[30px] py-[15px] ">
            <h1>Product</h1>
            <h1 className="text-center">Price</h1>
            <h1 className="text-center">Quantity</h1>
            <h1 className="text-center">Subtotal</h1>
          </div>
          {products.map((value, index) => {
            sum += value.price * countQuantity[index];
            return (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 * index }}
                viewport={{ once: true }}
                key={index}
                className="grid gridCol grid-cols-4 items-center px-[30px] py-[15px] relative border-b-2 border-gray-300"
              >
                <div className="flex gap-2 items-center">
                  <Image
                    className="max-h-[100px]"
                    width={135}
                    height={120}
                    src={value.url}
                    alt="img"
                  />

                  <div>
                    <p className="">{value.title}</p>
                    <p>Color: {value.color}</p>
                  </div>
                </div>

                <div>
                  <h1 className="text-center">{value.price} ₽</h1>
                </div>

                <div className="flex gap-1  justify-center items-center">
                  <button
                    onClick={() => handleSubtract(index)}
                    className="w-[40px] h-[40px] bg-gray-200 border border-[#cccccc] "
                  >
                    -
                  </button>
                  <button className="w-[40px] h-[40px] bg-gray-200 border border-[#cccccc]">
                    {countQuantity[index]}
                  </button>
                  <button
                    onClick={() => handleAdd(index)}
                    className="w-[40px] h-[40px] bg-gray-200 border border-[#cccccc]"
                  >
                    +
                  </button>
                </div>

                <div>
                  <h1 className="text-center">
                    {value.price * countQuantity[index]} ₽
                  </h1>
                </div>

                <div
                  onClick={(e) => handleDelete(e, index)}
                  className="cursor-pointer absolute right-0 border text-white bg-red-500  px-2  rounded-full"
                >
                  x
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="flex gap-3 mb-6">
          <Link
            href="/"
            className="font-semibold py-3 px-3 bg-[#EDA415] m-auto text-white rounded-3xl"
          >
            Continue shopping
          </Link>

          {products.length > 0 && (
            <button
              onClick={() => handleDeleteAll()}
              className="font-semibold py-3 px-9 w-[50%] m-auto border-[#C33131] border text-[#C33131] rounded-3xl"
            >
              Clear cart
            </button>
          )}
        </div>
      </div>

      <motion.div
        style={{ translateY: scrollY }}
        className="grid relative mb-6 w-[35%] border"
      >
        <div className="bg-[#E2F4FF] px-[30px] py-[15px]">
          <h1>Cart total</h1>
        </div>
        <div className="p-6">
          <div className="flex flex-col gap-3">
            <div className="flex justify-between border-b-2 border-gray-300 pb-3 mb-3">
              <h1>Subtotal</h1>
              <h1>{sum} ₽</h1>
            </div>

            <div className="relative  flex items-center  pb-3 mb-3">
              <input
                ref={refInput}
                type="text"
                className="border rounded-2xl py-4 px-4"
                placeholder="Enter coupon code"
              />
              <span
                onClick={(e) => handleApply(e)}
                className="hover:underline  cursor-pointer absolute right-0 mr-[10px]"
              >
                Apply
              </span>
            </div>

            <div className="flex justify-between">
              <h1>Total amount</h1>
              <h1>{discount !== 0 ? sum - (sum / 100) * discount : sum} ₽</h1>
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
