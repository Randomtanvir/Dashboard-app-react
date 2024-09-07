import React from "react";
import Button from "../../../Components/Button";
import { HiDownload } from "react-icons/hi";
import { HiUpload } from "react-icons/hi";

const Portfolio = () => {
  return (
    <div className="bg-white rounded-lg p-4 flex flex-col gap-4 xl:flex-row xl:gap-0 justify-between">
      <div className="flex flex-col gap-4 lg:flex-row lg:gap-8">
        <div className="">
          <h5 className="text-sm text-gray-800 mb-2">Total Portfolio Value</h5>
          <p className="xl:text-2xl text-base font-semibold ">₹ 112,312.24</p>
        </div>

        <div className="">
          <h5 className="text-sm text-gray-800 mb-2">Wallet Balances</h5>
          <p className="xl:text-2xl text-base inline mr-3 font-semibold ">
            22.39401000
            <span className="bg-[#F3F3F7] p-1 rounded-full text-xs cursor-pointer">
              BTC
            </span>
          </p>
          <p className="xl:text-2xl text-base inline font-semibold ">
            ₹ 1,300.00
            <span className="bg-[#F3F3F7] p-1 rounded-full text-xs cursor-pointer">
              INR
            </span>
          </p>
        </div>
      </div>

      <div className="flex gap-3">
        <Button>
          <HiDownload className="inline text-xl mr-1" /> Deposit
        </Button>

        <Button>
          <HiUpload className="inline text-xl mr-1" /> Withdraw
        </Button>
      </div>
    </div>
  );
};

export default Portfolio;
