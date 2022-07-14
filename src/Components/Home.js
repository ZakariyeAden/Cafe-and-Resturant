import React from "react";
import "../Style/Home.css";
function Home() {

  return (
    <section className="bg-img" id="home">
    <div className="textbox">
      <h1>
        Welcome to Cafe and Resturant!
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        quo, vel beatae saepe quis<br/> aliquam itaque necessitatibus voluptates enim
        tempora non dolores dicta architecto laborum nobis voluptatum provident
        quam perferendis.
      </p>
    </div>
      <div className="d-flex">
        <button id="menu">Our Menu</button>
        <button className="btn-secondary" id="reservation">Make Reservation</button>
      </div>
    </section>
  );
}

export default Home;
