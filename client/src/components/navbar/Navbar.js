import React from "react";
import { NavLink } from "react-router-dom/";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getToken, removeToken } from "../../utils/HelperFunctions";
import { useLocation } from "react-router-dom";
import { signOut } from "../../store/slices/authThunk";

const Navbar = () => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const { token, loading } = useSelector((state) => state.auth);
  const hiddenRoutes = ["/login", "register", "landing"];
  if (hiddenRoutes.includes(location.pathname)) {
    return null;
  }
  const handleLogout = async () => {
    await dispatch(signOut()).unwrap();
    history.push("/");
  };
  return (
    <nav className="navbar">
      <NavLink to="">
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
