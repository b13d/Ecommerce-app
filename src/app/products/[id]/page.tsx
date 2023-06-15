"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import RelatedProduct from "@/components/RelatedProduct";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import apiElectronics from "@/api/apiElectronics.json";
import { IApi } from "@/components/CartComponent";

interface IUser {
  id: number;
  title: string;
  body: string;
}

export default async function Product({ params }: { params: { id: string } }) {
  const data: IApi = await getData(params.id);

  console.log(data);

  const handleChangeColor = () => {};

  return (
    <>
      <section className="max-w-[1300px] m-auto">
        <Header />
        <section className="flex gap-10 mb-[75px]">
          <div className="flex justify-center items-center m-auto flex-col gap-4">
            <div>
              <img
                src={data !== undefined ? data.url : ""}
                alt="current-product"
              />
            </div>

            <div className="flex  justify-between">
              <img
                className="border rounded-2xl h-[150px]"
                src="/images/popular-product-3.png"
                width={310}
                height={150}
                alt="next-product"
              />
              <img
                className="border rounded-2xl h-[150px]"
                src="/images/popular-product-3.png"
                width={310}
                height={150}
                alt="next-product"
              />
            </div>
          </div>
          <div className="w-[40%]">
            <div className="border-b-2 border-[#BDBDBD] pb-4 mb-4 flex flex-col gap-4">
              <h1 className="text-[#1B5A7D] text-[26px] font-medium">
                {data !== undefined ? data.title : ""}
              </h1>
              <p className="text-[28px]">
                {data !== undefined ? data.price : 0}₽
              </p>
              <h1>
                Availability:{" "}
                <span className="text-[#30BD57] font-bold">✓ In stack</span>
              </h1>
              <p>Hurry up! only 34 product left in stock!</p>
            </div>

            <div className="flex flex-col gap-8 border-b-2 border-[#BDBDBD] pb-4 mb-4">
              <div className="flex gap-2 items-center">
                <span>Color: </span>
                {data !== undefined
                  ? data.color.map((value, index) => {
                      return (
                        <span
                          key={index}
                          className={`w-[15px] h-[15px] border bg-${value} rounded-md block`}
                        ></span>
                      );
                    })
                  : ""}
              </div>
              <div className="flex gap-2 items-center">
                <span>Size: </span>
                <button className="bg-gray-200 px-4">30</button>
                <button className="bg-gray-200 px-4">56</button>
                <button className="bg-gray-200 px-4">42</button>
                <button className="bg-gray-200 px-4">48</button>
              </div>
              <div className="flex  items-center">
                <span className="mr-[10px]">Quantity: </span>
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
              <div className="flex gap-10 items-center justify-between">
                <button className="bg-[#EDA415] py-[15px] px-10 rounded-3xl text-[white]">
                  Add to cart
                </button>
                <button className="bg-[#EDA415] py-[15px] px-10 rounded-3xl text-[white]">
                  Buy it now
                </button>
                <div className="bg-gray-300 rounded-full p-4">
                  <img
                    className="w-[36px] h-[36px]"
                    src="/images/heart.svg"
                    alt="heart"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h1>
                Sku: <span>01133-9-9</span>
              </h1>
              <h1>
                Category: <span>20% off, 49% off Alex remote</span>
              </h1>
              <div className="flex gap-2">
                <h1>Share:</h1>
                <div className="flex gap-4">
                  <img src="/images/facebook.png" alt="social-icon" />
                  <img src="/images/whatsapp.png" alt="social-icon" />
                  <img src="/images/google.png" alt="social-icon" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="flex gap-4 justify-center mb-6">
          <button className="py-[15px] px-[30px] w-[180px] font-semibold text-[#003F62] border rounded-2xl">
            Description
          </button>
          <button className="py-[15px] px-[30px] w-[180px] text-white bg-[#003F62] rounded-2xl">
            Reviews
          </button>
        </div>

        <div className="flex flex-col gap-3 border rounded-2xl w-full p-7 mb-8">
          <h1 className="font-bold text-[#003F62]">Customer reviews</h1>
          <p>No reviews yet</p>
          <button className="py-[8px] px-[15px] w-[180px] bg-[#003F62] text-white">
            Write a review
          </button>
        </div>

        <RelatedProduct />
      </section>
      <Footer />
    </>
  );
}

async function getData(currentId: string) {
  const res = await apiElectronics.filter((value) => {
    if (value.id === Number(currentId)) return value;
  });

  console.log(res);

  return res[0];
}
