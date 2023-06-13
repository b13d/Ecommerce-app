import React from "react";
import Image from "next/image";
import HeaderMainInfo from "@/components/HeaderMainInfo";
import Slider from "@/components/Slider";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="bg-[#E2F4FF] text-[#1B5A7D]">
      <div className="max-w-[1300px] m-auto py-[42px]">
        <div className="flex justify-between items-center bg-white rounded-2xl py-[20px] px-[50px]">
          <h1 className="font-bold text-[26px]">Subscribe newsletter</h1>
          <input
            className="bg-[#EDA415] py-[20px] pl-[30px] pr-[160px] rounded-2xl text-black placeholder:text-white"
            type="email"
            placeholder="Email address"
          />

          <div className="flex gap-3 items-center">
            <img src="/images/headphone.png" alt="icon" />
            <p className="text-[black]">
              Call us 24/7:
              <br /> (+62) 0123 567 789
            </p>
          </div>
        </div>
        <section className="flex justify-between gap-5 pt-[41px]">
          <div className="flex flex-col gap-6 items-start">
            <img src="/images/logo-1.png" alt="" />
            <p className="border-b-2 border-[#999] pb-6">64 st james boulevard hoswick , ze2 7zj</p>
            <div className="flex gap-6">
              <Link href="#"><img src="/images/facebook.png" alt="icon-social" /></Link>
              <Link href="#"><img src="/images/google.png" alt="icon-social" /></Link>
              <Link href="#"><img src="/images/whatsapp.png" alt="icon-social" /></Link>
            </div>
          </div>
          <div className="flex flex-col gap-6 items-start">
            <h1 className="font-bold">Find product</h1>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="">Brownze arnold</Link>
              </li>
              <li>
                <Link href="">Chronograph blue</Link>
              </li>
              <li>
                <Link href="">Smart phones</Link>
              </li>
              <li>
                <Link href="">Automatic watch</Link>
              </li>
              <li>
                <Link href="">Hair straighteners</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-6 items-start">
            <h1 className="font-bold">Get help</h1>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="">About us</Link>
              </li>
              <li>
                <Link href="">Contact us</Link>
              </li>
              <li>
                <Link href="">Return policy</Link>
              </li>
              <li>
                <Link href="">Privacy policy</Link>
              </li>
              <li>
                <Link href="">Payment policy</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-6 items-start">
            <h1 className="font-bold">About us</h1>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="">News</Link>
              </li>
              <li>
                <Link href="">Service</Link>
              </li>
              <li>
                <Link href="">Our policy</Link>
              </li>
              <li>
                <Link href="">Custmer care</Link>
              </li>
              <li>
                <Link href="">Faq’s</Link>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </section>
  );
}
