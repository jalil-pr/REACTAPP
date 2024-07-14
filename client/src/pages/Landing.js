import React from "react";
import Loading from '../components/Loading';
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar/Navbar";


const Landing = () => {
  const { token, loading } = useSelector((state) => state.auth);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="page">
      <Navbar/>
      
      <p>Landing page here</p>
    </div>
  );
};

export default Landing;
