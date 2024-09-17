"use client"
import Image from "next/image";
import React from "react";

const CustomButton = ({title, containerStyles, handleClick, btnType, textStyles, rightIcon}) => {
  return (
    <button
      disabled={false}
      type={ btnType || "button" }
      className={`flex flex-row relative justify-center items-center py-3 px-6 mb-6 outline-none bg-slate-400 rounded-full text-black`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="icon right"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;