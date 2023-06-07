import Image from "next/image";
import React from "react";
import Header from "@/components/Header";
import PopularProducts from "@/components/PopularProducts";
import LatestNews from "@/components/LatestNews";
import Footer from "@/components/Footer";
import CartComponent from "@/components/CartComponent";

export default function home() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <PopularProducts />
        <LatestNews />
      </div>
      {/* <CartComponent /> */}
      <Footer />
    </>
  );
}
