import Layout from "../../Layout/Layout";
import CartInfo from "./Components/CartInfo";
import Portfolio from "./Components/Portfolio";
import PriceCart from "./Components/PriceCart";
import Transaction from "./Components/Transaction";
import gridImg from "/public/grid_bg.svg";
import dotImg from "/public/dot_bg.svg";

const Dashboard = () => {
  return (
    <div>
      <Layout tittle="Dashboard">
        <div className="grid grid-cols-2 h-full grid-rows-1 gap-6   ">
          <div className="col-span-full">
            <Portfolio />
          </div>
          <div className="col-span-full lg:col-span-1">
            <PriceCart />
          </div>
          <div className="col-span-full lg:col-span-1">
            <Transaction />
          </div>
          <div className="col-span-full lg:col-span-1">
            <CartInfo gridImg={dotImg} isWhite={true} />
          </div>
          <div className="col-span-full lg:col-span-1">
            <CartInfo gridImg={gridImg} isWhite={false} />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Dashboard;
