import React, { useState } from "react";
import Link from "next/link";
import CardDetails from "./CardDetails";

export default function Card({ searchCountry }) {
   const { name, population, flag, region, capital, country } = searchCountry;

   const [isOpen, setIsOpen] = useState(false);

   return (
      <div className="flex justify-center items-center transform overflow-hidden duration-200 hover:scale-105 ">
         <div className=" flex m-auto bg-opacity-50 ">
            <CardDetails
               isOpen={isOpen}
               closeModal={() => setIsOpen(false)}
               searchCountry={searchCountry}
               className="flex justify-center items-center z-20"
            />
         </div>
         <button onClick={() => setIsOpen(true)}>
            <div className="flex flex-col items-start w-72 h-96 bg-slate-400 hover:bg-slate-100  dark:bg-slate-900 border-2 rounded-md shadow-2xl ">
               <div className="w-full h-44 relative">
                  <img
                     src={searchCountry.flag}
                     alt={`${searchCountry.flag} flag`}
                     className="w-[100%] h-[100%] object-cover p-2"
                  />
               </div>

               <h1 className="mt-6 pl-4 font-bold">{searchCountry.name}</h1>
               <span className="mt-6 pl-4">Population: {searchCountry.population}</span>
               <span className="mt-2 pl-4 ">Region: {searchCountry.region}</span>
               <span className="mt-2 mb-2 pl-4 ">Capital: {searchCountry.capital}</span>
            </div>
         </button>
      </div>
   );
}
