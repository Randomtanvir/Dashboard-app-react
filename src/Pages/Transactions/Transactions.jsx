import React from "react";
import Layout from "../../Layout/Layout";
import Button from "../../Components/Button";
import { GrDownload } from "react-icons/gr";
import TransactionTabs from "./components/TransactionTabs";

const Transactions = () => {
  return (
    <>
      <Layout tittle="Transaction">
        <div className="text-right mb-6">
          <Button>
            <GrDownload className="inline mr-2 text-base" /> Export CSV
          </Button>
        </div>
        <div className=" bg-white rounded-lg p-4">
          <TransactionTabs />
        </div>
      </Layout>
    </>
  );
};

export default Transactions;
