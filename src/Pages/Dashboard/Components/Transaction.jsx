import React from "react";
import TransationCart from "./TransationCart";

const Transaction = () => {
  const transaction = [
    {
      id: 1,
      text: "BDT Deposit",
      date: "2022-06-09",
      time: "7:06 PM",
      amount: "+ ₹81,123.10",
    },
    {
      id: 2,
      text: "BTC Sell",
      date: "2022-05-27",
      time: " 12:32 PM",
      amount: "- 12.48513391 BTC",
      amountless: "+ $81,123.10",
    },
    {
      id: 3,
      text: "BDT Deposit",
      date: "2022-06-09",
      time: "7:06 PM",
      amount: "+ ₹81,123.10",
    },
  ];

  return (
    <>
      <div className=" h-full bg-white rounded-lg p-4 ">
        <h3 className="text-sm text-gray-800 mb-6">Recent Transactions</h3>

        {transaction.map(({ id, text, date, time, amount, amountless }) => {
          return (
            <TransationCart
              key={id}
              text={text}
              date={date}
              time={time}
              amount={amount}
              amountless={amountless}
            />
          );
        })}
        <button className="bg-[#F3F3F7] w-full rounded-md my-3 px-4 py-3 text-sm">
          View All
        </button>
      </div>
    </>
  );
};

export default Transaction;
