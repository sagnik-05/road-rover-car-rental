"use client";
import CarsFilterOption from "@/components/Home/CarsFilterOption";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getCarsList } from "@/service";

export default function Home() {
  const [carsList, setCarsList] = useState<any>([])
  useEffect(() => {
    getCarList_();
  }, []);
  const getCarList_ = async() => {
    const result:any = await getCarsList();
    setCarsList(result?.carLists);
  };
  return (
    <div className="p-5 sm:px-10 md:py-20">
      <Hero />
      <SearchInput />
      <CarsFilterOption />
    </div>
  );
}
