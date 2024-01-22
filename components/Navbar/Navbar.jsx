"use client";

import { useEffect, useState } from "react";
export default function Navbar() {
  const [search, setSearch] = useState("");
  const menuStyle = "text-lg text-gray-500";
  console.log(search);

  return (
    <nav>
      <header className="flex items-center justify-between p-4">
        <div className="text-3xl font-bold text-purple-200">E-SHOP</div>
        <div className="flex gap-3">
          <div className={menuStyle}>About</div>
          <div className={menuStyle}>Shop</div>
          <div className={menuStyle}>Cart</div>
          <div className={menuStyle}>Account</div>
        </div>
      </header>

      <section className="">
        <input
          type="text"
          className="text-base text-gray-500 bg-gray-100 font-medium rounded-xl px-4 py-2 w-full focus:outline-none focus:shadow-outline"
          placeholder="Search For products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </section>
    </nav>
  );
}
