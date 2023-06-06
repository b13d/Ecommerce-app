import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  stagger,
  useMotionValue,
  useTime,
  useTransform,
} from "framer-motion";
import apiElectronics from "../api/apiElectronics.json";

const variants = {
  enter: {
    opacity: 0.5,
  },
  center: (index: number) => ({
    zIndex: 1,
    x: 100,
    opacity: 1,
    transition: { duration: 2 },
  }),
  exit: {
    opacity: 0,
  },
  // exit: (index: number) => ({
  //   opacity: 0,
  //   transition: {
  //     delay: index * 0.3,
  //   },
  // }),
};

export default function Slider() {
  const [images, setImages] = useState<string[]>([]);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const tempApi = apiElectronics;

    let tempArrUrl: string[] = [];

    tempApi.map((value) => {
      tempArrUrl.push(value.url);
    });

    setImages(tempArrUrl);

    setInterval(() => {
      setImageIndex((value) => {
        if (value + 1 < tempArrUrl.length) {
          return value + 1;
        } else {
          return 0;
        }
      });
    }, 1000);
  }, []);

  type THook = {
    isVisible: boolean;
  };

  const onRight = () => {
    if (imageIndex + 1 < images.length) {
      setImageIndex((value) => value + 1);
    }
  };

  const onLeft = () => {
    if (imageIndex - 1 >= 0) {
      setImageIndex((value) => value - 1);
    }
  };

  return (
    <section className="max-w-[1300px] m-auto flex gap-9 justify-center mt-[52px] mb-[78px]">
      <div className=" w-[30vw] justify-center  m-auto flex">
        <AnimatePresence>
          {images.map((value, index) => {
            return (
              <motion.img
                className="bg-no-repeat"
                key={index}
                src={images[index]}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: index === imageIndex ? 1 : 0.8,
                  scale: index === imageIndex ? 1 : 0.8,
                }}
              />
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
}
