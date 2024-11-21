import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import menu_data from "./menu-data";

const NavMenu = ({ num = false }) => {
  const router = useRouter(); // Hook to get the current route

  return (
    <>
      <ul>
        {menu_data.map((menu, index) => {
          // Check if the menu itself or any of its submenus is active
          const isActive =
            router.pathname === menu.link ||
            (menu.has_dropdown &&
              menu.sub_menus.some((sub_m) => router.pathname === sub_m.link));

          return menu.has_dropdown ? (
            <li key={menu.id} className={`has-dropdown ${isActive ? "active" : ""}`}>
              <Link className={`${isActive ? "active" : ""}`} href={menu.link}>
                {num && index <= 9 ? `0${index + 1}.` : num && `${index + 1}.`}
                {menu.title}
              </Link>
              {menu.has_dropdown && (
                <ul className="sub-menu">
                  {menu.sub_menus.map((sub_m, i) => {
                    const isSubActive = router.pathname === sub_m.link;
                    return (
                      <li key={i} className={isSubActive ? "active" : ""}>
                        <Link className={isSubActive ? "active" : ""} href={sub_m.link}>
                          {sub_m.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          ) : (
            <li key={menu.id} className={isActive ? "active" : ""}>
              <Link className={isActive ? "active" : ""} href={menu.link}>
                {num && index <= 9 ? `0${index + 1}.` : num && `${index + 1}.`}
                {menu.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default NavMenu;