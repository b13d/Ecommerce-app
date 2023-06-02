import React from "react";
import Image from "next/image";

export default function HeaderMainInfo() {
  return (
    <section className="max-w-[1300px] m-auto flex justify-around items-center">
      <div>
        <h1 className="text-[43px] font-bold w-[200px] leading-tight">Canon camera</h1>
        <div className="flex flex-col items-center gap-[30px]">
          <div className="flex gap-4 mt-4">
            <button className="py-[10px] px-[20px] rounded-xl bg-[#EDA415] text-[white]">
              Shop now
            </button>
            <button className="py-[10px] px-[20px] rounded-xl text-[#316887] border border-[#316887]">
              View more
            </button>
          </div>
          <div className="flex gap-2">
            <span className="w-[15px] h-[15px]  border bg-[#ff8d41] rounded-md block"></span>
            <span className="w-[15px] h-[15px]  border rounded-md block"></span>
            <span className="w-[15px] h-[15px]   border rounded-md block"></span>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="w-[120px] h-[120px] rounded-full bg-[#d99613] flex flex-col items-center justify-center absolute bottom-[30px] right-[0]">
          <h1 className="text-[30px] text-[white] text-center">only $89</h1>
        </div>

        <Image
          src="/images/header-main-info-img-1.png"
          width={330}
          height={350}
          alt="img-header"
        />
      </div>
    </section>
  );
}
