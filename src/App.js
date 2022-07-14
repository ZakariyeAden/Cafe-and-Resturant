import React from "react";
import Home from "./Components/Home";
import Service from "./Components/Service";
import Menu from "./Components/Menu";
import Form from "./Components/Form";
import "toastify-js/src/toastify.css";
import notify from "./Components/Toast";
import Navbar from "./Components/Navbar";
import { HiOutlineX } from "react-icons/hi";
function App() {

  return (
    <div id="outerContainer">
      <Navbar pageWrapId={"page-wrap"} outerContainerId={"outerContainer"} customBurgerIcon={<span className="hamburger"><ion-icon name="menu-outline"></ion-icon></span>} customCrossIcon={<span><HiOutlineX /></span>}/>
      <main id="page-wrap">
      <Home />
      <Service />
      <Menu />
      <Form onClick={notify} />
      </main>
    </div>
  );
}

export default App;
