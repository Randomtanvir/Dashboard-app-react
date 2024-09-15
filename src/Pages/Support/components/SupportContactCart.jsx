import React from "react";

// eslint-disable-next-line react/prop-types
const SupportContactCart = ({ hader, text, icon }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-3xl text-[#5F00D9]">{icon}</div>

      <h1 className="text-3xl font-semibold text-[#171717]">{hader}</h1>
      <p className="text-sm text-[#535D66] ">{text}</p>
    </div>
  );
};

export default SupportContactCart;
