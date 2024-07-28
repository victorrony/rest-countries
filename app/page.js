"use client";

import Input from "./components/input";
import Filter from "./components/filter";
import Card from "./components/card";
import { useMemo, useState } from "react";
import { data } from "./server/data";

import Nav from "./components/Nav";

export default function Home() {
   const [searchCountry, setSearchCountry] = useState("");
   const [selectedRegion, setSelectedRegion] = useState("");

   const filteredData = useMemo(() => {
      const searchCountryLower = searchCountry.toLowerCase();
      const selectedRegionLower = selectedRegion.toLowerCase();

      return data.filter((countryObj) => {
         const nameMatch = searchCountryLower === "" || countryObj.name.toLowerCase().includes(searchCountryLower);
         const regionMatch = selectedRegionLower === "" || countryObj.region.toLowerCase() === selectedRegionLower;

         return nameMatch && regionMatch;
      });
   }, [searchCountry, selectedRegion]);

   return (
      <div className="flex m-auto items-center justify-center ">
         <main className="flex min-h-screen  flex-col items-center text-black w-[1440px] bg-white dark:bg-slate-900 dark:text-white">
            <div className="w-[100%]">
               <Nav />
            </div>

            <div className="flex flex-col  items-center md:flex-row md:justify-betw w-[100%] gap-7 py-10 md:px-24 xl:px-40 ">
               <Input
                  onChange={(e) => {
                     setSearchCountry(e.target.value);
                  }}
               />

               <Filter onSelectRegion={setSelectedRegion} />
            </div>

            <div className="grid grid-cols-1 gap-10 mb-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
               {filteredData.map((searchCountry, index) => (
                  <Card searchCountry={searchCountry} index={index} key={searchCountry.name} />
               ))}
            </div>
         </main>
      </div>
   );
}



//////////////////////////////////////////////////////////////////////

// const [searchCountry, setSearchCountry] = useState("");
// const [selectedRegion, setSelectedRegion] = useState("");

// const filteredData = useMemo(() => {
//    const searchCountryLower = searchCountry.toLowerCase();
//    const selectedRegionLower = selectedRegion.toLowerCase();

//    return data.filter((countryObj) => {
//       const nameMatch = searchCountryLower === "" || countryObj.name.toLowerCase().includes(searchCountryLower);
//       const regionMatch = selectedRegionLower === "" || countryObj.region.toLowerCase() === selectedRegionLower;

//       return nameMatch && regionMatch;
//    });
// }, [searchCountry, selectedRegion]);

// {filteredData.map((searchCountry, index) => (
//    <Card searchCountry={searchCountry} index={index} key={searchCountry.name} />
// ))}

////////////////////////////////////////////////////////////////////////////////
