"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface IPos {
  posX: string;
  posY: string;
}

export default function ElementBuy({ posX, posY }: IPos): React.JSX.Element {
  return (
    <motion.img
      src="/images/cart-buy.png"
      style={{ top: posY, left: posX }}
      initial={{ opacity: 1 }}
      animate={{ x: 300, y: -200, opacity: 0, zIndex: -1 }}
      transition={{ duration: 10 }}
      className={`absolute w-[35px] left-[${posX}] top-[${posY}]  h-[35px] object-contain`}
    ></motion.img>
  );
}
