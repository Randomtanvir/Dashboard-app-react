import SideNav from "./../Components/SideNav";
import TopNav from "../Components/TopNav";

// eslint-disable-next-line react/prop-types
const Layout = ({ tittle, children }) => {
  return (
    <div className="flex">
      <div className="hidden lg:block">
        <SideNav />
      </div>
      <div className="flex-grow bg-[#F3F3F7] h-screen">
        <TopNav tittle={tittle} />
        <div
          className="
        xl:max-w-[1024px] 
        lg:max-w-[768px] 
        md:max-w-[640px] 
        sm:max-w-[500px] 
        max-w-[350px]
        mx-auto"
        >
          <div className="mt-2 mx-auto">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
