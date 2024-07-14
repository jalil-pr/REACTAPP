import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getToken } from "../utils/HelperFunctions";

const Home = () => {
  const history = useHistory();
  const { token, loading } = useSelector((state) => state.auth);
  if (token || getToken()) {
    history.push("/landing");
  }
  return (
    <div className="page">
      <Navbar />
      <div className="container">
        <div className="ra-hero">
          <h1>Organize your work</h1>
          <h1>and life, finally.</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
