import React from "react";
import { Drawer } from "@material-tailwind/react";
import SideNav from "../Components/SideNav";
import { FaBars } from "react-icons/fa6";

export function DrawerDefault() {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <React.Fragment>
      <button onClick={openDrawer}>
        <FaBars className="text-xl" />
      </button>

      <Drawer open={open} onClose={closeDrawer}>
        <div className="mb-6 flex items-center justify-between">
          <SideNav />
        </div>
      </Drawer>
    </React.Fragment>
  );
}
