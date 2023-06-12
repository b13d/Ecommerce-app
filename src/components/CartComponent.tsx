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

interface IProps {
  newProduct: IApi | undefined;
}

// newProduct: IApi | undefined,
// setProductsLast: React.Dispatch<React.SetStateAction<IApi | undefined>>

export default function CartComponent({ newProduct }: IProps) {
  const [products, setProducts] = useState<IApi[]>([]);

  useEffect(() => {
    let tempArrProducts: IApi[] = [...products];

    if (products !== null && newProduct !== undefined) {
      tempArrProducts.push(newProduct); // мб тут ошибка

      setProducts(tempArrProducts);
    }
  }, [newProduct]);

  return (
    <>
      {(products.length > 0 || newProduct !== undefined) && (
        <div className="cart fixed top-3 right-3 rounded-md border-[#353535] border-2  w-[300px] h-auto">
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
