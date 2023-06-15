"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import RelatedProduct from "@/components/RelatedProduct";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import apiElectronics from "@/api/apiElectronics.json";
import { IApi } from "@/components/CartComponent";
import Link from "next/link";

interface IUser {
  id: number;
  title: string;
  body: string;
}

export default function Product({ params }: { params: { id: string } }) {
  const [data, setData] = useState<IApi>();

  useEffect(() => {
    const handleGetData = async () => {
      let apiData: IApi = await getData(params.id);

      setData(apiData);
    };

    handleGetData();
  }, []);

  const handleChangeColor = () => {};

  console.log(data);
  if (data !== undefined) {
    let description = data.description.split(";");

    return (
      <>
        <section className="max-w-[1300px] m-auto">
          <Header />
          {/* <div className="text-right mb-5">
            <Link
              className="border py-3 px-5  text-center hover:bg-black hover:text-white duration-300"
              href="/"
            >
              Вернуться
            </Link>
          </div> */}

          <section className="flex gap-10 mb-[75px]">
            <div className="flex justify-center items-center m-auto flex-col gap-4">
              <div>
                <img
                  src={data !== undefined ? data.url[0] : ""}
                  alt="current-product"
                />
              </div>

              <div className="flex gap-5  justify-between">
                <img
                  className="w-[50%] border rounded-2xl h-[220px]"
                  src={data !== undefined ? data.url[1] : ""}
                  alt="next-product"
                />
                <img
                  className="w-[50%] border rounded-2xl h-[220px]"
                  src={data !== undefined ? data.url[2] : ""}
                  alt="next-product"
                />
              </div>
            </div>
            <div className="w-[40%]  shadow-lg p-4">
              <div className="border-b-2 border-[#BDBDBD] pb-4 mb-4 flex flex-col gap-4">
                <h1 className="text-[#fd9915] tracking-wider text-[26px] leading-8 font-semibold">
                  {data !== undefined ? data.title : ""}
                </h1>
                <p className="text-[24px]">
                  <span className="text-[28px] font-semibold">
                    {data !== undefined ? data.price : 0}
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
                <div className="flex gap-2 items-center">
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
                </div>
                {data.gigabytes && (
                  <div className="flex gap-2 items-center">
                    <span>gigabytes: </span>
                    {data.gigabytes?.map((value, index) => {
                      return (
                        <button key={index} className="bg-[#353535] hover:bg-[#e7e7e7] hover:text-black  duration-300 text-white py-2 px-4">
                          {value}
                        </button>
                      );
                    })}
                  </div>
                )}

                <div className="flex gap-5 items-center ">
                  <button className="bg-[#000000] py-3 w-[150px] rounded-sm text-[white] hover:bg-white hover:border hover:border-[#1d1d1d] duration-300 hover:text-black">
                    Add to cart
                  </button>
                  <button className="bg-[#000000] py-3 w-[150px] rounded-sm text-[white] hover:bg-white hover:border hover:border-[#1d1d1d] duration-300 hover:text-black">
                    Buy it now
                  </button>
                  <div className="bg-gray-300 rounded-full p-4">
                    <img
                      className="w-[36px] h-[36px]"
                      src="/images/heart.svg"
                      alt="heart"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                {description.map((value, index) => {
                  return <p key={index}>{value}</p>;
                })}
              </div>
            </div>
          </section>

          <RelatedProduct currentIndex={data.id} />
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

  console.log(res);

  return res[0];
}
