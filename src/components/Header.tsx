"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import HeaderMainInfo from "@/components/HeaderMainInfo";
import Slider from "@/components/Slider";

export default function Header() {
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (
        window.location.pathname !== "/" &&
        window.location.pathname !== undefined &&
        currentUrl !== window.location.pathname
      ) {
        setCurrentUrl(window.location.pathname);
      }
    }
  }, [currentUrl]);

  return (
    <>
      <div className="max-w-[1300px] m-auto">
        <div className="wrapper-header flex justify-between pt-[20px]  pb-[20px] bg-white/30 backdrop-blur">
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
        {currentUrl !== "" && (
          <div className="py-[25px] mb-[100px]">
            
            <p>{`Home > ${currentUrl.split("/")[1]}`}</p>
          </div>
        )}
      </div>

      {currentUrl === "" && <HeaderMainInfo />}
      {currentUrl === "" && <Slider />}
    </>
  );
}
