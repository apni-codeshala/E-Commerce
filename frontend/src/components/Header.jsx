import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Logo from "../assets/logo.png";
import Cart from "../assets/cart.png";
import Search from "../assets/search.png";

const Header = () => {
  const { name, role } = useSelector((store) => store.auth);
  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex justify-between items-center px-20">
          <Link href="/" className="flex">
            <img
              src={Logo}
              className="mr-3 h-6 sm:h-9"
              alt="Abhi Kharido Logo"
            />
            <span className="text-xl font-semibold dark:text-white">
              Abhi Kharido
            </span>
          </Link>
          <div className="flex items-center lg:order-2 relative group">
            {/* Wrapper with group class */}
            <div className="relative group">
              <div className="text-white font-bold text-2xl pr-8 cursor-pointer">
                {name}
                <span
                  className="text-xs font-bold h-6 pl-4 relative"
                  style={{ top: "-4px" }}
                >
                  v
                </span>
              </div>

              {/* Dropdown */}
              <div className="absolute top-7 mt-2 right-0 w-48 z-10 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-opacity duration-500 group-hover:delay-0 group-hover:transition delay-1000">
                <ul className="py-2 text-gray-800">
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link to="/profile">Profile</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link to="/orders">Orders</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link to="/settings">Settings</Link>
                  </li>
                  {role == "seller" && (
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link to="/seller-dashboard">Seller Dashboard</Link>
                    </li>
                  )}
                  {role == "admin" && (
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link to="/admin-dashboard">Admin Dashboard</Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>

            <Link
              to="/cart"
              className="text-white bg-blue-200 hover:bg-blue-300 px-4 py-1 mr-2 flex items-center rounded-lg"
            >
              <img
                src={Cart}
                className="mr-3 h-6 sm:h-6"
                alt="Abhi Kharido Logo"
              />
              <div className="text-xl font-semibold dark:text-gray-500">0</div>
            </Link>
            <Link
              to="/logout"
              className="text-gray-800 dark:text-white bg-red-600 hover:bg-red-800 dark:hover:bg-red-700 rounded-lg px-4 py-2 mr-2"
            >
              Logout
            </Link>
            <button
              className="p-2 ml-1 text-gray-500 lg:hidden"
              aria-controls="mobile-menu-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M3 5h12a1 1 0 010 2H4a1 1 0 01-1-1zm0 5h12a1 1 0 010 2H4a1 1 0 01-1-1zm0 5h12a1 1 0 010 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:order-1" id="mobile-menu-2">
            <div className="flex items-center border border-transparent focus-within:border-blue-500 rounded-lg">
              <img
                src={Search}
                alt="search-img"
                className="h-10 bg-gray-600 py-1 pl-2 rounded-l-lg"
              />
              <input
                type="text"
                placeholder="Search for Products, Brands and more"
                className="w-96 py-2 px-2 bg-gray-600 text-white rounded-r-lg outline-none"
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
