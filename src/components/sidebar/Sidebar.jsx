import React from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Button from "../button/Button";

const Sidebar = ({ isOpen }) => {
  return (
    <div className={'${isOpen ? "w-44" : "w-16"} fixed left-0 top-0 h-full overflow-x-hidden text-gray-900 translation-all duration-500 ease-in-out dark:text-white'}>

      <nav className="flex h-full flex-col items-center justify-between p-3">
        {/* Logo */}
        <Logo />

        {/* Nav Links */}
        <NavLinks />
        {/* Button */}
        <Button>
            <span>Déconnexion</span>
        </Button>
      </nav>
    </div>
  );
};
export default Sidebar;
