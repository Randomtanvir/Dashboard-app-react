import React from "react";
import Layout from "../../Layout/Layout";
import SupportForm from "./components/SupportForm";
import SupportContactCart from "./components/SupportContactCart";
import { MdEmail } from "react-icons/md";
import { BiSolidMessageRounded } from "react-icons/bi";
import CartInfo from "../Dashboard/Components/CartInfo";
import gridImg from "/public/grid_bg.svg";

const Support = () => {
  return (
    <>
      <Layout tittle="Support">
        <div className="flex items-center xl:items-start gap-6 xl:gap-0 flex-col xl:flex-row xl:justify-between">
          <SupportContactCart
            hader="Contact Us"
            text="Have a question or just want to know more? Feel free to reach out to us."
            icon={<MdEmail />}
          />
          <SupportForm />
        </div>
        <div className="flex items-center xl:items-start gap-10 flex-col xl:flex-row xl:justify-between xl:mt-[80px] mt-6">
          <div className="w-[386px]">
            <SupportContactCart
              hader="Live Chat"
              text="Don’t have time to wait for the answer? Chat with us now."
              icon={<BiSolidMessageRounded />}
            />
          </div>

          <div className="w-[370px] xl:w-[530px]">
            <CartInfo
              gridImg={gridImg}
              isWhite={false}
              btn="Chatbot"
              text="Chat with us now"
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Support;
