import TopMenu from "../ReactMatrial/TopMenu";
import { DrawerDefault } from "../ReactMatrial/DrawerDefault";

// eslint-disable-next-line react/prop-types
const TopNav = ({ tittle }) => {
  return (
    <div className="bg-white py-2">
      <div
        className="
     xl:max-w-[1024px] 
      lg:max-w-[768px] 
      md:max-w-[640px] 
      sm:max-w-[500px] 
      max-w-[350px]
      h-[64px] 
      mx-auto 
      flex 
      justify-between 
      items-center"
      >
        <div className="lg:hidden">
          <DrawerDefault />
        </div>
        <h1 className="md:text-3xl text-2xl  font-semibold text-[#171717] ">
          {tittle}
        </h1>
        <div>
          <TopMenu />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
