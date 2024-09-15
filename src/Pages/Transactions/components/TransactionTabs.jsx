import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import TransactionTable from "./TransactionTable";

const TransactionTabs = () => {
  const [state, setState] = useState(1);
  const toggleTabs = (index) => {
    setState(index);
  };
  const topbar = [
    {
      text: "All",
      count: "349",
      tabIndex: 1,
    },
    {
      text: "Deposit",
      count: "114",
      tabIndex: 2,
    },
    {
      text: "Withdraw",
      count: "213",
      tabIndex: 3,
    },
    {
      text: "Trade",
      count: "22",
      tabIndex: 4,
    },
  ];
  return (
    <>
      <div className="flex lg:flex-row flex-col-reverse justify-between items-center">
        <div className="flex lg:mb-4 mb-1 xl:gap-4 lg:flex-row flex-col ">
          {topbar.map(({ text, count, tabIndex }) => (
            <div
              key={tabIndex}
              onClick={() => toggleTabs(tabIndex)}
              className={`hover:text-black px-4 py-2 text-sm text-[#797E82]  rounded-md cursor-pointer transition ease-in-out duration-300 ${
                state === tabIndex ? "text-black" : ""
              }`}
            >
              {text}
              <span className="p-1 ml-2 rounded-full text-xs text-[#797E82] bg-[#F3F3F7] ">
                {count}
              </span>
            </div>
          ))}
        </div>
        <div className="flex relative">
          <FaSearch className="absolute top-[10px] left-2 text-xl text-[#5F00D9]" />
          <input
            type="text"
            placeholder="Search by ID or destination"
            className="text-base text-[#5F00D9] px-8 py-2 placeholder:text-[#5F00D9] outline-[#5F00D9]"
          />
        </div>
      </div>
      <hr />

      <div className={`${state === 1 ? "block" : "hidden"}`}>
        <TransactionTable />
      </div>
      <div className={`${state === 2 ? "block" : "hidden"}`}>
        <h1 className="text-blue-500">Hello 2</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui impedit
          sequi atque voluptates fugiat, natus dicta, laboriosam minus hic animi
          aspernatur aut libero a inventore! Voluptas obcaecati corporis
          quibusdam illum!
        </p>
      </div>
      <div className={`${state === 3 ? "block" : "hidden"}`}>
        <h1 className="text-green-300">Tab 3</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui impedit
          sequi atque voluptates fugiat, natus dicta, laboriosam minus hic animi
          aspernatur aut libero a inventore! Voluptas obcaecati corporis
          quibusdam illum!
        </p>
      </div>
      <div className={`${state === 4 ? "block" : "hidden"}`}>
        <TransactionTable />
      </div>
    </>
  );
};

export default TransactionTabs;
