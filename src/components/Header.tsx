import React from "react";
import Image from "next/image";
import HeaderMainInfo from "@/components/HeaderMainInfo";
import Slider from "@/components/Slider";

export default function Header() {
  return (
    <>
      <div className="max-w-[1300px] m-auto wrapper-header flex justify-between pt-[20px]  pb-[20px] px-[40px] bg-white/30 backdrop-blur">
        <div className="flex items-center gap-4">
          <Image
            width={25}
            height={25}
            src="/images/burger-menu.png"
            alt="icon-burger-menu"
          />
          <h1>MENU</h1>
        </div>
        <div>ICON</div>
        <div className="flex items-center gap-4">
          <Image
            width={25}
            height={25}
            src="/images/search.png"
            alt="icon-find"
          />
          <Image
            width={25}
            height={25}
            src="/images/user.png"
            alt="icon-user"
          />
          <Image
            width={25}
            height={25}
            src="/images/shopping-cart.png"
            alt="icon-shop"
          />
        </div>
      </div>
      <HeaderMainInfo />
      <Slider />
    </>
  );
}
