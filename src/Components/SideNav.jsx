import React from "react";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { BsArrowDownUp } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";

const SideNav = () => {
  const navList = [
    {
      text: "Dashboard",
      icon: <MdOutlineDashboardCustomize />,
      link: "/",
    },
    {
      text: "Transactions",
      icon: <BsArrowDownUp />,
      link: "/transactions",
    },
  ];

  return (
    <div className="h-screen w-[300px] flex flex-col justify-between p-4 bg-white">
      <div>
        <h1 className="text-xl text-center mb-6 mt-[56px] ">@DOSOMECODING</h1>
        {navList.map((nav) => {
          return (
            <div key={nav.text}>
              <div className="flex gap-4 items-center text-xl ml-3 mb-2  p-3 rounded-md cursor-pointer hover:bg-[#F3F3F7] ">
                {nav.icon}
                <p className="cursor-pointer">{nav.text}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex gap-4 text-xl items-center ml-3 rounded-md p-3 cursor-pointer hover:bg-[#F3F3F7]">
        <BiSupport />
        <p>Support</p>
      </div>
    </div>
  );
};

export default SideNav;
