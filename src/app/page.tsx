import Image from "next/image";
import React from "react";
import Header from "@/components/Header";
import PopularProducts from "@/components/PopularProducts";
import LatestNews from "@/components/LatestNews";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <PopularProducts />
        <LatestNews />
      </div>
      <Footer />
    </>
  );
}
