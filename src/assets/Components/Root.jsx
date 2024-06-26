import { Outlet } from "react-router-dom";
import Navbar from "./Nevbar/Navbar";
import Footer from "./Footer/Footer";

const Root = () => {
  return (
    <div>
      <div className="">
        <div className="max-w-7xl mx-auto">
        <Navbar></Navbar>
        </div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
