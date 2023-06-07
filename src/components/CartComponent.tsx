"use client";

import React, { useState, useEffect } from "react";

interface IApi {
  id: number;
  url: string;
  title: string;
  price: number;
  star: number;
  color: string;
  category: string;
}

export default function CartComponent(newProduct: IApi) {
  const [products, setProducts] = useState<IApi[]>([]);

  console.log(newProduct);

  useEffect(() => {
    let tempArrProducts: IApi[] = [];

    if (products !== null && newProduct.id !== undefined) {
      tempArrProducts.push(...products, newProduct); // мб тут ошибка

      setProducts(tempArrProducts);
    }
  }, [newProduct]);

  console.log(products);
  console.log(newProduct.id);

  return (
    <>
      {(products.length > 0 || newProduct.id !== undefined) && (
        <div className="fixed top-3 right-3 rounded-md border-[#353535] border-2  w-[300px] h-auto">
          {products &&
            products.map((value, index) => {
              return (
                <div
                  className="flex items-center gap-3 px-4 py-2 bg-[#dbdbdb3d] justify-between"
                  key={index}
                >
                  <img
                    className="w-[40px] h-[40px] rounded-2xl object-contain"
                    src={value.url}
                    alt=""
                  />
                  <p className="text-[14px]">{value.title}</p>
                  <h2>{value.price}</h2>
                </div>
              );
            })}
        </div>
      )}
    </>
  );
}
