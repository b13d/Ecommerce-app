import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
  useVelocity,
  useScroll,
  useSpring,
  useAnimationFrame,
} from "framer-motion";
import apiElectronics from "../api/apiElectronics.json";
import { wrap } from "framer-motion";

export default function Slider() {
  const [images, setImages] = useState<string[]>([]);
  const [imageIndex, setImageIndex] = useState(0);
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 30,
    // stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });
  const x = useTransform(baseX, (v) => `${wrap(45, -27, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {

    // console.log(delta);
    let moveBy = directionFactor.current * 0.5 * (delta / 100);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    // console.log(moveBy);

    baseX.set(baseX.get() + moveBy);
  });

  useEffect(() => {
    const tempApi = apiElectronics;

    let tempArrUrl: string[] = [];

    for (let i = 0; i < 4; i++) {
      tempApi.map((value) => {
        tempArrUrl.push(value.url);
      });
    }

    setImages(tempArrUrl);
  }, []);

  return (
    <div className="w-[1300px] m-auto overflow-hidden">
      <motion.div
        className="flex justify-center  gap-4 py-5 w-full"
        style={{ x }}
      >
        {images.map((value, index) => {
          return (
            <motion.img
              className="bg-no-repeat h-[250px] w-[350px] object-scale-down"
              key={index}
              src={images[index]}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
            />
          );
        })}
      </motion.div>
    </div>
  );
}
