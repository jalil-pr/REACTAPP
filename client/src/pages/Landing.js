import React from "react";
import Loading from '../components/Loading';
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar/Navbar";


const Landing = () => {
  const { loading, userData } = useSelector((state) => state.auth);


  if (loading) {
    return <Loading />;
  }
  return (
    <div className="page">
      <Navbar/>
      
      <div className="container">
        <div className="ra-hero">
          <h1>Welcome to your app {userData.name}</h1>
          
        </div>
      </div>
    </div>
  );
};

export default Landing;
