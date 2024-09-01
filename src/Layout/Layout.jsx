import React from "react";
import SideNav from "./../Components/SideNav";
import TopNav from "../Components/TopNav";

const Layout = () => {
  return (
    <div className="grid grid-cols-[16%_84%]">
      <div>
        <SideNav />
      </div>
      <div className="flex-grow bg-[#F3F3F7]">
        <TopNav />
        <div className="max-w-[1080px] mx-auto">
          <div className="mt-2">{/* Write component */}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
