"use client";
import CarsFilterOption from "@/components/Home/CarsFilterOption";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-5 sm:px-10 md:py-20">
      <Hero />
      <SearchInput />
      <CarsFilterOption />
    </div>
  );
}
