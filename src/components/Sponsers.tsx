import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Sponsers() {
  return (
    <motion.section
      
    className="flex justify-between max-w-[1300px] bg-[#E2F4FF] py-[40px] px-[30px] items-center mb-[50px]">
      <img src="/images/brand-1.png" alt="sponser-img" />
      <img src="/images/brand-2.png" alt="sponser-img" />
      <img src="/images/brand-3.png" alt="sponser-img" />
      <img src="/images/brand-4.png" alt="sponser-img" />
      <img src="/images/brand-5.png" alt="sponser-img" />
    </motion.section>
  );
}
