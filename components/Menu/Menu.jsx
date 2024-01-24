"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo } from "react";

import AboutIcon from "../Icons/AboutIcon";
import ShopIcon from "../Icons/ShopIcon";
import CartIcon from "../Icons/CartIcon";
import AccountIcon from "../Icons/AccountIcon";
import CartCount from "../CartCount";
import UserWelcome from "../UserWelcome";

function Menu() {
  const path = usePathname();
  // console.log({ path });
  return (
    <>
      <Link
        href="/about"
        className={`flex items-center space-x-1 ${
          path === "/about"
            ? "text-purple-800 font-bold scale-130"
            : "text-gray-500"
        } `}
      >
        <AboutIcon />
        <span>About</span>
      </Link>
      <Link
        href="/"
        className={`flex items-center space-x-1 ${
          path === "/" ? "text-purple-800 font-bold scale-130" : "text-gray-500"
        } `}
      >
        <ShopIcon />
        <span>Shop</span>
      </Link>
      <Link
        href="/checkout"
        className={`flex items-center space-x-1 ${
          path === "/checkout"
            ? "text-purple-800 font-bold scale-130"
            : "text-gray-500"
        } `}
      >
        <CartIcon />
        <span>
          Cart <CartCount />
        </span>
      </Link>
      <Link
        href="/account"
        className={`flex items-center space-x-1 ${
          path === "/account"
            ? "text-purple-800 font-bold scale-130"
            : "text-gray-500"
        } `}
      >
        <AccountIcon />
        <span>Account</span>
        <UserWelcome />
      </Link>
    </>
  );
}

const MenuMemo = memo(Menu);

export default MenuMemo;
