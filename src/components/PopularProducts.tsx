"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import SaleUP from "@/components/SaleUP";
import AboutQuality from "@/components/AboutQuality";
import Comments from "@/components/Comments";
import Sponsers from "@/components/Sponsers";
import Link from "next/link";
import apiElectronics from "../api/apiElectronics.json";
import { motion, useAnimate } from "framer-motion";
import CartComponent from "./CartComponent";
import ElementBuy from "./ElementBuy";

interface IApi {
  id: number;
  url: string;
  title: string;
  price: number;
  star: number;
  color: string;
  category: string;
}

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
  const [images, setImages] = useState<IApi[]>([]);
  const [product, setProducts] = useState<IApi>();
  const [showElement, setShowElement] = useState(false);
  const [listElementsBuy, setListElementsBuy] = useState<React.JSX.Element[]>(
    []
  );
  const [currentKey, setCurrentKey] = useState<number>(0);
  const [showCart, setShowCart] = useState(true);

  const variants = {
    initial: { opacity: 0, scale: 0.5 },

    visible: (index: number) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 1 + (index + 1) * 0.3 },
    }),
  };

  useEffect(() => {
    // setInterval(() => {
    //   console.log(listElementsBuy);
    // }, 3000);

    const tempApi = apiElectronics;

    let tempArrUrl: IApi[] = [];

    for (let i = 0; i < 4; i++) {
      tempApi.map((value) => {
        tempArrUrl.push(value);
      });
    }

    setImages(tempArrUrl);
  }, []);

  const handleClick = (element: string) => {
    console.log(element);
  };

  const handleClickBuy = async (newProduct: IApi) => {
    setProducts(newProduct);
  };

  useEffect(() => {
    setProducts(undefined);
  }, [product]);

  function onTap(event: PointerEvent, info: any) {
    setShowCart(true);

    let list = listElementsBuy;

    let el = listElementsBuy[0];

    if (el !== undefined) el.props.children.props.animate.opacity;

    let cart = document.querySelector(".cart");

    if (cart !== null) {
      let posElement: HTMLElement = event.target as HTMLElement;

      let posY = String(posElement.offsetTop) + "px";
      let posX = String(posElement.offsetLeft) + "px";

      let indexElement = currentKey;

      list.push(ElementBuy({ posX, posY, indexElement }));

      setCurrentKey((value) => value + 1);

      setListElementsBuy(list);

      if (listElementsBuy.length > 10) {
        listElementsBuy.splice(0, 1);

        setListElementsBuy(listElementsBuy);
      }
    }

    setShowElement(true);
  }

  // console.log(listElementsBuy);

  // console.log(tempArr);

  // setListElementsBuy(tempArr);

  console.log(showCart);

  return (
    <section className="max-w-[1300px] m-auto">
      {listElementsBuy.map((value) => {
        return value;
      })}
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

      <motion.section className="grid grid-cols-4 gap-6">
        {images &&
          images.map((value, index) => {
            return (
              <motion.div
                custom={value.id}
                initial="initial"
                variants={variants}
                whileInView="visible"
                viewport={{ once: true }}
                key={index}
                className="flex flex-col border rounded-xl p-4"
              >
                <div className="flex justify-center relative">
                  <Image
                    className="object-contain w-[235px] h-[200px] mb-3"
                    src={value.url}
                    width={180}
                    height={180}
                    alt="popular-item"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <p className="min-h-[70px] text-[#1B5A7D] font-semibold">
                    {value.title}
                  </p>
                  <p className="font-bold text-[20px] ">
                    <span className="text-orange-600">{value.price}</span>₽
                  </p>
                  <div className="flex gap-2">
                    <button onClick={() => handleClickBuy(value)}>
                      <motion.img
                        onTap={onTap}
                        className="w-[32px] h-[32px] border-[#313131] border-2 p-1 rounded-md hover:bg-gray-300"
                        width={32}
                        height={32}
                        src="/images/shopping-cart.png"
                        alt="buy-icon"
                      />
                    </button>
                    <button>
                      <Image
                        className="w-[32px] h-[32px] border-[#313131] border-2 p-1 rounded-md hover:bg-gray-300"
                        width={32}
                        height={32}
                        src="/images/heart.png"
                        alt="buy-icon"
                      />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
      </motion.section>
      <CartComponent
        newProduct={product}
        showCart={showCart}
        setShowCart={setShowCart}
      />
      <SaleUP />
      <AboutQuality />
      <Comments />
      <Sponsers />
    </section>
  );
}
