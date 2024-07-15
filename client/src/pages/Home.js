import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getToken } from "../utils/HelperFunctions";

const Home = () => {
  const history = useHistory();
  const { token } = useSelector((state) => state.auth);
  if (token || getToken()) {
    history.push("/landing");
  }
  return (
    <div className="page">
      <Navbar />
      <div className="container">
        <div className="ra-hero">
          <h1>Welcome to your app.</h1>
          <h1>Simpliest react app!</h1>
          <div className="text-container">
            <p>
              Combining the power of Node.Js with the beauty of react and redux. Please
              register and then log in to have a look and feel of the app for
              yourself.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
