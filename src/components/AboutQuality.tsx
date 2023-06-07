import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutQuality() {
  const variants = {
    initial: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { duration: 2 },
    },
    initialMain: {
      opacity: 0.5,
      rotate: -25,
    },
    visibleMain: {
      opacity: 1,
      rotate: 0,
      transition: { duration: 2 },
    },
  };

  return (
    <motion.section
      variants={variants}
      initial="initialMain"
      viewport={{ once: true }}
      whileInView="visibleMain"
      className="max-w-[1300px] grid grid-cols-3 gap-7 bg-[#E2F4FF] py-[44px] px-[120px] rounded-2xl my-[75px]"
    >
      <motion.div
        initial="initial"
        animate="visible"
        variants={variants}
        viewport={{ once: true }}
        className="flex gap-3 justify-center"
      >
        <Image src="/images/box-tick.png" width={50} height={50} alt="icon" />

        <div className="text-[#003F62]">
          <h1 className="font-bold">Free delivery</h1>
          <p>on order above $50,00</p>
        </div>
      </motion.div>
      <motion.div
        initial="initial"
        animate="visible"
        variants={variants}
        viewport={{ once: true }}
        className="flex gap-3 justify-center"
      >
        <Image src="/images/crown.png" width={50} height={50} alt="icon" />

        <div className="text-[#003F62] ">
          <h1 className="font-bold">Best quality</h1>
          <p>best quality in low price</p>
        </div>
      </motion.div>

      <motion.div
        initial="initial"
        whileInView="visible"
        viewport={{ once: true }}
        variants={variants}
        className="text-[#003F62] flex gap-3 justify-center"
      >
        <Image
          src="/images/shield-security.png"
          width={50}
          height={50}
          alt="icon"
        />

        <div className="text-[#003F62]">
          <h1 className=" font-bold">1 year warranty</h1>
          <p>Avaliable warranty</p>
        </div>
      </motion.div>
    </motion.section>
  );
}
