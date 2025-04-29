import {
  Grid,
  Info,
  PhoneCall,
  ShoppingCart,
  Tool,
  Home,
  Calendar,
  Settings,
  Layers,
} from "react-feather";
import { Link } from "react-router";

const MobileDrawer = ({
  isDrawerOpen,
  setDrawerOpen,
}: {
  isDrawerOpen: boolean;
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="relative right-0">
      {/* Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={toggleDrawer}
        ></div>
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full pattern bg-white shadow-md transform  ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 w-[280px] z-[999]`}
      >
        {/* Close Button */}
        <button
          className="text-red-600 text-2xl absolute top-4 right-4 p-4 focus:outline-none"
          onClick={toggleDrawer}
        >
          &times;
        </button>

        {/* Drawer Content */}
        <div className="p-4 pt-10" onClick={toggleDrawer}>
          {/* <h3 className="text-lg font-bold mb-4 text-red-500">Altek Sales</h3> */}
          <ul className="flex flex-col gap-5 text-sm font-space">
            <li className="flex items-center gap-2 hover:text-red-500 focus:text-red-500">
              <Home size={14} data-color="#ef4444" className="text-red-500" />
              <Link
                to="/"
                className="block p-2  uppercase tracking-[0.3em] text-xs"
              >
                Home
              </Link>
            </li>
            <li className="flex items-center gap-2 hover:text-red-500 focus:text-red-500">
              <Info
                size={14}
                data-color="#10b981"
                className="text-emerald-500"
              />
              <Link
                to="/"
                className="block p-2 uppercase tracking-[0.3em] text-xs"
              >
                About
              </Link>
            </li>

            <li className="flex items-center gap-2 hover:text-red-500 focus:text-red-500">
              <Layers
                size={14}
                data-color=""
                className="text-pink-500 drop-shadow-[10px_10px_50px] shadow-pink-500"
              />
              <Link
                to="#bulk-order"
                className="transition hover:text-red-500 text-center"
              >
                Bulk Order
              </Link>
            </li>
            <li className="flex items-center gap-2 hover:text-red-500 focus:text-red-500">
              <Grid
                size={14}
                data-color=""
                className="text-blue-500 drop-shadow-[10px_10px_50px] shadow-blue-500"
              />
              <Link
                to="#laptop-gallery"
                className="block p-2 uppercase tracking-[0.3em] text-xs"
              >
                Laptop Gallery
              </Link>
            </li>
            <li className="flex items-center gap-2 hover:text-red-500 focus:text-red-500">
              <Settings
                size={14}
                className="text-purple-500 drop-shadow-md"
                data-color="#a855f7"
              />

              <Link
                to="#new-accessories"
                className="block p-2 uppercase tracking-[0.3em] text-xs"
              >
                New Accessories
              </Link>
            </li>

            <li className="flex items-center gap-2 hover:text-red-500 focus:text-red-500">
              <Tool size={14} data-color="#06b6d4" className="text-cyan-500" />
              <Link
                to="#spares-and-services"
                className="block p-2 uppercase tracking-[0.3em] text-xs"
              >
                Spares and Services
              </Link>
            </li>
            <li className="flex items-center gap-2 hover:text-red-500 focus:text-red-500">
              <Calendar
                size={14}
                data-color="#f43f5e"
                className="text-rose-500"
              />

              <Link
                to="#coming-soon"
                className="block p-2 uppercase tracking-[0.3em] text-xs"
              >
                Coming Soon
              </Link>
            </li>
            <li className="flex items-center gap-2 hover:text-red-500 focus:text-red-500">
              <ShoppingCart
                size={14}
                data-color="#f97316"
                className="text-orange-500"
              />

              <Link
                to="/cart"
                className="block p-2 uppercase tracking-[0.3em] text-xs"
              >
                Cart
              </Link>
            </li>
            <li className="flex items-center gap-2 hover:text-red-500 focus:text-red-500">
              <PhoneCall
                size={14}
                data-color="#d946ef"
                className="text-fuchsia-500"
              />
              <Link
                to="/contact"
                className="block p-2 uppercase tracking-[0.3em] text-xs"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileDrawer;
