"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Products() {
  return (
    <div className="max-w-[1300px] m-auto">
      <div className="flex gap-2">
        <section className="leftProducts w-[320px]">
          <div className="border-b-2 border-gray pb-4 mb-4">
            <div className="flex justify-between pb-3">
              <h1 className="text-[#316887] font-semibold">Categories</h1>
              <h1 className="text-[#888585]">Reset</h1>
            </div>
            <ul className="flex flex-col gap-1">
              <li className="flex justify-between">
                <div>
                  <input type="checkbox" />
                  <label> All categories</label>
                </div>

                <span> 10</span>
              </li>
              <li className="flex justify-between">
                <div>
                  <input type="checkbox" />
                  <label> Tablet</label>
                </div>

                <span> 5</span>
              </li>
              <li className="flex justify-between">
                <div>
                  <input type="checkbox" />
                  <label> Laptop</label>
                </div>

                <span> 5</span>
              </li>
              <li className="flex justify-between">
                <div>
                  <input type="checkbox" />
                  <label> Headphones</label>
                </div>

                <span> 5</span>
              </li>
              <li className="flex justify-between">
                <div>
                  <input type="checkbox" />
                  <label> Console</label>
                </div>

                <span> 5</span>
              </li>
              <li className="flex justify-between">
                <div>
                  <input type="checkbox" />
                  <label> other</label>
                </div>

                <span> 5</span>
              </li>
            </ul>
          </div>
          <div className="border-b-2 border-gray pb-4 mb-4">
            <div className="flex justify-between">
              <h1 className="text-[#316887] font-semibold">Avaliability</h1>
            </div>
            <div>
              <div className="flex justify-between pb-3">
                <h1 className="">0 selected</h1>
                <h1 className="text-[#888585]">Reset</h1>
              </div>

              <ul className="flex flex-col gap-1">
                <li className="flex justify-between">
                  <div>
                    <input type="checkbox" />
                    <label> In stock</label>
                  </div>

                  <span> 5</span>
                </li>
                <li className="flex justify-between opacity-30">
                  <div>
                    <input type="checkbox" />
                    <label> Out of stock</label>
                  </div>

                  <span> 0</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-b-2 border-gray pb-4 mb-4">
            <div className="flex justify-between">
              <h1 className="text-[#316887] font-semibold">Product type</h1>
            </div>
            <div>
              <div className="flex justify-between pb-3">
                <h1 className="">0 selected</h1>
                <h1 className="text-[#888585]">Reset</h1>
              </div>

              <ul className="flex flex-col gap-1">
                <li className="flex justify-between">
                  <div>
                    <input type="checkbox" />
                    <label> Smart-watch</label>
                  </div>

                  <span> 5</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-b-2 border-gray pb-4 mb-4">
            <div className="flex justify-between">
              <h1 className="text-[#316887] font-semibold">Brand</h1>
            </div>
            <div>
              <div className="flex justify-between pb-3">
                <h1 className="">0 selected</h1>
                <h1 className="text-[#888585]">Reset</h1>
              </div>

              <ul className="flex flex-col gap-1">
                <li className="flex justify-between">
                  <div>
                    <input type="checkbox" />
                    <label> Smart-watch</label>
                  </div>

                  <span> 5</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-b-2 border-gray pb-4 mb-4">
            <div className="flex justify-between">
              <h1 className="text-[#316887] font-semibold">Color</h1>
            </div>
            <div>
              <div className="flex justify-between pb-3">
                <h1 className="">0 selected</h1>
                <h1 className="text-[#888585]">Reset</h1>
              </div>

              <ul className="flex flex-col gap-1">
                <li className="flex justify-between">
                  <span className="w-[15px] h-[15px]  border bg-[#ff8d41] rounded-full block"></span>
                  <span className="w-[15px] h-[15px]  border bg-[#E42424] rounded-full block"></span>
                  <span className="w-[15px] h-[15px]  border bg-[#1B5A7D] rounded-full block"></span>
                  <span className="w-[15px] h-[15px]  border bg-[#ACACAC] rounded-full block"></span>
                  <span className="w-[15px] h-[15px]  border bg-[#1D5F23] rounded-full block"></span>
                  <span className="w-[15px] h-[15px]  border bg-[#2E56A3] rounded-full block"></span>
                  <span className="w-[15px] h-[15px]  border bg-[#8131A7] rounded-full block"></span>
                  <span className="w-[15px] h-[15px]  border bg-[#BC2944] rounded-full block"></span>
                  <span className="w-[15px] h-[15px]  border bg-[#9BC14C] rounded-full block"></span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-b-2 border-gray pb-4 mb-4">
            <div className="flex justify-between">
              <h1 className="text-[#316887] font-semibold">Size</h1>
            </div>
            <div>
              <div className="flex justify-between pb-3">
                <h1 className="">0 selected</h1>
                <h1 className="text-[#888585]">Reset</h1>
              </div>

              <ul className="flex flex-col gap-1">
                <li className="flex justify-between">
                  <div>
                    <input type="checkbox" />
                    <label> M</label>
                  </div>

                  <span> 5</span>
                </li>
                <li className="flex justify-between">
                  <div>
                    <input type="checkbox" />
                    <label> S</label>
                  </div>

                  <span> 5</span>
                </li>
                <li className="flex justify-between">
                  <div>
                    <input type="checkbox" />
                    <label> X</label>
                  </div>

                  <span> 5</span>
                </li>
                <li className="flex justify-between">
                  <div>
                    <input type="checkbox" />
                    <label> XX</label>
                  </div>

                  <span> 5</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="RightProducts grid grid-cols-3 gap-3 w-[100%] grid-rows-[313px]">
        <div className="flex flex-col border rounded-xl p-4 max-h-[313px]">
          <div className="flex justify-center relative">
            <img
              className="absolute right-0"
              src="/images/favourites.png"
              alt="favourites"
            />
            <Image
              src="/images/popular-product-1.png"
              width={180}
              height={180}
              alt="popular-item"
            />
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[#1B5A7D] font-semibold">Photik</p>
            <p className="font-bold">$11,70</p>
            <div className="flex gap-2">
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
            </div>
          </div>
        </div>
        <div className="flex flex-col border rounded-xl p-4 max-h-[313px]">
          <div className="flex justify-center relative">
            <img
              className="absolute right-0"
              src="/images/favourites.png"
              alt="favourites"
            />
            <Image
              src="/images/popular-product-1.png"
              width={180}
              height={180}
              alt="popular-item"
            />
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[#1B5A7D] font-semibold">Photik</p>
            <p className="font-bold">$11,70</p>
            <div className="flex gap-2">
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
            </div>
          </div>
        </div>
        <div className="flex flex-col border rounded-xl p-4 max-h-[313px]">
          <div className="flex justify-center relative">
            <img
              className="absolute right-0"
              src="/images/favourites.png"
              alt="favourites"
            />
            <Image
              src="/images/popular-product-1.png"
              width={180}
              height={180}
              alt="popular-item"
            />
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[#1B5A7D] font-semibold">Photik</p>
            <p className="font-bold">$11,70</p>
            <div className="flex gap-2">
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
            </div>
          </div>
        </div>
        <div className="flex flex-col border rounded-xl p-4 max-h-[313px]">
          <div className="flex justify-center relative">
            <img
              className="absolute right-0"
              src="/images/favourites.png"
              alt="favourites"
            />
            <Image
              src="/images/popular-product-1.png"
              width={180}
              height={180}
              alt="popular-item"
            />
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[#1B5A7D] font-semibold">Photik</p>
            <p className="font-bold">$11,70</p>
            <div className="flex gap-2">
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
            </div>
          </div>
        </div>
        <div className="flex flex-col border rounded-xl p-4 max-h-[313px]">
          <div className="flex justify-center relative">
            <img
              className="absolute right-0"
              src="/images/favourites.png"
              alt="favourites"
            />
            <Image
              src="/images/popular-product-1.png"
              width={180}
              height={180}
              alt="popular-item"
            />
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[#1B5A7D] font-semibold">Photik</p>
            <p className="font-bold">$11,70</p>
            <div className="flex gap-2">
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
            </div>
          </div>
        </div>
        <div className="flex flex-col border rounded-xl p-4 max-h-[313px]">
          <div className="flex justify-center relative">
            <img
              className="absolute right-0"
              src="/images/favourites.png"
              alt="favourites"
            />
            <Image
              src="/images/popular-product-1.png"
              width={180}
              height={180}
              alt="popular-item"
            />
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[#1B5A7D] font-semibold">Photik</p>
            <p className="font-bold">$11,70</p>
            <div className="flex gap-2">
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
            </div>
          </div>
        </div>
        <div className="flex flex-col border rounded-xl p-4 max-h-[313px]">
          <div className="flex justify-center relative">
            <img
              className="absolute right-0"
              src="/images/favourites.png"
              alt="favourites"
            />
            <Image
              src="/images/popular-product-1.png"
              width={180}
              height={180}
              alt="popular-item"
            />
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[#1B5A7D] font-semibold">Photik</p>
            <p className="font-bold">$11,70</p>
            <div className="flex gap-2">
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
            </div>
          </div>
        </div>
        <div className="flex flex-col border rounded-xl p-4 max-h-[313px]">
          <div className="flex justify-center relative">
            <img
              className="absolute right-0"
              src="/images/favourites.png"
              alt="favourites"
            />
            <Image
              src="/images/popular-product-1.png"
              width={180}
              height={180}
              alt="popular-item"
            />
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[#1B5A7D] font-semibold">Photik</p>
            <p className="font-bold">$11,70</p>
            <div className="flex gap-2">
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
            </div>
          </div>
        </div>
        <div className="flex flex-col border rounded-xl p-4 max-h-[313px]">
          <div className="flex justify-center relative">
            <img
              className="absolute right-0"
              src="/images/favourites.png"
              alt="favourites"
            />
            <Image
              src="/images/popular-product-1.png"
              width={180}
              height={180}
              alt="popular-item"
            />
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[#1B5A7D] font-semibold">Photik</p>
            <p className="font-bold">$11,70</p>
            <div className="flex gap-2">
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
            </div>
          </div>
        </div>
        
        </section>
      </div>
    </div>
  );
}
