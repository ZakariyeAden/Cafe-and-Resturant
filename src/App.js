import React from "react";
import Home from "./Components/Home";
import Service from "./Components/Service";
import Menu from "./Components/Menu";
import Form from "./Components/Form";
import "toastify-js/src/toastify.css";
import notify from "./Components/Toast";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Service />
      <Menu />
      <Form onClick={notify} />
    </div>
  );
}

export default App;
