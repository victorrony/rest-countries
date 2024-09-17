import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Image from "next/image";

export default function CardDetails({ searchCountry, isOpen, closeModal }) {
   // console.log("search", searchCountry);
   return (
      <Transition appear show={isOpen} as={Fragment}>
         <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
               as={Fragment}
               enter="ease-out duration-300"
               enterFrom="opacity-0"
               enterTo="opacity-100"
               leave="ease-in duration-200"
               leaveFrom="opacity-100"
               leaveTo="opacity-0"
            >
               <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto md:items-center  ">
               <div className="flex flex-col max-h-max items-center w-[400px] m-auto bg-slate-600 dark:bg-slate-900 mb-20 px-4 fixed inset-[-15px] md:w-[900px] ">
                  <Transition.Child
                     as={Fragment}
                     enter="ease-out duration-300"
                     enterFrom="opacity-0 scale-95"
                     enterTo="opacity-100 scale-100"
                     leave="ease-in duration-200"
                     leaveFrom="opacity-100 scale-100"
                     leaveTo="opacity-0 scale-95"
                  >
                     <Dialog.Panel className="relative transform  ">
                        <div className="relative flex flex-row justify-end pt-6 md:right-10">
                           <button
                              type="button"
                              className="bg-blue-500 hover:bg-blue-700  p-2 rounded-full"
                              onClick={closeModal}
                           >
                              <Image src="/close.svg" alt="close" width={20} height={20} className="object-contain" />
                           </button>
                        </div>

                        <div className="flex flex-col md:flex-row  gap-4 md:gap-8 md:mt- md:m-4 ">
                           <div className="flex md:pb-10 ">
                              <Image
                                 width={300}
                                 height={300}
                                 src={searchCountry?.flag}
                                 alt="country_flag"
                                 className="w-96 h-52 mt-12 md:mt-0 md:h-[430px] md:w-[430px] "
                              />
                           </div>

                           <div className=" flex flex-col px-5 md:px-0  md:w-[50%] ">
                              <h1 className="font-bold text-3xl">{searchCountry?.name}</h1>

                              <div className="flex flex-col md:flex-row md:justify-between gap-4 w-[100%] ">
                                 <div className="flex flex-col  font-bold gap-4 mt-10 ">
                                    <h2 className="">
                                       Native Name: <span className="text-white"> {searchCountry?.nativeName}</span>
                                    </h2>
                                    <h2>
                                       Population: <span className="text-white"> {searchCountry?.population}</span>
                                    </h2>
                                    <h2>
                                       Region: <span className="text-white"> {searchCountry?.region}</span>
                                    </h2>
                                    <h2>
                                       Sub Region: <span className="text-white"> {searchCountry?.subregion}</span>
                                    </h2>
                                    <h2>
                                       Capital: <span className="text-white"> {searchCountry?.capital}</span>
                                    </h2>
                                 </div>

                                 <div className="flex flex-col gap-3 font-bold md:mt-10 ">
                                    <h2>
                                       Top Level Domain:{" "}
                                       <span className="text-white"> {searchCountry?.topLevelDomain}</span>
                                    </h2>
                                    <h2>
                                       Currencies:{" "}
                                       <span className="text-white"> {searchCountry?.currencies?.[0].code}</span>
                                    </h2>
                                    <h2>
                                       Languages:{" "}
                                       <span className="text-white"> {searchCountry?.languages[0].name}</span>
                                    </h2>
                                 </div>
                              </div>

                              <div className="flex flex-col font-bold mb-10 mt-8  md:flex-row md:flex-wrap gap-4 md:items-center md:justify-start w-[100%]">
                                 <h3 className="">Border Countries: </h3>

                                 <div className="flex flex-wrap gap-4 ">
                                    {searchCountry?.borders?.map((borders, index) => (
                                       <div key={index} className="flex  ">
                                          <h3 className="p-2 border-2 w-20 h-12 rounded-md">{borders}</h3>
                                       </div>
                                    ))}
                                 </div>
                              </div>
                           </div>
                        </div>
                     </Dialog.Panel>
                  </Transition.Child>
               </div>
            </div>
         </Dialog>
      </Transition>
   );
}
