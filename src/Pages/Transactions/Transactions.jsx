import React from "react";
import Layout from "../../Layout/Layout";
import TransactionTable from "./components/TransactionTable";
import Button from "../../Components/Button";
import { GrDownload } from "react-icons/gr";

const Transactions = () => {
  return (
    <>
      <Layout tittle="Transaction">
        <div className="text-right mb-6">
          <Button>
            <GrDownload className="inline mr-2 text-base" /> Export CSV
          </Button>
        </div>
        <TransactionTable />
      </Layout>
    </>
  );
};

export default Transactions;
