import MenuFrme from "../ReactMatrial/MenuFrme";

const TopNav = () => {
  return (
    <div className="bg-white py-2">
      <div className="max-w-[1080px] h-[64px] mx-auto flex justify-between items-center">
        <h1 className="text-3xl text-[#171717] ">Dashboard</h1>
        <div>
          <MenuFrme />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
