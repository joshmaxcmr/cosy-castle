import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Button from "../button/Button";

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`${isOpen ? "w-44" : "w-16"} fixed left-0 top-0 h-full overflow-x-hidden bg-white dark:bg-gray-900 text-gray-900 transition-all duration-500 ease-in-out dark:text-white shadow-lg`}>

      <nav className="flex h-full flex-col items-center justify-between p-3">
        {/* Logo */}
        <Logo isOpen={isOpen}/>

        {/* Nav Links */}
        <NavLinks isOpen={isOpen}/>

        {/* Button */}
        <Button className="flex w-full items-center gap-2">
            <FaSignOutAlt className="text-lg"/>
            {isOpen && <span className="text-sm">Déconnexion</span>}
        </Button>
      </nav>
    </div>
  );
};
export default Sidebar;
