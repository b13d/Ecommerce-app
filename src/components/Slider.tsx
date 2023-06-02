import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Slider() {
  return (
    <section className="max-w-[1300px] m-auto flex gap-9 justify-center mt-[52px] mb-[78px]">
      <div className="border border-[#969696] flex gap-[43px] py-[20px] px-[25px] rounded-md items-center relative">
        <div className="absolute left-[-20px]">
          <img
            className="bg-[#EAEAEA] rounded-full p-1 rotate-180"
            src="/images/arrow-left.png"
            alt="arrow"
          />
        </div>
        <div>
          <Image
            src="/images/slider-item-1.png"
            width={100}
            height={120}
            alt="item-slider"
          />
        </div>
        <div>
          <h2>Speaker</h2>
          <Link href="">(6 items)</Link>
        </div>
      </div>
      <div className="border border-[#969696] flex gap-[43px] py-[20px] px-[25px] rounded-md items-center">
        <div>
          <Image
            src="/images/slider-item-1.png"
            width={100}
            height={120}
            alt="item-slider"
          />
        </div>
        <div>
          <h2>Speaker</h2>
          <Link href="">(6 items)</Link>
        </div>
      </div>
      <div className="border border-[#969696] flex gap-[43px] py-[20px] px-[25px] rounded-md items-center relative">
        <div className="absolute right-[-20px]">
          <img
            className="bg-[#EAEAEA] rounded-full p-1"
            src="/images/arrow-left.png"
            alt="arrow"
          />
        </div>
        <div>
          <Image
            src="/images/slider-item-1.png"
            width={100}
            height={120}
            alt="item-slider"
          />
        </div>
        <div>
          <h2>Speaker</h2>
          <Link href="">(6 items)</Link>
        </div>
      </div>
    </section>
  );
}
