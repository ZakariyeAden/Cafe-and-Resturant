import React from "react";
import "../Style/Menu.css";
import Coffee from "../Assets/CoffeeAside.jpg";
import Coffee1 from "../Assets/CoffeeAside1.jpg";
import Coffee2 from "../Assets/CoffeeAside2.jpg";
import Coffee3 from "../Assets/CoffeeAside3.jpg";
import Coffee4 from "../Assets/Coffee4.jpg";
function Menu() {
  return (
    <section className="menu-section">
      <div className="menu-textbox">
        <h3 className="menu-heading">New in Menu</h3>
        <p className="menu-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          quo, vel beatae saepe quis
          <br /> aliquam itaque necessitatibus voluptates enim tempora non
          dolores dicta architecto laborum nobis
        </p>
      </div>

      <div className="flex">
        <img src={Coffee} className="img main-img" />
        <div className="grid2">
          <img src={Coffee1} className="img aside-img-" />
          <img src={Coffee2} className="img aside-img--" />
        </div>
        <div className="grid2">
          <img src={Coffee3} className="img aside-img---" />
          <img src={Coffee4} className="img aside-img----" />
        </div>
      </div>
    </section>
  );
}

export default Menu;
