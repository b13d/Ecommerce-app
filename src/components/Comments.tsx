import React from "react";
import Image from "next/image";

export default function Comments() {
  return (
    <section className="max-w-[1300px]">
      <div className="grid grid-cols-3 gap-2 text-[#003F62]">
        <div className="flex flex-col gap-5 border p-4 border-[#cfcfcf] rounded-2xl">
          <div className="flex gap-5 items-center">
            <img src="/images/UserComment-1.png" alt="icon" />
            <h1>Savannah Nguyen</h1>
          </div>

          <p className="bg-[#E2F4FF] py-2 px-6 rounded-2xl">
            Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus
            bibendum ullamcorper. Phasellus tristique aenean at lorem sed
            scelerisque.
          </p>
        </div>
        <div className="flex flex-col gap-5 border p-4 border-[#cfcfcf] rounded-2xl">
          <div className="flex gap-5 items-center">
            <img src="/images/UserComment-2.png" alt="" />
            <h1>Esther Howard</h1>
          </div>

          <p className="bg-[#E2F4FF] py-2 px-6 rounded-2xl">
            Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus
            bibendum ullamcorper. Phasellus tristique aenean at lorem sed
            scelerisque.
          </p>
        </div>
        <div className="flex flex-col gap-5 border p-4 border-[#cfcfcf] rounded-2xl">
          <div className="flex gap-5 items-center">
            <img src="/images/UserComment-3.png" alt="" />
            <h1>Esther Howard</h1>
          </div>

          <p className="bg-[#E2F4FF] py-2 px-6 rounded-2xl">
            Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus
            bibendum ullamcorper. Phasellus tristique aenean at lorem sed
            scelerisque.
          </p>
        </div>
      </div>
      <div className="flex gap-2 justify-center my-[50px]">
        <span className="w-[15px] h-[15px]  border bg-[#ff8d41] rounded-md block"></span>
        <span className="w-[15px] h-[15px]  border rounded-md block"></span>
        <span className="w-[15px] h-[15px]   border rounded-md block"></span>
      </div>
    </section>
  );
}
