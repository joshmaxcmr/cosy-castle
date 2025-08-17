import React from "react";
import { menuItems } from "../../constants";
import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <div className="mt-7">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {menuItems.map((item) => (
          <MenuItem key={item.name} menuItem={item} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
