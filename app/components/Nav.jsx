"use client";
import React, { useEffect, useState } from "react";
import ThemeButton from "./ThemeButton";

function Nav() {
   const [mounted, setMounted] = useState(false);
   useEffect(() => setMounted(true), []);
   if (!mounted) return null;
   return (
      <header>
         <div className="flex justify-between items-center h-20 w-full  bg-white text-black dark:bg-slate-900 dark:text-white px-10 border-solid border-4 border-black  dark:border-white ">
            <h1 className="w-1/2 text-2xl md:text-4xl">Where in the world?</h1>
            <span className="">{mounted && <ThemeButton />}</span>
         </div>
      </header>
   );
}

export default Nav;
