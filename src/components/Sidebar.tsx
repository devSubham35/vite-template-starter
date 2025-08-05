import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { navItems } from "../json/NavItem";

const SidebarItem = ({ item }: { item: any }) => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  const hasChildren = item.children && item.children.length > 0;

  const isParentActive =
    item.path && location.pathname.startsWith(item.path);

  return (
    <div>
      <div
        onClick={() => {
          if (hasChildren) setExpanded(!expanded);
        }}
        className={`cursor-pointer mb-2 px-5 py-3 rounded-full font-ubuntu text-[14px] flex items-center justify-between hover:bg-white/10 ${
          isParentActive ? "bg-white/20" : ""
        }`}
      >
        <div className="flex items-center gap-2">
          {item.icon && <span>{item.icon}</span>}
          <span>{item.label}</span>
        </div>
        {hasChildren && <span>{expanded ? "▾" : "▸"}</span>}
      </div>

      {hasChildren && expanded && (
        <div className="ml-4">
          {item.children.map((child: any) =>
            child.children ? (
              <SidebarItem key={child.label} item={child} />
            ) : (
              <NavLink
                key={child.label}
                to={child.path}
                className={({ isActive }) =>
                  `block mb-2 px-5 py-2 rounded-full text-sm ${
                    isActive ? "bg-white/20" : "hover:bg-white/5"
                  }`
                }
              >
                {child.label}
              </NavLink>
            )
          )}
        </div>
      )}
    </div>
  );
};

export const Sidebar = () => {
  return (
    <nav className="w-64 h-full bg-black text-white p-4 flex flex-col">
      <h2 className="text-xl font-bold mb-6 font-outfit">Logo</h2>
      {navItems.map((item) => (
        <SidebarItem key={item.label} item={item} />
      ))}
    </nav>
  );
};
