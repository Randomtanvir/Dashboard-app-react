import React from "react";

// eslint-disable-next-line react/prop-types
const CartInfo = ({ gridImg, isWhite, btn, text }) => {
  return (
    <div
      style={{ "--image-url": `url(${gridImg})` }}
      className={`bg-[image:var(--image-url)] bg-no-repeat bg-cover ${
        isWhite ? "bg-white" : "bg-[#5F00D9]"
      } p-5 rounded-md`}
    >
      <h6
        className={`text-xs ${
          !isWhite ? "bg-white text-[#171717]" : "bg-[#5F00D9] text-white"
        } rounded-full inline p-1`}
      >
        {btn}
      </h6>
      <p
        className={` ${
          isWhite ? " text-[#171717]" : " text-white"
        } text-[18px] font-semibold py-4 `}
      >
        {text}
        {/* Learn more about Loans – Keep your Bitcoin,
        <br /> access it’s value without selling it */}
      </p>
    </div>
  );
};

export default CartInfo;
