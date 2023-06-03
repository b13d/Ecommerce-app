import React from "react";
import Image from "next/image";

export default function SaleUP() {
  return (
    <section className="max-w-[1300px] m-auto flex bg-[url('/images/bg-sale.png')] rounded-3xl justify-end bg-no-repeat my-[50px]">
      <div className="flex flex-col items-center pt-[90px] pb-[60px] pr-[150px] gap-4">
        <button className="bg-[#d99613] py-[10px] px-[25px] text-white rounded-2xl">New laptop</button>
        <h1 className="text-[50px] text-[#2E8FC5] font-bold">Sale up to 50% off</h1>
        <p className="text-white">12 inch hd display</p>
        <button className="bg-[#d99613] py-[10px] px-[25px] text-white rounded-2xl">Shop now</button>
      </div>
    </section>
  );
}
