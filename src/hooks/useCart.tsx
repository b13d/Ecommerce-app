"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { IApi } from "@/components/CartComponent";

export default function UseCart() {
  let localProducts = localStorage.getItem("products");

  const [products, setProducts] = useState<IApi[]>(
    localProducts !== null ? JSON.parse(localProducts) : []
  );

  const handleDelete = (
    element: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {};

  return (
    <section className="max-w-[1300px] m-auto flex gap-2 items-start justify-between">
      <div className="">
        <div className="grid  mb-6">
          <div className="grid gridCol grid-cols-4 bg-[#E2F4FF] px-[30px] py-[15px] ">
            <h1>Product</h1>
            <h1 className="text-center">Price</h1>
            <h1 className="text-center">Quantity</h1>
            <h1 className="text-center">Subtotal</h1>
          </div>
          {products.map((value, index) => {
            return (
              <div
                key={index}
                className="grid gridCol grid-cols-4 items-center px-[30px] py-[15px] relative border-b-2 border-gray-300"
              >
                <div className="flex gap-2 items-center">
                  <Image className="max-h-[100px]" width={135} height={120} src={value.url} alt="img" />

                  <div>
                    <p className="">{value.title}</p>
                    <p>Color: {value.color}</p>
                  </div>
                </div>

                <div>
                  <h1 className="text-center">{value.price}₽</h1>
                </div>

                <div className="flex justify-center items-center">
                  <button className="bg-gray-200 border border-[#cccccc] px-4">
                    -
                  </button>
                  <button className="bg-gray-200 border border-[#cccccc] px-4">
                    1
                  </button>
                  <button className="bg-gray-200 border border-[#cccccc] px-4">
                    +
                  </button>
                </div>

                <div>
                  <h1 className="text-center">{value.price}₽</h1>
                </div>

                <div
                  onClick={(e) => handleDelete(e)}
                  className="cursor-pointer absolute right-0 border text-white bg-red-500  px-2  rounded-full"
                >
                  x
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex gap-3 mb-6">
          <button className="font-semibold py-3 px-9 w-[60%] bg-[#EDA415] m-auto text-white rounded-3xl">
            Continue shopping
          </button>
          <button className="font-semibold py-3 px-9 w-[50%] border-[#797979] border m-auto text-[#797979] rounded-3xl">
            Update cart
          </button>
          <button className="font-semibold py-3 px-9 w-[50%] m-auto border-[#C33131] border text-[#C33131] rounded-3xl">
            Clear cart
          </button>
        </div>
      </div>

      <div className="grid  mb-6 w-[35%] border">
        <div className="grid gridCol grid-cols-4 bg-[#E2F4FF] px-[30px] py-[15px]">
          <h1>Cart total</h1>
        </div>
        <div className="p-6">
          <div className="flex flex-col gap-3">
            <div className="flex justify-between border-b-2 border-gray-300 pb-3 mb-3">
              <h1>Subtotal</h1>
              <h1>$ 23,20</h1>
            </div>

            <div className="border-b-2 border-gray-300 pb-3 mb-3">
              <input
                type="text"
                className="border rounded-2xl py-4 px-4"
                placeholder="Enter coupon code"
              />
              <span>Apply</span>
            </div>

            <div className=" pb-3 mb-3">
              <input
                type="text"
                className="border rounded-2xl py-4 px-4"
                placeholder="County"
              />
              <span>
                <Image
                  width={25}
                  height={25}
                  src="/images/arrow-down.svg"
                  alt="arrow-down"
                  className="inline"
                />
              </span>
            </div>

            <div className="flex justify-between">
              <h1>Total amount</h1>
              <h1>$ 23,20</h1>
            </div>

            <button className="py-3 px-9 w-[80%] bg-[#EDA415] m-auto text-white rounded-3xl">
              Proceed to ckeckout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
