import React from "react";
import Image from "next/image";

export default function RelatedProduct() {
  return (
    <section className="grid grid-cols-4 gap-4 mb-[150px]">
      <div className="flex flex-col border rounded-xl p-4">
        <div className="flex justify-center relative">
          <img
            className="absolute right-0"
            src="/images/favourites.png"
            alt="favourites"
          />
          <img
            src="/images/popular-product-1.png"
            width={180}
            height={180}
            alt="popular-item"
          />
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-[#1B5A7D] font-semibold">Photik</p>
          <p className="font-bold">$11,70</p>

        </div>
      </div>
      <div className="flex flex-col border rounded-xl p-4">
        <div className="flex justify-center relative">
          <img
            className="absolute right-0"
            src="/images/favourites.png"
            alt="favourites"
          />
          <img
            src="/images/popular-product-1.png"
            width={180}
            height={180}
            alt="popular-item"
          />
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-[#1B5A7D] font-semibold">Photik</p>
          <p className="font-bold">$11,70</p>

        </div>
      </div>
      <div className="flex flex-col border rounded-xl p-4">
        <div className="flex justify-center relative">
          <img
            className="absolute right-0"
            src="/images/favourites.png"
            alt="favourites"
          />
          <img
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
          <img
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
  );
}
