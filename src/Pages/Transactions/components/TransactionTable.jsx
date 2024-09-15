import React from "react";
import Button from "../../../Components/Button";
import TransHeader from "./TransactionTabs";

const TransactionTable = () => {
  const tableData = [
    {
      id: "HD82NA2H",
      date: "2023-06-20",
      time: "07:00 AM",
      type: {
        name: "INR Deposit",
        tag: "E-Transfer",
      },
      amount: "+₹81,123",
      status: "pending",
    },
    {
      id: "HD82NA4H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "INR Widthdraw",
        tag: "Wire Transfer",
      },
      amount: "-₹55,123",
      status: "processing",
    },
    {
      id: "HD82NA5H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "Buy",
        tag: "BTC",
      },
      amount: "12.0554484 BTC",
      status: "cancelled",
    },
    {
      id: "HD82NA6H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "Sell",
        tag: "BTC",
      },
      amount: "-2.0554484 BTC",
      status: "completed",
    },
    {
      id: "HD82NA7H",
      date: "2023-06-20",
      time: "07:00 AM",
      type: {
        name: "BTC Deposit",
      },
      amount: "+15.5000000",
      status: "pending",
    },
    {
      id: "HD82NA8H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "BTC Widthdraw",
      },
      amount: "-5.05555544",
      status: "completed",
    },
  ];

  return (
    <>
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-[#797E82] uppercase dark:text-neutral-400"
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-[#797E82] uppercase dark:text-neutral-400"
                    >
                      Date & Time
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-[#797E82] uppercase dark:text-neutral-400"
                    >
                      Type
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-[#797E82] uppercase dark:text-neutral-400"
                    >
                      Amount
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-400"
                    >
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                  {tableData.map((data) => (
                    <tr key={data.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#171717] ">
                        {data.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#171717] ">
                        <div>
                          <p>{data.date}</p>
                          <p className="text-xs text-[#797E82]">{data.time}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#171717] ">
                        <div>
                          <p>{data.type.name}</p>
                          <p className="text-xs text-[#797E82]">
                            {data.type.tag}
                          </p>
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#171717] ">
                        {data.amount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm">
                        <button
                          type="button"
                          className={`inline-flex items-center gap-x-2 text-xs rounded-full border border-transparent text-white p-1 focus:outline-none ${
                            data.status === "completed" && "bg-green-700"
                          } ${data.status === "pending" && "bg-[#797E82]"} ${
                            data.status === "processing" && "bg-[#F5A50B]"
                          }
                          ${data.status === "cancelled" && "bg-[#ec1515]"}`}
                        >
                          {data.status}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransactionTable;
