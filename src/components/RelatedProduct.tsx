import React from "react";
import Image from "next/image";
import ApiElectronics from "@/api/apiElectronics.json";
import { IApi } from "./CartComponent";
import Link from "next/link";
import { motion } from "framer-motion";

interface IPropsProduct {
  currentIndex: number;
}

export default function RelatedProduct({ currentIndex }: IPropsProduct) {
  let listApi: IApi[] = ApiElectronics;

  return (
    <section className="max-sm: max-md:items-center max-md:justify-center flex flex-wrap gap-4 mb-[150px]">
      {listApi.map((value) => {
        if (value.id !== currentIndex) {
          return (
            <Link href={`products/${value.id}`} key={value.id}>
              <div className="max-sm:w-[300px] w-[350px] flex flex-col relative gap-5 border rounded-xl p-4">
                {/* <motion.img
                  className="w-[32px] h-[32px] ml-auto border-[#313131] border-2 p-1 rounded-md hover:bg-gray-300"
                  width={32}
                  height={32}
                  src="/images/heart.png"
                  alt="heart-icon"
                /> */}
                <div className="flex justify-center relative">
                  <img
                    className="object-scale-down h-[200px]"
                    src={value.url[0]}
                    alt="popular-item"
                  />
                </div>

                <div className="flex h-[130px] flex-col gap-4">
                  <p className="text-[#1B5A7D] font-semibold">{value.title}</p>
                  <p className="font-bold mt-auto">{value.price}₽</p>
                </div>
              </div>
            </Link>
          );
        }
      })}
    </section>
  );
}
