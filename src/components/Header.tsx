import { ShoppingCart } from "react-feather";
import { Link } from "react-router";
import MobileDrawer from "./MobileDrawer";
import { useState } from "react";
import { useAppSelector } from "../store/hooks";

const Header = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const totalQuantity = useAppSelector((state) => state.cart.totalQuantity);

  return (
    <>
      <header className="shadow fixed z-[200] backdrop-blur-2xl top-0 w-full">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex py-2 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <Link to={"/"} className="block text-teal-600 dark:text-teal-300">
                <span className="sr-only">Home</span>
                <img src="/logo.png" className="md:max-w-36 max-w-24" />
              </Link>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                  <Link
                    to="#bulk-order"
                    className="transition hover:text-red-500  w-full"
                  >
                    <li className="max-w-20 leading-[1.2] text-[14px]">
                      Bulk <br /> Order
                    </li>
                  </Link>
                  <Link
                    to="#laptop-gallery"
                    className="transition hover:text-red-500  w-full"
                  >
                    <li className="max-w-20 leading-[1.2] text-[14px]">
                      Laptop Gallery
                    </li>
                  </Link>

                  <Link
                    to="#new-accessories"
                    className="transition hover:text-red-500  w-full"
                  >
                    <li className="max-w-20 leading-[1.2] text-[14px]">
                      New Accessories
                    </li>
                  </Link>

                  <Link
                    to="#spares-and-services"
                    className="transition hover:text-red-500  w-full"
                  >
                    <li className="max-w-24 leading-[1.2] text-[14px]">
                     Spare & Services
                    </li>
                  </Link>

                  <Link
                    to="#coming-soon"
                    className="transition hover:text-red-500  w-full"
                  >
                    <li className="max-w-20 leading-[1.2] text-[14px]">
                      Coming Soon
                    </li>
                  </Link>
                  <Link
                    to="/contact"
                    className="transition  w-full hover:text-red-500"
                  >
                    <li className="max-w-20 leading-[1.2] text-[14px]">
                      Contact <br /> Us
                    </li>
                  </Link>
                </ul>
              </nav>

              <div className="flex items-center gap-4">
                <div className="block md:hidden">
                  <button
                    className="rounded p-2 text-gray-600 transition hover:text-gray-600/75"
                    onClick={() => setDrawerOpen(true)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
                <div className="sm:flex sm:gap-4 relative">
                  {totalQuantity > 0 ? (
                    <span
                      className={`absolute text-[10px] -top-2 -right-2 bg-emerald-500 text-white rounded-full size-[18px] flex justify-center items-center`}
                    >
                      {totalQuantity}
                    </span>
                  ) : null}
                  <Link
                    to="/cart"
                    className={`rounded size-8 md:size-10 flex justify-center  ${
                      totalQuantity > 0 ? "text-emerald-500" : "text-red-500"
                    } items-center text-sm font-medium  bg-transparent`}
                  >
                    <ShoppingCart size={17} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <MobileDrawer isDrawerOpen={isDrawerOpen} setDrawerOpen={setDrawerOpen} />
    </>
  );
};

export default Header;
