import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UseCart from "@/hooks/useCart";

export default function Cart() {
  return (
    <section>
      <Header /> 
      <UseCart />
      <Footer />
    </section>
  );
}
