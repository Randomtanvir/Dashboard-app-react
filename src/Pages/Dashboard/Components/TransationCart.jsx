import React from "react";
import { HiCurrencyDollar } from "react-icons/hi2";

// eslint-disable-next-line react/prop-types
const TransationCart = ({ text, date, time, amount, amountless }) => {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex gap-4">
          <div className="w-10 h-10 bg-[#F3F3F7] flex justify-center items-center rounded-full ">
            <HiCurrencyDollar className="text-2xl" />
          </div>
          <div>
            <h2 className="text-base text-[#171717] ">{text}</h2>
            <p className="text-sm text-[#797E82]">
              {date} <span>{time}</span>
            </p>
          </div>
        </div>

        <div>
          <p className="text-base font-semibold text-[#171717] ">{amount}</p>
          <p className="text-right text-sm text-[#797E82] ">{amountless}</p>
        </div>
      </div>
      <hr className="my-6" />
    </>
  );
};

export default TransationCart;
