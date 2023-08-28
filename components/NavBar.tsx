import React from "react";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
function NavBar() {
  return (
    <div className="flex justify-between items-center p-3 px-5 shadow-sm"> {/*border-b-[1px]*/}
      <Image src="/logo.PNG" alt="logo" width={200} height={60} />
      <div className=" hidden md:flex gap-5">
        <h2 className=" hover:bg-blue-400 hover:cursor-pointer px-3 p-2 rounded-full hover:text-white font-semibold">
          Home
        </h2>
        <h2 className=" hover:bg-blue-400 hover:cursor-pointer px-3 p-2 rounded-full hover:text-white font-semibold">
          History
        </h2>
        <h2 className=" hover:bg-blue-400 hover:cursor-pointer px-3 p-2 rounded-full hover:text-white font-semibold">
          Contact Us
        </h2>
      </div>
      <UserButton />
    </div>
  );
}

export default NavBar;
