import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Modal from "../components/Modal/Modal";

const MainLayouts = () => {

  return (
    <>
      <Navbar />
      <Modal />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayouts;
