import OrgImage from "@/assets/Org.png";
import Chevron from "@/components/icons/Chevron";
import HomeIcon from "@/components/icons/Home";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./Navlink";
import AnalyticsIcon from "./icons/Analytics";
import Clipboard from "./icons/Clipboard";
import Cursor from "./icons/Cursor";
import DiscountIcon from "./icons/Discounts";
import Paint from "./icons/Paint";
import PaymentsIcon from "./icons/Payments";
import People from "./icons/People";
import ProductsIcon from "./icons/Products";
import Speaker from "./icons/Speaker";
import Lightening from "./icons/Thunder";
import Truck from "./icons/Truck";
import WalletIcon from "./icons/Wallet";

const Nav = () => {
  return (
    <nav className="bg-[#1E2640] min-h-screen w-fit p-4 text-zinc-100 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between space-x-8">
          <div className="flex space-x-2">
            <div className="w-full flex items-center justify-center px-2">
              <Image alt="Organization Name" src={OrgImage} />
            </div>
            <div>
              <h3 className="font-medium text-[15px] leading-[22px]">
                Nishyan
              </h3>
              <Link
                href="#store"
                className="underline text-xs whitespace-nowrap"
              >
                Visit store
              </Link>
            </div>
          </div>
          <Chevron />
        </div>

        <ul className="my-6 space-y-1">
          <NavLink linkText="Home">
            <HomeIcon />
          </NavLink>

          <NavLink linkText="Orders">
            <Clipboard />
          </NavLink>

          <NavLink linkText="Products">
            <ProductsIcon />
          </NavLink>

          <NavLink linkText="Delivery">
            <Truck />
          </NavLink>

          <NavLink linkText="Marketing">
            <Speaker />
          </NavLink>

          <NavLink linkText="Analytics">
            <AnalyticsIcon />
          </NavLink>

          <NavLink linkText="Payments">
            <PaymentsIcon />
          </NavLink>

          <NavLink linkText="Tools">
            <Cursor />
          </NavLink>

          <NavLink linkText="Discounts">
            <DiscountIcon />
          </NavLink>

          <NavLink linkText="Audience">
            <People />
          </NavLink>

          <NavLink linkText="Appearance">
            <Paint />
          </NavLink>

          <NavLink linkText="Plugins">
            <Lightening />
          </NavLink>
        </ul>
      </div>

      <div className="bg-[#353C53] flex items-center gap-3 px-3 py-1.5 rounded">
        <span className="p-1.5 rounded bg-white/10">
          <WalletIcon />
        </span>
        <span>
          <h4 className="text-xs font-normal">Available Credits</h4>
          <span className="font-medium text-base">222.10</span>
        </span>
      </div>
    </nav>
  );
};

export default Nav;
