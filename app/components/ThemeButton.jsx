"use client";
import React from "react";
import { FaMoon } from "react-icons/fa";
import { useTheme } from "next-themes";
import { IoSunnySharp } from "react-icons/io5";

export default function ThemeButton() {
   const { resolvedTheme, setTheme } = useTheme();

   return (
      <div className="flex justify-end w-full">
         <button
            type="button"
            className="flex items-center text-3xl"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
         >
            {resolvedTheme === "dark" ? <FaMoon /> : <IoSunnySharp />}
         </button>
      </div>
   );
}
