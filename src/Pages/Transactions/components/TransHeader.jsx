import React from "react";
import { FaSearch } from "react-icons/fa";

const TransHeader = () => {
  const topbar = [
    {
      text: "All",
      count: "349",
    },
    {
      text: "Deposit",
      count: "114",
    },
    {
      text: "Withdraw",
      count: "213",
    },
    {
      text: "Trade",
      count: "22",
    },
  ];
  return (
    <>
      <div className="flex justify-between">
        <div className="flex gap-16 ">
          {topbar.map(({ text, count }) => (
            <div key={count} className="flex gap-3 items-center ">
              <h4 className="text-sm text-[#171717] font-semibold cursor-pointer ">
                {text}
              </h4>
              <p className="rounded-full text-xs text-[#797E82] bg-[#F3F3F7] cursor-pointer p-1 ">
                {count}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center">
          <FaSearch className="inline mr-2 text-2xl cursor-pointer" />
          <input
            className="p-1 text-base border-none text-[#797E82] outline-[#5F00D9] "
            type="text"
            placeholder="Search by ID or destination"
          />
        </div>
      </div>
    </>
  );
};

export default TransHeader;
