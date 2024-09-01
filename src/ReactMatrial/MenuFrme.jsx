import React from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { FaRegUserCircle } from "react-icons/fa";

const MenuFrme = () => {
  return (
    <Menu>
      <MenuHandler>
        <Button className="bg-white">
          <FaRegUserCircle className="text-4xl text-[#171717]" />
        </Button>
      </MenuHandler>
      <MenuList>
        <MenuItem onClick={() => console.log("Login")}>Log-in</MenuItem>
        <MenuItem onClick={() => console.log("Logout")}>Log-out</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default MenuFrme;
