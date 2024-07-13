import React from "react";
import { NavLink } from "react-router-dom/";

const Navbar = () => {
  return (
    <div className="component">
      <NavLink to="/">home</NavLink>
      <NavLink to="/login">login</NavLink>
      <NavLink to="/register">register</NavLink>
    </div>
  );
};

export default Navbar;
