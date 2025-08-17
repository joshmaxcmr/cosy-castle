import React from "react";
import ToggleMenuButton from "./ToggleMenuButton";
import { IoSearchOutline } from "react-icons/io5";
import DarkModeButton from "./DarkModeButton";
import CartButton from "./CartButton";

const Header = ({
  darkMode,
  toggleDarkMode,
  toggleSidebar,
  isCartOpen,
  toggleCart,
}) => {
  return (
    <div className="sticky top-0 z-10 bg-white p-5 dark:bg-gray-950">
      <div className="flex items-center justify-between">
        <ToggleMenuButton toggleSidebar={toggleSidebar} />

        <div className="flex items-center gap-5 ">
          <div className=" w-[400px] items-center gap-2 rounded-md bg-gray-100 p-2 dark:bg-gray-800 dark:text-gray-200 md:flex hidden ">
            <IoSearchOutline className="text-2xl" />
            <input
              type="text"
              placeholder="Rechercher..."
              className="w-full bg-transparent focus:outline-none text-black "
            />
          </div>

          {/* Dark mode */}
          <DarkModeButton darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

          {/* Cart Button */}
          <CartButton isCartOpen={isCartOpen} toggleCart={toggleCart} />
        </div>
      </div>
    </div>
  );
};

export default Header;
