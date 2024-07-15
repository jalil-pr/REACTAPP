import React from "react";
import { NavLink } from "react-router-dom/";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../store/slices/authThunk";

const Navbar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const handleLogout = async () => {
    await dispatch(signOut()).unwrap();
    history.push("/");
  };
  return (
    <nav className="raNav">
      <NavLink to="/">
      <h1 className="brand">REACT APP</h1>
      </NavLink>
      <div className="links">
        {!token && (
          <div>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </div>
        )}
        {token && (
          <div>
            <NavLink to="#" onClick={handleLogout}>
              Logout
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
