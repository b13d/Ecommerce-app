"use client";

import React from "react";
import Image from "next/image";
import SaleUP from "@/components/SaleUP";
import AboutQuality from "@/components/AboutQuality";
import Comments from "@/components/Comments";
import Sponsers from "@/components/Sponsers";
import Link from "next/link";

type TNamesLi = {
  Cameras: string;
  Laptops: string;
  Tablets: string;
  Mouse: string;
};

const NamesLi: TNamesLi = {
  Cameras: "cameras",
  Laptops: "laptops",
  Tablets: "tablets",
  Mouse: "mouse",
};

export default function PopularProducts() {
  const handleClick = (name: string) => {
    console.log(name);
  };

  return (
    <section className="max-w-[1300px] m-auto">
      <div className="flex justify-between mb-[53px]">
        <h1 className="text-[24px] font-bold text-[#1B5A7D]">
          Popular products
        </h1>

        <div>
          <ul className="flex gap-3">
            <li
              onClick={() => handleClick(NamesLi.Cameras)}
              className="cursor-pointer rounded-2xl py-[7px] px-[20px] text-[#1B5A7D] border border-[#1B5A7D]"
            >
              Cameras
            </li>
            <li
              onClick={() => handleClick(NamesLi.Laptops)}
              className="cursor-pointer rounded-2xl py-[7px] px-[20px] text-[#1B5A7D] border "
            >
              Laptops
            </li>
            <li
              onClick={() => handleClick(NamesLi.Tablets)}
              className="cursor-pointer rounded-2xl py-[7px] px-[20px] text-[#1B5A7D] border "
            >
              Tablets
            </li>
            <li
              onClick={() => handleClick(NamesLi.Mouse)}
              className="cursor-pointer rounded-2xl py-[7px] px-[20px] text-[#1B5A7D] border "
            >
              Mouse
            </li>
          </ul>
        </div>
      </div>

      <section className="grid grid-cols-4 gap-6">
        <div className="flex flex-col border rounded-xl p-4">
          <div className="flex justify-center relative">
            <img
              className="absolute right-0"
              src="/images/favourites.png"
              alt="favourites"
            />
            <Image
              src="/images/popular-product-1.png"
              width={180}
              height={180}
              alt="popular-item"
            />
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[#1B5A7D] font-semibold">Photik</p>
            <p className="font-bold">$11,70</p>
            <div className="flex gap-2">
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
            </div>
          </div>
        </div>
        <div className="flex flex-col border rounded-xl p-4">
          <div className="flex justify-center relative">
            <img
              className="absolute right-0"
              src="/images/favourites.png"
              alt="favourites"
            />
            <Image
              src="/images/popular-product-1.png"
              width={180}
              height={180}
              alt="popular-item"
            />
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[#1B5A7D] font-semibold">Photik</p>
            <p className="font-bold">$11,70</p>
            <div className="flex gap-2">
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
            </div>
          </div>
        </div>
        <div className="flex flex-col border rounded-xl p-4">
          <div className="flex justify-center relative">
            <img
              className="absolute right-0"
              src="/images/favourites.png"
              alt="favourites"
            />
            <Image
              src="/images/popular-product-1.png"
              width={180}
              height={180}
              alt="popular-item"
            />
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[#1B5A7D] font-semibold">Photik</p>
            <p className="font-bold">$11,70</p>
            <div className="flex gap-2">
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
            </div>
          </div>
        </div>
        <div className="flex flex-col border rounded-xl p-4">
          <div className="flex justify-center relative">
            <img
              className="absolute right-0"
              src="/images/favourites.png"
              alt="favourites"
            />
            <Image
              src="/images/popular-product-1.png"
              width={180}
              height={180}
              alt="popular-item"
            />
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[#1B5A7D] font-semibold">Photik</p>
            <p className="font-bold">$11,70</p>
            <div className="flex gap-2">
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
            </div>
          </div>
        </div>
        <div className="flex flex-col border rounded-xl p-4">
          <div className="flex justify-center relative">
            <img
              className="absolute right-0"
              src="/images/favourites.png"
              alt="favourites"
            />
            <Image
              src="/images/popular-product-1.png"
              width={180}
              height={180}
              alt="popular-item"
            />
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[#1B5A7D] font-semibold">Photik</p>
            <p className="font-bold">$11,70</p>
            <div className="flex gap-2">
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
            </div>
          </div>
        </div>
        <div className="flex flex-col border rounded-xl p-4">
          <div className="flex justify-center relative">
            <img
              className="absolute right-0"
              src="/images/favourites.png"
              alt="favourites"
            />
            <Image
              src="/images/popular-product-1.png"
              width={180}
              height={180}
              alt="popular-item"
            />
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[#1B5A7D] font-semibold">Photik</p>
            <p className="font-bold">$11,70</p>
            <div className="flex gap-2">
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
            </div>
          </div>
        </div>
        <div className="flex flex-col border rounded-xl p-4">
          <div className="flex justify-center relative">
            <img
              className="absolute right-0"
              src="/images/favourites.png"
              alt="favourites"
            />
            <Image
              src="/images/popular-product-1.png"
              width={180}
              height={180}
              alt="popular-item"
            />
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[#1B5A7D] font-semibold">Photik</p>
            <p className="font-bold">$11,70</p>
            <div className="flex gap-2">
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
            </div>
          </div>
        </div>
        <div className="flex flex-col border rounded-xl p-4">
          <div className="flex justify-center relative">
            <img
              className="absolute right-0"
              src="/images/favourites.png"
              alt="favourites"
            />
            <Image
              src="/images/popular-product-1.png"
              width={180}
              height={180}
              alt="popular-item"
            />
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[#1B5A7D] font-semibold">Photik</p>
            <p className="font-bold">$11,70</p>
            <div className="flex gap-2">
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
            </div>
          </div>
        </div>
      </section>
      <div className="flex gap-2 justify-center my-[50px]">
        <span className="w-[15px] h-[15px]  border bg-[#ff8d41] rounded-md block"></span>
        <span className="w-[15px] h-[15px]  border rounded-md block"></span>
        <span className="w-[15px] h-[15px]   border rounded-md block"></span>
      </div>
      <SaleUP />
      <AboutQuality />
      <Comments />
      <Sponsers />
    </section>
  );
}
