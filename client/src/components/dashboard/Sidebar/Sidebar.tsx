import { useState } from "react";
import { AccountToggle } from "./AccountToggle";
import { Search } from "./Search";
import { RouteSelect } from "./RouteSelect";
import { Plan } from "./Plan";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Toggle button visible only on mobile */}
      <button
        className="md:hidden p-2 fixed top-4 right-4 z-50 bg-gray-800 text-white rounded-full"
        onClick={toggleSidebar}
      >
        {isOpen ? "Close" : "Menu"}
      </button>

      {/* Sidebar content */}
      <div
        className={`fixed md:static md:block top-0 left-0 h-full w-3/4 max-w-xs bg-white shadow-lg z-40 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <div className="overflow-y-scroll sticky top-4 h-[calc(100vh-32px-48px)] p-4">
          <AccountToggle />
          <Search />
          <RouteSelect />
        </div>
        <Plan />
      </div>

      {/* Background overlay for mobile when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};
