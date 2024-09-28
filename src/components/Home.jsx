import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "./Redux/authSlice.js";
const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  return (
    <>
      <div className="flex ml-40">
      <h2>Home</h2>
      <button onClick={handleLogout} className="btn btn-error">
        Logout
      </button>
      </div>
    </>
  );
};

export default Home;
