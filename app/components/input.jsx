import React from "react";
import { BsSearch } from "react-icons/bs";

export default function Input({ onChange }) {
   const handleChange = (e) => {
      if (typeof onChange === "function") {
         onChange(e);
      }
   };

   return (
      <div className="relative flex h-12 pointer-events-auto  rounded-md shadow-sm borde-black border-2 border-solid ">
         <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className=" sm:text-sm">
               <BsSearch />
            </span>
         </div>
         <input
            type="search"
            className=" rounded-md w-64 border-0 py-2.5 pl-7 pr-10 "
            placeholder=" Search for a country..."
            onChange={handleChange}
         />
      </div>
   );
}
