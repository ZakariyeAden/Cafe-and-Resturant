import React from "react";
import "../Style/Service.css";

function Service() {
  return (
    <section className="service-section" id="service">
      <div className="service-card">
        <h3 className="heading">Welcome!</h3>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          quo, vel beatae saepe quis
          <br /> aliquam itaque necessitatibus voluptates enim tempora non
          dolores dicta architecto laborum nobis <br/>voluptatum provident quam
          perferendis.
        </p>
        <hr />
        <div className="row">
          <div className="service">
            <span className="icon">
              <ion-icon name="person-add-outline"></ion-icon>
            </span>
            <h4>Exclusive Service</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing<br/> elit.
              Repellendus quo
            </p>
          </div>

          <div className="service">
            <span className="icon">
              <ion-icon name="fast-food-outline"></ion-icon>
            </span>
            <h4>Delicous Food</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing<br/> elit.
              Repellendus quo
            </p>
          </div>

          <div className="service">
            <span className="icon">
            <ion-icon name="ribbon-outline"></ion-icon>
            </span>
            <h4>Best Interior in the City</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing<br/> elit.
              Repellendus quo
            </p>
          </div>
       
        </div>
      </div>
    </section>
  );
}

export default Service;
