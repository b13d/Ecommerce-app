import React from "react";
import Image from "next/image";

export default function LatestNews() {
  return (
    <section className="max-w-[1300px] m-auto">
      <div className="flex justify-between mb-[53px] text-[#1B5A7D]">
        <h1 className="text-[24px] font-bold">Latest news</h1>

        <p className="font-semibold">View all</p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="flex gap-7 items-center border rounded-2xl py-[20px] px-[30px]">
          <Image
            src="/images/Blog-1.png"
            width={318}
            height={288}
            alt="photo-blog"
          />

          <div className="text-[#1B5A7D] flex flex-col gap-4">
            <h1>22,oct,2021</h1>

            <h1 className="font-bold text-[23px]">
              Who avoids a pain that produces?
            </h1>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic,
              eaque iure officia magni cumque ratione? Incidunt veritatis dicta,
              provident
            </p>

            <p>By spacing tech</p>
          </div>
        </div>
        <div className="flex gap-7 items-center border rounded-2xl py-[20px] px-[30px]">
          <Image
            src="/images/Blog-2.png"
            width={318}
            height={288}
            alt="photo-blog"
          />

          <div className="text-[#1B5A7D] flex flex-col gap-4">
            <h1>22,oct,2021</h1>

            <h1 className="font-bold text-[23px]">
              Who avoids a pain that produces?
            </h1>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic,
              eaque iure officia magni cumque ratione? Incidunt veritatis dicta,
              provident
            </p>

            <p>By spacing tech</p>
          </div>
        </div>
      </div>
      <div className="flex gap-2 justify-center my-[50px]">
        <span className="w-[15px] h-[15px]  border bg-[#ff8d41] rounded-md block"></span>
        <span className="w-[15px] h-[15px]  border rounded-md block"></span>
        <span className="w-[15px] h-[15px]   border rounded-md block"></span>
        <span className="w-[15px] h-[15px]   border rounded-md block"></span>
        <span className="w-[15px] h-[15px]   border rounded-md block"></span>
      </div>
    </section>
  );
}
