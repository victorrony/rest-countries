import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function CardDetails({ searchCountry, isOpen, closeModal }) {
   console.log("search", searchCountry);
   return (
      <Transition appear show={isOpen} as={Fragment}>
         <Dialog as="div" className="" onClose={closeModal}>
            <div className="flex flex-col max-h-max  m-3 bg-slate-600 dark:bg-slate-900 mb-20 px-8 fixed inset-[-15px]   md:items-center md:w-[100%] md:h-[100%]">
               <div className="flex flex-col ">
                  <div className="flex flex-row justify-end ">
                     <button
                        type="button"
                        className="bg-blue-500 hover:bg-blue-700 mt-5  p-2 rounded-full"
                        onClick={closeModal}
                     >
                        X
                     </button>
                  </div>

                  <div className="flex flex-col md:flex-row md:gap-24 md:mt-28 ">
                     <div className="w-96 h-52 mt-12 md:h-80 ">
                        <img src={searchCountry?.flag} alt="country flag" className="w-[100%] h-[100%] object-cover" />
                     </div>

                     <div className=" flex flex-col  md:mx-8  ">
                        <div className="flex flex-col md:justify-between md:flex-row md:w-[700px] ">
                           <div className="flex flex-col md:w-[50%]">
                              <h1 className="mt-8 font-bold">{searchCountry?.name}</h1>
                              <span className="mt-6">Native Name: {searchCountry?.nativeName}</span>
                              <span className="mt-3">Population: {searchCountry?.population}</span>
                              <span className="mt-3">Region: {searchCountry?.region}</span>
                              <span className="mt-3">Sub Region: {searchCountry?.subregion}</span>
                              <span className="mt-3">Capital: {searchCountry?.capital}</span>
                           </div>

                           <div className="flex flex-col md:w-[50%] md:mt-10 ">
                              <span className="mt-10">Top Level Domain: {searchCountry?.topLevelDomain}</span>
                              <span className="mt-3">Currencies: {searchCountry?.code}</span>
                              <span className="mt-3">Languages: {searchCountry?.languages.name}</span>
                           </div>
                        </div>

                        <div className="flex flex-col  mb-10 mt-10 md:flex-row md:flex-wrap md:gap-4 md:items-center md:justify-start w-[100%]">
                           <h3 className="">Border Countries: </h3>

                           {searchCountry?.borders?.map((borders, index) => (
                              <div key={index} className=" mt-3 w-20">
                                 <h3 className="p-2 border-2 h-12 rounded-md">{borders}</h3>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </Dialog>
      </Transition>
   );
}
