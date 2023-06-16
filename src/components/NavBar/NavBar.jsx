import React from "react";
import {NavLink} from "react-router-dom";

export default function NavBar() {
  const activeClassName = "underline underline-offset-4";

  return (
    <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink
            to="/"
            className={({isActive}) => (isActive ? activeClassName : null)}
          >
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({isActive}) => (isActive ? activeClassName : null)}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clothes"
            className={({isActive}) => (isActive ? activeClassName : null)}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            className={({isActive}) => (isActive ? activeClassName : null)}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/furnitures"
            className={({isActive}) => (isActive ? activeClassName : null)}
          >
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/toys"
            className={({isActive}) => (isActive ? activeClassName : null)}
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/others"
            className={({isActive}) => (isActive ? activeClassName : null)}
          >
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-start gap-3">
        <li className="text-black/60">h3c4@gmail.com</li>
        <li>
          <NavLink
            to="/myOrders"
            className={({isActive}) => (isActive ? activeClassName : null)}
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/account"
            className={({isActive}) => (isActive ? activeClassName : null)}
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/signin"
            className={({isActive}) => (isActive ? activeClassName : null)}
          >
            Sign Out
          </NavLink>
        </li>
        <li>
          <NavLink to="/">🍔 0</NavLink>
        </li>
      </ul>
    </nav>
  );
}
