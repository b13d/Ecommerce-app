"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import apiElectronics from "../api/apiElectronics.json";
import { count } from "console";
import { IApi } from "./CartComponent";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface ICategories {
  name: string;
  checked: boolean;
}

interface ILastELemet {
  element: React.ChangeEvent<HTMLInputElement> | HTMLInputElement | undefined;
  nameElement: string;
}

export default function Products() {
  const [listCategories, setListCategories] = useState<ICategories[]>([
    {
      name: "All categories",
      checked: false,
    },
    {
      name: "Smartphones",
      checked: false,
    },
    {
      name: "Laptops",
      checked: false,
    },
    {
      name: "TVs",
      checked: false,
    },
  ]);

  const [lastChangeElement, setLastChangeElement] = useState<ILastELemet>();
  const [rangeValue, setRangeValue] = useState<string>("25000");
  const [productsOnScreen, setProductsOnScreen] = useState<IApi[]>([]);
  const [firstElement, setFirstElement] = useState<HTMLInputElement>();

  let ref = useRef(null);
  // checked categories

  useEffect(() => {
    if (firstElement !== undefined)
      handleChange(firstElement, "All categories", Number(rangeValue), true);
  }, [firstElement]);

  const handleChange = (
    element: React.ChangeEvent<HTMLInputElement> | HTMLInputElement | undefined,
    nameElement: string,
    currentRangeValue?: number,
    firstDownload?: boolean
  ) => {
    let tempLastElement: ILastELemet = {
      element,
      nameElement,
    };

    let temp = apiElectronics.filter(
      (value) => value.category === nameElement.toLowerCase()
    );

    if (currentRangeValue === undefined) currentRangeValue = Number(rangeValue);

    // debugger;

    if (firstDownload) {
      listCategories[0].checked = true;

      let tempArr: IApi[] = [];

      apiElectronics.map((value) => {
        if (
          currentRangeValue !== undefined
            ? value.price <= currentRangeValue
            : true
        )
          tempArr.push(value);
      });

      setLastChangeElement(tempLastElement);
      setProductsOnScreen([...tempArr]);
    } else if (
      element !== undefined
        ? !(element instanceof HTMLInputElement)
          ? element.target.checked
          : element.checked
        : false
    ) {
      let tempArr: IApi[] = [];

      setLastChangeElement(tempLastElement);
      if (nameElement === "All categories") {
        listCategories.map((value, index) => {
          index === 0 ? (value.checked = true) : (value.checked = false);
        });

        apiElectronics.map((value) => {
          if (
            currentRangeValue !== undefined
              ? value.price <= currentRangeValue
              : true
          )
            tempArr.push(value);
        });
      } else {
        // tempArr = productsOnScreen;
        tempArr = [];

        if (listCategories[0].checked) {
          listCategories[0].checked = false;

          tempArr = [];
        }

        let tempCategory = listCategories.filter(
          (value) => value.name === nameElement
        );

        tempCategory.map((value) => {
          value.checked = true;
        });

        // добавление продуктов у которых в listCategories стоит true

        listCategories.forEach((listCategoriesValue) => {
          apiElectronics.filter((apiElectronicsValue) => {
            if (
              apiElectronicsValue.category ===
                listCategoriesValue.name.toLowerCase() &&
              listCategoriesValue.checked &&
              currentRangeValue !== undefined &&
              apiElectronicsValue.price < currentRangeValue
            ) {
              tempArr.push(apiElectronicsValue);
            }
          });
        });
      }

      setProductsOnScreen([...tempArr]);
      // console.log(tempArr);
    } else {
      let tempArr: IApi[] = [];

      if (nameElement === "All categories") {
        listCategories[0].checked = false;
      } else {
        if (!listCategories[0].checked) {
          let tempCategory = listCategories.filter(
            (value) => value.name === nameElement
          );

          tempCategory.map((value) => {
            value.checked = false;
          });

          productsOnScreen.map((value) => {
            if (value.category !== nameElement.toLowerCase()) {
              tempArr.push(value);
            }
          });
        } else tempArr = productsOnScreen;
      }
      setProductsOnScreen([...tempArr]);
    }
  };

  const handleRange = (element: React.ChangeEvent<HTMLInputElement>) => {
    let tempValue = Number(element.target.value) * 500;

    if (lastChangeElement !== undefined)
      handleChange(
        lastChangeElement.element,
        lastChangeElement.nameElement,
        tempValue
      );

    setRangeValue(tempValue.toString());
  };

  console.log(listCategories);

  useEffect(() => {
    let list = document.querySelector(".list-categories");

    if (list !== null)
      setFirstElement(list.children[0].getElementsByTagName("input")[0]);
  }, [ref]);
  return (
    <div className="max-w-[1300px] m-auto">
      <div className="flex gap-2 mb-4">
        <section className="leftProducts w-[320px] ">
          <div className="border-b-2 border-gray pb-4 mb-4">
            <div className="flex justify-between pb-3">
              <h1 className="text-[#316887] font-semibold">Categories</h1>
              <h1 className="cursor-pointer text-[#888585]">Reset</h1>
            </div>
            <ul className="list-categories flex flex-col gap-1">
              {listCategories.map((value, index) => {
                return (
                  <li key={index} className="flex justify-between">
                    <div>
                      <input
                        ref={ref}
                        className="mr-1"
                        onChange={(e) => handleChange(e, value.name)}
                        type="checkbox"
                        checked={listCategories[index].checked}
                      />
                      <label>{value.name}</label>
                    </div>

                    <span>
                      {value.name === "All categories"
                        ? apiElectronics.length
                        : apiElectronics.filter((currentValue) =>
                            currentValue.category.includes(
                              value.name.toLowerCase()
                            )
                          ).length}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="border-b-2 border-gray pb-4 mb-4">
            <div className="flex justify-between pb-3">
              <h1 className="text-[#316887] font-semibold">Price</h1>
              <h1 className="cursor-pointer text-[#888585]">Reset</h1>
            </div>
            <ul className="flex gap-1">
              <p>0</p>
              <input
                className="w-full"
                type="range"
                name="range"
                id="range"
                min="0"
                max="100"
                step="10"
                onChange={(e) => handleRange(e)}
              />
              <p>{">"}50000₽</p>
            </ul>
            <p>0 - {rangeValue === "50000" ? ">50000" : rangeValue} ₽</p>
          </div>
        </section>
        <section className="RightProducts grid grid-cols-3 gap-3 w-[100%] grid-rows-[313px]">
          {productsOnScreen.map((value: IApi, index) => {
            return (
              <Link key={index} href={`/products/${value.id}`}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 10,
                  }}
                  className="flex flex-col border rounded-xl p-4 pb-8 max-h-[313px]"
                >
                  <div className="h-[220px] flex flex-col justify-center relative">
                    <p className="text-right font-bold">{value.price} ₽</p>

                    <img
                      className="mb-4 m-auto object-scale-down w-[200px] h-[180px]"
                      src={value.url[0]}
                      alt="popular-item"
                    />
                  </div>

                  <div className="flex flex-col gap-4">
                    <p className="text-[#1B5A7D] font-semibold">
                      {value.title}
                    </p>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </section>
      </div>
    </div>
  );
}
