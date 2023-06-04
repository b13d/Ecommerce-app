import React, { useEffect, useState } from "react";
import Image from "next/image";
import apiElectronics from "../api/apiElectronics.json";

export default function HeaderMainInfo() {
  const [currentImage, setCurrentImage] = useState(0);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    let num = 0;
    setPercent(0);

    setInterval(() => {
      console.log(num);

      setPercent(-20);

      if (num !== 2) {
        setCurrentImage((value) => value + 1);
        num++;
      } else {
        setCurrentImage(0);
        num = 0;
      }
    }, 6000);

    setInterval(() => {
      setPercent((value) => (value === 100 ? 0 : value + 20));
    }, 1000);
  }, []);

  return (
    <section className="max-w-[1300px] m-auto flex justify-around items-center border shadow-xl p-4 overflow-hidden h-[400px] ease-out">
      {apiElectronics.map((product, index) => {
        if (index === currentImage) {
          let tempImg = Image;

          return (
            <>
              <div className="w-[300px] ease-out">
                <h1 className="text-[22px]">{product.title}</h1>
              </div>
              <div
                className="flex items-center gap-3 ease-out"
                key={product.id}
              >
                <div className="flex flex-col gap-6 items-center">
                  <img
                    className="w-[350px] object-scale-down h-[250px] ease-out"
                    src={product.url}
                    alt={product.title}
                  />

                  <div className="flex items-center gap-2">
                    <progress
                      className="h-[4px]"
                      max={100}
                      value={percent}
                    ></progress>
                    <span>{index + 1} / 3</span>
                  </div>
                </div>
              </div>
              <h1 className="text-[30px]">
                Цена:{" "}
                <span className="font-semibold text-orange-400 ease-out">
                  {product.price}
                </span>
                ₽
              </h1>
            </>
          );
        }
      })}
    </section>
  );
}
