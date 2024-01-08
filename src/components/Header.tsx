import AnnouncementIcon from "./icons/Announcement";
import DropdownIcon from "./icons/DropdownIcon";
import QuestionIcon from "./icons/Question";
import SearchIcon from "./icons/Search";

const Header = () => {
  return (
    <header className="border-b py-3 px-8 flex gap-4 items-center justify-between">
      <div className="space-x-4 flex items-center">
        <h2 className="text-[15px] leading-[22px]">Payments</h2>
        <span className="space-x-1.5 flex items-center">
          <QuestionIcon />
          <span className="text-xs">How it works</span>
        </span>
      </div>

      <div className="bg-[#F2F2F2] w-2/5 h-full flex py-2 px-4 rounded-md gap-2 items-center focus-within:ring-2 ring-zinc-500">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search features, tutorials, etc."
          className="bg-transparent w-full h-full text-sm outline-none"
        />
      </div>

      <div className="flex gap-3">
        <AnnouncementIcon />
        <DropdownIcon />
      </div>
    </header>
  );
};

export default Header;
