import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Products from "@/components/Products";
import SaleUP from "@/components/SaleUP";

export default function products() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Products />
        <SaleUP />
      </div>
      <Footer />
    </>
  );
}
