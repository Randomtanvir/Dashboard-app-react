import React from "react";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { BsArrowDownUp } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

const SideNav = () => {
  const location = useLocation();
  const isActiveLink = (link) => {
    return location.pathname === link;
  };

  const navList = [
    {
      text: "Dashboard",
      icon: <MdOutlineDashboardCustomize />,
      link: "/",
    },
    {
      text: "Transactions",
      icon: <BsArrowDownUp />,
      link: "/Transation",
    },
  ];

  return (
    <div className="h-screen w-[300px] flex flex-col justify-between p-4 bg-white">
      <div>
        <h1 className="text-xl text-center mb-6 mt-[56px] ">@DOSOMECODING</h1>
        {navList.map((nav) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <Link to={nav.link} key={nav.text}>
              <div>
                <div
                  className={`flex gap-4 items-center text-xl ml-3 mb-2  p-3 rounded-md cursor-pointer hover:bg-[#F3F3F7] ${
                    isActiveLink(nav.link) && "bg-[#F3F3F7]"
                  } `}
                >
                  {nav.icon}
                  <p className="cursor-pointer">{nav.text}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <Link to="/Support">
        <div
          className={`flex gap-4 text-xl items-center ml-3 rounded-md p-3 cursor-pointer hover:bg-[#F3F3F7]  ${
            isActiveLink("/Support") && "bg-[#F3F3F7]"
          }`}
        >
          <BiSupport />
          <p>Support</p>
        </div>
      </Link>
    </div>
  );
};

export default SideNav;
