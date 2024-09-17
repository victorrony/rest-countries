"use client";

import Input from "./components/input";
import Filter from "./components/filter";
import Card from "./components/card";
import { useMemo, useState, useCallback } from "react";
import { data } from "./server/data";

import Nav from "./components/Nav";
import ShowMore from "./components/ShowMore";

function Home() {
   const [searchCountry, setSearchCountry] = useState("");
   const [selectedRegion, setSelectedRegion] = useState("");
   const [limit, setLimit] = useState(20);

   const filteredData = useMemo(
      () =>
         data
            .filter(
               ({ name, region }) =>
                  (!searchCountry || name?.toLowerCase()?.includes(searchCountry.toLowerCase())) &&
                  (!selectedRegion || region?.toLowerCase() === selectedRegion.toLowerCase())
            )
            .slice(0, limit),
      [searchCountry, selectedRegion, limit]
   );

   const handleSearchChange = useCallback((e) => setSearchCountry(e?.target?.value ?? ""), []);

   const handleRegionSelect = useCallback(setSelectedRegion, []);

   return (
      <div className="flex m-auto items-center justify-center ">
         <main className="flex min-h-screen  flex-col items-center text-black w-[1440px] bg-white dark:bg-slate-900 dark:text-white">
            <div className="w-[100%]">
               <Nav />
            </div>

            <div className="flex flex-col m-auto items-center md:flex-row md:justify-between w-[100%] gap-7 py-10 md:px-24 xl:px-40 ">
               <Input onChange={handleSearchChange} aria-label="Search Country" />
               <Filter onSelectRegion={handleRegionSelect} aria-label="Filter by Region" />
            </div>

            <div className="grid grid-cols-1 gap-12 my-12  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
               {filteredData.map((country, index) => (
                  <Card searchCountry={country} key={country?.name + index} />
               ))}
            </div>
            
            <ShowMore pageNumber={limit / 20} isNext={limit > filteredData.length} setLimit={setLimit} />
         </main>
      </div>
   );
}

export default Home;

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
