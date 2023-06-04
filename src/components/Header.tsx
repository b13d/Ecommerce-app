"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import HeaderMainInfo from "@/components/HeaderMainInfo";
import Slider from "@/components/Slider";
import Link from "next/link";

export default function Header() {
  const [currentUrl, setCurrentUrl] = useState("");
  const [modal, setModal] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (
        window.location.pathname !== "/" &&
        window.location.pathname !== undefined &&
        currentUrl !== window.location.pathname
      ) {
        console.log(window.location.pathname);
        setCurrentUrl(window.location.pathname);
      }
    }
  }, [currentUrl]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | undefined) => {
    setChecked(true);
    setModal(true);
  };

  const handleClickModal = () => {
    setChecked(false);
    setModal(false);
  };

  return (
    <>
      {modal && (
        <div className="background-modal">
          <div className="modal flex flex-col items-center">
            <Link onClick={handleClickModal} href="/">
              Home
            </Link>
            <Link onClick={handleClickModal} href="/products">
              Products
            </Link>
            <Link onClick={handleClickModal} href="/products/cart">
              Cart
            </Link>
          </div>
        </div>
      )}
      <div className="max-w-[1300px] m-auto">
        <div className="wrapper-header flex justify-between pt-[20px]  pb-[20px] bg-white/30 backdrop-blur items-center">
          <div className="flex items-center gap-4">
            <input
              id="menu__toggle"
              className="opacity-0"
              onChange={(e) => handleChange(e)}
              type="checkbox"
              checked={checked}
            />
            <label className="menu__btn" htmlFor="menu__toggle">
              <span></span>
            </label>
            <h1>MENU</h1>
          </div>
          <div><Image src="/images/icon-company1.png" width={70} height={70} alt="icon" /></div>
          <div className="flex items-center gap-4">
            <Image
              className="cursor-pointer"
              width={25}
              height={25}
              src="/images/search.png"
              alt="icon-find"
            />
            <Image
            className="cursor-pointer"
              width={25}
              height={25}
              src="/images/user.png"
              alt="icon-user"
            />
            <Image
            className="cursor-pointer"
              width={25}
              height={25}
              src="/images/shopping-cart.png"
              alt="icon-shop"
            />
          </div>
        </div>
        {currentUrl !== "" && (
          <div className="py-[25px] mb-[100px]">
            <p>{`Home > ${currentUrl.split("/")[1]} ${
              currentUrl.split("/").length > 2
                ? `> ${currentUrl.split("/")[2]}`
                : ""
            } `}</p>
          </div>
        )}
      </div>

      {currentUrl === "" && <HeaderMainInfo />}
      {currentUrl === "" && <Slider />}
    </>
  );
}