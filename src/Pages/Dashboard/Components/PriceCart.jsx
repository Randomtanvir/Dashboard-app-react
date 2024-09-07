import React from "react";
import Button from "../../../Components/Button";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
import img from "/public/Graph.svg";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

const PriceCart = () => {
  const timeZone = ["6:55pm", "7:55pm", "8:55pm", "9:55pm", "10:55pm"];
  const data = [
    {
      label: "1H",
      value: "1H",
      desc: <img src={img} className="w-full h-full mt-12" alt="graph" />,
    },
    {
      label: "1D",
      value: "1D",
      desc: <img src={img} className="w-full h-full mt-16" alt="graph" />,
    },
    {
      label: "1W",
      value: "1W",
      desc: <img src={img} className="w-full h-full " alt="graph" />,
    },
    {
      label: "1M",
      value: "1M",
      desc: "HELLO",
    },
  ];

  return (
    <div className="h-full bg-white rounded-lg p-4 ">
      <div className="flex flex-col gap-4 xl:flex-row xl:gap-0 justify-between">
        <div className="">
          <h5 className="text-sm text-gray-800 mb-2">Current Price</h5>
          <p className="xl:text-2xl text-base inline mr-3 font-semibold ">
            ₹26,670.25
            <span className="text-[#059669] font-medium ml-2 text-sm cursor-pointer">
              <BsArrowUpRight className="inline " /> 0.04%
            </span>
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-3">
          <Button>
            <FaPlusCircle className="inline text-base mr-1" /> Buy
          </Button>

          <Button>
            <FaMinusCircle className="inline text-base mr-1" /> Sell
          </Button>
        </div>
      </div>
      <div className="mt-6">
        <Tabs value="html">
          <TabsHeader className="max-w-[220px] flex justify-end items-end ">
            {data.map(({ label, value }) => (
              <Tab key={value} value={value}>
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {data.map(({ value, desc }) => (
              <TabPanel key={value} value={value}>
                {desc}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
      <div className="flex justify-between">
        {timeZone.map((time) => (
          <p className="text-[#797E82] text-xs " key={Math.random()}>
            {time}
          </p>
        ))}
      </div>
    </div>
  );
};

export default PriceCart;
