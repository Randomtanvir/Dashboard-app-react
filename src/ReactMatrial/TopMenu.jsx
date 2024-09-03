import { useState } from "react";
import { CiUser } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";

const TopMenu = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="relative">
      <CiUser onClick={toggle} className="text-4xl cursor-pointer relative" />
      <div
        className={`${
          open ? "" : "hidden"
        } absolute w-[180px] top-[38px] left-[-140px] p-5 bg-white rounded-md`}
      >
        <ul className="text-md">
          <li className=" flex items-center justify-between mb-2 cursor-pointer rounded-sm p-3 transition duration-300 ease-in-out hover:bg-[#f3f3f7]">
            Profile <FaUserCircle className="text-xl" />
          </li>
          <li className="flex items-center justify-between cursor-pointer rounded-sm p-3 transition duration-300 ease-in-out hover:bg-[#f3f3f7]">
            Logout <CiLogout className="text-xl" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopMenu;
