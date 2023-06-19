"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import RelatedProduct from "@/components/RelatedProduct";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import apiElectronics from "@/api/apiElectronics.json";
import { IApi } from "@/components/CartComponent";
import Link from "next/link";
import CartComponent from "@/components/CartComponent";

interface IUser {
  id: number;
  title: string;
  body: string;
}

export default function Product({ params }: { params: { id: string } }) {
  const [data, setData] = useState<IApi>();
  const [product, setProducts] = useState<IApi>();
  const [currentGigabyte, setCurrentGigabute] = useState(0);
  const [indexButton, setIndexButton] = useState(0);
  const [showCart, setShowCart] = useState<boolean>(false);
  const [newPrice, setNewPrice] = useState<number | undefined>(undefined);

  useEffect(() => {
    const handleGetData = async () => {
      let apiData: IApi = await getData(params.id);

      // console.log(apiData);
      setData(apiData);
    };

    handleGetData();
  }, []);

  const handleChangeColor = () => {};

  useEffect(() => {
    setProducts(undefined);
  }, [product]);

  const handleChangeGigabytes = (index: number) => {
    setIndexButton(index);
    setCurrentGigabute(index !== 0 ? 0.5 + (index + 1) * 0.5 : 1);
  };

  useEffect(() => {}, [newPrice]);

  // console.log(data);
  if (data !== undefined) {
    let description = data.description.split(";");

    const handleClickBuy = () => {
      let actualPriceProduct = document.querySelector(".price")?.innerHTML;
      let currentGigabyte = document.querySelector(".gigabyte")?.innerHTML;

      if (Number(actualPriceProduct) > data.price) {
        let productTitle = data.title + " " + ` GB: ${currentGigabyte}`;

        let tempData: IApi = {
          id: data.id,
          category: data.category,
          color: data.color,
          description: data.description,
          price: Number(actualPriceProduct),
          star: data.star,
          title: productTitle,
          url: data.url,
          gigabytes: data.gigabytes,
        };
        // let oldPrice = data.price;
        // tempData.price = Number(actualPriceProduct);

        setProducts(tempData);
        setNewPrice(undefined);
        // data.price = oldPrice;
      } else setProducts(data);
      setShowCart(true);
    };

    return (
      <>
        <section className="max-w-[1300px] bg-white rounded-md px-2 m-auto mt-[100px]">
          <Header />
          {/* <div className="text-right mb-5">
            <Link
              className="border py-3 px-5  text-center hover:bg-black hover:text-white duration-300"
              href="/"
            >
              Вернуться
            </Link>
          </div> */}

          <section className="max-md:flex-col max-md:justify-center p-5 flex gap-10 mb-5">
            <div className="flex justify-center items-center m-auto flex-col gap-4">
              <div>
                <img
                  className="max-md:max-h-[300px] max-h-[500px]"
                  src={data !== undefined ? data.url[0] : ""}
                  alt="current-product"
                />
              </div>

              <div className="max-sm:flex-col max-sm:justify-center items-center  flex gap-5  justify-between">
                <img
                  className="max-md: max-h-[300px] max-sm:max-w-[300px] sm:w-[50%]  h-[220px]"
                  src={data !== undefined ? data.url[1] : ""}
                  alt="next-product"
                />
                <img
                  className="max-md: max-h-[300px] max-sm:max-w-[300px] sm:w-[50%]  h-[220px]"
                  src={data !== undefined ? data.url[2] : ""}
                  alt="next-product"
                />
              </div>
            </div>
            <div className="max-md:w-[100%] w-[40%]  shadow-lg p-4">
              <div className="border-b-2 border-[#BDBDBD] pb-4 mb-4 flex flex-col gap-4">
                <h1 className="text-[#fd9915] tracking-wider text-[26px] leading-8 font-semibold">
                  {data !== undefined ? data.title : ""}
                </h1>
                <p className="text-[24px]">
                  <span className="price text-[28px] font-semibold">
                    {data !== undefined
                      ? currentGigabyte !== 0
                        ? data.price * currentGigabyte
                        : data.price
                      : 0}
                  </span>
                  ₽
                </p>

                <h1>
                  Availability:{" "}
                  <span className="text-[#30BD57] font-bold">✓ In stack</span>
                </h1>
                <p>Hurry up! only 34 product left in stock!</p>
              </div>

              <div className="flex flex-col gap-8 border-b-2 border-[#BDBDBD] pb-4 mb-4">
                {/* <div className="flex gap-2 items-center">
                  <span>Color: </span>
                  {data !== undefined
                    ? data.color.map((value, index) => {
                        return (
                          <span
                            key={index}
                            style={{ background: value }}
                            className={`cursor-pointer w-[15px] h-[15px] border  rounded-md block`}
                          ></span>
                        );
                      })
                    : ""}
                </div> */}
                {data.gigabytes && (
                  <div className="flex gap-2 flex-wrap items-center">
                    <span>gigabytes: </span>
                    {data.gigabytes?.map((value, index) => {
                      let styleButton = "";

                      if (indexButton === index) {
                        styleButton =
                          "gigabyte bg-white hover:bg-black hover:text-white border border-black  duration-300 text-black py-2 px-4";
                      } else {
                        styleButton =
                          "bg-[#353535] hover:bg-[#e7e7e7] hover:text-black  duration-300 text-white py-2 px-4";
                      }

                      return (
                        <button
                          onClick={() => handleChangeGigabytes(index)}
                          key={index}
                          className={styleButton}
                        >
                          {value}
                        </button>
                      );
                    })}
                  </div>
                )}
                <div className="flex flex-col gap-4">
                  {description.map((value, index) => {
                    return <p key={index}>{value}</p>;
                  })}
                </div>
              </div>
              <div className="flex gap-5 items-center ">
                <button
                  onClick={() => handleClickBuy()}
                  className="bg-[#000000] py-3 w-[150px] rounded-sm text-[white] hover:bg-white hover:border hover:border-[#1d1d1d] duration-300 hover:text-black"
                >
                  Add to cart
                </button>
                <button className="bg-[#000000] py-3 w-[150px] rounded-sm text-[white] hover:bg-white hover:border hover:border-[#1d1d1d] duration-300 hover:text-black">
                  Buy it now
                </button>
                {/* <div className="hover:cursor-pointer object-contain border-2 rounded-md duration-300 hover:bg-slate-400 border-black ">
                  <img
                    className="w-[36px] h-[36px]"
                    src="/images/heart.svg"
                    alt="heart"
                  />
                </div> */}
              </div>
            </div>
          </section>

          <RelatedProduct currentIndex={data.id - 1} />

          <CartComponent
            newProduct={product}
            showCart={showCart}
            setShowCart={setShowCart}
          />
        </section>
        <Footer />
      </>
    );
  }
}

async function getData(currentId: string) {
  const res = await apiElectronics.filter((value) => {
    if (value.id === Number(currentId)) return value;
  });

  // console.log(res);

  return res[0];
}
