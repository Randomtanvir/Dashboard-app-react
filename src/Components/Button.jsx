import React from "react";

// eslint-disable-next-line react/prop-types
const Button = ({ children }) => {
  return (
    <div>
      <button className="bg-[#5F00D9] px-3 py-2 rounded-md text-white text-sm">
        {children}
      </button>
    </div>
  );
};

export default Button;
