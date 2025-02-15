import PropTypes from "prop-types";
import { useState } from "react";

const DropDownMenu = ({ trigger, items, menuWidth }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div
        className="flex cursor-pointer items-center gap-1 p-2 transition-all duration-200 ease-linear hover:text-white"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {trigger}
        <div
          className={`absolute top-10 left-0 mt-2 transform rounded-lg bg-white pt-2 pb-2 shadow-lg transition-all duration-300 ease-in-out ${
            isOpen
              ? "visibility-visible translate-y-0 opacity-100"
              : "visibility-hidden pointer-events-none translate-y-4 opacity-0"
          } ${menuWidth}`}
        >
          <ul className="text-sm text-gray-700">
            {items.map((item, index) => (
              <li
                key={index}
                className="box-border block w-full cursor-pointer border-l-8 border-transparent p-2 text-[#001E27] transition-all duration-200 ease-linear hover:border-[#001E27] hover:bg-[#001e271e]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

DropDownMenu.propTypes = {
  trigger: PropTypes.node.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  menuWidth: PropTypes.string.isRequired,
};

export default DropDownMenu;
