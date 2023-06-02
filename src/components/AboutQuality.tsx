import React from "react";
import Image from "next/image";

export default function AboutQuality() {
  return (
    <section className="max-w-[1300px] grid grid-cols-3 gap-7 bg-[#E2F4FF] py-[44px] px-[120px] rounded-2xl my-[75px]">
      <div className="flex gap-3 justify-center">
        <Image src="/images/box-tick.png" width={50} height={50} alt="icon" />

        <div className="text-[#003F62]">
          <h1 className="font-bold">Free delivery</h1>
          <p>on order above $50,00</p>
        </div>
      </div>
      <div className="flex gap-3 justify-center">
        <Image src="/images/crown.png" width={50} height={50} alt="icon" />

        <div className="text-[#003F62] ">
          <h1 className="font-bold">Best quality</h1>
          <p>best quality in low price</p>
        </div>
      </div>
      <div className="text-[#003F62] flex gap-3 justify-center">
        <Image
          src="/images/shield-security.png"
          width={50}
          height={50}
          alt="icon"
        />

        <div className="text-[#003F62]">
          <h1 className=" font-bold">1 year warranty</h1>
          <p>Avaliable warranty</p>
        </div>
      </div>
    </section>
  );
}
